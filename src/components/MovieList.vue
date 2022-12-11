<template>
  <div>
    <ul class="movie-list">
      <MovieItem
        v-for="movieItem in keywordStore.movieInformation"
        :key="movieItem.imdbID"
        :movie-item="movieItem" />
    </ul>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useKeywordStore } from '~/store/keyword.js';

import MovieItem from './MovieItem';

export default {
  components: {
    MovieItem,
  },

  computed: {
    ...mapStores(useKeywordStore)
  },  
};
</script>

<style lang="scss" scoped>
.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 50px;
}
</style>
