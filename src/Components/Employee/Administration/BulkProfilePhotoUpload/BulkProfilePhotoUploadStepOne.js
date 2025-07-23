import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import { Tag } from 'primereact/tag';
import FileUploadImg from '../../../Common/ReactFileUpload';
import { Button } from 'primereact/button';
import UploadImg from '../../../../Assets/images/Upload-icon.svg';

export default function BulkProfilePhotoUploadStepOne() {
  const fileUploadRef = useRef();
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const headerTemplate = options => {
    const { className, chooseButton, cancelButton } = options;
    return (
      <div
        className={className}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };
  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className:
      'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };
  const onTemplateSelect = e => {
    let _totalSize = totalSize;
    e?.files.FileList?.map(file => (_totalSize += file.size));
    setTotalSize(_totalSize);
  };

  const onTemplateUpload = e => {
    let _totalSize = 0;
    e.files.forEach(file => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="outer_img_border">
        <div className="d-flex align-items-center flex-column">
          <img src={UploadImg} className="me-2" alt="FilterImage" />
          <h6
            style={{ fontWeight: '500', color: '#000' }}
            className="mt-3 mb-2"
          >
            Drag & drop files or Browse
          </h6>
          <p className="mb-0">
            Supported formates: Only ZIP, RAR files are accepted.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Employees</b>
          </li>
          <li>
            <b>Administration</b>
          </li>
          <li>
            <b>
              <Link to="/employees/administration/bulk-profile-photo-upload">
                Import Photo
              </Link>
            </b>
          </li>
          <li>Import Process</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="current">
            <div className="icon"></div>
            <span>Upload</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Associate</span>
          </li>
        </ul>
      </div>
      <div className=" bg_white_box ">
        <div className="p-4 pb-0 upload_file_wrapper">
          <div className="inner_heading ">
            <h6 className="mb-4">Step 1 : Upload File</h6>
            <ul>
              <li className="mb-4">
                <p className="mb-0 text-light">
                  You can upload photos of multiple employees in one shot by
                  uploading a zip file containing all photos.
                </p>
              </li>
              <li className="mb-4">
                <p className="mb-0 text-light">
                  If photos are named acccording to employee numbers (for
                  example, 01290.jpg), the assignment is automatically done. if
                  not you can easily assosiate an employee the photos in the
                  next step
                </p>
              </li>
            </ul>
          </div>
          <div className="upload_wrapper">
            <FileUploadImg
              ref={fileUploadRef}
              name="demo[]"
              url="https://primefaces.org/primereact/showcase/upload.php"
              multiple
              accept="image/*"
              maxFileSize={1000000}
              onUpload={onTemplateUpload}
              onSelect={onTemplateSelect}
              onError={onTemplateClear}
              onClear={onTemplateClear}
              headerTemplate={headerTemplate}
              itemTemplate={itemTemplate}
              emptyTemplate={emptyTemplate}
              chooseOptions={chooseOptions}
              uploadOptions={uploadOptions}
              cancelOptions={cancelOptions}
            />
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end p-4">
          <Link
            className="btn-secondary me-4"
            to="/employees/administration/bulk-profile-photo-upload"
          >
            Cancel
          </Link>
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-profile-photo-upload-step-two"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
