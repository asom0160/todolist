import Dates from "./Date";
import Todo from "./Todo";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "url('/todolist1.jpg')",
        backgroundSize: "cover",
        textAlign: "center",
        gap: "10px",
        justifyContent: "center",
        padding: "0px 300px",
      }}
    >
      <Dates></Dates>
      <Todo></Todo>
    </div>
  );
}

export default App;
