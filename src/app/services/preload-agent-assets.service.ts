import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadAgentAssetsService {
  private readonly allAssetsLoaded = new Subject<boolean>();
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
      this.allAssetsLoaded.complete();
    }
  }
}
