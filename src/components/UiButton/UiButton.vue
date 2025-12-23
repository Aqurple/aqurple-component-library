<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<template>
  <button
    :class="$style.button"
    :data-layout="props.layout"
    :disabled="props.isDisabled"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 32px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-white);
  background: var(--color-primary);
  border: 2px solid transparent;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background: transparent;
    border-color: var(--color-primary);
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    background: var(--color-gray);
    color: var(--color-gray-dark);
    border-color: transparent;
    cursor: not-allowed;
  }
}
</style>
