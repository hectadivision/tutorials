import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    LayoutModule
  ],
  entryComponents: [QuestionCreateComponent],
  declarations: [QuestionCreateComponent, QuestionsComponent, QuestionDetailsComponent, QuestionEditComponent, QuestionFormComponent]
})
export class QuestionsModule {}
