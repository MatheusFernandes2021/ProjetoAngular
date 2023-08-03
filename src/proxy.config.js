// CORS Config
const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "matheusfsf.lovestoblog.com",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
];

module.exports = PROXY_CONFIG;