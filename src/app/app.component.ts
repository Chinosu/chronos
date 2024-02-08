import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GravitySliderComponent} from "./gravity-slider/gravity-slider.component";
import {X86LoopComponent} from "./x86-loop/x86-loop.component";
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {CubeComponent} from "./cube/cube.component";
import {PhoneComponent} from "./phone/phone.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, GravitySliderComponent, X86LoopComponent,
    TopMenuComponent, CubeComponent, PhoneComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chronos';
}
