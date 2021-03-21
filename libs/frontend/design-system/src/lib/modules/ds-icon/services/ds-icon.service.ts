import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, publishLast, refCount } from 'rxjs/operators';
import { DsIconCategory } from '../entities/ds-icon-category';
import { DsIconName } from '../entities/ds-icon-name';

@Injectable({
  providedIn: 'root',
})
export class DsIconService {
  private baseHref: string = this.platformLocation.getBaseHrefFromDOM();
  private cachedIcons: Record<string, Observable<string | null>> = {};

  constructor(private httpClient: HttpClient, private platformLocation: PlatformLocation) {}

  getIcon(category: DsIconCategory, name: DsIconName): Observable<string | null> {
    const url: string = `${this.baseHref}design-system/icons/${category}/${name}.svg`;

    if (!this.cachedIcons[url]) {
      this.cachedIcons[url] = this.fetchIcon(url);
    }

    return this.cachedIcons[url];
  }

  private fetchIcon(url: string): Observable<string | null> {
    return this.httpClient.get(url, { responseType: 'text' }).pipe(
      catchError((): Observable<null> => of(null)),
      publishLast(),
      refCount(),
    );
  }
}
