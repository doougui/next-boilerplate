// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'res.cloudinary.com']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
