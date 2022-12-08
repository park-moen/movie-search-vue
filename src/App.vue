<template>
  <div class="app">
    <header class="app__header">
      <div class="setting">
        <button class="setting__notice">
          <span>공지</span>
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </button>
        <div class="setting__menu-button">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            size="2xl" />
        </div>
      </div>
    </header>
    <main class="app__main">
      <div class="log">
        <div class="log__img"></div>
        <h1 class="log__title">
          Movie's
        </h1>
      </div>

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
    </main>
  </div>
</template>

<style lang="scss">
.app {
  background-color: $color-background;
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    height: 75px;

    .setting {
      display: flex;
      height: 100%;
      justify-content: flex-end;
      align-items: center;

      & > * {
        color: $color-icon;
        padding: 10px 10px;
      }

      & > *:hover {
        color: $color-icon--hover;
      }

      .setting__notice {
        font-size: 16px;
        font-weight: 600;

        & > * {
          margin-right: 7.5px;
        }
      }
    }
  }

  &__main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;

    .log {
      width: 200px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      line-height: 2;
      color: $color-font;

      &__img {
        background-color: orange;
        width: 125px;
        height: 125px;
        border-radius: 50%;
      }
    }

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
  }
}
</style>
