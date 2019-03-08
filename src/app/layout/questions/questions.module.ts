import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent, QuestionCreateComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [QuestionCreateComponent],
  declarations: [QuestionCreateComponent, QuestionsComponent, QuestionDetailsComponent, QuestionEditComponent, QuestionFormComponent],
  exports: [QuestionsComponent]
})
export class QuestionsModule {}
