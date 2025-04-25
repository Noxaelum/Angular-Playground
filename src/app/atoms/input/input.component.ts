import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { InputType } from './inputType';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [MatInputModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label = 'Input label';
  @Input() type: InputType = 'text';

  searchText = model<string>('');

  updateSearchText(event: Event) {
    this.searchText.set((event.target as HTMLInputElement).value);
  }
}
