import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import * as words_3 from './words/wordsDictJS_3.json'
import * as words_4 from './words/wordsDictJS_4.json'
import * as words_5 from './words/wordsDictJS_5.json'
import * as words_6 from './words/wordsDictJS_6.json'
import * as words_7 from './words/wordsDictJS_7.json'
import * as words_8 from './words/wordsDictJS_8.json'
import * as badWords from './words/badWords.json'
import {permutations,filter} from 'itertools'
@Injectable({
  providedIn: 'root'
})
export class WordMatchService {

  words:(any) = [words_3, words_4, words_5, words_6, words_7, words_8] 
  badWords:(any) = badWords
  constructor() { }

  test(){


  }

  getWords(bank:string, wordLen:number, regex ){
    var realSet = new Set()
    var word
    
    var perm = permutations(bank, wordLen)
    for(var i of perm){
        word = i.join('')
        if(this.words[wordLen-3].default.hasOwnProperty(word))
        //Check for bad words
          if (this.badWords.default.badwords.indexOf(word) === -1)  
            realSet.add(word)
    }
    var r = new RegExp(regex)
    var z:any
    z = Array.from(realSet)
    var y:[string] 
    y =  z.filter((res:string) => res.match(r))
    console.log(y)
    return y
  }

}
