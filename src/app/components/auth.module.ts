import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthModule { }
