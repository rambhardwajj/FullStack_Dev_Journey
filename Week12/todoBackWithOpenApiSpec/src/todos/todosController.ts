import {
	Body, Controller,Get,Path,Post,Query,Route,SuccessResponse,
  } from "tsoa";
import { Todo } from "./todo";
import { TodoService, TodoCreationParams } from "./todoService";

@Route("todo")
export class TodoController extends Controller{
	@Get("{todoId}")
	public async getTodo(
		@Path() todoId : string 
	): Promise<Todo> {
		let todoService = new TodoService();
		return todoService.get(todoId)
	}
}
// this code is equal to => app.get('/todo/id); 