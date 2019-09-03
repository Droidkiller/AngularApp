import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { EncabezadoComponentComponent } from './layout/encabezado-component/encabezado-component.component';
import { ContenidoComponentComponent } from './layout/contenido-component/contenido-component.component';
import { PieComponentComponent } from './layout/pie-component/pie-component.component';
import { NosotrosComponent } from './layout/nosotros/nosotros.component';
import { ContactosComponent } from './layout/contactos/contactos.component';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [LayoutComponent, EncabezadoComponentComponent, ContenidoComponentComponent, PieComponentComponent, NosotrosComponent, ContactosComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class PrincipalModule { }
