import React, { useEffect, useState } from "react";
import GetSewa from "../../apis/get.api";

function User() {
  const [data, setData] = useState([]);

  const getUsers = () => {
    GetSewa.users().then((res) => setData(res.data.data));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2 className="mb-5  font-bold">Daftar Pegguna</h2>
      <div className="w-1/2">
        <div className=" w-full overflow-hidden  rounded-xl">
          <table className="w-full  text-sm text-left text-color2 ">
            <thead className="text-xs w-full text-color2 uppercase bg-yellow ">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  Nama Lengkap
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data?.map((m) => (
                <tr key={m.id} className="bg-white border-b text-md">
                  <td className="px-6 font-medium ">{m.name}</td>
                  <td className="px-6 py-2 ">{m.email}</td>
                  <td className="px-6 py-2 ">
                    {m.role_as == 0 ? "pengguna" : "admin"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
