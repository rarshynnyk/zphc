export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'ZPHC.TK',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['node_modules/normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Manifest configuration
   */
  manifest: {
    name: 'ZPHC Anti-Counterfeiting Center',
    short_name: 'ZPHC',
    icons: [
      {
        src: '/android-chrome-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/android-chrome-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/android-chrome-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/android-chrome-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-chrome-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: 'http://zphc.tk',
    display: 'standalone',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.txt$/,
        loader: 'raw-loader',
      })
    },
  },
}

// { rel: "apple-touch-icon", sizes="180x180", href="/apple-touch-icon.png" }
// { rel: "icon", type="image/png", sizes="32x32", href="/favicon-32x32.png" },
// { rel: "icon", type="image/png", sizes="192x192", href="/android-chrome-192x192.png" },
// { rel: "icon", type="image/png", sizes="16x16", href="/favicon-16x16.png" },
// { rel: "manifest", href="/site.webmanifest" },
