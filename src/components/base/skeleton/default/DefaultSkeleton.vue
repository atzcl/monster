<template>
  <vue-lazy-component>
    <slot name="body" />
    <base-skeleton slot="skeleton" />
  </vue-lazy-component>
</template>

<script lang="ts">
import { Component, Vue } from '@/baseExport';
import BaseSkeleton from '../BaseSkeleton.vue';

@Component({
  components: {
    BaseSkeleton,
  },
})
export default class DefaultSkeleton extends Vue {
}

</script>

<style lang="stylus" scoped>
</style>
