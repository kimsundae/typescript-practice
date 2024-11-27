interface Address {
  email: string;
  address: string;
}

const me : Partial<Address>= {}
const you: Partial<Address> = {email: 'john@abc.com'}
const all: Address = {email:'john@abc.com', address:'john'}

interface Todo{
  title: string;
  description:string;
  completed:boolean;
}


type TodoPreview = Pick<Todo, "title" | "completed">
const todo: TodoPreview = {
  title: "clean Room",
  completed:false
}

interface Todo{
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

const todo= {
  title: "clean room",
  completed: false,
  createdAt: 1234123
}