<template>
  <div class="search">
    <form
      class="search__form"
      @submit.prevent>
      <input
        ref="focusInput"
        class="search__input"
        type="text"
        :value="searchText"
        @input="onSearchKeywordInput" />
      <button
        class="search__button"
        type="submit">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          size="xl" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useKeywordStore } from '~/store/keyword.js';

import debounce from '~/utils/debounce';

export default {
  data() {
    return { searchText: '' };
  },

  computed: {
    ...mapStores(useKeywordStore),
  },

  mounted() {
    this.$refs.focusInput.focus();
  },

  methods: {
    onSearchKeywordInput: debounce(async function ({ target }) {
      this.searchText = target.value;
      await this.keywordStore.fetchKeyword(target.value);

      console.log(this.keywordStore.movieInformation);
    }, 300),
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 70%;
  height: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0 $color-box-shadow;
  margin: 25px 0;
  position: relative;

  &__form {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__input {
    flex-grow: 1;
    font-size: 20px;
    padding-left: 15px;
  }

  &__button {
    width: 55px;
    height: 100%;
    background-color: inherit;

    &:hover {
      background-color: rgba($color: orange, $alpha: 0.7);
      border-top-right-radius: 4px;
    }
  }
}
</style>
