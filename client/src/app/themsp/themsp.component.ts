import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themsp',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './themsp.component.html',
  styleUrl: './themsp.component.css',
})
export class ThemspComponent {
  constructor(private http: HttpClient, private router:Router) {}
  themsp(form: any) {
    console.log(form);
    this.http
      .post<any[]>('http://localhost:8000/api/admin/sp', form)
      .subscribe((data: any) => {
        this.router.navigate(['/sanpham']);
      });
  }


}
