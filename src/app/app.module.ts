import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitsearchService } from './github/gitsearch.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
