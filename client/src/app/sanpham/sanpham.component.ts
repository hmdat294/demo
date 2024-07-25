import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [HttpClientModule],
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

}
