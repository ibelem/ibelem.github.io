# 中国 PWA 开发者日

```
mkdir -p .cert && mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem 'localhost'

"build": "tsc && vite build",
"deploy": "npm run build && gh-pages -d dist"
```