<script setup lang="ts">
interface IProps {
  label: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div :class="$style.field">
    <label :class="$style.label">{{ props.label }}</label>
    <div :class="$style.content">
      <slot></slot>
    </div>
  </div>
</template>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-black);
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
