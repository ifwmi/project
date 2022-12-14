<template>
<main>
  <div class="ToDo">
    <add-f-c-s @create="Add"/>
    <f-c-s :posts="posts" @remove="Delete"/>
  </div>
</main>
</template>

<script>
import AddFCS from "@/components/Todo/AddFCS.vue";
import FCS from "@/components/Todo/FCS.vue";

export default {
  components:{
    AddFCS,FCS
  },
  data() {
    return{
      posts: [
        {id:'1', firstName: 'Nikita', lastName: 'the devil knows'},
        {id:'2', firstName: 'Iymanbek', lastName: 'the devil knows'},
      ]
    }
  },
  methods:{
    Add(post){
      this.posts.push(post)
    },
    Delete(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>