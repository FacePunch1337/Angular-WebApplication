import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private _httpClient: HttpClient) {}

  getAllCars(): Observable<any> {
    return this._httpClient.get(environment.pathToServer);
  }

  createNewCar(data: any): Observable<any> {
    return this._httpClient.post(environment.pathToServer, data);
  }
}
