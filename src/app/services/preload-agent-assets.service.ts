import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadAgentAssetsService {
  private readonly allAssetsLoaded = new ReplaySubject<boolean>(1);
  private assetsToPreload: number = 0;

  constructor() {}

  set AssetsToPreload(amount: number) {
    this.assetsToPreload = amount;
  }

  get AssetsLoadedListener(): Observable<boolean> {
    return this.allAssetsLoaded.asObservable();
  }

  assetLoaded(): void {
    this.assetsToPreload -= 1;
    if (!this.assetsToPreload) {
      this.allAssetsLoaded.next(true);
    }
  }
}
