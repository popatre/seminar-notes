import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Form from "./components/Form";
import Header from "./components/Header";
import UserContext from "./contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checklist from "./components/Checklist";
import Picture from "./components/Picture";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const [user, setUser] = useState({ username: "", avatar: "" });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ setUser, user }}>
        <div className="App">
          <Header />
          <Routes>
            <Route
              to="/"
              element={<p>Welcome to this very working repo</p>}
            ></Route>
            <Route
              path="/counter"
              element={
                <Form
                  setCount={setCount}
                  input={input}
                  setInput={setInput}
                  count={count}
                />
              }
            ></Route>

            <Route path="/auth" element={<Auth />}></Route>

            <Route path="/checklist" element={<Checklist />}></Route>
            <Route path="/picture" element={<Picture />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
