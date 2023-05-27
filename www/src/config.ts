export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

interface auth0ConfigType {
    clientId: string,
    domain: string,
    redirect_url: string
}

export const auth0Config: auth0ConfigType = {
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "",
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "",
    redirect_url: "localhost:3000/" || "",
};

export const cognitoConfig = {
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    clientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};
