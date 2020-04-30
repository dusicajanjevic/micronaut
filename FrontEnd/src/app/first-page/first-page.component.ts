import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  getNote:Note;
  notes:Note[];

  constructor() { 
    this.getNote= new Note("hjsjdnndssnji", "hellsnnshsh shshshshhs shshshhs shshsh sho jdjsjjsjsjsjsj ajajajja ahhahahahahhahahahahajsd dcnhdshdcah as hahahach achadhchha ad hadah ha ");
    this.notes=new Array();
    this.notes.push(this.getNote);
    
    this.notes.push(this.getNote);
    this.notes.push(this.getNote);
    
    this.notes.push(this.getNote);
    this.notes.push(this.getNote);
  }

  ngOnInit(): void {
  }

}
