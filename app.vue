<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'

const { asyncUserInfo } = $(useUser())
// 同步用户数据
await asyncUserInfo()

useHead({
  title: '小卿课堂', meta: [
    { name: "description", content: "小卿课堂的网站" },
    { name: "keywords", content: "vue3教程,微服务教程,nuxt3教程" },
  ]
})


</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang='less' scoped></style>



