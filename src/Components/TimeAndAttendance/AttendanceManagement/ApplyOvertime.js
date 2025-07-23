import TextArea from 'Components/Common/TextArea';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import user from '../../../Assets/images/user8.png';
import ReactCelender from '../../Common/ReactCelender';
export default function ApplyOvertime() {
  return (
    <div>
      <div className="inner_wrapper">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="HomeIcon" />
              </Link>
            </li>
            <li>
              <b>Time & Attendance</b>
            </li>
            <li>
              <b>Attendence Management</b>
            </li>
            <li>
              <Link to="/time-and-attendance/overtime" className="text-dark">
                <b>Overtime</b>
              </Link>
            </li>
            <li>
              <Link
                to="/time-and-attendance/overtime-detail"
                className="text-dark"
              >
                <b>Overtime Detail</b>
              </Link>
            </li>
            <li>Apply Overtime</li>
          </ul>
        </div>
      </div>

      <div className="user_overtime_detail">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <div className="border_line">
              <ul className="d-inline-flex align-items-center">
                <li>
                  <div className="name_wrap d-flex align-items-center">
                    <img src={user} alt="user" />
                    <div>
                      <h6 className="mb-0">Chintan Raval</h6>
                      <p className="mb-0">UX/UI Designer</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="form_group mb-0">
                    <label>Select Date</label>
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </li>

                <li>
                  <p className="mb-0">Shift :</p>
                  <span>05 H : 00 M</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="border_line d-flex align-items-center h-100">
              <ul className="d-flex flex-wrap align-items-center justify-content-between flex-grow-1">
                <li className="border-0">
                  <p className="mb-0">Chek In :</p>
                  <span>05 H : 00 M</span>
                </li>
                <li className="border-0">
                  <p className="mb-0">Chek Out :</p>
                  <span>05 H : 00 M</span>
                </li>
                <li className="border-0">
                  <p className="mb-0">Actual Work Hours :</p>
                  <span>05 H : 00 M</span>
                </li>
                <li className="border-0">
                  <p className="mb-0">Overtime Hours :</p>
                  <span>05 H : 00 M</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="form_group mb-0 final_select">
              <label>Final Overtime Hours</label>
              <div className="d-flex align-items-center">
                <select className="form-select">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
                <p className="mb-0">H :</p>
                <select className="form-select">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
                <p className="mb-0">M</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="form_group">
              <label>Reason</label>
              <TextArea placeholder="Write Discription" rows={5} cols={10} />
            </div>
          </div>
        </div>
        {/* <p className="month-right">Dec 2022</p> */}
        <div className="btn_group d-flex justify-content-end">
          <Link
            className="btn-secondary me-3"
            to="/time-and-attendance/overtime-detail"
          >
            Cancel
          </Link>
          <Link className="btn-primary" to="/time-and-attendance/overtime">
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
