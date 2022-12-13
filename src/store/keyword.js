import { defineStore } from 'pinia';
import request from '~/api';

export const useKeywordStore = defineStore('keyword', {
  state: () => ({
    movieInformation: [],
    loading: false,
    keyword: '',
    page: 1,
  }),

  getters: {
    isInitializationFetch: state => state.page === 1,
  },

  actions: {
    async fetchKeyword(keyword) {
      const MIN_KEYWORD = 3;

      if (keyword.trim().length < MIN_KEYWORD) {
        this.emptyKeyword();
        return;
      }

      this.loading = true;
      const movieMetaData = await request(`&s=${keyword}&page=${this.page}`);
      this.keyword = keyword;
      this.page++;
      this.loading = false;

      if (movieMetaData.Response === 'True') {
        this.movieInformation.push(movieMetaData.Search);
      } else {
        this.emptyKeyword();
      }
    },

    emptyKeyword() {
      this.movieInformation = [];
      this.page = 1;
      this.keyword = '';
    },
  },
});
