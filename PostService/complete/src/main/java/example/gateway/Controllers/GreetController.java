package example.gateway.Controllers;

import example.gateway.Models.Post;
import example.gateway.contracts.IPostRepository;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.annotation.Get;

import javax.inject.Inject;
import java.util.List;

@Controller("/post")
public class GreetController {

    @Inject
    private IPostRepository postRepository;

    @Get
    public List<Post> getAll(){
        return this.postRepository.getAll();
    }

    @Get("/{id}")
    public Post get(int id){
        return postRepository.get(id);
    }

    @io.micronaut.http.annotation.Post
    public Post create(@Body Post post) throws Exception {
        Post returnPost= postRepository.addPost(post);
        return returnPost;
    }

    @Delete("/{id}")
    public Post delete(int id){
        Post post = postRepository.delete(id);
        return post;
    }
}
