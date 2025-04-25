import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<HeaderComponent> = {
  title: 'Molecules/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => ({
      moduleMetadata: {
        imports: [RouterTestingModule],
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
