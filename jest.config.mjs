const config = {
  cacheDirectory: "<rootDir>/.jest/cache",
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageProvider: "v8",
  coverageReporters: ["text-summary", "html"],
  reporters: ["summary", "default"],
  rootDir: "./",
};

export default config;
