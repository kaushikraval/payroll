import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import photosEmployees from '../../../../Assets/images/photos-employees.jpg';
import ReactSelectSingle from '../../../Common/ReactSelectSingle';
import DeleteBtn from '../../../../Assets/images/DeleteBtn.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function BulkProfilePhotoUploadStepTwo() {
  const [educationDetails, setEducationDetails] = useState(false);
  const [selectCity, setcitySelect] = useState([]);
  const citySelect = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' },
  ];
  const codeHandleChange = e => {
    setcitySelect(e.value);
  };
  const dialogFuncMap = {
    educationDetails: setEducationDetails,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
        />
        <Button
          label="Delete"
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
          <li className="completed">
            <div className="icon"></div>
            <span>Upload</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Associate</span>
          </li>
        </ul>
      </div>
      <div className=" bg_white_box ">
        <div className="p-4 pb-0">
          <div className="inner_heading ">
            <h6 className="mb-4">Step 2 : Assign photos to the employees</h6>
          </div>
        </div>
        <div className="employes_photos_list me-4 p-4 pt-3">
          <ul>
            <li>
              <div className="row">
                <div className="col-md-3 col-6 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployeess" />
                  <p>1001. Jpeg</p>
                </div>
                <div className="col-md-2 col-6">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1 col-2">
                  <p>2.43MB</p>
                </div>
                <div className="col-lg-5 col-8">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-lg-1 col-2">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>Cheyenne Curtis032.jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>1001. Jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>1001. Jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>Cheyenne Curtis032.jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>1001. Jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>1001. Jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>Cheyenne Curtis032.jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                  <img src={photosEmployees} alt="photosEmployees" />
                  <p>1001. Jpeg</p>
                </div>
                <div className="col-md-2">
                  <p>12 Jun 2022</p>
                </div>
                <div className="col-md-1">
                  <p>2.43MB</p>
                </div>
                <div className="col-md-5">
                  <div className="form_group mb-0">
                    <ReactSelectSingle
                      value={selectCity}
                      options={citySelect}
                      filter
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="edit_btn border-0 p-0"
                    onClick={() => onClick('educationDetails')}
                  >
                    <img src={DeleteBtn} alt="DeleteBtn" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="btn_group d-flex justify-content-end p-4">
          <Link
            className="btn-secondary"
            to="/employees/administration/bulk-excel-upload-step-one"
          >
            Cancel
          </Link>
          <Link
            className="btn-secondary mx-3"
            to="/employees/administration/bulk-excel-upload"
          >
            Previous
          </Link>
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-profile-photo-upload-step-three"
          >
            Next
          </Link>
        </div>
      </div>
      <Dialog
        header="Confirm"
        visible={educationDetails}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterConfirm('educationDetails')}
        onHide={() => onHide('educationDetails')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
