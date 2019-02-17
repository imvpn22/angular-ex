import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFormComponent } from './angular-form/angular-form.component';
const routes: Routes = [{
  path: '', component: AngularFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
