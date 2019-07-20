import { NgModule, ModuleWithProviders, TypeProvider } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NotificationState } from './notification.state';
import { NOTIFICATION_ENGINE } from './symbols';

@NgModule({
  imports: [NgxsModule.forFeature([NotificationState])]
})
export class NgxsNotificationPluginModule {
  static forRoot(engine: TypeProvider): ModuleWithProviders {
    return {
      ngModule: NgxsNotificationPluginModule,
      providers: [
        {
          provide: NOTIFICATION_ENGINE,
          useClass: engine
        }
      ]
    };
  }
}
