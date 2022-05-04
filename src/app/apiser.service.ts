import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiserService {

  constructor(private http:HttpClient) { }
  postEmp(data:any){
    return this.http.post<any>("http://localhost:4200/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
