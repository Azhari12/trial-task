module.exports = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
	},
	transformIgnorePatterns: [
		"/node_modules/(?!your-module-to-transform|another-module-to-transform).+\\.js$",
	], // If you have any dependencies that require transformation
};
