import { Meta, StoryObj } from '@storybook/vue3';
import { UiButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  argTypes: {
    layout: { options: ['primary', 'secondary'], control: 'select' },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args">text</UiButton>`,
  }),
  args: { layout: 'primary' },
};

export const Secondary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args">text</UiButton>`,
  }),
  args: { layout: 'secondary' },
};
