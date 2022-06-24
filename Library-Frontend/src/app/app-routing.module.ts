import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'',canActivate:[AuthGuard],component:HomeComponent,children:[{path:'',component:BooksComponent},{path:'add',component:AddComponent},{path:'update',component:EditComponent}]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
