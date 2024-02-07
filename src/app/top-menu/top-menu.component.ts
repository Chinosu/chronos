import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    MatToolbar,
    NgOptimizedImage
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

}
