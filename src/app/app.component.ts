import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
    MessageModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pets-booking';

  petTypes = [
    { name: 'Dog', code: 'DOG' },
    { name: 'Cat', code: 'CAT' },
    { name: 'Bird', code: 'BIRD' },
    { name: 'Rabbit', code: 'RABBIT' },
    { name: 'Hamster', code: 'HAMSTER' }
  ];

  selectedPet: any;
}
