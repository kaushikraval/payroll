import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import user from '../../../Assets/images/user8.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import Plus from '../../../Assets/images/plus.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import EditIcon from '../../../Assets/images/edit.svg';
import EyeIcon from '../../../Assets/images/eyes.svg';
export default function OvertimeDetail() {
  const [status, setStatus] = useState([]);
  const [date, setDate] = useState([]);

  const statusOptions = [
    { label: 'In Progrees', value: 'In Progrees' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' },
  ];
  const dateOptions = [
    { label: 'Jan 2022', value: 'Jan 2022' },
    { label: 'Feb 2022', value: 'Feb 2022' },
    { label: 'Mar 2022', value: 'Mar 2022' },
  ];
  const navigate = useNavigate();
  const handleTrClick = () => {
    navigate('/time-and-attendance/overtime-apply');
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
          <li>Overtime Detail</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-xl-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={status}
                    options={statusOptions}
                    onChange={e => {
                      setStatus(e.value);
                    }}
                    placeholder="Status"
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={date}
                    options={dateOptions}
                    onChange={e => {
                      setDate(e.value);
                    }}
                    placeholder="Dec 2022"
                  />
                </div>
              </li>
              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="user_overtime_detail d-flex justify-content-between">
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
              <p className="mb-1">Total Overtime :</p>
              <span>28 H : 30 M</span>
            </li>
            <li>
              <p className="mb-1">Pending Overtime</p>
              <span>08 H : 30 M</span>
            </li>
            <li>
              <p className="mb-0">Approved Overtime</p>
              <span>Approved Overtime</span>
            </li>
            <li>
              <p className="mb-0">Rejected Overtime</p>
              <span>05 H : 00 M</span>
            </li>
          </ul>
        </div>
        <p className="month-right">Dec 2022</p>
      </div>
      <div className="row align-items-center my-3">
        <div className="col-sm-3 order-2 order-sm-1">
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
        <div className="col-sm-9 order-1 order-sm-2">
          <div className="text-end">
            <button
              type="button"
              className="btn-border"
              onClick={() => {
                handleTrClick();
              }}
            >
              <img src={Plus} className="me-2" alt="PlusImage" />
              Add Overtime Request
            </button>
          </div>
        </div>
      </div>
      <div className="overtime_detail_table">
        <div className="data_table_one">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th scope="col">
                    <span>Date</span>
                  </th>
                  <th scope="col">
                    <span>OT Hours</span>
                  </th>
                  <th scope="col">
                    <span>Action By</span>
                  </th>
                  <th scope="col">
                    <span>Status</span>
                  </th>
                  <th scope="col">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Thu,
                    <br /> 1 Dec 2022
                  </td>
                  <td>04 H : 20 M</td>
                  <td>
                    Chirag Sondagar
                    <span className="wrap_text">On 10 Dec 2022 • 08:59 AM</span>
                  </td>
                  <td>
                    <span className="badge bedge_success">Approved</span>
                  </td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EyeIcon} alt="EyeIcon" />
                      </li>
                      <li>
                        <img src={EditIcon} alt="EditIcon" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    Thu,
                    <br /> 1 Dec 2022
                  </td>
                  <td>04 H : 20 M</td>
                  <td>
                    Chirag Sondagar
                    <span className="wrap_text">On 10 Dec 2022 • 08:59 AM</span>
                  </td>
                  <td>
                    <span className="badge bedge_success">Approved</span>
                  </td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EyeIcon} alt="EyeIcon" />
                      </li>
                      <li>
                        <img src={EditIcon} alt="EditIcon" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    Thu,
                    <br /> 1 Dec 2022
                  </td>
                  <td>04 H : 20 M</td>
                  <td>
                    Chirag Sondagar{' '}
                    <span className="wrap_text">On 10 Dec 2022 • 08:59 AM</span>
                  </td>
                  <td>
                    <span className="badge bedge_success">Approved</span>
                  </td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EyeIcon} alt="EyeIcon" />
                      </li>
                      <li>
                        <img src={EditIcon} alt="EditIcon" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    Thu,
                    <br /> 1 Dec 2022
                  </td>
                  <td>04 H : 20 M</td>
                  <td>
                    Chirag Sondagar{' '}
                    <span className="wrap_text">On 10 Dec 2022 • 08:59 AM</span>
                  </td>
                  <td>
                    <span className="badge bedge_success">Approved</span>
                  </td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EyeIcon} alt="EyeIcon" />
                      </li>
                      <li>
                        <img src={EditIcon} alt="EditIcon" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    Thu,
                    <br /> 1 Dec 2022
                  </td>
                  <td>04 H : 20 M</td>
                  <td>
                    Chirag Sondagar{' '}
                    <span className="wrap_text">On 10 Dec 2022 • 08:59 AM</span>
                  </td>
                  <td>
                    <span className="badge bedge_success">Approved</span>
                  </td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EyeIcon} alt="EyeIcon" />
                      </li>
                      <li>
                        <img src={EditIcon} alt="EditIcon" />
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
  );
}
