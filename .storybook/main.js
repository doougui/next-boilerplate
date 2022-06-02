module.exports = {
  "stories": [
    "../src/components/**/stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": ["@storybook/addon-essentials"],
  "framework": "@storybook/react",
  "webpackFinal": async config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
