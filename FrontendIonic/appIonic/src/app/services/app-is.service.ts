import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppISService {

  constructor(private http:HttpClient) { }

  getWriter():Observable<any>{
    return this.http.get('http://localhost:5500/posts/');
  }
}
