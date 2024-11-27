class Post {
  private id: number = 0;
  protected title: string = "";
  constructor(id:number, title:string){
    this.id = id;
    this.title = title;
  }
  getPost(){
    return `postId ${this.id}, postTitle: ${this.title}`;
  }
}
class PostB extends Post{
  getPost(){
    return this.id;
  }
}

const post: Post = new Post(1, "title 1");

console.log(post.id);
console.log(post.title);