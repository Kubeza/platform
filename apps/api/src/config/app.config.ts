export default () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  appName: process.env.APP_NAME || 'DevOps AI Lab API',
  appVersion: process.env.APP_VERSION || '1.0.0',
});