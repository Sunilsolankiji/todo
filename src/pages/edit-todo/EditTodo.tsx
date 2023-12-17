import "./EditTodo.css";
import { useState } from "react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TodoForm from "../../components/todo-form/TodoForm";
import { useNavigate, useParams } from "react-router-dom";
function EditTodo() {
  let todoList = localStorage["todoList"]
    ? JSON.parse(localStorage["todoList"])
    : [];
  const { todoId } = useParams();
  const navigate = useNavigate();

  const [todoItem, setTodoItem] = useState<any>({});

  useEffect(() => {
    let todo = todoList.find((item: any) => item.id == todoId);
    setTodoItem(todo);
  }, []);

  const onSubmit: SubmitHandler<any> = (data) => {
    todoList.forEach((item: any, i: number) => {
      if (item.id == todoId) {
        todoList[i] = { ...data, id: todoItem.id };
        navigate("/home");
      }
    });

    localStorage["todoList"] = JSON.stringify(todoList);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="page-head">Edit TODO</div>
      </div>
      <div className="container">
        <div className="todo">
          <TodoForm submitForm={onSubmit} defaultValues={todoItem} />
        </div>
      </div>
    </>
  );
}

export default EditTodo;
