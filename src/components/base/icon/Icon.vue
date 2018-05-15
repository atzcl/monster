<template>
  <svg
    class="icon"
    :class="setClass"
    :style="setStyle"
    aria-hidden="true"
    @click="handleClick"
  >
    <use :xlink:href="`#${name}`" :fill="fill"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseICON extends Vue {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  fill: string;

  @Prop({ type: String })
  setStyle: string;

  @Prop({ type: String })
  setClass: string;

  handleClick (evt: any) {
    this.$emit('click', evt);
  }
}
</script>
