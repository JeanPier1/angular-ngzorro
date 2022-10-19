import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from '../shared/ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
