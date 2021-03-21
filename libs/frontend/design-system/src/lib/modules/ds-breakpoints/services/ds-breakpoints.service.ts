import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DsBreakpoint } from '../entities/ds-breakpoint';

@Injectable()
export class DsBreakpointsService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  matches(breakpoint: DsBreakpoint): Observable<boolean> {
    return this.breakpointObserver.observe([breakpoint]).pipe(map(({ matches }: BreakpointState): boolean => matches));
  }
}
