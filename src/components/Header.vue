<template>
  <section class="header">
    <Logo />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  components: {
    Logo,
  }
})
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 2.5rem 0;
}
</style>
