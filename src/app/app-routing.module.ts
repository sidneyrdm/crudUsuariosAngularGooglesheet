import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersFormComponent } from './shared/components/users/users-form/users-form.component';
import { UsersListComponent } from './shared/components/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'form',
    component: UsersFormComponent
  },
  {
    path: 'form/:id',
    component: UsersFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
