import {Component, OnInit, ViewChild} from '@angular/core';
import {from} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {DxDataGridComponent, DxDataGridModule} from 'devextreme-angular';
import {HttpClient, HttpHeaders, ɵangular_packages_common_http_http_a} from '@angular/common/http';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-list-operators',
  templateUrl: './list-operators.component.html',
  styleUrls: ['./list-operators.component.scss']
})
export class ListOperatorsComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  constructor(private http: HttpClient) { }
  public value = [];
  public data = [];
  public data_row = [];
  public i = 0;
  public data_json = {
    id: null,
    name: null
  };
  selectedFile: File;
  ngOnInit() {
    this.getList();
  }
  getList() {
    const data = ajax('http://138.197.187.111:4000/api/operator');
    data.subscribe(
      res => {
        this.value = res.response;
      }
    );
  }
  deleteOperator() {
    const deleteurl = 'http://138.197.187.111:4000/api/operator/';
    const id = this.dataGrid.instance.getSelectedRowsData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    for (let i = 0; i <= id.length; i++) {
      console.log(deleteurl + id[i].ID);
      this.http.delete(
        deleteurl + id[i].ID,
        httpOptions
      ).subscribe((data) => {
        console.log('deleted data!', data);
        console.log(id.length);
      }, err => {
        console.error(err);
      }, () => {
        this.getList();
      });
    }
  }
  onFileChange(event) {
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    this.http.post('localhost:3000/upload', uploadData, httpOptions)
      .subscribe(event => {
        console.log(event);
      });
  }


}
