import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  let todoList = localStorage["todoList"]
    ? JSON.parse(localStorage["todoList"]).sort()
    : [];

  const navigate = useNavigate();
  useEffect(() => {}, []);

  function onSearch(e: any) {}

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="page-head">My TODO List</div>
      </div>
      <div className="container">
        <div className="todo">
          {todoList.map((item: any, i: number) => (
            <div
              key={i}
              className="todo-item my-3"
              onClick={() => navigate(`/todo/${item?.id}`)}
            >
              <div className="name">{item?.todoName}</div>
              <div className="desc">{item?.todoDescription}</div>
              <div className="todo-action"></div>
            </div>
          ))}
          {!todoList?.length ? <p className="text-center">No TODO Available!</p> : ""}
        </div>
      </div>
    </>
  );
}

export default Home;
