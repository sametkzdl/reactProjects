import { useRef, useState } from "react";

const Todo = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const inputData = inputRef.current.value;
    if (inputData.trim()) {
      setTodos((prevTodos) => [...prevTodos, { name: inputData }]);
      inputRef.current.value = "";
    }
  };
  const handleDeleteTodo = (indexToDelete) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleEditTodo = (indexToEdit) => {
    const editedValue = window.prompt("Edit Your Todo");
    if (editedValue !== null && editedValue.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo, index) =>
          index === indexToEdit ? { name: editedValue.trim() } : todo
        )
      );
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>To Do App</h2>
      <div
        style={{
          width: "600px",
          margin: "40px auto",
          border: "1px solid gray",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {" "}
          <div>
            {" "}
            <input
              ref={inputRef}
              placeholder="Set Todo For Your Daily Routine"
              name="title"
            />
            <button onClick={handleAddTodo}>Set Todo</button>
            <button onClick={() => setTodos([])}>Reset Todos</button>
          </div>
          {todos.map(({ name }, index) => {
            return (
              <div
                style={{
                  padding: "10px",
                  border: "1px solid gray",
                  width: "400px",
                }}
                key={index}
              >
                {name}
                <span
                  style={{
                    width: "50px",
                    height: "30px",
                    padding: "10px",
                    cursor: "pointer",
                    border: "1px solid black",
                  }}
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </span>
                <span
                  style={{
                    width: "50px",
                    height: "30px",
                    padding: "10px",
                    cursor: "pointer",
                    border: "1px solid black",
                  }}
                  onClick={() => handleEditTodo(index)}
                >
                  Edit
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
