import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { TareaServiceService } from './tarea/tarea-service/tarea.service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [TareaServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
