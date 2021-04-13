import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempComponent } from './temp/temp.component';
import { RouterModule } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';



@NgModule({
  declarations: [TempComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component: TempComponent},
    ]
    )
  ]
})
export class TempModule { }
