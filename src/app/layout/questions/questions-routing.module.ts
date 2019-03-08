import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
// import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';

const routes: Routes = [
  {path: '', component: QuestionsComponent, data: { title: 'Questions List' }},
  // {path: '/:id', component: QuestionDetailsComponent, data: { title: 'Question Details' }},
  // {path: '/create', component: QuestionCreateComponent, data: { title: 'Create Question' }},
  // {path: '/edit/:id', component: QuestionEditComponent, data: { title: 'Edit Question' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
