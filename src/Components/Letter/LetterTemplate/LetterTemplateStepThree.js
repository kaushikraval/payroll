import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import UploadImage from '../../../Assets/images/upload-icon-blue.svg';
import UploadImg from '../../../Assets/images/Upload-icon.svg';
import FileUploadImg from '../../Common/ReactFileUpload';

export default function LetterTemplateStepThree() {
  const fileUploadRef = useRef();
  const [text, setText] = useState();
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const [uploadFile, setUploadFile] = useState(false);
  const dialogFuncMap = {
    dialogFuncMap: setUploadFile,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };

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

  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
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
            <b>Letter</b>
          </li>
          <li>
            <Link to="/letter/letter-template">
              <b>Letter Template</b>
            </Link>
          </li>
          <li>Design Letter Template</li>
        </ul>
      </div>
      <div className="letter_temptwo_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="completed">
              <div className="icon"></div>
              <span>Letter Setup</span>
            </li>
            <li className="completed">
              <div className="icon"></div>
              <span>Letter Style</span>
            </li>
            <li className="current">
              <div className="icon"></div>
              <span>Letter Content</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Letter Preview</span>
            </li>
          </ul>
        </div>
        <div className="letter_temptwo_inner">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="letter_temptwo_left bg_white_box p-3">
                <h6 className="text-secondary mb-3">List of Dynamic Fields</h6>
                <input
                  type="search"
                  className="search_box mb-3"
                  placeholder="Search Categories "
                ></input>
                <div className="letter_temptwo_acc">
                  <Accordion activeIndex={0}>
                    <AccordionTab header="Employee Basic Information">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                    <AccordionTab header="Employee Contact Information">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                    <AccordionTab header="Employee Job">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                    <AccordionTab header="Employee Personal">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 mt-4 mt-md-0">
              <div className="letter_temptwo_right bg_white_box p-3">
                <h6 className="mb-3">Step 3 : Letter Content</h6>
                <div className="form_group">
                  <label className="m-0">
                    Click upload File You can upload doc
                  </label>
                  <button
                    type="button"
                    className="btn-primary ms-3"
                    onClick={() => setUploadFile(true)}
                  >
                    <img src={UploadImage} alt="UploadImage" className="me-2" />
                    Upload File
                  </button>
                </div>
                <Editor
                  value={text}
                  onTextChange={e => setText(e.htmlValue)}
                  style={{ height: '200px' }}
                />
                <div className="btn_group d-flex justify-content-end">
                  <Link to="/letter/letter-template" className="btn-secondary">
                    Cancel
                  </Link>
                  <Link
                    to="/letter/letter-template/step-two"
                    className="btn-secondary mx-3"
                  >
                    Previous
                  </Link>
                  <Link
                    to="/letter/letter-template/step-four"
                    className="btn-primary"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Upload File"
        visible={uploadFile}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setUploadFile(false)}
      >
        <div className="delate_popup_wrap text-center">
          <div className="upload_wrapper mb-3">
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
      </Dialog>
    </div>
  );
}
