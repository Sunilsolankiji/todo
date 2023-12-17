import "./Todo.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Todo() {
  let todoList = localStorage["todoList"]
    ? JSON.parse(localStorage["todoList"])
    : [];
  const { todoId } = useParams();
  const navigate = useNavigate();

  const [todoItem, setTodoItem] = useState<any>({});

  useEffect(() => {
    setTodoItem(todoList.find((item: any) => item.id === todoId));
  }, []);

  function deleteTodo() {
    let filteredTodo = todoList.filter((item: any) => item.id != todoId);
    localStorage["todoList"] = JSON.stringify(filteredTodo);
    navigate('/home')
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="page-head">{todoItem?.todoName}</div>
      </div>
      <div className="container">
        <div className="todo">
          <div className="desc">{todoItem?.todoDescription}</div>
          <div className="text-center mt-3">
            {/* <button className="btn-primary me-1">Done</button> */}
            <button
              className="btn-primary me-1"
              onClick={() => navigate(`/edit-todo/${todoItem?.id}`)}
            >
              Edit
            </button>
            <button className="btn-primary" onClick={deleteTodo}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
