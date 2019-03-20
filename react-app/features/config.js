const frontendHostname = process.env.FRONTEND_HOSTNAME || 'localhost';
const frontendPort = process.env.FRONTEND_PORT || 3000;

export default {
  cucumber: {
    defaultTimeout: parseInt(process.env.CUCUMBER_DEFAULT_TIMEOUT || '', 10) || 5000
  },
  frontendUrl: `http://${frontendHostname}:${frontendPort}`,
  seleniumServerUrl: process.env.SELENIUM_SERVER_URL
};
