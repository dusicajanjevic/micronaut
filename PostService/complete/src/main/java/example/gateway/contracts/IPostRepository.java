package example.gateway.contracts;

import example.gateway.Models.Post;

import java.util.List;

public interface IPostRepository {
    public Post addPost(Post post) throws Exception;
    public List<Post> getAll();
    public Post get(int id);
    public Post delete(int id);
}
