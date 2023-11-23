import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';


const routes:Routes=[
  {path: '', component: DigitalMarketingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})

export class AppRoutingModule { }