export const firebaseConfig = {
	apiKey: <string>import.meta.env.VITE_FIREBASE_AUTH_API_KEY,
	authDomain: <string>import.meta.env.VITE_FIREBASE_AUTH_AUTH_DOMAIN,
	projectId: <string>import.meta.env.VITE_FIREBASE_AUTH_PROJECT_ID,
	storageBucket: <string>import.meta.env.VITE_FIREBASE_AUTH_STORAGE_BUCKET,
	messagingSenderId: <string>(
		import.meta.env.VITE_FIREBASE_AUTH_MESSAGING_SENDER_ID
	),
	appId: <string>import.meta.env.VITE_FIREBASE_AUTH_APP_ID,
};
