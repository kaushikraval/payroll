import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import Leave from './../Employee/Master/EmployeeList/EmployeeProfileDetail/Leave';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
export default function LeaveSummary() {
  const [date, setDate] = useState([]);
  const dateOptions = [
    { label: 'Jan 2022 - Dec 2022', value: '' },
    { label: 'Jan 2022 - Dec 2022', value: '' },
    { label: 'Jan 2022 - Dec 2022', value: '' },
  ];
  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Leave</b>
          </li>
          <li>
            <Link to="/leave/leave-balance">
              <b>Leave Transaction</b>
            </Link>
          </li>
          <li>Leave Summary</li>
        </ul>
      </div>
      <div className="user_wrap">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="d-flex align-items-center">
              <div className="employee_img">
                <img src={EmployeeImg} alt="user" />
              </div>
              <div className="employee_text">
                <p className="m-0">
                  Dhaval Patel <br /> <span>UX/UI Designer</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex flex-wrap justify-content-md-end">
              <div className="form_group mb-2 me-2">
                <ReactSelectMultiple
                  value={date}
                  options={dateOptions}
                  onChange={e => {
                    setDate(e.value);
                  }}
                  placeholder="Jan 2022 - Dec 2022"
                />
              </div>
              <Link
                to="/leave/leave-transaction/leave-apply"
                className="btn-primary mb-2"
              >
                Apply Leave
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Leave />
    </>
  );
}
