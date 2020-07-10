<template>
  <div>
    <h2>SVG</h2>
    <div>
      <svg>
        <rect :width="300-width" height="20px" fill="#373F51"></rect>
        <rect y="35px" :width="width" height="20px" fill="#58A4B0"></rect>
        <text y="70px" fill="black">{{text}}</text>
      </svg>
    </div>
    <div>
      <input type="range" min="0" max="300" v-model="width">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public width: number;
  public text: string;

  constructor() {
    super();
    this.width = 200;
    this.text = 'Hello, World.';
  }
}
</script>

<style scoped>
</style>
