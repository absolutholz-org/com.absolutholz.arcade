import * as firebaseui from 'firebaseui';

import { signInOptions } from './signInOptions';

export const uiConfig: firebaseui.auth.Config = {
	callbacks: {
		signInSuccessWithAuthResult: function (authResult, redirectUrl) {
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to the developer to handle.
			return true;
		},
		uiShown: function () {
			// The widget is rendered.
		},
	},
	popupMode: false,
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: '.',
	signInOptions,
	// Terms of service url.
	tosUrl: '/terms-of-service/',
	// Privacy policy url.
	privacyPolicyUrl: '/privacy-policy/',
};
