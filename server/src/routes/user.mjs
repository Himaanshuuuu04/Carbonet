import express from 'express';
import { account, database, ID, OAuthProvider, Query } from '../Appwrite/config.js';

const router = express.Router();
const databaseId = process.env.DATABASE_ID;
const collectionId = process.env.COLLECTION_ID;

router.get('/check-session', async (req, res) => {
    try {
        const session = await account.getSession('current');
        const userDoc = await database.getDocument(databaseId, collectionId, session.userId);

        res.status(200).json({
            logged: true,
            profileCompleted: userDoc.profileCompleted,
        });
    } catch (error) {
        res.status(401).json({
            logged: false,
            profileCompleted: false,
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
        await database.createDocument(databaseId, collectionId, user.$id, {
            userName: '',
            email: email,
            createdOn: new Date().toISOString(),
            phoneNumber: '',
            age: null,
            profileCompleted: false
        })
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const session = await account.createSession(email, password);
        if (!session || !session.userId) {
            console.error("Failed to create session or userId is missing");
            return res.status(404).json({ error: 'Invalid credentials or session creation failed' });
        }
        console.log("Session object:", session);
        const userId = session.userId;
        res.status(200).json({ session });
    } catch (error) {
        console.error("Error during session creation:", error);
        res.status(400).json({ error: error.message });
    }
});

router.post('/complete-profile', async (req, res) => {
    const { userName, age, phoneNumber } = req.body;
    try {
        const session = await account.getSession('current');
        const userId = session.userId;
        await database.updateDocument(databaseId, collectionId, userId, {
            userName,
            age,
            phoneNumber,
            profileCompleted: true,
        });
        res.status(200).json({ message: 'Profile completed successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/auth/github', (req, res) => {
    try {
        const successRedirect = 'https://example.com/success';
        const failureRedirect = 'https://example.com/failed';
        const scopes = ['repo', 'user'];

        account.createOAuth2Session(
            OAuthProvider.Github,
            successRedirect,
            failureRedirect,
            scopes
        );
        res.status(200).json({ message: 'Redirecting to GitHub for authentication.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/recover-password', async (req, res) => {
    const { email } = req.body;

    try {
        const redirectUrl = 'https://example.com/reset-password';
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
