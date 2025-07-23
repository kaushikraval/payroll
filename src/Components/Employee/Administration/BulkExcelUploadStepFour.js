import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import SuccessfullyImport from '../../../Assets/images/Successfully-Import.svg';

export default function BulkExcelUploadStepFour() {
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
              <Link to="/employees/administration/bulk-excel-upload">
                Import Excel
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
            <span>Excel Import</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Excel Field Mapping</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Excel Data Preview</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Summary</span>
          </li>
        </ul>
      </div>
      <div className=" bg_white_box  Successfully_Import text-center">
        <img src={SuccessfullyImport} alt="SuccessfullyImport" />
        <h5 className="mt-4">Successfully Import Excel file</h5>
        <p>Updated 10 employee family details</p>
        <div className="btn_group d-flex justify-content-center p-4">
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-excel-upload"
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
}
