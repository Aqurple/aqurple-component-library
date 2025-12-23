import { Meta, StoryObj } from '@storybook/vue3';
import { UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  argTypes: {
    'onUpdate:modelValue': { action: 'update:modelValue' },
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    template: html`<UiSelect v-bind="args" />`,
  }),
  args: {
    modelValue: 'Option 1',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const Disabled: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    template: html`<UiSelect v-bind="args" />`,
  }),
  args: {
    modelValue: 'Option 1',
    isDisabled: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};
