import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseImplementationComponent } from './promise-implementation/promise-implementation.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';

const routes: Routes = [
  {
    path:"",
    component:PromiseImplementationComponent
  },
  {
    path:"promiseImpl",
    component:PromiseImplementationComponent
  },
  {
    path:"observable",
    component:ObservableComponent,children:[
      {
        path:"list",
        component:ListComponent
      },{
        path:"from-event",
        component:FromeventComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
