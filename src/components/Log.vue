<template>
  <div class="log">
    <h1 class="log__title">
      <span class="log__first-text">Rotten</span>
      <span class="log__last-text">Cherry tomato</span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.log {
  width: 250px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  line-height: 0.4;
  color: $color-log-font;
  background-color: $color-log-background;
  box-shadow: -10px -10px 15px tomato;

  &__first-text,
  &__last-text {
    display: block;
    text-align: center;
    text-shadow: $color-log-background 2px 5px 5px;
  }
}
</style>
