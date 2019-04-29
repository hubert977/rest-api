import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodsComponent} from './goods/goods.component';
import {AddOperatorComponent} from './add-operator/add-operator.component';
import {ListOperatorsComponent} from './list-operators/list-operators.component';

const routes: Routes = [
  { path: 'goods', component: GoodsComponent },
  { path: 'add', component: AddOperatorComponent},
  { path: 'list', component: ListOperatorsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
