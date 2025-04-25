import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { InputType } from '../../atoms/input/inputType';

@Component({
  selector: 'app-search',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() inputLabel = 'Input label';
  @Input() inputType: InputType = 'text';
  @Input() buttonLabel = 'Button';
  @Input() buttonType: 'submit' | 'reset' | 'button' = 'button';

  searchText = model<string>('');

  @Output() onSubmit = new EventEmitter<Event>();
}
