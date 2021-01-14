import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SessaoUmComponent } from './sessao-um/sessao-um.component';
import { SessaoDoisComponent } from './sessao-dois/sessao-dois.component';
import { SessaoTresComponent } from './sessao-tres/sessao-tres.component';
import { SessaoQuatroComponent } from './sessao-quatro/sessao-quatro.component';
import { SessaoCincoComponent } from './sessao-cinco/sessao-cinco.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [MenuComponent, SessaoUmComponent, SessaoDoisComponent, SessaoTresComponent, SessaoQuatroComponent, SessaoCincoComponent, RodapeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [MenuComponent,SessaoUmComponent,SessaoDoisComponent, SessaoTresComponent,SessaoQuatroComponent,SessaoCincoComponent,RodapeComponent],
})
export class LayoutModule { }
