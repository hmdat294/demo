import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,HttpClientModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  Product: any = [];
  constructor(private http: HttpClient) { };

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/sp')
     .subscribe((dataProduct: any) => {
      this.Product = dataProduct.slice(0,6);
      console.log(this.Product);
      
    });
  }
}
