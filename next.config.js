const securityHeaders = [{
  key: 'Content-Security-Policy',
  value: "default-src 'self'; font-src *"
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
