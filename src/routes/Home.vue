<template>
  <div class="home">
    <TheHeader />
    <main class="home__main">
      <Log />
      <SearchFormVue />
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader';
import Log from '~/components/Log';
import SearchFormVue from '~/components/SearchForm';

export default {
  components: {
    TheHeader,
    Log,
    SearchFormVue,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $color-background;
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__main {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
  }
}
</style>
