const { createProxyMiddleware } = require("http-proxy-middleware");

// require('ssl-root-cas/latest')
//     .inject()
//     .addFile(__dirname + '/ssl/BaltimoreCyberTrustRoot.cer')
//     .addFile(__dirname + '/ssl/CloudFlareIncECCCA-2.cer')
//     .addFile(__dirname + '/ssl/sni.cloudflaressl.com.cer');

const datasourceProxy = createProxyMiddleware("/datasource", {
    target: 'http://localhost:8080/datasource',
    logLevel: 'debug',
});

module.exports = function (app) {
  app.use("/datasource", datasourceProxy);
};
