import express from 'express';
import { account, database, ID, OAuthProvider, Query } from '../Appwrite/config.js';

const router = express.Router();
const databaseId = process.env.DATABASE_ID;
const collectionId = process.env.COLLECTION_ID;

router.get('/check-session', async (req, res) => {
    try {
        // Check the session and ensure it exists
        const session = await account.get(); // Get the current session

        // If session is not found, return unauthorized
        if (!session) {
            return res.status(401).json({
                logged: false,
                profileCompleted: false,
                error: 'No active session found',
            });
        }

        // Get user preferences (profile completion status)
        const prefs = await account.getPrefs();

        // Check if profile is completed
        const profileCompleted = prefs?.profileCompleted === true;

        // Respond with the session status and profile completion status
        res.status(200).json({
            logged: true,
            profileCompleted: profileCompleted,
        });
    } catch (error) {
        // Handle errors (e.g., session issues, unexpected errors)
        console.error('Error checking session:', error);
        res.status(401).json({
            logged: false,
            profileCompleted: false,
            error: error.message || 'Failed to check session',
        });
    }
});


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await account.create(
            ID.unique(),
            email,
            password,
        );
        // await database.createDocument(databaseId, collectionId, user.$id, {
        //     userName: '',
        //     email: email,
        //     createdOn: new Date().toISOString(),
        //     phoneNumber: '',
        //     age: null,
        //     profileCompleted: false
        // })

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("Email:", account);
//         const session = await account.createEmailPasswordSession(email, password);
//         if (!session || !session.userId) {
//             console.error("Failed to create session or userId is missing");
//             return res.status(404).json({ error: 'Invalid credentials or session creation failed' });
//         }
//         console.log("Session object:", session);
//         const prefs = await account.getPrefs();
//         const profileCompleted = prefs?.profileCompleted === true;
//         res.status(200).json({ session, profileCompleted });


//     } catch (error) {
//         console.error("Error during session creation:", error);
//         res.status(400).json({ error: error.message });
//     }
// });


router.post('/request-otp', async (req, res) => {
    const { email } = req.body;
    console.log("Email:", email);

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const tokenResponse = await account.createEmailToken(ID.unique(), email, true); // Generates OTP
        console.log("OTP Token Response:", tokenResponse);

        res.status(200).json({
            message: 'OTP sent to your email',
            emailId: tokenResponse.emailId,
            userId: tokenResponse.userId, // Optional, for further validation
        });
    } catch (error) {
        console.error("Error generating email OTP token:", error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/verify-otp', async (req, res) => {
    const { secret, userId } = req.body;
    
    console.log("User ID:", userId, "Secret:", secret);

    // Validate input
    if (!secret) {
        console.warn('Secret is missing.');
        return res.status(400).json({ error: 'Please enter the OTP.' });
    }
    if (!userId) {
        console.error('User ID missing.');
        return res.status(400).json({ error: 'User ID missing. Please request a new OTP.' });
    }

    try {
        // Create a session using the provided userId and secret
        const session = await account.createSession(userId, secret);
        console.log("Session created successfully:", session);

        // Respond with session data and redirect
        res.status(200).json({  session });
    } catch (error) {
        console.error('Error verifying OTP:', error.message);
        res.status(400).json({ error: `Failed to verify OTP: ${error.message}` });
    }
});


// Assuming you're using Express.js
router.post('/complete-profile', async (req, res) => {
    const { userName, age, phoneNumber } = req.body;
    try {
        const session = await account.getSession('current');
        const userId = session.userId;

        // Update the user's profile information in the database
        await database.updateDocument(databaseId, collectionId, userId, {
            userId: userId,
            userName: userName,
            email: session.email,
            createdOn: new Date().toISOString(),
            phoneNumber: phoneNumber,
            age: age,
        });

        // Update the user's profile completion status
        await account.updatePrefs({ profileCompleted: true });

        res.status(200).json({ message: 'Profile completed successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/auth/github', async (req, res) => {
    try {
        const successRedirect = 'https://shaadi.com/';
        const failureRedirect = 'https://amazon.com/';
        const scopes = ['repo', 'user'];

        account.createOAuth2Session(
            OAuthProvider.Github,
            successRedirect,
            failureRedirect,
            scopes
        );
        const prefs = await account.getPrefs();
        const profileCompleted = prefs?.profileCompleted === true;
        res.status(200).json({ session, profileCompleted });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/logout', async (req, res) => {
    try {
        await account.deleteSessions();
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).json({ error: 'Failed to log out' });
    }
});
router.post('/recover-password', async (req, res) => {
    const { email } = req.body;

    try {
        const redirectUrl = 'https://shaadi.com';
        const response = await account.createRecovery(email, redirectUrl);
        res.status(200).json({
            message: `Password recovery email sent to ${email}`,
            response,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
