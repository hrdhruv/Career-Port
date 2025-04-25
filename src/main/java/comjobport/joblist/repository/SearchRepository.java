package comjobport.joblist.repository;

import comjobport.joblist.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}