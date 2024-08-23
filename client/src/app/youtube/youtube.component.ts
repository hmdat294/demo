import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  data: any;
  constructor(private service:ServiceNameService ) {
    this.service.getData().subscribe(data =>{
      this.data =data;
    console.log(data)
  }) }

 
}
