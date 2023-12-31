import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {path: '**', redirectTo: 'sign-up'},
  {path: 'sign-up', component: SignUpComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }