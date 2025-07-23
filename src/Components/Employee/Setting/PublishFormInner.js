import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import FileUploadImg from '../../Common/ReactFileUpload';
import UploadImg from '../../../Assets/images/Upload-icon.svg';
import { Checkbox } from 'primereact/checkbox';
import TextArea from '../../Common/TextArea';
import ReactRadioButton from 'Components/Common/ReactRadioButton';
import { Editor } from 'primereact/editor';

export default function PublishFormInner() {
  const fileUploadRef = useRef();
  const [checked, setChecked] = useState(false);
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const [isInternationalEmp, setIsInternational] = useState('Upload Document');
  const [text1, setText1] = useState();
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
      <div className="outer_img_border" for="img_upload">
        <div className="d-flex align-items-center flex-column">
          <img src={UploadImg} className="me-2" alt="FilterImage" />
          <h6
            style={{ fontWeight: '500', color: '#000' }}
            className="mt-3 mb-2"
          >
            Drag & drop files or Browse
          </h6>
          <p className="mb-0">
            Supported formates: Only XLS, XLSX files are accepted.
          </p>
        </div>
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
            <b>Setting</b>
          </li>
          <li>
            <b>
              <Link to="/employees/setting/publish-form">Policies & Forms</Link>
            </b>
          </li>
          <li>Add Policies & Forms</li>
        </ul>
      </div>
      <div className="setting_publicforminner_wrap bg_white_box">
        <div className="create_policy_wrap">
          <div className="company_policy_wrap company_form_wrap p-3 pb-0 rounded-0">
            <div className="company_form_title mb-3">
              <h6>Create Policies & Forms</h6>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form_group">
                  <label>Serial No</label>
                  <Input type="number" placeholder="Enter Serial No" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Form Name*</label>
                  <Input type="text" placeholder="Enter Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Description*</label>
                  <TextArea
                    placeholder="Write Description"
                    rows={50}
                    cols={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="knowledge_wrap p-3 rounded-0">
            <div className="radio_button_wrapper d-flex mb-4">
              <div className="radio_button d-flex">
                <ReactRadioButton
                  inputId="internationalEmp"
                  name="internationalEmp"
                  value="Upload Document"
                  onChange={e => setIsInternational(e.value)}
                  checked={isInternationalEmp === 'Upload Document'}
                />
                <label className="m-0" htmlFor="internationalEmp">
                  Upload Document
                </label>
              </div>
              <div className="radio_button d-flex">
                <ReactRadioButton
                  inputId="internationalEmp1"
                  name="internationalEmp1"
                  value="Create New In Editor"
                  onChange={e => setIsInternational(e.value)}
                  checked={isInternationalEmp === 'Create New In Editor'}
                />
                <label className="m-0" htmlFor="internationalEmp1">
                  Create New In Editor
                </label>
              </div>
            </div>
            {isInternationalEmp === 'Upload Document' && (
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
            )}
            {isInternationalEmp === 'Create New In Editor' && (
              <div className="text_editor_wrapper">
                <Editor
                  style={{ height: '250px' }}
                  value={text1}
                  onTextChange={e => setText1(e.htmlValue)}
                />
              </div>
            )}
          </div>
          <div className="knowledge_check mb-3 p-3">
            <div className="checkbox_wrapper">
              <Checkbox
                inputId="readpolicy"
                onChange={e => setChecked(e.checked)}
                checked={checked}
              />
              <label htmlFor="readpolicy" className="p-checkbox-label">
                Read & Acknowledge Policy
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end p-3">
          <Link
            to="/employees/setting/publish-form"
            className="btn-secondary me-3"
          >
            Cancel
          </Link>
          <Link to="/employees/setting/publish-form" className="btn-primary">
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
