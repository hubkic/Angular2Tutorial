import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { EmailsComponent } from './emails/emails.component';

const routes: Routes = [
  {path: 'admin',
   component: AdminComponent,
   children: [
     {path: '', component: UsersComponent},
     {path: 'emails', component: EmailsComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
