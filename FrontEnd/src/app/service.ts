import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './Note';

@Injectable({
	providedIn: 'root'
})
export class Service{
	constructor(private http : HttpClient ) {
    }
    
    post(note : Note){
        return this.http.post("http://localhost:8080/note",note)
    }
	getAll(){
		return this.http.get("http://localhost:8080/note")
    }
    find(id:string){		
        return this.http.get("http://localhost:8080/note/"+id)
    } 
    delete(id:String){
        return this.http.delete("http://localhost:8080/note/"+id)
    }
}