import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteTesteComponent } from './components/componente-teste/componente-teste.component';
import { HomeComponent } from './components/home/home.component';
import { ServicoService } from './servico.service';

@NgModule({
  declarations: [AppComponent, ComponenteTesteComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ServicoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
