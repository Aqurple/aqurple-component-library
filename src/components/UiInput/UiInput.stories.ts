import { Meta, StoryObj } from '@storybook/vue3';
import { UiInput } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  argTypes: {
    'onUpdate:modelValue': { action: 'update:modelValue' },
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
  args: {
    modelValue: '',
    placeholder: 'Enter the data...',
  },
};

export const Disabled: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
  args: {
    modelValue: '',
    isDisabled: true,
    placeholder: 'Enter the data...',
  },
};
