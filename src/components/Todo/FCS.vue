<template>
  <div>
    <fcsitem v-for="post in posts" :post="post" :key="post.id" @remove="($emit('remove', post))"/>
  </div>
</template>

<script>
import Fcsitem from "@/components/Todo/Fcsitem.vue";
export default {
  components: {Fcsitem},
  props:{
    posts:{
      type: Array,
      request: true
    }
  }
}
</script>
