import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Uploader = ({ data }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const isFilled = Object.keys(data).every((key) => data[key]);

  const handleClick = async () => {
    try {
      if (!selectedFiles || !isFilled) return;

      const videoRequests = [];
      const imageRequests = [];

      for (const file of selectedFiles) {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('folder', process.env.REACT_APP_UPLOAD_FOLDER);
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

        const [type] = file.type.split('/');
        const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}`;

        if (type === 'video') {
          videoRequests.push(axios.post(`${cloudinaryUrl}/video/upload`, formData));
        } else {
          imageRequests.push(axios.post(`${cloudinaryUrl}/image/upload`, formData));
        }
      }

      const videoResponses = await axios.all(videoRequests);
      const imageResponses = await axios.all(imageRequests);

      data.videos = videoResponses.map((response) => response.data.secure_url);
      data.images = imageResponses.map((response) => response.data.secure_url);

      await axios.post(`${process.env.REACT_APP_API_URL}/products/create`, data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        required
        multiple
        type="file"
        accept="image/*, video/*" //?? size limit
        className="mt-2 mb-2 "
        onChange={(e) => setSelectedFiles(e.target.files)}
      />
      <Button
        className="w-100"
        type="submit"
        style={{ background: 'var(--color-main)' }}
        onClick={handleClick}
      >
        Add Product
      </Button>
    </div>
  );
};

export default Uploader;
