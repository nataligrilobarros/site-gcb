import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


 
@NgModule({
  declarations: [IndexComponent, RegisterComponent],
  imports: [
      CommonModule,
      PagesRoutingModule,
      FormsModule,
      LayoutModule,
    ],
})
export class PagesModule { }
