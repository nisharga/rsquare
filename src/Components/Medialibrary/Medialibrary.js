import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Drag from "./../../Aasect/drag.png";
import "./Medialibrary.css";
import Modal from "./Modal/Modal";

const Medialibrary = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div class="container mx-auto">
      <div className="top_bar_media flex justify-between">
        <div className="media_Name mt-8">
          <h2>Media Library</h2>
          <h4 className="mt-4">0 images</h4>
        </div>
        <div className="upload_option mt-5">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faCirclePlus} className="pr-2" />
            Upload new image
          </button>
        </div>
      </div>
      <div className="body flex justify-center mt-10">
        <div className="text-center">
          <img src={Drag} alt="dragimage" />
          <h4>Click on ‘Upload’ to start adding images</h4>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default Medialibrary;
