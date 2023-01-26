import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Checkbox, Label, Modal, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { v4 } from "uuid";
import PostSewa from "../../../apis/post.api";
import { storage } from "../../../configs/firebase";
function ModalTambah({ show, close, setShow, setMessage }) {
  const [form, setForm] = useState({
    kate_id: 1,
    name: "",
    harga: 0,
    tersedia: true,
    rekomendasi: false,
    alamat: "",
    link_alamat: "",
    link_video: "",
    deskripsi: "",
    foto1: "",
    foto2: "",
    foto3: "",
    luas: "20",
    lantai: "2",
    garasi: "2",
    kmandi: "1",
    kamar: "2",
    wifi: "1",
    ac: "1",
  });

  const handleImage1 = (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto1: url });
      });
    });
  };

  const handleImage2 = (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto2: url });
      });
    });
  };

  const handleImage3 = (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto3: url });
      });
    });
  };
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]:
        type == "number"
          ? Number(value)
          : name == "kate_id"
          ? Number(value)
          : type == "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostSewa.addSewa(form).then((res) => {
      setMessage(res.data.message);
      setShow(false);
    });
  };
  return (
    <React.Fragment>
      <Modal size="5xl" show={show}>
        <Modal.Body>
          <h4 className="w-full text-center font-bold text-lg">Tambah Sewa</h4>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full gap-x-2">
              <div className="w-[33%] ">
                <div>
                  <div className="mb-1 block">
                    <Label value="Nama" />
                  </div>
                  <TextInput
                    type="text"
                    name="name"
                    placeholder="nama"
                    onChange={onChange}
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-1 block">
                    <Label value="Deskripsi" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="deskripsi"
                    name="deskripsi"
                    onChange={onChange}
                    required={true}
                  />
                </div>
                <div>
                  <div id="select">
                    <div className="mb-1 block">
                      <Label htmlFor="countries" value="type" />
                    </div>
                    <Select onChange={onChange} name="kate_id" id="">
                      <option value="1">Kontrakan</option>
                      <option value="2">Kos</option>
                      <option value="3">Ruko</option>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div>
                    <div className="mb-1 block">
                      <Label value="lantai" />
                    </div>
                    <TextInput
                      type="text"
                      name="lantai"
                      placeholder="Lantai"
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <div className="mb-1 block">
                      <Label value="Garasi" />
                    </div>
                    <TextInput
                      type="text"
                      name="garasi"
                      placeholder="Garasi"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[33%] ">
                <div>
                  <div className="mb-1 block">
                    <Label value="Harga" />
                  </div>
                  <TextInput
                    type="number"
                    placeholder="harga"
                    onChange={onChange}
                    name="harga"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-1 block">
                    <Label value="link video" />
                  </div>
                  <TextInput
                    type="text"
                    name="link_video"
                    placeholder="link video"
                    onChange={onChange}
                    required={true}
                  />
                </div>
                <div className="">
                  <div>
                    <div className="mb-1 block">
                      <Label value="luas" />
                    </div>
                    <TextInput
                      type="text"
                      name="luas"
                      placeholder="Lebar"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div>
                    <div className="mb-1 block">
                      <Label value="ac" />
                    </div>
                    <TextInput
                      type="text"
                      name="ac"
                      placeholder="ac"
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <div className="mb-1 block">
                      <Label value="wifi" />
                    </div>
                    <TextInput
                      type="text"
                      name="wifi"
                      placeholder="wifi"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[33%] ">
                <div>
                  <div className="mb-1 block">
                    <Label value="alamat" />
                  </div>
                  <TextInput
                    name="alamat"
                    type="text"
                    placeholder="alamat"
                    onChange={onChange}
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-1 block">
                    <Label value="link alamat" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="link alamat"
                    onChange={onChange}
                    name="link_alamat"
                  />
                </div>
                <div className="flex gap-x-2">
                  <div>
                    <div className="mb-1 block">
                      <Label value="kamar mandi" />
                    </div>
                    <TextInput
                      type="text"
                      name="kmandi"
                      placeholder="kamar mandi"
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <div className="mb-1 block">
                      <Label value="kamar" />
                    </div>
                    <TextInput
                      type="text"
                      name="kamar"
                      placeholder="kamar"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="mb-1 block">
                    <Label value="Pilih" />
                  </div>
                  <div className="flex  gap-x-2">
                    <div className="flex flex-col gap-4" id="checkbox">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          defaultValue={true}
                          id="accept"
                          name="tersedia"
                          type="checkbox"
                          onChange={onChange}
                          defaultChecked={true}
                        />
                        <Label htmlFor="accept">tersedia</Label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4" id="checkbox">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="accept"
                          name="rekomendasi"
                          defaultValue={true}
                          defaultChecked={false}
                          type="checkbox"
                          onChange={onChange}
                        />
                        <Label htmlFor="accept">Rekomendasi</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-3 h-44 borders flex justify-between  ">
              <div className="w-[33%] border h-full relative  flex  justify-center items-center">
                <input
                  className="w-full opacity-0 absolute h-full cursor-pointer borders"
                  type="file"
                  name=""
                  onChange={handleImage1}
                  id=""
                  multiple
                />
                {form.foto1 ? (
                  <>
                    <img className=" h-full" src={form.foto1} alt="" />
                  </>
                ) : (
                  <>
                    <MdAddPhotoAlternate className="text-7xl " />
                  </>
                )}
              </div>
              <div className="w-[33%] border h-full relative  flex  justify-center items-center">
                <input
                  className="w-full opacity-0 absolute h-full cursor-pointer borders"
                  type="file"
                  onChange={handleImage2}
                  name=""
                  id=""
                />
                {form.foto2 ? (
                  <>
                    <img className=" h-full" src={form.foto2} alt="" />
                  </>
                ) : (
                  <>
                    <MdAddPhotoAlternate className="text-7xl " />
                  </>
                )}
              </div>
              <div className="w-[33%] border h-full relative  flex  justify-center items-center">
                <input
                  className="w-full opacity-0 absolute h-full cursor-pointer borders"
                  type="file"
                  onChange={handleImage3}
                  name=""
                  id=""
                />
                {form.foto3 ? (
                  <>
                    <img className=" h-full" src={form.foto3} alt="" />
                  </>
                ) : (
                  <>
                    <MdAddPhotoAlternate className="text-7xl " />
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-x-5 w-full mt-5">
              <button className="btnbase w-44 hover:text-white">Simpan</button>
              <label
                onClick={() => setShow(false)}
                className="btnbasex text-center w-44 cursor-pointer hover:text-white"
              >
                Batal
              </label>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalTambah;
