module.exports = {
    server: {
        port: 8080,
        // 代理
        proxy: {
            '/data': {
                target: 'http://localhost:7001',
                changeOrigin: true,
                //ws: true // proxy websockets 
            }
        }
    },
    dist: "dist",
    build: {
        js: [{
            src: "code/view/**/*.js",
            dist: "view"
        }, {
            src: "code/common/**/*.js",
            dist: "common/common.js"
        }, {
            src: "code/index.js",
            dist: "index.js"
        }],
        css: [{
            src: "code/**/*.css",
            dist: "app.css"
        }],
        html: [{
            src: "code/**/*.html",
            dist: ""
        }],
        // 直接拷贝
        others: [{
            src: ["code/libs/**/*.*"],
            dist: "libs"
        }, {
            src: "code/favicon.ico",
            dist: ""
        }, {
            src: ["code/**/*.png", "code/**/*.gif", "code/**/*.ico", "code/**/*.jpg", "code/**/*.svg"],
            dist: ""
        }, {
            src: ["code/**/*.ttf", "code/**/*.otf", "code/**/*.eot", "code/**/*.woff", "code/**/*.woff2"],
            dist: ""
        }, {
            src: "code/**/*.json",
            dist: ""
        }]
    },
    replace: { src: "${version}", value: "0.0.1" }
}