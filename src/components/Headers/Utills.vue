<template>
  <ul class="header-utills">
    <li v-if="github !== ''" class="header-utills--item">
      <a
        :href="'https://github.com/'+github"
        target="_blank"
        class="icon github-icon"
      >
        Github
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      github: 'jaehong-hwang'
    }
  },
})
</script>

<style lang="scss" scoped>
  .header-utills {
    display: flex;

    &--item {
      &:not(:last-child) {
        margin-right: 1rem;
      }

      width: 2rem;
      height: 2rem;

      .icon {
        font-size: 0;

        &::before {
          content: '';
          background-size: 100% 100%;
          display: inline-block;
          width: 2rem;
          height: 2rem;
        }
      }
      
      .github-icon::before {
        background-image: url('/images/icons/iconmonstr-github-1.svg');
      }
    }
  }
</style>
