import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GoodsComponent } from './goods/goods.component';
import { DxButtonModule } from 'devextreme-angular';
import {DevExtremeModule} from 'devextreme-angular';
import {DxDataGridModule, DxSelectBoxModule} from 'devextreme-angular';
import { AddOperatorComponent } from './add-operator/add-operator.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListOperatorsComponent } from './list-operators/list-operators.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditOperatorsComponent } from './edit-operators/edit-operators.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    AddOperatorComponent,
    ListOperatorsComponent,
    EditOperatorsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    DxButtonModule,
    DxDataGridModule,
    DevExtremeModule,
    MatMenuModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxSelectBoxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
