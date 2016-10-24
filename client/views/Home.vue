<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
    <router-link to='/one/child1'>点击link链接跳转</router-link>
    <el-button @click.native='goTo'>点击按钮跳转</el-button>
  </div>
</template>

<script>
  import Counter from '../components/Counter'
  
  export default {

    methods:{
      goTo: function () {
        this.$router.push({
          path:'one'
        })
      }
    },
    components: {
      Counter
    }
  }
</script>
