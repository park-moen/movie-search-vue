import {defineStore} from 'pinia';
import request from '~/api';

export const useKeywordStore = defineStore('keyword', {
  state: () => ({movieInfomations: []}),
  
  getters: {
    selectTitleList(state) {
      return state.movieInfomations.map(movieInfomation => movieInfomation.Title);
    }
  },

  actions: {
    async fetchKeyword(keyword) {
      const AUTOCOMPLETE_PAGE_COUNT = 8;
      const movieInfomations = await request(`&s=${keyword}&page=${AUTOCOMPLETE_PAGE_COUNT}`);
      
      this.movieInfomations = movieInfomations;
    }
  },
});




