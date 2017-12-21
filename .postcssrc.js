// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	"plugins": {
		// to edit target browsers: use "browserslist" field in package.json
		"postcss-import": {},
		"autoprefixer": {
			"browsers": [
				"> 1%",
				"last 3 versions",
				"not ie <= 8",
				"ios >= 8",
				"android >= 4.2"
			]
		}
	}
}
