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
        @keyup="onSearchText" />
      <button
        class="search__button"
        type="submit">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          size="xl" />
      </button>
    </form>
    <div
      v-if="isSearchText"
      class="search__autocomplete">
      <ul class="search__searched-lsit">
        <li
          v-for="title in searcedTitles"
          :key="title.imdbID">
          {{ title.Title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useKeywordStore } from '~/store/keyword'; 

export default {
  data() {
    return {
      searchText: '',
    };
  },

  computed: {
    ...mapStores(useKeywordStore),
    isSearchText() {
      return !!this.searchText;
    },
  },

  mounted() {
    this.$refs.focusInput.focus();
  },

  methods: {
    onSearchText({target, key}) {
      if (key === 'Backspace') {
        return;
      }

      if (target.value.length > 2) {
        this.keywordStore.fetchKeyword(target.value);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 40%;
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

    li {
      padding-left: 5px;

      &:hover,
      &:active {
        background-color: darken($white, 7%);
      }
    }
  }
}
</style>
