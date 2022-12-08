<template>
  <header class="header">
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
</template>

<style lang="scss" scoped>
.header {
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
</style>
