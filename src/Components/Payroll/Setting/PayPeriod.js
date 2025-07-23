import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Edit from '../../../Assets/images/edit.svg';
export default function PayPeriod() {
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
            <b>Payroll</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Payroll Period</li>
        </ul>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-12">
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
      </div>
      <div className="data_table_one pay_period_table">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th scope="col">
                  <span>Company Name</span>
                </th>
                <th scope="col" className="text-end">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cmcreation Pvt Ltd</td>
                <td>
                  <ul className="edit_wrap d-flex align-items-center justify-content-end">
                    <li>
                      <Link to="/payroll/setting/pay-period/pay-period-edit">
                        <img src={Edit} alt="Edit" />
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
    </>
  );
}
