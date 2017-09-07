import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { MenuComponent } from './menu/menu.component';

import { CommonModule } from './common/common.module';
import { DiscoverModule } from './discover/discover.module';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    DiscoverModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
