<template>
  <div class="home">
    <main
      :class="isAutocompleteStore.isShow && 'pull-up'"
      class="home__main">
      <Log />
      <SearchFormVue />
    </main>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useIsAutocompleteStore } from '~/store/isAutocomplete';

import Log from '~/components/Log';
import SearchFormVue from '~/components/SearchForm';

export default {
  components: {
    Log,
    SearchFormVue,
  },

  computed: {
    ...mapStores(useIsAutocompleteStore),
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
    align-items: center;
    margin: 200px 0;
    transition: transform 0.25s linear;

    &.pull-up {
      transform: translateY(-150px);
    }
  }
}
</style>
