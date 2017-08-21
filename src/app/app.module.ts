
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './core/modules/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import * as fromRoot from './core/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SocketService} from './core/services/socket.service';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
