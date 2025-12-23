<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: '',
});

const emit = defineEmits<IEmit>();
</script>

<template>
  <input
    :class="$style.input"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    :data-is-disabled="props.isDisabled"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style module lang="scss">
.input {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--color-black);
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 12px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &[data-is-disabled='true'] {
    background-color: var(--color-gray-light);
    color: var(--color-gray-dark);
    cursor: not-allowed;
    border-color: var(--color-gray);
  }
}
</style>
