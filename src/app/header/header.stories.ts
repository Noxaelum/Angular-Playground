import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<HeaderComponent> = {
  title: 'Molecules/Header',
  component: HeaderComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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
