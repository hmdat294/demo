import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service'; 

@Component({
  selector: 'app-themsp',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './themsp.component.html',
  styleUrls: ['./themsp.component.css'], 
})
export class ThemspComponent {
  constructor(private service: ServiceNameService, private router: Router) {}

  themsp(form: any) {
    console.log(form); 

    this.service.upData(form).subscribe((data: any) => {
      console.log('Response:', data); 
      this.router.navigate(['/sanpham']); 
    });
  }
}
