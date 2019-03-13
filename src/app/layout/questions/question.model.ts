export class Question {
  id: string;
  title: string;
  body?: string;
  answer: string;
  creationDate: Date;
  constructor(question?: any) {
    this.title = question && question.title ? question.title : '';
    this.body = question && question.body ? question.body : '';
    this.answer = question && question.answer ? question.answer : '';
  }
}
