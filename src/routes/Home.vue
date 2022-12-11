<template>
  <div class="home">
    <main
      class="home__main">
      <Log />
      <SearchForm />
      <MovieList />
    </main>
  </div>
</template>

<script>
import Log from '~/components/Log';
import SearchForm from '~/components/SearchForm';
import MovieList from '~/components/MovieList.vue';

export default {
  components: {
    Log,
    SearchForm,
    MovieList
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $color-background;
  height: 100%; 
  widows: 100%;

  &__main {
    margin: 0 auto;
    padding-top: 120px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.25s linear;
  }
}
</style>
