// This file is used to store the configuration for the Auth0 SDK.
import dotenv from 'dotenv';
dotenv.config();


const secret = process.env.SECRET;
const clientID = process.env.CLIENT_ID;
const issuerBaseURL = process.env.ISSUER_BASE_URL;
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: `${secret}`,
  baseURL: 'http://localhost:3000',
  clientID: `${clientID}`,
  issuerBaseURL: `${issuerBaseURL}`,
};

export default config;
