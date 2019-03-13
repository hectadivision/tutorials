import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  public QuestionForm: FormGroup;

  @Input()
  question: Question;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmitForm: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.QuestionForm.setValue({
      title: this.question.title || '',
      description: this.question.body || '',
    });
  }

  initForm() {
    this.QuestionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    });
  }

  resetForm() {
    this.QuestionForm.reset();
  }

  submitForm(evt: EventListenerOrEventListenerObject) {
    this.onSubmitForm.emit(new Question({
      title: this.QuestionForm.value.title,
      body: this.QuestionForm.value.description,
    }));
    this.resetForm();
  }
}
