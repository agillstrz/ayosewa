import { createContext, useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import GetSewa from "./apis/get.api";
import PostSewa from "./apis/post.api";
import "./App.css";
import Sewa from "./pages/users/Sewa";
import SetUpRouter from "./router/SetUpRouter";
export const wishContext = createContext({});
function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(null);
  const tambahData = (id) => {
    PostSewa.addWish(id)
      .then((res) => toast.success(res.data.message))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="font-Poppins">
      <wishContext.Provider value={{ tambahData, setMessage, setCount, count }}>
        <SetUpRouter />
      </wishContext.Provider>
    </div>
  );
}

export default App;
