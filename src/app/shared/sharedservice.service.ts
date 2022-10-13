import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http:HttpClient) { }

  AddEmployeee(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{return res;}));
  }
  getEmployeees():Observable<any>{
    return this.http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=>{return res;}));
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/posts/'+id, ).pipe(map((res:any)=>{return res;}))
  }
  updateEmployee(data:any):Observable<any>{
    return this.http.put('http://localhost:3000/posts/'+data.id, data).pipe(map((res:any)=>{return res;}))
  }

}
