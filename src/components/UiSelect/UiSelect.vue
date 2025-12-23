<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
});

const emit = defineEmits<IEmit>();
</script>

<template>
  <select
    :class="$style.select"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :data-is-disabled="props.isDisabled"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="option in props.options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style module lang="scss">
.select {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &[data-is-disabled='true'] {
    background-color: var(--color-gray-light);
    color: var(--color-gray-dark);
    cursor: not-allowed;
  }
}
</style>
