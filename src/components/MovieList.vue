<template>
  <div ref="triggerElement">
    <ul class="movie-list">
      <Spinner
        class="spinner"
        :size="30"
        :width="5"
        :loading="keywordStore.loading" />
      <MovieItem
        v-for="movieItem in keywordStore.movieInformation[0]"
        :key="movieItem.imdbID"
        :movie-item="movieItem" />
    </ul>
    <!-- <Observer @intersect="intersected" /> -->
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useKeywordStore } from '~/store/keyword.js';

import MovieItem from '~/components/MovieItem';
import Spinner from '~/components/Spinner';
// import Observer from '~/components/Observer';

export default {
  components: {
    MovieItem,
    Spinner,
    // Observer,
  },

  computed: {
    ...mapStores(useKeywordStore),
  },

  // methods: {
  //   async intersected() {
  //     this.keywordStore.fetchKeyword(this.keywordStore.keyword);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 50px;
  position: relative;

  .spinner {
    position: absolute;
    top: 400%;
  }
}
</style>
