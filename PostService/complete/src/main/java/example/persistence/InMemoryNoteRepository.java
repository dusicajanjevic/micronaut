package example.persistence;

import example.gateway.Models.Note;
import example.gateway.contracts.INoteRepository;

import javax.inject.Singleton;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class InMemoryNoteRepository implements INoteRepository {
    private List<Note> notes;
    private int nextId;

    public InMemoryNoteRepository() {
        this.notes = new ArrayList<Note>();
        this.nextId = 0;
    }

    @Override
    public Note addPost(Note note) throws Exception {
        if(note == null)
            throw new Exception("post was null");
        note.setId(nextId++);
        notes.add(note);
        return note;
    }

    @Override
    public List<Note> getAll() {
        return this.notes;
    }

    @Override
    public Note get(int id) {
        for (Note note :this.notes){
            if(note.getId() == id)
                return note;
        }
        return null;
    }

    @Override
    public Note delete(int id) {
        for (Note note : notes){
            if(note.getId() == id){
                this.notes.remove(note);
                return note;
            }
        }
        return null;
    }
}
