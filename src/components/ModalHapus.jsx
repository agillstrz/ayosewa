import { Button, Modal } from "flowbite-react";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function ModalHapus({ show, data, setShow, handleDelete }) {
  return (
    <React.Fragment>
      <Modal show={show} size="md" popup={true}>
        <Modal.Body color="" className="bg-yellow rounded-lg ">
          <div className="text-center p-3">
            <HiOutlineExclamationCircle className="mx-auto text-white mb-4 h-14 w-14" />
            <h3 className="mb-5 text-lg font-semibold ">
              Yakin untuk menghapus?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                onClick={(e) => handleDelete(e, data)}
                color=""
                className="bg-color2 text-yellow hover:border-white border border-transparent transition-all duration-100 ease-linear"
              >
                Yakin
              </Button>
              <Button
                onClick={() => setShow(false)}
                color=""
                className="bg-color2 text-white hover:border-white border border-transparent transition-all duration-100 ease-linear"
              >
                Batal
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalHapus;
