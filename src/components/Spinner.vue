<template>
  <div
    v-if="loading"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      padding,
    }"
    :class="{
      absolute,
      fixed,
    }"
    class="loader-wrapper">
    <div
      :style="{
        borderWidth: `${width}px`,
      }"
      class="loader"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    padding: {
      type: String,
      default: '0',
    },
    size: {
      type: Number,
      default: 22,
    },
    width: {
      type: Number,
      default: 3,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  flex-shrink: 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  position: relative;

  &.absolute {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  &.fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.loader {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-style: solid;
  border-radius: 50%;
  border-top-color: rgba(black, 0.1) !important;
  border-color: $color-log-background;
  box-sizing: border-box;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
