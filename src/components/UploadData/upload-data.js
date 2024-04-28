import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './upload-data.css'

function UploadData() {
  const [file, setFile] = useState("");

  const beforeUpload = (file) => {
    setFile(file);
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(
        "http://localhost:4000/user-details/upload",
        {
          method: "POST",
          body: formData,
        }
      );
     
      const jsonData = await response.json();
      if (!response.ok) {
        message.error("Please upload the allowed format! (.txt, MS word .docx)");
        return;
      }
      message.success(jsonData.message);
    } catch (error) {
      message.error("Failed to upload file: Error occurred");
    }
  };

  return (
    <div className="search-app-main-upload-container">
      <div className="search-app-main-upload-container1">
        <div>
          <h2 className="heading">DataSearch Pro</h2>
          <p className="description">Your Comprehensive Data Search App</p>
        </div>
      </div>
      <div className="sub-con">
        <form className="upload-form" onSubmit={handleSubmit}>
            <Upload
              name="file"
              action="http://localhost:4000/user-details/upload"
              method="post"
              beforeUpload={beforeUpload}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>

            <Button style={{ marginLeft: "10px", width:'80px', alignSelf: 'center' }} htmlType="submit">
              Save
            </Button>
        </form>
        </div>
    </div>
  );
}

export default UploadData;
