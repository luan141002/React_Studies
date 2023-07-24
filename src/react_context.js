import { useStore, actions } from "./React-Context";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.AddToDo(todoInput));
  };

  return (
    <div>
      <input
        value={todoInput}
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value));
        }}
        placeholder="Enter todos..."
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}
export default App;
