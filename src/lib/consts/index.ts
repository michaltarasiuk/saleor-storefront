export const APP_ROUTES = {
	ROOT: '',
	PRODUCTS: 'products',
	PRODUCT: 'product',
	LOGIN: 'login',
	SIGNUP: 'signup',
	CONFIRM_ACCOUNT: 'confirm-account',
	REQUEST_PASSWORD_RESET: 'request-password-reset',
	SET_PASSWORD: 'set-password',
	DASHBOARD: {
		ACCOUNT: {
			USER_DETAILS: ['dashboard', 'account', 'user-details'],
			CONFIRM_EMAIL_CHANGE: [
				'dashboard',
				'account',
				'confirm-email-change',
			],
		},
	},
	CHECKOUT: {
		INFORMATION: ['checkout', 'information'],
		SHIPPING: ['checkout', 'shipping'],
		BILLING: ['checkout', 'billing'],
		PAYMENT: ['checkout', 'payment'],
	},
	API: {
		REFRESH: ['api', 'refresh'],
		LOG_OUT: ['api', 'log-out'],
	},
	COLLECTION: 'collection',
	CATEGORY: 'category',
};
