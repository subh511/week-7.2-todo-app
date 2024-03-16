import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"; //useREcoilValue
import { todosAtomFamily } from "./atoms";

// import { todosAtomFamily } from "./components/store/atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  //this id for atom family next introducing for selector family

  // const [todo,setTodo] = useRecoilState(todosAtomFamily(id))
  return (
    <div>
      {currentTodo.title}
      {currentTodo.description}
    </div>
  );
}
// {todo.title}
// {todo.description}
//{currentTodo.title}
//{currentTodo.description}

export default App;
