<template>
  <div ref="triggerElement"></div>
</template>

<script>
export default {
  emits: ['intersect'],

  data: () => ({
    observer: null,
    options: {
      root: null,
      threshold: 1,
    },
  }),

  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect');
      }
    }, this.options);

    this.observer.observe(this.$refs.triggerElement);
  },
};
</script>
