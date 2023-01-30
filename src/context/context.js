// import React, { createContext, useState } from "react";
// import { toast } from "react-hot-toast";
// import PostSewa from "../apis/post.api";
// export const wishContext = createContext({});

// const GlobalProvider = (Children) => {
//   const [message, setMessage] = useState("");
//   const [count, setCount] = useState(null);
//   const tambahData = (id) => {
//     PostSewa.addWish(id)
//       .then((res) => toast.success(res.data.message))
//       .catch((err) => console.log(err.message));
//   };
//   return (
//     <>
//       <wishContext.Provider value={{ tambahData, setMessage, setCount, count }}>
//         <Children />
//       </wishContext.Provider>
//     </>
//   );
// };

// export default GlobalProvider;
