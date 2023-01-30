import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SEWA from "../../apis/get.api";
import PostSewa from "../../apis/post.api";
import { wishContext } from "../../App";
import GoToTop from "../../hooks/GoToTop";

function WishList() {
  const [data, setData] = useState([]);
  const getWish = () => {
    SEWA.wishList().then((res) => setData(res.data));
  };
  const [message, setMessage] = useState("");

  const deleteWish = (e, id) => {
    e.preventDefault();
    PostSewa.deleteWish(id)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  };
  const { setCount } = useContext(wishContext);

  useEffect(() => {
    getWish();
    if (message !== "") {
      toast.success(message, {
        iconTheme: {
          primary: "#FFC600",
        },
      });
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      <div className="content min-h-screen pt-24 flex flex-col items-center">
        {data && (
          <h4 className="font-bold text-2xl">jumlah wishlist {data?.count}</h4>
        )}
        {data && setCount(data.count)}
        {data.data?.map((m) => (
          <Link
            to={`/detail/${m.sewa.id}`}
            key={m.id}
            className="flex relative w-[80%] cursor-pointer bg-white gap-x-4  border  hover:border-yellow hover:z-50 p-5 transition-all duration-100 ease-linear"
          >
            <span
              onClick={(e) => deleteWish(e, m.id)}
              className="absolute right-0 top-0 p-2"
            >
              <TiDelete className="text-5xl hover:text-yellow text-color2" />
            </span>
            <div className="w-[30%]  flex justify-center">
              <img className="h-36 w-64" src={m.sewa.foto1} alt="" />
            </div>
            <div className="w-[70%]  text-color2 ">
              <h4 className="font-semibold text-2xl">
                <FormatRupiah value={m.sewa.harga} />
                /Bulan
              </h4>
              <h4 className="font-semibold text-lg">{m.sewa.name}</h4>
              <p className="opacity-90 flex items-center">
                {" "}
                <VscLocation />
                {m.sewa.alamat}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <GoToTop />
    </>
  );
}

export default WishList;
