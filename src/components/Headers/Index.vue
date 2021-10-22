<template>
  <section class="header">
    <Logo />
    <Utills />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Headers/Logo.vue'
import Utills from '@/components/Headers/Utills.vue'

export default defineComponent({
  components: {
    Logo,
    Utills
  }
})
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 2rem 0 3rem;
}
</style>
