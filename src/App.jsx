import GetAllPosts from "./components/GetAllPosts";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetAllPosts />} />
      </Routes>
    </div>
  );
  // <h1> Welcome to Stranger Things! Let's get to work!</h1>;
}

export default App;
