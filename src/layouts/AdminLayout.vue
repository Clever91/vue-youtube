<template>
  <div class="app-main-layout">
    <!-- navbar component -->
    <Navbar @click="sidebarOpen = !sidebarOpen" />
    <!-- sidebar compoenent -->
    <Sidebar v-model="sidebarOpen" />
    <!-- main content -->
    <main class="app-content" :class="{full: !sidebarOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
</div>

</template>

<script>
import Navbar from '@/components/admin/Navbar'
import Sidebar from '@/components/admin/Sidebar'

export default {
  name: 'Admin-Layout',
  data: () => ({
    sidebarOpen: true
  }),
  components: {
    Navbar, Sidebar
  }
}
</script>
