<template>
  <div class="search">
    <form
      class="search__form"
      @submit.prevent="onShowSearchResult"
      @keydown="onKeywordSelect">
      <input
        ref="focusInput"
        class="search__input"
        type="text"
        :value="searchText"
        @input="onSearchKeywordInput"
        @blur="autocompleteCursor = -1" />
      <button
        class="search__button"
        type="submit">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          size="xl" />
      </button>
    </form>
    <div
      v-if="isAutocompleteStore.isShow"
      class="search__autocomplete">
      <ul
        ref="searchedList"
        class="search__searched-list">
        <li
          v-for="(movieInformation, index) in keywordStore.movieInformation"
          :key="movieInformation.imdbID"
          :class="autocompleteCursor === index && 'active'"
          class="search__searched-item">
          <MovieItemVue :movie-information="movieInformation" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';

import { useKeywordStore } from '~/store/keyword';
import { useIsAutocompleteStore } from '~/store/isAutocomplete';
import debounce from '~/utils/debounce';

import MovieItemVue from '~/components/MovieItem';

const SEARCH_INPUT_INDEX = -1;
const LAST_FORM_CHILDREN_INDEX = 10;

export default {
  components: {
    MovieItemVue
  },

  data() {
    return {
      searchText: '',
      autocompleteCursor: SEARCH_INPUT_INDEX,
    };
  },

  computed: {
    ...mapStores(useKeywordStore),
    ...mapStores(useIsAutocompleteStore),

    showAutocomplete() {
      return this.searchText && this.keywordStore.movieInformation.length;
    },
  },

  mounted() {
    this.$refs.focusInput.focus();
  },

  methods: {
    onSearchKeywordInput: debounce(async function ({ target }) {
      this.searchText = target.value;
      await this.keywordStore.fetchKeyword(target.value);

      if (this.searchText && this.keywordStore.movieInformation.length) {
        this.isAutocompleteStore.isShow = true;
      } else {
        this.isAutocompleteStore.isShow = false;
      }
    }, 300),

    onKeywordSelect({ key }) {
      if (key === 'Backspace') {
        return;
      }

      if (this.$refs.searchedList) {
        const searchedItem = [...this.$refs.searchedList.children];

        if (key === 'ArrowUp') {
          const computedCursorIndex =
            this.autocompleteCursor === -1
              ? LAST_FORM_CHILDREN_INDEX
              : this.autocompleteCursor;
          this.autocompleteCursor =
            (computedCursorIndex - 1) % LAST_FORM_CHILDREN_INDEX;
        }

        if (key === 'ArrowDown') {
          this.autocompleteCursor =
            (this.autocompleteCursor + 1) % LAST_FORM_CHILDREN_INDEX;
        }

        if (this.autocompleteCursor !== SEARCH_INPUT_INDEX) {
          this.searchText = searchedItem[this.autocompleteCursor].innerText;
        }
      }
    },

    onShowSearchResult() {
      console.log(this.keywordStore.movieInformation);
    },
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

  &__autocomplete {
    background-color: $white;
    box-shadow: 0px 2px 3px 0 $color-box-shadow;
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.15);
    top: 45px;
    left: -1px;
    width: 100%;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    line-height: 2;
  }

  &__searched-item {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      background-color: darken($white, 7%);
    }

    &.active {
      background-color: darken($white, 7%);
    }
  }
}
</style>
