<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';

</style>

<script>
import AuthLayout from '@/layouts/AuthLayout'
import AppLayout from '@/layouts/AppLayout'

export default {
  name: 'App',
  components: {
    AuthLayout, AppLayout
  },
  computed: {
    layout() {
      console.log(this.$route)
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  }
}
</script>
