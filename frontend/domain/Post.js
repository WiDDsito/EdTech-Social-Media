// Dominio: Entidad Post
export class Post {
  constructor({_id, title, content, author, createdAt}) {
    this.id = _id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = createdAt;
  }
}
