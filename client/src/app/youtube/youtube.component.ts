import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  constructor(private http: HttpClient) { }

  sanpham: any;

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:8000/api/sp').subscribe((data: any) => {
      this.sanpham = data;
      console.log(data);
      
    })

  }
}
