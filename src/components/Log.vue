<template>
  <div class="log">
    <div class="log__img"></div>
    <h1 class="log__title">
      Movie's
    </h1>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
