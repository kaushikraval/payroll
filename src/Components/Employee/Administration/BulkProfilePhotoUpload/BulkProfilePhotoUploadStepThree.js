import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import SuccessfullyImport from '../../../../Assets/images/Successfully-Import.svg';

export default function BulkProfilePhotoUploadStepThree() {
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
          <li className="completed">
            <div className="icon"></div>
            <span>Associate</span>
          </li>
        </ul>
      </div>
      <div className=" bg_white_box  Successfully_Import text-center">
        <img src={SuccessfullyImport} alt="HomeIcon" />
        <h5 className="mt-4">Successfully Import Bulk Photos</h5>
        <p>Updated 49 employee Profile Photos</p>
        <div className="btn_group d-flex justify-content-center p-4">
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-profile-photo-upload"
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
}
