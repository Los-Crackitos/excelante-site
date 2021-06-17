import React from 'react';
import { Upload, Steps, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import '../styles/converter.module.scss';

const { Dragger } = Upload;

const Converter = () => {
  const { Step } = Steps;

  return (
    <div className="converter-container">
      <Steps className="steps">
        <Step title="Upload your file" />
        <Step title="Select extraction method" />
        <Step title="Download your JSON file" />
      </Steps>
      <Dragger
        accept=".xlsx, .xls"
        name="file"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={(info) => {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        }}
        className="dragger"
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag your XLSX file to this area to upload</p>
      </Dragger>
    </div>
  );
};

export default Converter;
