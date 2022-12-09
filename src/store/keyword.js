import { defineStore } from 'pinia';
import request from '~/api';

export const useKeywordStore = defineStore('keyword', {
  state: () => ({ movieInformation: [] }),

  actions: {
    async fetchKeyword(keyword) {
      const MIN_KEYWORD = 3;

      if (keyword.trim().length < MIN_KEYWORD) {
        this.movieInformation = [];
        return;
      }

      const movieMetaData = await request(`&s=${keyword}`);

      if (movieMetaData.Response === 'True') {
        this.movieInformation = movieMetaData.Search;
      } else {
        this.movieInformation = [];
      }
    },
  },
});
