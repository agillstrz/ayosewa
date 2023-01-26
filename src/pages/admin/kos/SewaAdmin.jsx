import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiXSquare } from "react-icons/fi";
import { RiAddBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import GetSewa from "../../../apis/get.api";
import PostSewa from "../../../apis/post.api";
import ModalHapus from "../../../components/ModalHapus";
import { useDebounce } from "../../../hooks/searching";
import ModalEdit from "./ModalEdit";
import ModalTambah from "./ModalTambah";
export const SewaAdmin = () => {
  let navigate = useNavigate();
  const [data, setDatas] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [_text, setText] = useState("");
  const [text] = useDebounce(700, _text);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState({
    modalTambah: false,
    modalEdit: false,
    modalHapus: false,
    data: {},
  });
  const getSewa = () => {
    setLoad(true);
    GetSewa.allSewa(text, page).then((res) => {
      setDatas(res.data.data);
      setLoad(false);
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
      toast.success(message, {
        iconTheme: {
          primary: "#FFC600",
        },
      });
      setMessage("");
    }
  }, [message, text, page]);

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
      <h2 className="mb-5  font-bold">Daftar Sewa</h2>
      <div className="flex justify-center w-full">
        <div className="w-full ">
          <div className="w-full flex mb-3 justify-between">
            <input
              type="search"
              id="default-search"
              className="block w-44 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari sewa"
              onChange={(e) => setText(e.target.value)}
              value={_text}
            />
            <button
              onClick={() => setShow({ modalTambah: !show.modalTambah })}
              className=" p-2   flex items-center gap-x-2 hover:bg-color2 hover:text-yellow text-color2 bg-yellow px-2 rounded-lg font-semibold "
            >
              Tambah Kos <RiAddBoxFill />
            </button>
          </div>

          <div className=" w-full overflow-hidden  rounded-xl">
            <table className="w-full  text-sm text-left text-color2 ">
              <thead className="text-xs w-full text-color2 uppercase bg-yellow ">
                <tr className="">
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
                {data.data?.map((m) => (
                  <tr key={m.id} className="bg-white border-b text-md">
                    <td className="px-6 font-medium ">{m.kategori?.name}</td>
                    <td className="px-6 py-2 ">{m.name}</td>
                    <td className="px-6 ">
                      {" "}
                      <FormatRupiah value={m.harga} />{" "}
                    </td>
                    <td className="px-6  ">
                      {m.rekomendasi ? (
                        <span className=" flex ">
                          <BsFillCheckCircleFill className="text-lg text-yellow" />
                        </span>
                      ) : (
                        <span className=" flex ">
                          <FiXSquare className="text-lg text-color2" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 ">
                      {m.tersedia ? (
                        <span className=" flex ">
                          <BsFillCheckCircleFill className="text-lg text-yellow" />
                        </span>
                      ) : (
                        <span className=" flex ">
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
          <div className="w-full justify-end flex ">
            {data.data !== "" && (
              <div className=" w-full flex justify-end mb-2 ">
                <div className="flex flex-col items-center">
                  <div className="inline-flex mt-2 xs:mt-0">
                    {/* Buttons */}
                    <button
                      onClick={() => setPage(page - 1)}
                      className="inline-flex gap-x-1 items-center  px-2 py-1 text-[12px] font-medium text-yellow bg-color2 border-0 border-l rounded-r hover:bg-gray-900"
                    >
                      <AiOutlineArrowLeft className="text-yellow text-xl" />
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="inline-flex gap-x-1 items-center  px-2 py-1  text-[12px] font-medium text-yellow bg-color2 border-0 border-l rounded-r hover:bg-gray-900"
                    >
                      Next
                      <AiOutlineArrowRight className="text-yellow text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
