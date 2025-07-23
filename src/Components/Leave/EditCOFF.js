import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import user from '../../Assets/images/user8.png';
import ReactCelender from '../Common/ReactCelender';

export default function EditCOFF() {
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
            <Link to="/leave/comp-off">
              <b>COFF</b>
            </Link>
          </li>
          <li>
            <Link to="/leave/comp-off/comp-off-detail">
              <b>COFF Details</b>
            </Link>
          </li>
          <li>Edit COFF</li>
        </ul>
      </div>
      <div className="coff_detail">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="border_line">
              <ul className="d-inline-flex align-items-center text-nowrap">
                <li>
                  <div className="name_wrap d-flex align-items-center">
                    <img src={user} alt="user" />
                    <div>
                      <h6 className="mb-0">Chintan Raval</h6>
                      <p className="mb-0">UX/UI Designer</p>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="form_group mb-0">
                    <label>Select Date</label>
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </li>
                <li className="text-center">
                  <p className="mb-1">Shift :</p>
                  <span>
                    General <br />
                    9:30 AM - 6:30 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="border_line d-flex align-items-center text-nowrap h-100">
              <ul className="d-inline-flex align-items-center justify-content-between flex-grow-1">
                <li className="text-center border-0">
                  <p className="mb-1">Chek In :</p>
                  <span>10:00 AM</span>
                </li>
                <li className="text-center border-0">
                  <p className="mb-1">Chek Out :</p>
                  <span>10:20 PM</span>
                </li>
                <li className="text-center border-0">
                  <p className="mb-1">Actual Work Hours :</p>
                  <span>12 H : 20 M</span>
                </li>
                <li className="text-center border-0">
                  <p className="mb-1">Overtime Hours :</p>
                  <span>04 H : 20 M</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="row">
              <div className="col-md-6">
                <div className="form_group">
                  <label>Credited Days</label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Expiry Date</label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group">
                  <label>Reason</label>
                  <textarea
                    className="form-control"
                    placeholder="Extra Design Work"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end">
          <Link
            className="btn-secondary me-4"
            to="/leave/comp-off/comp-off-detail"
          >
            Cancel
          </Link>
          <Link className="btn-primary" to="/leave/comp-off/comp-off-detail">
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}
