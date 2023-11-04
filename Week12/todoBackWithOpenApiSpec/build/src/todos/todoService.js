"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        // ideally hit the database and get the todo of todoId
        return {
            title: "titke",
            description: "dexc",
            id: todoId,
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("should hit the backend and create a todo ");
        return {
            title: "todo1",
            description: "dexc",
            id: "1",
            done: false
        };
    }
}
exports.TodoService = TodoService;
