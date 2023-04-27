import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { Persona1Component } from './persona1/persona1.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"personal", component: Persona1Component},
  {path: "nosotros", component: NosotrosComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
