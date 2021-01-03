<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Счет', url: '/admin', exact: true },
      { title: 'История', url: '/admin/detail-record' },
      { title: 'Планирование', url: '/admin/planning' },
      { title: 'Новая запись', url: '/admin/record' },
      { title: 'Категории', url: '/admin/categories' },
    ]
  })
}
</script>
