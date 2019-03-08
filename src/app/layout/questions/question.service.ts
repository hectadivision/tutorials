import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private firestore: AngularFirestore) { }

  getQuestions() {
    return this.firestore.collection('questions').snapshotChanges();
  }

  createQuestion(question: Question) {
    return this.firestore.collection('questions').add(question);
  }

  updateQuestion(question: Question) {
    delete question.id;
    this.firestore.doc('questions/' + question.id).update(question);
  }

  deleteQuestion(questionId: string) {
    this.firestore.doc('questions/' + questionId).delete();
  }
}
