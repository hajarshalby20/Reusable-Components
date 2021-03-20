import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { GradPipePipe } from './pipes/grad-pipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GradPipePipe
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
