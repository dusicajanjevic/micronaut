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
        return this.http.post("https://localhost:8080/post/",note)
    }
	getAll(){
		return this.http.get("https://localhost:8080/post/")
    }
    find(id:string){		
        return this.http.get("https://localhost:8080/post/"+id)
    } 
    delete(id:String){
        return this.http.delete("https://localhost:8080/post/"+id)
    }
}