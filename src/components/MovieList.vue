<template>
  <div
    ref="triggerElement"
    class="wrapper">
    <Spinner
      :size="30"
      :width="5"
      :class="isInitializationFetch ? 'spinner--ceil' : 'spinner--floor'"
      :loading="keywordStore.loading" />
    <ul class="movie-list">
      <MovieItem
        v-for="movieItem in keywordStore.movieInformation.flat()"
        :key="movieItem.imdbID"
        :movie-item="movieItem" />
    </ul>
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import { mapState, mapStores } from 'pinia';
import { useKeywordStore } from '~/store/keyword.js';

import MovieItem from '~/components/MovieItem';
import Spinner from '~/components/Spinner';
import Observer from '~/components/Observer';

export default {
  components: {
    MovieItem,
    Spinner,
    Observer,
  },

  computed: {
    ...mapStores(useKeywordStore),
    ...mapState(useKeywordStore, ['isInitializationFetch']),
  },

  methods: {
    async intersected() {
      this.keywordStore.fetchKeyword(this.keywordStore.keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  /* border: 1px solid; */
  min-height: 55vh;
  padding-bottom: 50px;

  .spinner--ceil {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner--floor {
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 50px;
}
</style>
