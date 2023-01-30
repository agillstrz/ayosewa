import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import APIAuth from "../apis/auth.api";
import logo from "../assets/ayosewa.png";
import foto from "../assets/daftar.jpg";

export const Daftar = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [btn, setBtn] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setBtn(true);
    APIAuth.register(form)
      .then((res) => {
        setBtn(false);
        navigate("/login", { state: res.data.message });
      })
      .catch((err) => setError(err.message));
    setBtn(false);
  };

  return (
    <div className="h-screen bg-yellow/30 flex items-center justify-center shadow-xl">
      <div className="bg-white  h-[90%] w-[80%] shadow-lg relative">
        <span onClick={() => navigate("/")} className="absolute right-0 p-3">
          <TiArrowBack className="text-3xl hover:text-yellow cursor-pointer transition-all duration-100 ease-linear  font-bold" />{" "}
        </span>
        <div className="flex justify-center gap-x-3 w-full h-full  items-center  ">
          <div className="w-1/2 items-center h-full   flex justify-center">
            <img className="h-full w-full  " src={foto} alt="" />
          </div>

          <div className="w-1/2 flex p-5  flex-col justify-center">
            <img className="h-14 mx-auto mb-10 " src={logo} alt="" />
            <h1 className="font-bold text-2xl w-fullt text-center">Daftar</h1>
            <form
              className="flex w-full  justify-center flex-col gap-4"
              onSubmit={onSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label className="text-lg" htmlFor="email1" value="Email" />
                </div>

                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Masukkan Email"
                  required={true}
                  name="email"
                  onChange={onChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label className="text-lg" htmlFor="text" value="Nama" />
                </div>

                <TextInput
                  id="text"
                  type="text"
                  placeholder="Nama Lengkap"
                  required={true}
                  name="name"
                  onChange={onChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    className="text-lg"
                    htmlFor="password1"
                    value="Katasandi"
                  />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  placeholder="*****"
                  required={true}
                  name="password"
                  onChange={onChange}
                />
              </div>
              <span className="text-sm text-red-600">{error}</span>
              <Button color="" className="w-full  btnbase" type="submit">
                {btn ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  "Daftar"
                )}
              </Button>
            </form>
            <p className="text-sm pt-2 capitalize">
              sudah memiliki akun?{" "}
              <span
                className="underline hover:text-yellow drop-shadow-lg transition-all duration-100 ease-linear cursor-pointer text-color2"
                onClick={() => navigate("/login")}
              >
                Login sekarang
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
