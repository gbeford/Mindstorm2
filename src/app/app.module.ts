import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdTableModule} from '@angular/material';
// import { SignaturePadModule } from 'angular2-signaturepad';
// import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatchScoringComponent } from './match/match-scoring.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { TeamModule } from './team/team.module';
import { MatchModule } from './match/match.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MissionModule } from './mission/mission.module';



@NgModule({
  declarations: [
    AppComponent,
    MatchScoringComponent,
    PageNotFoundComponent,
    MenuComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdTableModule,
    AppRoutingModule,
    TeamModule,
    MatchModule,
    MissionModule
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
