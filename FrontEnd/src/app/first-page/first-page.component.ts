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

  findNoteText:string;
  notes:Note[];
  deleteName:string;
  findName:string;
  name:string;
  text:string;

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
    var noteIndex=this.notes.findIndex(note=>note.title===this.deleteName);
    this.service.delete(this.notes[noteIndex].id).subscribe((response : Note) => {
      if(response != null && response != undefined){
            this.notes.splice(noteIndex,0);
            this.openSnackBar("Note is deleted","");
      }
    });  
  }
  onFind(){
    var noteIndex=this.notes.findIndex(note=>note.title===this.deleteName);
    this.service.find(this.notes[noteIndex].id).subscribe((response : Note) => {
      this.findNoteText=response.text;
    });  
  }
}
