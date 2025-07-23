import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import Input from '../Common/Input';
import TextArea from '../Common/TextArea';

export default function UserRolesPermissionStepOne() {
  const [code, setCode] = useState([]);
  const employeeCode = [
    { label: 'All Employee', value: 'AllEmployee' },
    { label: 'Direct Reportees', value: 'DirectReportees' },
    { label: 'Direct & Indirect Reportees', value: 'DirectIndirectReportees' },
  ];

  const codeHandleChange = e => {
    setCode(e.value);
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', function () {
      var SVGInjector = window.SVGInjector.SVGInjector;
      SVGInjector(document.querySelectorAll('[data-inject-svg]'));
    });
  }, []);

  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} data-inject-svg alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Settings</b>
          </li>
          <li>
            <Link to="/setting/user-roles-permission">
              <b>User & Roles - Permission</b>
            </Link>
          </li>
          <li>Add User Access</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="current">
            <div className="icon"></div>
            <span>Basic Info</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Module Permission</span>
          </li>
        </ul>
      </div>
      <div className="setting_employee_access bg_white_box p-4">
        <div className="setting_headding mb-4">
          <h5>Add User Access</h5>
        </div>
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="form_group">
                <label>User Access Name</label>
                <Input type="text" placeholder="User Access Name" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Employee Access</label>
                <ReactSelectSingle
                  value={code}
                  options={employeeCode}
                  filter
                  onChange={e => {
                    codeHandleChange(e);
                  }}
                  placeholder="Select Employee Access"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Description*</label>
                <TextArea placeholder="Enter Description" rows={1} cols={10} />
              </div>
            </div>
          </div>
        </form>
        <div className="btn_group d-flex justify-content-end">
          <Link
            className="btn-secondary mx-3"
            to="/setting/user-roles-permission"
          >
            Cancel
          </Link>
          <Link
            className="btn-primary"
            to="/setting/User-roles-permission-step-Two"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
