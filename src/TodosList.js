import { BasicList } from "coc.nvim";

export default class Todos extends BasicList {
  name = "todos";
  description = "todolist";
  defaultAction = "toggle";
  actions = [];

  constructor(nvim) {
    super(nvim);
    this.todos = [
      {
        status: "done",
        text: "Done task",
      },
      {
        status: "todo",
        text: "Todo task",
      },
      {
        status: "in_progress",
        text: "In-progress task",
      },
    ];
  }

  loadItems = async () => {
    return this.todos.map((todo) => ({
      label: todo.text,
    }));
  };
}

