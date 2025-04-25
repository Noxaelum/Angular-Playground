import type { Meta, StoryObj } from '@storybook/angular';
import { HousingLocationComponent } from './housing-location.component';
import { housingLocation } from './resources';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<HousingLocationComponent> = {
  title: 'Molecules/Housing location',
  component: HousingLocationComponent,
  tags: ['autodocs'],
  decorators: [
    () => ({
      moduleMetadata: {
        imports: [RouterTestingModule],
      },
    }),
  ],
  args: {
    housingLocation: {
      id: housingLocation.id,
      name: housingLocation.name,
      city: housingLocation.city,
      state: housingLocation.state,
      photo: housingLocation.photo,
      availableUnits: housingLocation.availableUnits,
      wifi: housingLocation.wifi,
      laundry: housingLocation.laundry,
    },
  },
};

export default meta;
type Story = StoryObj<HousingLocationComponent>;

export const Default: Story = {};
