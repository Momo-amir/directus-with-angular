import { Routes } from '@angular/router';
import { PageComponent } from './component/page/page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: PageComponent,
  },
];
