import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './Componentes/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { IndexComponent } from './Componentes/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
