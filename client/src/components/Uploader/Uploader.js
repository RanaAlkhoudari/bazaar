import styles from './uploader.css';
import React, { useState } from 'react';
import axios from 'axios';

const Uploader = ({ isFilled }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleClick = async () => {
    if (!selectedFiles || !isFilled) return;

    try {
      const videoRequests = [];
      const imageRequests = [];

      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
        formData.append('folder', process.env.REACT_APP_UPLOAD_FOLDER);

        const [type] = file.type.split('/');
        if (type === 'video') {
          videoRequests.push(
            axios.post(
              `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/video/upload`,
              formData,
            ),
          );
        } else {
          imageRequests.push(
            axios.post(
              `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
              formData,
            ),
          );
        }
      }

      const videoResponses = await axios.all(videoRequests);
      const imageResponses = await axios.all(imageRequests);

      const media = {};
      if (videoResponses.length)
        media.videos = videoResponses.map((response) => response.data.secure_url);
      if (imageResponses.length)
        media.images = imageResponses.map((response) => response.data.secure_url);

      await axios.post('http://localhost:5001/api/v1/products', media);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.uploader_container}>
      <input
        required
        multiple
        type="file"
        accept="image/*, video/*"
        onChange={(e) => setSelectedFiles(e.target.files)}
      />
      <input type="submit" value="Add" onClick={handleClick} />
    </div>
  );
};

export default Uploader;
