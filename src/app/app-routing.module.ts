import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './principal/layout/nosotros/nosotros.component';
import { ContactosComponent } from './principal/layout/contactos/contactos.component';
import { ContenidoComponentComponent } from './principal/layout/contenido-component/contenido-component.component';

const routes: Routes = [
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'contactos',
    component: ContactosComponent
  },
  {
    path:'',
    component:ContenidoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
