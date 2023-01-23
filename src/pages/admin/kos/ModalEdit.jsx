import React from "react";
import { Label, Modal, Select, TextInput } from "flowbite-react";

function ModalEdit({ show, close }) {
  return (
    <React.Fragment>
      <Modal size="5xl" show={show}>
        <div className="flex justify-center w-full">
          <span>Edit</span>
        </div>
        <Modal.Body>
          <form>
            <div className="flex w-full gap-x-2">
              <div className="w-[33%] ">
                <div>
                  <div className="mb-2 block">
                    <Label value="Nama" />
                  </div>
                  <TextInput type="text" placeholder="nama" required={true} />
                </div>
                <div>
                  <div className="mb-1 block">
                    <Label value="Deskripsi" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="deskripsi"
                    name="description"
                    required={true}
                  />
                </div>
                <div>
                  <div id="select">
                    <div className="mb-1 block">
                      <Label htmlFor="countries" value="type" />
                    </div>
                    <Select name="type" id="countries" required={true}>
                      <option>Kontrakan</option>
                      <option>Kos</option>
                      <option>Ruko</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="w-[33%] ">
                <div>
                  <div className="mb-2 block">
                    <Label value="Harga" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="harga"
                    name="price"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label value="link video" />
                  </div>
                  <TextInput
                    type="text"
                    name="link_video"
                    placeholder="link video"
                    required={true}
                  />
                </div>
              </div>
              <div className="w-[33%] ">
                <div>
                  <div className="mb-2 block">
                    <Label value="alamat" />
                  </div>
                  <TextInput type="text" placeholder="" required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label value="link alamat" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="link alamat"
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-5 w-full">
              <button className="btnbase w-44 hover:text-white">Simpan</button>
              <button
                onClick={close}
                className="btnbasex w-44 hover:text-white"
              >
                batal
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalEdit;
