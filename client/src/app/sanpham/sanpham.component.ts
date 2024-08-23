import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css'], 
})
export class SanphamComponent {
  data: any;

  constructor(private http: HttpClient, private service: ServiceNameService) { }

  ngOnInit(): void {
    this.loadData(); 
  }

  loadData() {
    this.service.getData().subscribe((data: any) => {
      this.data = data;
      console.log(data);
    });
  }

  xoasp(id: any) {
    if (!confirm('Mày chắc chưa?')) return;
  
    this.service.xoaData(id).subscribe(() => {
      this.loadData(); 
    });
  }
  
}
