<template>
  <li class="container">
    <div
      class="movie"
      @click="onClickMovieItem">
      <div class="movie__image-box">
        <img
          class="movie__image"
          :src="movieItem.Poster"
          alt="movie poster" />
      </div>
      <div class="movie__content">
        <h2 class="movie__title">
          {{ movieItem.Title }}
        </h2>
        <div>
          <span class="movie__year">({{ movieItem.Year }})</span>
          <span class="movie__type">{{ `type: ${movieItem.Type}` }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movieItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onClickMovieItem() {
      this.$router.push(`/movie/${this.movieItem.imdbID}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 5px;

  .movie {
    width: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    background-color: lighten($color: $color-background, $amount: 5%);
    box-shadow: 2px 2px 3px $color-box-shadow;
    border-radius: 4px;

    &:hover {
      opacity: 0.7;
      text-decoration: underline;
    }

    &__image-box {
      width: 100%;
      height: 300px;
      display: flex;
      flex-shrink: 0;
    }

    &__image {
      width: 100%;
      height: 100%;
    }

    &__content {
      height: 65px;
      display: flex;
      flex-direction: column;
      font-weight: 700;
      line-height: 1.45;
      padding-top: 5px;
    }

    &__title {
      order: 1;
      line-height: 1;
      height: 40px;
    }

    &__year,
    &__type {
      order: 0;
      font-size: 12px;
      font-weight: 500;
    }

    &__type {
      text-transform: uppercase;
      padding-left: 5px;
    }
  }
}
</style>
