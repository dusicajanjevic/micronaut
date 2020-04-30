package example.gateway.contracts;

import example.gateway.Models.Note;

import java.util.List;

public interface INoteRepository {
    public Note addPost(Note note) throws Exception;
    public List<Note> getAll();
    public Note get(int id);
    public Note delete(int id);
}
