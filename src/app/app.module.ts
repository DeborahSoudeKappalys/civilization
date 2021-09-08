import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { MapComponent } from './map/map.component';
import { InitPlayerComponent } from './init-player/init-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    MapComponent,
    InitPlayerComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
