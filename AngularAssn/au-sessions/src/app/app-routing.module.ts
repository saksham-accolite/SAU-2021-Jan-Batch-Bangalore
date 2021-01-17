import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: '/sessions', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'sessions', component: SessionsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
