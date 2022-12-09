import { defineStore } from 'pinia';

export const useIsAutocompleteStore = defineStore('isAutocomplete', {
  state: () => ({ isShow: false }),
});
