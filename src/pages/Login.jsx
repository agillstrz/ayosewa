import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIAuth from "../apis/auth.api";
import foto from "../assets/hero1.png";
export const Login = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    APIAuth.loginUser(form).then(
      (res) => res.status == 200 && navigate("/admin")
    );
  };
  return (
    <div className="h-screen bg-yellow/30 flex items-center justify-center shadow-xl">
      <div className="bg-white h-[80%] p-5 w-[70%] shadow-lg">
        <div className="flex justify-center w-full h-full  items-center  ">
          <div className="w-1/2 items-center h-full   flex justify-center">
            <img className="h-[90%] w-[90%] " src={foto} alt="" />
          </div>

          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-bold text-2xl w-fullt text-center">Masuk</h1>

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

              <Button color="" className="w-full  btnbase" type="submit">
                Login
              </Button>
            </form>
            <p className="text-sm pt-2 capitalize">
              Belum mempunyai akun?{" "}
              <Link
                to="/daftar"
                className="underline cursor-pointer text-color2"
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
