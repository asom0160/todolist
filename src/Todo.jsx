import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const addTodo = () => {
    setList((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };
  const change = (e) => {
    setInput(e.target.value);
  };
  const deleted = (id) => {
    setList((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <section>
      <div
        style={{
          width: "600px",
          height: "700px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "30px",
          }}
        >
          <div style={{ fontSize: "50px" }}>🍀To-do list🍀</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <input
              value={input}
              onChange={change}
              type="input"
              style={{
                width: "400px",
                height: "30px",
                border: "none",
                outline: "none",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            />
            <button
              onClick={addTodo}
              style={{
                padding: "7px 15px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              등록
            </button>
          </div>
        </div>
        <div>
          {list.map((v) => {
            return (
              <div
                key={v.id}
                style={{
                  marginTop: "20px",
                }}
              >
                <input type="checkbox" />
                <span>{v.text}</span>
                <button onClick={() => deleted(v.id)}>삭제</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Todo;
