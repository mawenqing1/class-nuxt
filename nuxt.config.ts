import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt'],
  experimental: {
    reactivityTransform: true
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ]
  },
  unocss: {
    uno: true, //激活unocss
    attributify: true, //激活属性选择器
    shortcuts: [
      {flexc: 'flex items-center justify-center'},
    ],
    rules: [
      [
        /^wh-(\d+)$/,
        ([, d]) => ({
          width: `${d}px`,
          height: `${d}px`
        })
      ]
    ]
  }
})
