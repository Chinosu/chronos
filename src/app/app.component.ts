import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CubeComponent} from "./cube/cube.component";
import {LeftRightComponent} from "./left-right/left-right.component";
import {NgOptimizedImage} from "@angular/common";
import {ClusterContainerComponent} from "./cluster-container/cluster-container.component";
import {GenericModelComponent} from "./generic-model/generic-model.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CubeComponent, LeftRightComponent,
    NgOptimizedImage, ClusterContainerComponent, GenericModelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chronos';

  probabilisticRedirect() {
    const lucky = 'https://www.csesoc.unsw.edu.au';
    const unlucky = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

    if (Math.random() < 0.1) {
      window.open(lucky, '_blank');
    } else {
      window.open(unlucky, '_blank');
    }
  }
}
