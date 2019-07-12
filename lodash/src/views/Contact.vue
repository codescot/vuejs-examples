<template>
  <div>
    <h2>Your contact form here.</h2>
    <h3>{{ timestamp }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import now from 'lodash/now';
// import * as _ from 'lodash';

@Component
export default class Contact extends Vue {
  public timestamp: string;

  constructor() {
    super();
    this.timestamp = new Date(now()).toUTCString();
    // this.timestamp = new Date(_.now()).toUTCString();
  }
}
</script>

<style scoped>
</style>
