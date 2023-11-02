import { useEffect, useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data)
        setLoading(false)
      });
  }, [loading]);

  if(loading){
    return <div> Fetching data....</div>
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
