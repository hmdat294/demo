import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(private http:HttpClient) { }


  getData(){
    return this.http.get('http://localhost:8000/api/sp');
  }
  upData(data: any)
{
  return this.http.post('http://localhost:8000/api/admin/sp', data);
}
xoaData(id:any){
  return this.http.delete(`http://localhost:8000/api/admin/sp/${id}`);
}
getctData(id: any){
  return this.http.get(`http://localhost:8000/api/chitiet/${id}`);
}
putData(id: any, data: any) {
  return this.http.put(`http://localhost:8000/api/admin/sp/${id}`, data);
}
}
