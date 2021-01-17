import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  url = "http://127.0.0.1:5000/"

  constructor(
    private http: HttpClient
  ) { }

  callAPI(val): Observable<JSON> {
    console.log(val)
    return this.http.put<JSON>(this.url, val)
  }
}
