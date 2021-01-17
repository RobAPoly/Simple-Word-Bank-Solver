import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { WordMatchService } from '../word-match.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  wordBank: string;
  wordLen: number;
  wordReg: string = "...";
  wordRes: [string] 

  constructor(private commService: CommService, private wordMatchService: WordMatchService) { }

  ngOnInit(): void {}

  wordbankFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(8),
    Validators.pattern("[a-z]*")

  ]);

  wordlengthFormControl = new FormControl('', [
    Validators.required,
    Validators.min(3),
    Validators.max(8),

  ]);
  
  wordregFormControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(8),
    Validators.pattern("([.]*[a-z]*)*")
  ]);

  matcher = new MyErrorStateMatcher();

  onSubmit(){
    console.log(this.wordbankFormControl.value)
    this.wordBank = this.wordbankFormControl.value
    this.wordLen = this.wordlengthFormControl.value
    this.wordReg = this.wordregFormControl.value
    //check if regular expression matehces length of work
    if (this.wordReg.length !== this.wordLen){
      this.wordReg = '.'.repeat(this.wordLen)
      this.wordregFormControl.setValue( '.'.repeat(this.wordLen))
    }
    console.log(this.wordBank, this.wordLen, this.wordReg)
    this.wordRes = this.wordMatchService.getWords(this.wordBank, this.wordLen, this.wordReg)
    // this.commService.callAPI({"lengthOfWord":this.wordLen, "wordBank":this.wordBank, "regex":this.wordReg}).subscribe((res:any)  =>{
    //   console.log(res)
    //   this.wordRes = res.words
    // })
  }
}
