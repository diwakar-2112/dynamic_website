import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'dynamic/home', pathMatch: 'full' },
  {path:'dynamic',loadChildren: () => import ('./components/components.module').then(x=>x.ComponentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
