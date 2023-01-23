import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiXSquare } from "react-icons/fi";
import { RiAddBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import GetSewa from "../../../apis/get.api";
import PostSewa from "../../../apis/post.api";
import ModalHapus from "../../../components/ModalHapus";
import ModalEdit from "./ModalEdit";
import ModalTambah from "./ModalTambah";
export const SewaAdmin = () => {
  let navigate = useNavigate();
  const [data, setDatas] = useState([]);
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState({
    modalTambah: false,
    modalEdit: false,
    modalHapus: false,
    data: {},
  });
  const getSewa = () => {
    GetSewa.allSewa().then((res) => {
      setDatas(res.data.data);
    });
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    PostSewa.deleteSewa(id).then((res) => {
      setMessage(res.data.message);
      setShow(false);
    });
  };
  useEffect(() => {
    getSewa();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      <ModalTambah
        show={show.modalTambah}
        setShow={setShow}
        close={() => setShow(false)}
        setMessage={setMessage}
      />
      <ModalHapus
        show={show.modalHapus}
        setShow={setShow}
        data={show.data}
        handleDelete={handleDelete}
      />
      <ModalEdit show={show.modalEdit} close={() => setShow(false)} />
      <div className="flex justify-center w-full">
        <div className="w-full">
          <button
            onClick={() => setShow({ modalTambah: !show.modalTambah })}
            className=" p-2 mb-2  flex items-center gap-x-2 hover:bg-color2 hover:text-yellow text-color2 bg-yellow px-2 rounded-lg font-semibold "
          >
            Tambah Kos <RiAddBoxFill />
          </button>

          <div className=" w-full overflow-hidden  rounded-xl">
            <table className="w-full  text-sm text-left text-color2 ">
              <thead className="text-xs w-full text-color2 uppercase bg-yellow ">
                <tr className="text-center">
                  <th scope="col" className="px-6 w-[10%] py-3">
                    Kategori
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rekomendasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    tersedia
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.data?.map((m) => (
                    <tr
                      key={m.id}
                      className="bg-white border-b text-center text-md"
                    >
                      <td className="px-6 font-medium ">{m.kategori?.name}</td>
                      <td className="px-6 py-2 ">{m.name}</td>
                      <td className="px-6 ">
                        {" "}
                        <FormatRupiah value={m.harga} />{" "}
                      </td>
                      <td className="px-6 text-center ">
                        {m.rekomendasi ? (
                          <span className=" flex justify-center">
                            <BsFillCheckCircleFill className="text-lg text-yellow" />
                          </span>
                        ) : (
                          <span className=" flex justify-center">
                            <FiXSquare className="text-lg text-color2" />
                          </span>
                        )}
                      </td>
                      <td className="px-6 ">
                        {m.tersedia ? (
                          <span className=" flex justify-center">
                            <BsFillCheckCircleFill className="text-lg text-yellow" />
                          </span>
                        ) : (
                          <span className=" flex justify-center">
                            <FiXSquare className="text-lg text-color2" />
                          </span>
                        )}
                      </td>
                      <td className="px-6">
                        <label
                          onClick={() =>
                            navigate(`/admin/edit/${m.id}`, { state: m })
                          }
                          className="cursor-pointer hover:bg-yellow hover:text-white text-yellow mx-1 bg-color2 px-2 py-1 rounded-lg font-semibold hover:underline"
                        >
                          Edit
                        </label>
                        <label
                          onClick={(e) =>
                            setShow({
                              modalHapus: !show.modalHapus,
                              data: m.id,
                            })
                          }
                          className="cursor-pointer hover:bg-color2 hover:text-white text-color2 mx-1 bg-yellow px-2 py-1 rounded-lg font-semibold hover:underline"
                        >
                          Hapus
                        </label>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
