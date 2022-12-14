<template>
  <form @submit.prevent>
    <input v-model="post.firstName" placeholder="firstName" id="firstName">
    <input v-model="post.lastName" placeholder="lastName" id="lastName">
    <btn @click="Add" class="btn">Add</btn>
  </form>
</template>

<script>
import Btn from "@/components/Todo/Btn.vue";
export default {
  components: {Btn},
  data() {
    return{
      post:{
        firstName: '',
        lastName: ''
      },
    }
  },
  methods:{
    Add(){
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        firstName: '',
        lastName: ''
      }

    }
  }
}
</script>