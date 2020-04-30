import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { Service } from '../service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { element } from 'protractor';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit { 

  notes:Note[];
  deleteId:string;
  findId:string;
  name:string;
  text:string;
  findNoteText:string;

  constructor(private service:Service,private _snackBar: MatSnackBar) { 
    this.notes=new Array();
    this.service.getAll().subscribe((response : Note[]) => {
      if(response != null && response != undefined){
          response.forEach(note => {
            this.notes.push(note);
          });
      }
    });
  }
  openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
  }
  ngOnInit(): void {
  }

  onAdd(){
    this.service.post(new Note(this.name, this.text)).subscribe((response : Note) => {
      if(response != null && response != undefined){
            this.notes.push(response); 
            this.openSnackBar("Created new note",""); 
      }
    });
  }
  onDelete(){
    this.service.delete(this.deleteId).subscribe((response : Note) => {
      if(response != null && response != undefined){
            this.notes.splice(this.notes.findIndex(note=>note.id===this.deleteId)-1,1);
            this.openSnackBar("Note is deleted","");
      }
    },(error)=>{
      this.openSnackBar("no note with that id exists","");
    });  
  }
  onFind(){
    this.service.find(this.findId).subscribe((response : Note) => {
      if(response != null && response != undefined){
      this.findNoteText=response.text;
    } 
    },(error)=>{
      this.openSnackBar("no note with that id exists","");
    }
    );  
  }
}
