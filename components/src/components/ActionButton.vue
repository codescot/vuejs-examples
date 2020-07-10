<template>
  <a @click.prevent="click" class="btn" :class="variantClass">
    <slot>{{name}}</slot>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue {
  @Prop({ default: 'Button' })
  public name!: string;
  @Prop({ default: 'primary' })
  public variant!: string;

  get variantClass(): string {
    return `btn-${this.variant}`;
  }

  @Emit()
  public click(event: Event): Event {
    return event;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/custom.scss";

@mixin buttonSolidColor($color) {
  color: white;

  background-color: $color;
  border-color: darker($color);

  &:hover {
    background-color: darker($color);
    border-color: darkest($color);
  }
}

@mixin buttonOutlineColor($color) {
  color: $color;

  background-color: white;
  border-color: $color;

  &:hover {
    color: white;

    background-color: $color;
    border-color: darker($color);
  }
}

$buttonOptions: (
  primary: $primary,
  success: $success,
  warning: $warning,
  danger: $danger
);

.btn {
  @extend %thin-border;

  display: inline-block;
  padding: 5px 10px 5px 10px;
  margin: 5px;

  text-decoration: none;
  text-align: center;

  cursor: pointer;

  @each $option, $color in $buttonOptions {
    &-#{$option} {
      @include buttonSolidColor($color);
    }

    &-#{$option}-outline {
      @include buttonOutlineColor($color);
    }
  }
}
</style>
