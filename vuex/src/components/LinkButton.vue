<template>
  <action-button @click="onClick" :name="name" :variant="variant">
    <slot></slot>
  </action-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ActionButton from './ActionButton.vue';

@Component({
  components: {
    ActionButton,
  },
})
export default class LinkButton extends ActionButton {
  @Prop()
  public name!: string;
  @Prop()
  public variant!: string;
  @Prop()
  public url!: string;
  @Prop({ default: true })
  public newTab!: boolean;

  public onClick(): void {
    if (this.newTab) {
      window.open(this.url);
    } else {
      alert(this.url);
    }
  }
}
</script>

<style scoped lang="scss">
</style>
