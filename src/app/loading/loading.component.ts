import {Component, OnInit} from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {LoadingService} from "../loading.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressBar,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
  isLoading$ = this.loadingService.loading$;
  progress$ = this.loadingService.loadingProgress$;

  constructor(private loadingService: LoadingService) {}
  ngOnInit() {}
}
