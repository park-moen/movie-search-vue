<template>
  <div class="detail">
    <div class="detail__main">
      <Spinner
        class="spinner"
        :size="60"
        :width="10"
        :loading="loading" />
      <MovieDetail
        v-if="isMovieDetail"
        :detail="movieDetailMetaData" />
    </div>
  </div>
</template>

<script>
import request from '~/api';

import MovieDetail from '~/components/MovieDetail';
import Spinner from '~/components/Spinner';

export default {
  components: {
    MovieDetail,
    Spinner,
  },

  data() {
    return {
      movieDetailMetaData: {},
      loading: true,
    };
  },

  computed: {
    isMovieDetail() {
      return Object.keys(this.movieDetailMetaData).length !== 0;
    },
  },

  created() {
    this.fetchMovieDetail();
  },

  methods: {
    async fetchMovieDetail() {
      this.loading = true;
      this.movieDetailMetaData = await request(
        `&i=${this.$route.params.id}&plot=full`
      );
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  background-color: $color-background;
  height: 100%;
  widows: 100%;
  position: relative;
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__main {
    padding: 80px 0;
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
}
</style>
