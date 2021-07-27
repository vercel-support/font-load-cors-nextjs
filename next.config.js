const securityHeaders = [{
  key: 'Content-Security-Policy',
  value: "default-src 'self' checkout.com *.checkout.com"
}]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
