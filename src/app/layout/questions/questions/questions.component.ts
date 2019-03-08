import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
// import { QuestionCreateComponent } from '../question-create/question-create.component';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  displayedColumns = ['id', 'title', 'body', 'creationDate'];
  questions: Question[];
  currentQuestion: Question;
  constructor(private questionService: QuestionService, public dialog: MatDialog, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Question;
      });
    });
  }

  create(question: Question) {
    this.questionService.createQuestion(question);
  }

  update(question: Question) {
    this.questionService.updateQuestion(question);
  }

  delete(id: string) {
    this.questionService.deleteQuestion(id);
  }

  applyFilter(value: string) {}

  openDialog(): void {
    // const config = new MatDialogConfig();
    // config.viewContainerRef = this.viewContainerRef;
    // config.width = '250px';
    // config.data = { question: this.currentQuestion };
    const dialogRef = this.dialog.open(QuestionCreateComponent, {
      width: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.currentQuestion = result;
    });
  }
}


@Component({
  selector: 'app-question-create',
  template: '<h1>create</h1>'
})
export class QuestionCreateComponent {

  constructor() { }


}
