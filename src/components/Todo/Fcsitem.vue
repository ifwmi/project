<template>
  <div class="main_elements">
    <div>
      <div class="border">
        <h3>Имя:</h3><h4>{{ post.firstName }}</h4>
      </div>
      <h3>Фамилия:</h3><h4>{{ post.lastName }}</h4>
    </div>
    <div class="Remove">
      <btn @click="$emit('remove',post)">Remove</btn>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Todo/Btn.vue";
export default {
  components: {Btn},
  props: {
    post:{
      type: Object,
      request: true,
    }
  }
}
</script>

<style scoped>

</style>