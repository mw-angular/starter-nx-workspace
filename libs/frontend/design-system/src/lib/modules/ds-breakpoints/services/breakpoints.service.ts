import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointsEnum } from '../entities/breakpoints.enum';

@Injectable()
export class BreakpointsService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  matches(breakpoint: BreakpointsEnum): Observable<boolean> {
    return this.breakpointObserver.observe([breakpoint]).pipe(map(({ matches }: BreakpointState): boolean => matches));
  }
}
