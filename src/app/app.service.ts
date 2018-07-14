import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { IEmployee } from './app.model';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(private _http: Http) {}
  getEmployeeData(): Observable<IEmployee[]> {
    return this._http.get('./app.json')
    .map((res: Response) => <IEmployee[]>res.json());
  }
}
