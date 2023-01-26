import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import PostSewa from "../../../apis/post.api";
import { storage } from "../../../configs/firebase";

function EditSewa() {
  let location = useLocation();
  let navigate = useNavigate();
  const {
    id,
    kate_id,
    name,
    harga,
    tersedia,
    rekomendasi,
    alamat,
    link_alamat,
    link_video,
    deskripsi,
    foto1,
    foto2,
    foto3,
    luas,
    lantai,
    garasi,
    kmandi,
    kamar,
    wifi,
    ac,
  } = location.state;
  const [form, setForm] = useState({
    id: id,
    kate_id: kate_id,
    name: name,
    harga: harga,
    tersedia: tersedia,
    rekomendasi: tersedia,
    alamat: alamat,
    link_alamat: link_alamat,
    link_video: link_video,
    deskripsi: deskripsi,
    foto1: foto1,
    foto2: foto2,
    foto3: foto3,
    luas: luas,
    lantai: lantai,
    garasi: garasi,
    kmandi: kmandi,
    kamar: kamar,
    wifi: wifi,
    ac: ac,
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
    PostSewa.editSewa(form).then((res) => {
      toast.success(res.data.message, {
        duration: 400,
      });
      setTimeout(() => {
        navigate("/admin/sewaAdmin");
      }, 1500);
    });
  };
  return (
    <>
      <Toaster />
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
                value={form.name}
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
                value={form.deskripsi}
              />
            </div>
            <div>
              <div id="select">
                <div className="mb-1 block">
                  <Label htmlFor="countries" value="type" />
                </div>
                <Select
                  defaultValue={form.kate_id}
                  onChange={onChange}
                  name="kate_id"
                  id=""
                >
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
                  defaultValue={form.lantai}
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
                  defaultValue={form.garasi}
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
                defaultValue={form.harga}
                name="harga"
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
                defaultValue={form.link_video}
                onChange={onChange}
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
                  placeholder="luas"
                  onChange={onChange}
                  defaultValue={form.luas}
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
                  defaultValue={form.ac}
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
                  defaultValue={form.wifi}
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
                defaultValue={form.alamat}
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
                defaultValue={form.link_alamat}
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
                  defaultValue={form.kmandi}
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
                  defaultValue={form.kamar}
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
                      defaultChecked={form.tersedia == 0 ? false : true}
                      id="accept"
                      name="tersedia"
                      type="checkbox"
                      onChange={onChange}
                    />
                    <Label htmlFor="accept">tersedia</Label>
                  </div>
                </div>
                <div className="flex flex-col gap-4" id="checkbox">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="accept"
                      name="rekomendasi"
                      defaultChecked={form.rekomendasi == 0 ? false : true}
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
            onClick={() => navigate("/admin/sewaAdmin")}
            className="btnbasex text-center w-44 cursor-pointer hover:text-white"
          >
            Batal
          </label>
        </div>
      </form>
    </>
  );
}

export default EditSewa;
