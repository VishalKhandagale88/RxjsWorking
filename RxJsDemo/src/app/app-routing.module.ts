import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { PromiseImplementationComponent } from './promise-implementation/promise-implementation.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {
    path:"promiseImpl",
    component:PromiseImplementationComponent
  },
  {
    path:"**",
    component:PromiseImplementationComponent
  },{
    path:"observable",
    component:ObservableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
