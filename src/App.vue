<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const DEFAULT_TITLE = '재홍이 블로그';

    useRouter().afterEach(to => {
      const title = typeof to.meta.title === 'string' ? to.meta.title : '';
      document.title = DEFAULT_TITLE + (title === '' ? '' : ' | ' + title);
    });
  },
})
</script>


<style lang="scss">
@font-face {
  font-family: 'slei-gothic';
  src: url('~@/assets/fonts/SLEIGothicTTF.ttf');
}

html {
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'slei-gothic';
}
</style>
