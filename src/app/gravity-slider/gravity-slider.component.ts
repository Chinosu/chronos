import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-gravity-slider',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './gravity-slider.component.html',
  styleUrl: './gravity-slider.component.css'
})
export class GravitySliderComponent {
  sliderValue: number = 50;

  onSliderChange(event: Event): void {
    console.log(this.sliderValue);
  }
}
