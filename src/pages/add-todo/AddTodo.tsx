import "./AddTodo.css";
import { SubmitHandler } from "react-hook-form";
import TodoForm from "../../components/todo-form/TodoForm";
import { useNavigate } from "react-router-dom";
function AddTodo() {
  let todoList = localStorage["todoList"]
    ? JSON.parse(localStorage["todoList"])
    : [];

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = (data) => {
    todoList.push({ ...data, id: generateRandomId() });
    localStorage["todoList"] = JSON.stringify(todoList);
    navigate("/home");
  };

  const generateRandomId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";

    // Set length explicitly to 8
    const length = 8;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="page-head">Add TODO</div>
      </div>
      <div className="container">
        <div className="todo">
          <TodoForm submitForm={onSubmit} />
        </div>
      </div>
    </>
  );
}

export default AddTodo;
