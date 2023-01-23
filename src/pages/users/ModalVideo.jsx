import { Modal } from "flowbite-react";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ReactPlayer from "react-player";

function ModalVideo({ show, setShow, link }) {
  return (
    <React.Fragment>
      <Modal className="z-[9999] " size="8xl" show={show}>
        <span
          onClick={() => setShow(false)}
          className="w-full pr-5 justify-end text-color2 hover:text-yellow transition-all duration-150 ease-linear cursor-pointer pt-3 flex "
        >
          <AiFillCloseCircle className="text-4xl" />
        </span>
        <ModalBody className="h-[33rem] flex items-center">
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            url={link}
          />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default ModalVideo;
