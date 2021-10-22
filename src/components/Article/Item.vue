<template>
  <div
    class="article-item"
  >
    <img :style="{ backgroundImage: `url('${image}')` }" class="article-image">
    <div class="article-info">
      <div class="article-info--head">
        <span class="article-info__title">
          {{ title }}
        </span>
      </div>
      <p class="article-info__description">
        {{ description }}
      </p>
      <ul
        v-if="tags.length > 0"
        class="article-tags"
      >
        <li
          v-for="(tag, key) in tags"
          :key="key"
          class="article-tags--item"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    description: String ,
    image: String ,
    tags: Array,
  },
})
</script>


<style lang="scss" scoped>
.article {
  &-item {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    overflow: hidden;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: matrix(1.05, 0, 0, 1.05, 0, -20);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    }
  }

  &-image {
    width: 100%;
    height: 15rem;
    background-size: cover;
    background-position: center;
  }

  &-info {
    padding: 1rem 1.25rem 1.5rem;

    &--head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    &__title {
      font-size: 1.5rem;
    }

    &__description {
      color: #999;
    }
  }

  &-tags {
    display: flex;
    margin-top: 1rem;

    &--item {
      &:not(:last-child) {
        margin-right: 0.5rem;
      }

      padding: 0.25rem 0.75rem 0.4rem;
      background: #555;
      color: #fff;
      border-radius: 5px;
      transition: all .3s;

      &:hover {
        background-color: #57f;
      }
    }
  }
}
</style>