<template>
  <div>
    <h2>{{value}}</h2>
    <div>
      <input type="text" :value="value" @input="onUpdate">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class PageTitle extends Vue {
  @Prop() public value: any;

  @Emit('input')
  public onUpdate(event: any): void {
    return event.target.value;
  }
}
</script>
