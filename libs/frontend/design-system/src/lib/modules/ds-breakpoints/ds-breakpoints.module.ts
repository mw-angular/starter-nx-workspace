import { LayoutModule } from '@angular/cdk/layout';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DsBreakpointsService } from './services/ds-breakpoints.service';

@NgModule({
  imports: [LayoutModule],
  providers: [DsBreakpointsService],
})
export class DsBreakpointsModule {
  constructor(@Optional() @SkipSelf() parentModule?: DsBreakpointsModule) {
    if (parentModule) {
      throw new Error('Module is already loaded. Import it in the root module only.');
    }
  }
}
