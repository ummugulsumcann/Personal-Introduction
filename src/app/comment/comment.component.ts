import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  submitted = false;

  charPattern = /^[a-zA-Z]*$/;
  commentsArray: Array<string> = [];

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.charPattern)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(this.charPattern)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', [Validators.required]),
  });

  constructor() {

  }

  ngOnInit(): void {

  }

  submitForm(form: FormGroup) {
    this.markAsTouched(form);
    this.submitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem('comment:', this.loginForm.value.comment);
      this.commentsArray.push(localStorage.getItem('comment:').valueOf());
    }
  }


  get f() {
    return this.loginForm.controls;
  }
  delete(index) {
    this.commentsArray.splice(index, 1);
  }

  markAsTouched(form: FormGroup): void {
    (Object as any).values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
