<template>
  <div class="search">
    <form
      class="search__form"
      @submit.prevent>
      <input
        class="search__input"
        type="text" />
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

<style lang="scss" scoped>
.search {
  width: 40%;
  height: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba($color: $black, $alpha: 0.2);
  overflow: hidden;
  margin: 25px 0;

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
    }
  }
}
</style>
