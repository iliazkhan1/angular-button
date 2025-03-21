import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newbutton',
  imports: [FormsModule],
  templateUrl: './newbutton.component.html',
  styleUrl: './newbutton.component.css'
})
export class NewbuttonComponent {
  Text:string='';
}
