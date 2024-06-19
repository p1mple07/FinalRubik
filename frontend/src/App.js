// src/UploadForm.js

import React, { useState } from 'react';

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (files.length !== 6) {
      setError('Please upload exactly 6 images.');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await fetch('https://final-rubik-ii6y.vercel.app/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setResult(result.result);
        setError('sfs');
      } else {
        setError(result.error);
        setResult('44');
      }
    } catch (error) {
      setError('Unexpected error: ' + error.message);
      setResult('');
    }
  };

  return (
    <div>
      <h1>Upload Rubik's Cube Faces</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h2>Solver Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
