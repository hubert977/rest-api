import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ajax} from 'rxjs/ajax';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-add-operator',
  templateUrl: './add-operator.component.html',
  styleUrls: ['./add-operator.component.scss']
})
export class AddOperatorComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  jsonurl = 'http://138.197.187.111:4000/api/operator';
  jsonForm = new FormGroup({
    ID: new FormControl(''),
    guid: new FormControl(''),
    ARCHIVAL: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl('')
  });
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  submitJson() {
    console.log(this.jsonForm.value);
    return this.http.post(
      this.jsonurl,
      this.jsonForm.value,
      this.httpOptions
    ).subscribe((data) => {
      console.log('Added Data!', data);
    }, err => {
      console.error(err);
    });
  }
  ngOnInit() {
  }
}
