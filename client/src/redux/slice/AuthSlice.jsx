import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useNavigate} from 'react-router-dom';

// Async thunk to request OTP
export const requestOtp = createAsyncThunk(
    'auth/requestOtp',
    async (email, { rejectWithValue }) => {
        try {
            console.log('Email:', email); // Log the email
            const response = await fetch('http://localhost:3000/user/request-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            console.log('Response Status:', response.status); // Log response status
            if (!response.ok) {
                const errorDetails = await response.json(); // Log detailed error from backend
                console.error('Backend Error:', errorDetails);
                throw new Error(errorDetails.message || 'Failed to send OTP');
            }

            const data = await response.json();
            console.log('OTP Request Success:', data); // Log successful response
            return { message: data.message, emailId: data.emailId,
                userId: data.userId
             };
        } catch (error) {
            console.error('Error requesting OTP:', error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk to verify OTP and login
// Async thunk to verify OTP and login
export const verifyOtp = createAsyncThunk(
    'auth/verifyOtp',
    async ({ secret }, { getState, rejectWithValue }) => {
        try {
            // Retrieve userId from the Redux state
            const { auth } = getState();
            const userId = auth.userId;

            if (!userId) {
                throw new Error('User ID is missing. Please request OTP again.');
            }

            console.log('User ID:', userId); // Log the user ID for debugging

            // Send request to verify OTP
            const response = await fetch('http://localhost:3000/user/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, secret }),
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.message || 'Failed to verify OTP');
            }

            const data = await response.json();
            console.log('OTP Verification Success:', data); // Log successful response

            // Return session data so we can update Redux state
            return {
                session: data.session,
                // profileCompleted: data.profileCompleted,
            };
        } catch (error) {
            console.error('Error verifying OTP:', error.message);
            return rejectWithValue(error.message);
        }
    }
);



// Async thunk to check session (already provided)
export const checkSession = createAsyncThunk(
    'auth/checkSession',
    async (_, { rejectWithValue }) => {
        try {
            console.log('Checking session...');
            const response = await fetch('http://localhost:3000/user/check-session', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to check session');
            }

            const data = await response.json();
            return { logged: data.logged, profileCompleted: data.profileCompleted };
        } catch (error) {
            console.error('Error checking session:', error);
            return rejectWithValue(error.message);
        }
    }
);


// Redux Async Thunk to Complete Profile
export const completeProfile = createAsyncThunk(
    'auth/completeProfile',
    async ({ userName, age, phoneNumber }, { getState, rejectWithValue }) => {
        try {
            // Get userId from the current session in Redux state
            const { auth } = getState();
            const userId = auth.userId;

            // Ensure userId exists before proceeding
            if (!userId) {
                throw new Error('User ID is missing. Please log in again.');
            }

            const response = await fetch('http://localhost:3000/user/complete-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, age, phoneNumber }),
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.error || 'Failed to complete profile');
            }

            const data = await response.json();
            return data;  // Successful completion message
        } catch (error) {
            return rejectWithValue(error.message);  // Return error message if something fails
        }
    }
);

// Redux slice for authentication
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        islogged: false,
        profileCompleted: false,
        loading: false,
        otpSent: false,
        session: null,
        error: null,
        userId: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle requestOtp
            .addCase(requestOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.otpSent = false;
                state.userId = null;
            })
            .addCase(requestOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.otpSent = true;
                state.error = null;
                state.userId = action.payload.userId; // Save userId to state
            })
            .addCase(requestOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to send OTP';
                state.otpSent = false;
                state.userId = null; // Clear userId on failure
            })
            

            // Handle verifyOtp
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.islogged = true;
                // state.profileCompleted = action.payload.profileCompleted;
                state.session = action.payload.session;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to verify OTP';
            })

            // Handle checkSession
            .addCase(checkSession.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkSession.fulfilled, (state, action) => {
                state.loading = false;
                state.islogged = action.payload.logged;
                state.profileCompleted = action.payload.profileCompleted;
            })
            .addCase(checkSession.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to check session';
            });
    },
});

export default authSlice.reducer;
