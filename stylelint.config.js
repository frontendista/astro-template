/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard-scss"],
	rules: {
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"theme",
					"apply",
					"variants"
				]
			}
		]
	}
};
