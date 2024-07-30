import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suasp',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './suasp.component.html',
  styleUrl: './suasp.component.css',
})
export class SuaspComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  sp: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.http
        .get<any[]>(`http://localhost:8000/api/chitiet/${id}`)
        .subscribe((data: any) => {
          this.sp = data;
          console.log(data);
        });
    });
  }

  suasp(form: any) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
    this.http
      .put<any[]>(`http://localhost:8000/api/admin/sp/${id}`, form)
      .subscribe((data: any) => {
        this.router.navigate(['/sanpham']);
      });
  }
    )};
}
