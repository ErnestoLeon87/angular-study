import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent
    
  ],
=======
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { NavegacionComponent } from "./navegacion/navegacion.component";

@NgModule({
  declarations: [AppComponent, NavegacionComponent],
>>>>>>> main
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
