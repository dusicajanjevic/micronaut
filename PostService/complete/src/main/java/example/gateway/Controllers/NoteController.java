package example.gateway.Controllers;

import example.gateway.Models.Note;
import example.gateway.contracts.INoteRepository;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.annotation.Get;

import javax.inject.Inject;
import java.util.List;

@Controller("/note")
public class NoteController {

    @Inject
    private INoteRepository postRepository;

    @Get
    public List<Note> getAll(){
        return this.postRepository.getAll();
    }

    @Get("/{id}")
    public Note get(int id){
        return postRepository.get(id);
    }

    @io.micronaut.http.annotation.Post
    public Note create(@Body Note note) throws Exception {
        Note returnNote = postRepository.addPost(note);
        return returnNote;
    }

    @Delete("/{id}")
    public Note delete(int id){
        Note note = postRepository.delete(id);
        return note;
    }
}
