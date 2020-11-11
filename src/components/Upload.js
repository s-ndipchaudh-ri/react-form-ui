import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import { actionType } from "../actionType";

function Accept(props) {
  const [{ imgs,imguploaded,limitexceed }, dispatch] = useStateValue();
  const [img, setImg] = useState("");

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
  });

  useEffect(() => {
    
    const acceptedFileItems = acceptedFiles.map(async (file, i) => {
      await dispatch({
        type : actionType.IMG_UPLOADED
      })
      
        const formData = new FormData();
        formData.append("file", file);
        try {
          const res = await axios.post("http://localhost:5000/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

         
        } catch (err) {
          if (err.response.status === 500) {
            console.log("There was a problem with the server");
          } else {
            console.log(err.response.data.msg);
          }
        }
      
    });

  
  },[acceptedFiles])
  
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    ));

  return (
    <section className="container">
      {!limitexceed ? (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
      ) : (
        <LimitExceed />
      )}
    </section>
  );
}

const LimitExceed = () => {
  return <h1>Limit Exceed. Only 4 Files are allowed</h1>;
};

export default Accept;
