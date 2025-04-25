import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { fn } from '@storybook/test';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};
