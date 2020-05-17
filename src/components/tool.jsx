import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';

const Tool = () => {
  const location = useLocation()
  const imageRef = useRef()

  const cropImage = () => {
    const cropper = new Cropper(imageRef.current, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
  }

  return (
    <>
      <div className="imgContainer">
        <img ref={imageRef} src={location.state.imageSrc} alt="IMG" />
      </div>

      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="collapse navbar-collapse container bottomButtons" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button onClick={cropImage} className="">Crop</button>
            </li>
            <li className="nav-item">
              <button>zxc</button>
            </li>
            <li className="nav-item">
              <button>zxc</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Tool;