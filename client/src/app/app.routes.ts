import { Routes } from '@angular/router';
import { SanphamComponent } from './sanpham/sanpham.component';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { FormdangnhapComponent } from './formdangnhap/formdangnhap.component';

export const routes: Routes = [
    {path: 'sanpham',component:SanphamComponent},
    {path: '',component:HomeComponent},
    {path: 'youtube',component:YoutubeComponent},
    {path: 'dangnhap',component:FormdangnhapComponent},
];
