import { Client, Account, ID, OAuthProvider, Databases, Query } from 'appwrite';
import dotenv from 'dotenv';

dotenv.config();

const projectid = process.env.APPWRITE_PROJECT_ID;
const endpoint = process.env.APPWRITE_ENDPOINT;
const secret = process.env.APPWRITE_SECRET_KEY;

const client = new Client();
client
    .setEndpoint(endpoint)
    .setProject(projectid);

const account = new Account(client);
const database = new Databases(client);
// client.setKey(secret);

export { client, account, ID, OAuthProvider, database, Query };
