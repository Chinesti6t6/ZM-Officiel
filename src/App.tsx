import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BaseRoutes from "./routes";
import firebaseConfig from "./config/firebase";
import React from "react";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
	React.useEffect(() => {
		try {
			if (typeof window !== 'undefined') {
				getAnalytics(app);
			}
		} catch (error) {
			console.error('Failed to initialize Firebase Analytics:', error);
		}
	}, []);
	return (
		<>
			<BaseRoutes />
		</>
	);
}

export default App;
