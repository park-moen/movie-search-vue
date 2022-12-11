<template>
  <section class="movie">
    <div class="movie__image-box">
      <img
        class="movie__image"
        :src="movieInformation.Poster"
        alt="movie poster" />
    </div>
    <div class="movie__content">
      <h2 class="movie__title">
        {{ movieInformation.Title }}
      </h2>
      <span class="movie__year">({{ movieInformation.Year }})</span>
      <span class="movie__type">{{ `type: ${movieInformation.Type}` }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    movieInformation: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    // console.log(this.movieInformation);
  },
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  padding: 10px 45px;

  &__image-box {
    width: 80px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
  }

  &__content {
    flex-grow: 1;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    line-height: 1.45;
    padding-left: 50px;
    font-size: 20px;
    font-weight: 700;
  }

  &__year,
  &__type {
    font-size: 16px;
    font-weight: 500;
  }

  &__type {
    text-transform: uppercase;
  }
}
</style>
