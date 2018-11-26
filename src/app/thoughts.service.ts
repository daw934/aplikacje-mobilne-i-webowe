import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  constructor() { }

  public saveThoughts(thoughts: Array<String>): void{
    localStorage.setItem("thoughts",JSON.stringify(thoughts));
  }
  public fetchThoughts(): Array<String> {
    let data = JSON.parse(localStorage.getItem("thoughts"));
    return data ? 
    data:[];
    
  }
}
