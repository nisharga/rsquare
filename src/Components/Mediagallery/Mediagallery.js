import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "../Medialibrary/Modal/Modal";
import img from "./../../Aasect/dd.png";
import "./Mediagallery.css";
const Mediagallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImge] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((res) => res.json())
      .then((data) => setImge(data));
  }, [image.id]);
  return (
    <div>
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
        <div className="body justify-center mt-10">
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div className="gallery_image flex gap-x-8 gap-y-4">
            {image?.map((data) => (
              <div
                className="md:w-1/4 sm:w-1/3 xs:1/2 shadow-2xl"
                key={data.id}
              >
                <img src={data.url} alt="img" />
                <div className="flex justify-between py-4 px-2">
                  <h2>File name</h2>
                  <h3 className="bg-poderblue">File Type</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediagallery;
{
}
