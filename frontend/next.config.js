const withCSS = require("@zeit/next-css")

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: "NODE_REACT_AWS",
        API: "http://localhost:8080/api",
        PRODUCTION: false,
        DOMAIN: "localhost:3000",
        FB_APP_ID = "adad9rjkfafYUYIKJ:LL"
    }
})
