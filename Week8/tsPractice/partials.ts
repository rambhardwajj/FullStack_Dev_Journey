type Todo = {
  title : string;
  desc: string;
  done : boolean;
  id : number;
}

type UpdateTodoInput = Partial<Todo>;

function updateTodo( title :string , id : number){

}

updateTodo(  "sdf", 3);