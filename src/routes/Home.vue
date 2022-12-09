<template>
  <div class="home">
    <main
      :class="isAutocompleteStore.isShow && 'pull-up'"
      class="home__main">
      <Log :is-text="true" />
      <SearchFormVue />
    </main>
  </div>
</template>

<script>
import { mapStores } from 'pinia';

import Log from '~/components/Log';
import SearchFormVue from '~/components/SearchForm';
import { useIsAutocompleteStore } from '~/store/isAutocomplete';

export default {
  components: {
    Log,
    SearchFormVue,
  },

  computed: {
    ...mapStores(useIsAutocompleteStore),

    temp() {
      console.log(this.isAutocompleteStore.isShow);
      return 'true';
    },
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
