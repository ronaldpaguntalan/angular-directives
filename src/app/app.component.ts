import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';

  postArray: Array<string> =  ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']
  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1',},
    { id: 2, postTitle: 'Post 2',},
    { id: 3, postTitle: 'Post 3',},
    { id: 4, postTitle: 'Post 4',},
    { id: 5, postTitle: 'Post 5',},
  ]

  newObjArray: Array<any> = [];

  stepForm: string = "";


  constructor(){
    for(let i = 0; i < this.postArray.length; i++){
      console.log(this.postArray[i]);
      
    }
  }

  addNew(){
    this.objArray.push({id: 6, postTitle: 'Post 6'})
    this.newObjArray.push({id: 7, postTitle: 'Post 7'})
  }


  // Traditional Approach in Java Script
  /* deleteThis(post: string){
  //   let index = this.objArray.indexOf(post); // getting the index number we are removing

  //   this.objArray.splice(index, 1); // splice method was utilized to removed the current index, and how many we are deleting
  } */


  deleteThis(index: number){
    this.objArray.splice(index, 1);
    this.newObjArray.splice(index, 1);
  }
}
