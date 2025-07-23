import React from 'react';
import { Link } from 'react-router-dom';
import Eyes from '../../../../../Assets/images/eyes.svg';
import Edit from '../../../../../Assets/images/edit.svg';
import LeftArrow from '../../../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../../../Assets/images/chevron-right.svg';
import MobileIcon from '../../../../../Assets/images/mobile.svg';
import DesktopIcon from '../../../../../Assets/images/desktop.svg';
import MapIcon from '../../../../../Assets/images/map.svg';

export default function AttendanceRequest() {
  return (
    <div className="attendance_request_wrapper">
      <div className="attendance_request_inner mb-4">
        <div className="bg_white_box p-3 mb-4">
          <h6 className="m-0">Regularization Requests</h6>
        </div>
        <div className="data_table_one">
          <div className="list_tab_wrap">
            <div className="row align-items-center mb-3">
              <div className="col-sm-6">
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
              <div className="col-sm-6">
                <div className="top_date_wrap">
                  <h6>
                    <button type="button">
                      <img src={LeftArrow} alt="LeftArrow" />
                    </button>
                    July 2022
                    <button type="button">
                      <img src={RightArrow} alt="RightArrow" />
                    </button>
                  </h6>
                </div>
              </div>
            </div>

            <div className="employee_list_table_inner">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <span>Date</span>
                      </th>
                      <th>
                        <span>Request Type</span>
                      </th>
                      <th>
                        <span>In</span>
                      </th>
                      <th>
                        <span>Out</span>
                      </th>
                      <th>
                        <span>Reason</span>
                      </th>
                      <th>
                        <span>Request Date</span>
                      </th>
                      <th>
                        <span>Action By</span>
                      </th>
                      <th>
                        <span>Status</span>
                      </th>
                      <th>
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Wed, <br />
                        30 Nov 2022
                      </td>
                      <td>Check Out</td>
                      <td>-</td>
                      <td>8:12 PM</td>
                      <td>Forgot Out</td>
                      <td>
                        Thu, <br />
                        01 Dec 2022
                      </td>
                      <td>-</td>
                      <td>
                        <span className="badge bedge_warning">Pending</span>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img src={Eyes} alt="eyes" />
                            </li>
                            <li>
                              <img src={Edit} alt="edit" />
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wed, <br />
                        30 Nov 2022
                      </td>
                      <td>Check Out</td>
                      <td>-</td>
                      <td>8:12 PM</td>
                      <td>Forgot Out</td>
                      <td>
                        Thu, <br />
                        01 Dec 2022
                      </td>
                      <td>
                        <p className="m-0">
                          Chirag Sondagar
                          <span className="wrap_text">
                            10 Dec 2022 • 08:59 AM
                          </span>
                        </p>
                      </td>
                      <td>
                        <span className="badge bedge_success">Approved</span>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img src={Eyes} alt="eyes" />
                            </li>
                            <li>
                              <img src={Edit} alt="edit" />
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wed, <br />
                        30 Nov 2022
                      </td>
                      <td>Check In/Out</td>
                      <td>9:30 AM</td>
                      <td>8:12 PM</td>
                      <td>Power Issue</td>
                      <td>
                        Thu, <br />
                        01 Dec 2022
                      </td>
                      <td>
                        <p className="m-0">
                          Chirag Sondagar
                          <span className="wrap_text">
                            10 Dec 2022 • 08:59 AM
                          </span>
                        </p>
                      </td>
                      <td>
                        <span className="badge bedge_danger">Rejected</span>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img src={Eyes} alt="eyes" />
                            </li>
                            <li>
                              <img src={Edit} alt="edit" />
                            </li>
                          </ul>
                        </div>
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
          </div>
        </div>
      </div>
      <div className="attendance_request_inner mb-4">
        <div className="bg_white_box p-3 mb-4">
          <h6 className="m-0">Remote / Web Requests</h6>
        </div>
        <div className="data_table_one">
          <div className="list_tab_wrap">
            <div className="row align-items-center mb-3">
              <div className="col-sm-6">
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
              <div className="col-sm-6">
                <div className="top_date_wrap">
                  <h6>
                    <button type="button">
                      <img src={LeftArrow} alt="LeftArrow" />
                    </button>
                    July 2022
                    <button type="button">
                      <img src={RightArrow} alt="RightArrow" />
                    </button>
                  </h6>
                </div>
              </div>
            </div>

            <div className="employee_list_table_inner">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <span>Date</span>
                      </th>
                      <th>
                        <span>Request Type</span>
                      </th>
                      <th>
                        <span>In</span>
                      </th>
                      <th>
                        <span>Out</span>
                      </th>
                      <th>
                        <span>Reason</span>
                      </th>
                      <th>
                        <span>Request Date</span>
                      </th>
                      <th>
                        <span>Action By</span>
                      </th>
                      <th>
                        <span>Status</span>
                      </th>
                      <th>
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Wed, <br />
                        30 Nov 2022
                      </td>
                      <td>
                        <img src={MobileIcon} alt="Mobile icon" />
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={MapIcon} alt="Map Icon" />
                          <span className="ms-1">9:36 AM</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={MapIcon} alt="Map Icon" />
                          <span className="ms-1">6:18 PM</span>
                        </div>
                      </td>
                      <td>Forgot Out</td>
                      <td>
                        Thu, <br />
                        01 Dec 2022
                      </td>
                      <td>-</td>
                      <td>
                        <span className="badge bedge_warning">Pending</span>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img src={Eyes} alt="eyes" />
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wed, <br />
                        30 Nov 2022
                      </td>
                      <td>
                        <img src={DesktopIcon} alt="Desktop icon" />
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={MapIcon} alt="Map Icon" />
                          <span className="ms-1">9:18 AM</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={MapIcon} alt="Map Icon" />
                          <span className="ms-1">6:56 PM</span>
                        </div>
                      </td>
                      <td>Forgot Out</td>
                      <td>
                        Thu, <br />
                        01 Dec 2022
                      </td>
                      <td>
                        <p className="m-0">
                          Chirag Sondagar
                          <span className="wrap_text">
                            10 Dec 2022 • 08:59 AM
                          </span>
                        </p>
                      </td>
                      <td>
                        <span className="badge bedge_success">Approved</span>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img src={Eyes} alt="eyes" />
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wed, <br />
                        30 Nov 2022
                      </td>
                      <td>
                        <img src={DesktopIcon} alt="Desktop icon" />
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={MapIcon} alt="Map Icon" />
                          <span className="ms-1">9:36 AM</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={MapIcon} alt="Map Icon" />
                          <span className="ms-1">6:18 PM</span>
                        </div>
                      </td>
                      <td>Power Issue</td>
                      <td>
                        Thu, <br />
                        01 Dec 2022
                      </td>
                      <td>
                        <p className="m-0">
                          Chirag Sondagar
                          <span className="wrap_text">
                            10 Dec 2022 • 08:59 AM
                          </span>
                        </p>
                      </td>
                      <td>
                        <span className="badge bedge_danger">Rejected</span>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img src={Eyes} alt="eyes" />
                            </li>
                          </ul>
                        </div>
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
          </div>
        </div>
      </div>
      <div className="attendance_request_inner">
        <div className="bg_white_box p-3 mb-4">
          <h6 className="m-0">WFH / Out Station Requests</h6>
        </div>
        <div className="no_data">
          <div className="alert alert-primary">
            No WFH / Out Station Available.
          </div>
        </div>
      </div>
    </div>
  );
}
