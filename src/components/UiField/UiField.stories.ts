import { Meta, StoryObj } from '@storybook/vue3';
import { UiField, UiInput, UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiField> = {
  component: UiField,
};

export default meta;

export const Input: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => ({ args }),
    template: html`
      <UiField v-bind="args">
        <UiInput modelValue="" placeholder="enter the data..." />
      </UiField>
    `,
  }),
  args: {
    label: 'label of field',
  },
};

export const Select: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup: () => ({ 
      args,
      options: ['Option 1', 'Option 2', 'Option 3'] 
    }),
    template: html`
      <UiField v-bind="args">
        <UiSelect 
          modelValue="Option 1" 
          :options="options" 
        />
      </UiField>
    `,
  }),
  args: {
    label: 'label of field',
  },
};