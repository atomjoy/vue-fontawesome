import messages from './messages.js'

const lang = {
	locale: 'fr', // set locale
	fallbackLocale: 'fr', // set fallback locale
	availableLocales: ['fr', 'en', 'pl'], // available locales
	messages: messages,
	allowComposition: true, // Allow compositions api
	globalInjection: true, // Allow t compositions api
	legacy: false, // Allow t compositions api
}

export default lang
