import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/mawenqing/Documents/xfw/class-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}