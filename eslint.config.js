import eslintPluginAstro from "eslint-plugin-astro";
import stylistic from "@stylistic/eslint-plugin";

export default [
	...eslintPluginAstro.configs.recommended,
	{
		files: ["src/**/*.astro", "src/**/*.tsx", "src/**/*.ts"],
		plugins: {
			"@stylistic": stylistic
		},
		rules: {
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/indent-binary-ops": ["error", "tab"],
			"@stylistic/semi": ["error", "always"],
			"@stylistic/quotes": ["error", "double"],
		}
	}
];
