import { atomFamily } from "recoil";
import { Todos } from "./todo";

export const todosAtomFamily = atomFamily({
  key: "atomFamily",
  default: (id) => {
    return Todos.find((x) => x.id === id);
  },
});
