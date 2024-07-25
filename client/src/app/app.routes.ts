import { Routes } from '@angular/router';
import { SanphamComponent } from './sanpham/sanpham.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'sanpham',component:SanphamComponent},
    {path: '',component:HomeComponent},
];
