import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import APIAuth from "../apis/auth.api";
import foto from "../assets/login.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from "../assets/ayosewa.png";
export const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [form, setForm] = useState({
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
    APIAuth.login(form)
      .then((res) => {
        if (res.data.data.role_as == 0) {
          navigate("/");
          setBtn(false);
        } else {
          navigate("/admin");
        }
      })
      .catch((err) => {
        setError(err.message);
        setBtn(false);
      });
  };

  return (
    <div className="h-screen bg-yellow/30 flex items-center justify-center shadow-xl">
      <div className="bg-white h-[90%] w-[80%] shadow-lg relative">
        <span className="absolute right-0 p-3">
          <TiArrowBack
            onClick={() => navigate("/")}
            className="text-3xl hover:text-yellow cursor-pointer transition-all duration-100 ease-linear  font-bold"
          />{" "}
        </span>
        <div className="flex justify-center gap-x-3 w-full h-full  items-center  ">
          <div className="w-1/2 items-center h-full   flex justify-center">
            <img className="h-full w-full  " src={foto} alt="" />
          </div>

          <div className="w-1/2 flex p-5 flex-col text-color2  h-full justify-center ">
            <img className="h-14 mx-auto mb-10 " src={logo} alt="" />
            <h1 className="font-bold  text-2xl w-fullt text-center">Masuk</h1>
            <span className="text-color2 w-36  text-sm capitalize bg-yellow  rounded-lg px-1 ">
              {location.state}
            </span>

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
                  "Masuk"
                )}
              </Button>
            </form>
            <p className="text-sm pt-2 capitalize">
              Belum mempunyai akun?{" "}
              <Link
                to="/daftar"
                className="underline hover:text-yellow drop-shadow-lg transition-all duration-100 ease-linear cursor-pointer text-color2"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
