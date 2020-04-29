package example.persistence;

import example.gateway.Models.Post;
import example.gateway.contracts.IPostRepository;

import javax.inject.Singleton;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Singleton
public class InMemoryPostRepository implements IPostRepository {
    private List<Post> posts;
    private int nextId;

    public InMemoryPostRepository() {
        this.posts = new ArrayList<Post>();
        this.nextId = 0;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        if(post == null)
            throw new Exception("post was null");
        post.setId(nextId++);
        posts.add(post);
        return post;
    }

    @Override
    public List<Post> getAll() {
        return this.posts;
    }

    @Override
    public Post get(int id) {
        for (Post post:this.posts){
            if(post.getId() == id)
                return post;
        }
        return null;
    }

    @Override
    public Post delete(int id) {
        for (Post post: posts){
            if(post.getId() == id){
                this.posts.remove(post);
                return post;
            }
        }
        return null;
    }
}
