import { defineStore } from 'pinia';
import request from '~/api';

export const useKeywordStore = defineStore('keyword', {
  state: () => ({
    movieInformation: [],
    loading: false,
    keyword: '',
    page: 1,
  }),

  actions: {
    async fetchKeyword(keyword) {
      const MIN_KEYWORD = 3;

      if (keyword.trim().length < MIN_KEYWORD) {
        this.movieInformation = [];
        return;
      }

      this.loading = true;
      const movieMetaData = await request(
        `&s=${keyword || this.keyword}&page=${this.page}`
      );
      this.keyword = keyword;
      this.page++;
      this.loading = false;

      if (movieMetaData.Response === 'True') {
        this.movieInformation = [
          ...this.movieInformation,
          movieMetaData.Search,
        ];
      } else {
        this.movieInformation = [];
      }

      // eslint-disable-next-line no-console
      console.log([...this.movieInformation], 'store');
    },
  },
});
