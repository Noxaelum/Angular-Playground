import type { Meta, StoryObj } from '@storybook/angular';
import { SearchComponent } from './search.component';
import { fn } from '@storybook/test';

const meta: Meta<SearchComponent> = {
  title: 'Molecules/Search',
  component: SearchComponent,
  tags: ['autodocs'],
  args: { onSubmit: fn() },
};

export default meta;
type Story = StoryObj<SearchComponent>;

export const Default: Story = {
  args: {
    inputLabel: 'default',
    buttonLabel: 'default',
  },
};
