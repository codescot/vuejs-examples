<template>
  <div>
    <div>
      <page-title v-model="title"/>
    </div>
    <div>
      <link-button url="http://primary.example.com" :newTab="false">
        <font-awesome-icon icon="home"></font-awesome-icon>&nbsp;Primary
      </link-button>
      <link-button url="http://success.example.com" variant="success">
        <font-awesome-icon icon="check-circle"></font-awesome-icon>&nbsp;Success
      </link-button>
      <link-button url="http://warning.example.com" variant="warning">
        <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>&nbsp;Warning
      </link-button>
      <link-button url="http://danger.example.com" variant="danger">
        <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>&nbsp;Danger
      </link-button>
    </div>
    <div>
      <action-button @click="actionClick" variant="primary-outline">
        <font-awesome-icon icon="home"></font-awesome-icon>&nbsp;Primary
      </action-button>
      <action-button @click="actionClick" variant="success-outline">
        <font-awesome-icon icon="check-circle"></font-awesome-icon>&nbsp;Success
      </action-button>
      <action-button @click="actionClick" variant="warning-outline">
        <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>&nbsp;Warning
      </action-button>
      <action-button @click="actionClick" variant="danger-outline">
        <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>&nbsp;Danger
      </action-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PageTitle from './PageTitle.vue';
import LinkButton from './LinkButton.vue';
import ActionButton from './ActionButton.vue';

@Component({
  components: {
    PageTitle,
    LinkButton,
    ActionButton,
  },
})
export default class HelloWorld extends Vue {
  public title: string;

  constructor() {
    super();
    this.title = 'Hello, World.';
  }

  public actionClick(): void {
    alert('action clicked');
  }
}
</script>

<style scoped>
</style>
