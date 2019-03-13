import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {
  currentQuestion: Question;
  constructor(
    public dialogRef: MatDialogRef<QuestionCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.currentQuestion = new Question();
  }

  cancel() {
    this.dialogRef.close();
  }

  onSave(question: Question) {
    this.currentQuestion = question;
    this.questionService.createQuestion(this.currentQuestion).then(
      result => {
        // tslint:disable-next-line:no-console
        console.info(result);
      },
      error => {
        // tslint:disable-next-line:no-console
        console.info(error);
      }
    );
  }
}
