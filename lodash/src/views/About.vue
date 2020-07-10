<template>
  <div class="about">
    <h2>Your about page here.</h2>
    <router-link rel="prefetch" to="/contact">Contact</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue { }
</script>
