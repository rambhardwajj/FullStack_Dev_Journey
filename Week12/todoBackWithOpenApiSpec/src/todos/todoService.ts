import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description"> 

export class TodoService{
	public get(todoId: string): Todo {
		// ideally hit the database and get the todo of todoId
		return {
			title : "titke"  ,
			description :  "dexc",
			id : todoId  ,
			done : false
		}
	}
	public create( todoCreationParams: TodoCreationParams){
		console.log( "should hit the backend and create a todo ");
		return {
			title : "todo1"  ,
			description :  "dexc",
			id : "1"  ,
			done : false
		}
	}
}