import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='text-center mt-5'>
      <h1>Welcome to image cropper and filter</h1>
      <p>Start by chossing one of the option</p>

      <div className="buttonGroup mt-4">
        <Link to='/capture-image' className="btn btn-primary mb-2">Capture Image</Link>
        <br />
        <Link to='/upload-image' className="btn btn-primary">Upload Image</Link>
      </div>
    </div>
  );
}

export default HomePage;