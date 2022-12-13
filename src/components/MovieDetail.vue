<template>
  <div class="detail">
    <div class="detail__image-box">
      <img
        class="detail__image"
        :src="detail.Poster"
        alt="movie poster image"
      />
    </div>
    <div class="detail__content">
      <div class="detail__main-content">
        <h1 class="detail__title">
          {{ detail.Title }}
        </h1>
        <div class="detail__text">
          <span>({{ detail.Year }}),</span>
          <span>{{ splitGenre }},</span>
        </div>
        <div class="detail__ratings">
          <div
            v-for="rating in detail.Ratings"
            :key="rating.Source"
            class="detail__rating"
          >
            <div class="detail__source">
              <span>{{ rating.Value }}</span>
              <font-awesome-icon icon="fa-solid fa-star" size="xl" />
            </div>
            <span>{{ rating.Source }}</span>
          </div>
        </div>
      </div>
      <div class="detail__description">
        {{ detail.Plot }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },

  computed: {
    splitGenre() {
      if (!this.detail.Genre) {
        return;
      }

      return this.detail?.Genre?.replace(/,/g, ' /');
    },
  },

  updated() {
    console.log(this.detail.Ratings);
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  padding: 10px;

  &__image-box {
    width: 350px;
    height: 500px;
    padding-right: 30px;
    flex-shrink: 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 3px $color-box-shadow;
    border-radius: 8px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 25px;
    flex-grow: 1;
    background-color: lighten($color: $color-background, $amount: 5%);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 2px 2px 3px $color-box-shadow;
    line-height: 1.5;
    color: $color-font;
  }

  &__main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
  }

  &__text {
    span {
      font-size: 14px;
      padding-left: 5px;
    }
  }

  &__ratings {
    display: flex;
  }

  &__rating {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: $color-font;
    padding: 10px 15px;
  }

  &__source {
    padding-bottom: 5px;
    .fa-star {
      color: #fad220;
      padding-left: 10px;
    }
  }

  &__description {
    padding: 15px 0;
    width: 85%;
    margin: 0 auto;
  }
}
</style>
