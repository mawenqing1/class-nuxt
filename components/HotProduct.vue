<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { getHotProduct } from '~/api/rank.js'
import { IHotProduct } from '~/types/api.js'

const data: IHotProduct[] = reactive((await getHotProduct()).data)

const colorMap = {
  1: '#ffc132',
  2: '#8da3b7',
  3: '#f49855',
  4: '#df5d5d'
}

let maxData = $ref(8)

// 展示的数据列表
const realData = computed(() => {
  if (data) {
    // 进行深拷贝
    let list = [...data]
    return list.splice(0, maxData)
  }
})

// 查看更多的按钮
const onMoreClick = function () {
  if (maxData >= data.length) {
    message.warn('没有更多的数据了')
  } else {
    maxData += 8
    message.success('加载成功，往下滚动')
  }
}
</script>

<template>
  <div w-285px h-618px relative rounded-10px pt-27px z-2 h-650px bg="#f4f4f4"
    style="box-shadow: 0px 0px 10px 0px #cacaca">
    <img src="/images/svg/hot_list.svg" absolute top-0 z--1 />
    <img src="/images/hot_top.png" w-120px h-130px absolute right-2 top-8 z--1 />
    <button @click="onMoreClick" bg="#f2f2f2" text="center #555555" hover="bg-gray-100 text-gray-8"
      class="btn border-none text-14px absolute bottom-0 cursor-pointer wfull h-12 z-20">
      查看更多
    </button>
    <span color-white text-24px font-600 pl-15px>热门排行榜</span>
    <div rounded-10px bg-white w-266px h-502px ml-10px mt-38px pb-36px overflow-scroll flex="~ col" class="hot-body">
      <div v-for="(item, index) in realData">
        <div p="t-4px l-9px r-6px" class="flex items-baseline justify-between relative z-2">
          <span text-20px italic font-700 mr-10px h-54px
            :style="{ color: index + 1 > 4 ? '#555555' : colorMap[index + 1] }">
            {{ index + 1 }}
          </span>
          <span color="#555555" :title="item.title"
            class="font-500 select-none cursor-pointer wfull truncate-2 break-all">
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
