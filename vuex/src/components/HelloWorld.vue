<template>
  <div>
    <div>
      <page-title v-model="title"/>
    </div>
    <div>
      <action-button @click="onStore" variant="success-outline">
        <font-awesome-icon icon="check-circle"></font-awesome-icon>&nbsp;Store
      </action-button>
      <action-button @click="onDelete" variant="danger-outline">
        <font-awesome-icon icon="minus-circle"></font-awesome-icon>&nbsp;Delete
      </action-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PageTitle from './PageTitle.vue';
import LinkButton from './LinkButton.vue';
import ActionButton from './ActionButton.vue';
import { Getter, Mutation } from 'vuex-class';

@Component({
  components: {
    PageTitle,
    LinkButton,
    ActionButton,
  },
})
export default class HelloWorld extends Vue {
  public title: string;

  @Getter('title')
  public storeTitle!: string;

  @Mutation('title')
  public mutateTitle!: any;

  constructor() {
    super();
    this.title = '';
  }

  public mounted() {
    this.title = this.storeTitle;
  }

  public onStore(): void {
    this.mutateTitle(this.title);
    alert('Stored.');
  }

  public onDelete(): void {
    this.mutateTitle('');
    this.title = '';
    alert('Deleted.');
  }
}
</script>

<style scoped>
</style>
