import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-suasp',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './suasp.component.html',
  styleUrls: ['./suasp.component.css'],
})
export class SuaspComponent {
  sp: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private service: ServiceNameService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.service.getctData(id).subscribe((data: any) => {
        this.sp = data;
        console.log(data);
      });
    });
  }

  suasp(form: any): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.service.putData(id, form).subscribe(
        (data) => {
          this.router.navigate(['/sanpham']);
        },
        (error) => {
          console.error('Cập nhật thất bại', error);
        }
      );
    });
  }
}
