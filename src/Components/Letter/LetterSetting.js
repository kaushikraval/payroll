import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Plus from '../../Assets/images/plus.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import UploadImg from '../../Assets/images/Upload-icon.svg';
import Input from '../Common/Input';
import FileUploadImg from '../Common/ReactFileUpload';

export default function LetterSetting() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [addSignatory, setAddSignatory] = useState(false);
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef();
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    addSignatory: setAddSignatory,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const settingDetail = [
    {
      empName: 'Dhaval Radadiya',
      empProfile: EmployeeImg,
      designation: 'Director',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      empName: 'Dhaval Radadiya',
      empProfile: EmployeeImg,
      designation: 'Director',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      empName: 'Dhaval Radadiya',
      empProfile: EmployeeImg,
      designation: 'HR',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      empName: 'Dhaval Radadiya',
      empProfile: EmployeeImg,
      designation: 'HR',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
  ];
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
          className="btn-secondary me-3"
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
          <li>Setting</li>
        </ul>
      </div>
      <div className="letter_setting_wrap">
        <div className="letter_setting_top mb-3">
          <div className="row align-items-center">
            <div className="col-sm-6 order-2 order-sm-1">
              <div className="show_entries">
                Show
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                entiries
              </div>
            </div>
            <div className="col-sm-6 order-1 order-sm-2">
              <div className="text-sm-end">
                <button
                  type="button"
                  className="btn-border"
                  onClick={() => setAddSignatory(true)}
                >
                  <img src={Plus} className="me-2" alt="PlusImage" />
                  Add Signatory
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one letter_temp_table">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Emp.Name</span>
                  </th>
                  <th>
                    <span>Designation</span>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {settingDetail.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="name_wrap">
                          <img src={user.empProfile} alt="Employeeimage" />
                          <span>{user.empName}</span>
                        </div>
                      </td>
                      <td>{user.designation}</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => setAddSignatory(true)}>
                            <img
                              src={user.editActionLogo}
                              data-inject-svg
                              alt="EditImage"
                            />
                          </li>
                          <li onClick={() => setDeleteDetail(true)}>
                            <img
                              src={user.deleteActionLogo}
                              alt="DeleteImage"
                            />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="table_bottom_wrap">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <p className="m-0 text-center text-sm-start">
                  Showing <span>10</span> to <span>20</span> of
                  <span>20</span> entries
                </p>
              </div>
              <div className="col-sm-6">
                <div className="table_pagination">
                  <ul className="d-flex justify-content-center justify-content-sm-end">
                    <li className="prev">
                      <Link className="w-auto d-block">Previous</Link>
                    </li>
                    <li>
                      <Link className="d-block">1</Link>
                    </li>
                    <li className="active">
                      <Link className="d-block">2</Link>
                    </li>
                    <li className="next">
                      <Link className="w-auto d-block">Next</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Add Signatory"
        visible={addSignatory}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setAddSignatory(false)}
      >
        <div className="addSignatory_popup">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form_group">
                <label>Employee Name*</label>
                <Input type="text" placeholder="Select Employee" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form_group">
                <label>Designation*</label>
                <Input type="text" placeholder="Designation" />
              </div>
            </div>
            <div className="col-12">
              <div className="form_group">
                <label>Signature Upload </label>
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
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Confirm"
        visible={deleteDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setDeleteDetail(false)}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
