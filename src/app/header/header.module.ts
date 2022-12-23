import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    TitleComponent,
    BodyComponent,
    BodyComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    BodyComponent,
    CardComponent
  ],
})
export class HeaderModule { }
