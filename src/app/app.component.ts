import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewbuttonComponent } from './newbutton/newbutton.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NewbuttonComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
