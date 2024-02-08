import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GravitySliderComponent} from "./gravity-slider/gravity-slider.component";
import {X86LoopComponent} from "./x86-loop/x86-loop.component";
import {CubeComponent} from "./cube/cube.component";
import {PhoneComponent} from "./phone/phone.component";
import {LeftRightComponent} from "./left-right/left-right.component";
import {NgOptimizedImage} from "@angular/common";
import {ClusterContainerComponent} from "./cluster-container/cluster-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, GravitySliderComponent, X86LoopComponent,
    CubeComponent, PhoneComponent, LeftRightComponent, NgOptimizedImage, ClusterContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chronos';
}
