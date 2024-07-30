import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterModule],
  templateUrl: './sanpham.component.html',
  styleUrl: './sanpham.component.css'
})
export class SanphamComponent {
  constructor(private http: HttpClient) { }

  sanpham: any;

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:8000/api/sp').subscribe((data: any) => {
      this.sanpham = data;
      console.log(data);
      
    })

  }

  xoasp(id:any){
    if (confirm('Mày chắc chưa ?')== false ) return;
    this.http.delete(`http://localhost:8000/api/admin/sp/${id}`).subscribe(() => {
     
      location.reload();
    });
  }
}
