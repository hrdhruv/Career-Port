package comjobport.joblist.controller;

import java.io.IOException;
import java.util.List;
import comjobport.joblist.repository.PostRepository;
import comjobport.joblist.repository.SearchRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import comjobport.joblist.model.Post;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class PostController {
    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository srepo;
    @RequestMapping(value="/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/posts")
    public List<Post> getAllPosts()
    {
        return repo.findAll();
    }
    @GetMapping("/posts/{text}")
    @CrossOrigin
    public List<Post> search(@PathVariable String text)
    {
        return srepo.findByText(text);
    }

    @PostMapping("/post")
    @CrossOrigin
    public Post addPost(@RequestBody Post post)
    {
        return repo.save(post);
    }

}
