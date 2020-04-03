import { listManager, workspace } from "coc.nvim";
import TodosList from "./TodosList.js";

const { nvim } = workspace;

module.exports = async (context) => {
  const { subscriptions } = context;

  subscriptions.push(listManager.registerList(new TodosList(nvim)));
};
