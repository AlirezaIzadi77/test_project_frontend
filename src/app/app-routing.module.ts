import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./notFoundPage/not-found/not-found.component";
import {RegisteryComponent} from "./registery/registery/registery.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registry', component: RegisteryComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
