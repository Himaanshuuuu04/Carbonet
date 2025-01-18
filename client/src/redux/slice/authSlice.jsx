import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch session data
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
            });

            if (!response.ok) {
                throw new Error('Failed to check session');
            }

            const data = await response.json();
            return { logged: data.logged, profileCompleted: data.profileCompleted };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        islogged: false,
        profileCompleted: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
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
