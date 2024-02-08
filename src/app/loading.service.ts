import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject(false);
  public loading$ = this.loadingSubject.asObservable();

  private loadingProgressSubject = new BehaviorSubject(0);
  public loadingProgress$ = this.loadingProgressSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }

  setProgress(progress: number) {
    this.loadingProgressSubject.next(progress);
  }
}
