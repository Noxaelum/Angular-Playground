import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';
import { SearchComponent } from '../molecules/search/search.component';
import { HousingLocationComponent } from '../molecules/housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HousingLocationComponent,
    NgFor,
    SearchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchText = '';
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList) => {
      this.housingLocationList = housingLocationList;
      this.filteredHousingLocationList = housingLocationList;
    });
  }

  filterResults(text: string, event: Event) {
    event.preventDefault();

    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
