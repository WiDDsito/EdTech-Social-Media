// CQRS: Query para obtener posts
import { Post } from '../domain/Post';
import { PostRepository } from '../infrastructure/PostRepository';

export class GetPostsQuery {
  constructor(postRepository = new PostRepository()) {
    this.postRepository = postRepository;
  }

  async execute() {
    const data = await this.postRepository.getAll();
    return data.map(post => new Post(post));
  }
}
