const path = require("path")
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

module.exports = withPWA({
	images: {
		domains: ["res.cloudinary.com"],
	},
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ["en-US", "bn", "nl-NL"],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: "en-US",
		// This is a list of locale domains and the default locale they
		// should handle (these are only required when setting up domain routing)
		// Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
	},
	pwa: {
		dest: "public",
		runtimeCaching,
	},
	// This is not required to make it into a PWA, but is a nice way to clean up your imports
	webpack: (config) => {
		config.resolve.modules.push(path.resolve("./"))
		return config
	},
})
