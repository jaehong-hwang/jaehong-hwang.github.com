<template>
  <main class="home">
    <Header />
    <section class="article-list">
      <ArticleItem
        title="HTML #2, Semantic tag란 무엇인가?"
        description="HTML5의 장점, HTML에서 가지는 태그의 의미"
        image="/images/img.png"
        :tags="['HTML', 'HTML5', '기초']"
      />
      <ArticleItem
        title="HTML #1, HTML의 기본을 알아보자."
        description="Hyper Text Markup Language란 무엇인가? 어떻게 쓰면 되는건가?"
        image="/images/img.png"
        :tags="['HTML', '기초']"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Headers/Index.vue'
import ArticleItem from '@/components/Article/Item.vue'

export default defineComponent({
  components: {
    Header,
    ArticleItem,
  },
})
</script>

<style lang="scss" scoped>
.article-list {
  width: 50rem;
  margin: 20px auto 0;

  > *:not(:last-child) {
    margin-bottom: 3rem;
  }
}
</style>
