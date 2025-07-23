import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import user from '../../Assets/images/user8.png';
import Plus from '../../Assets/images/plus.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import { Dialog } from 'primereact/dialog';
import Edit from '../../Assets/images/edit.svg';
import View from '../../Assets/images/eyes.svg';
import CheckCircle from '../../Assets/images/close-circle.svg';
import EmployeeImg from '../../Assets/images/user3.png';

export default function CompOffDetail() {
  const [status, setStatus] = useState([]);
  const statusOptions = [
    { label: 'In Progrees', value: 'In Progrees' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' },
  ];
  const navigate = useNavigate();

  const handleTrClick = () => {
    navigate('/leave/comp-off/comp-off-detail/apply-coff');
  };
  const [approveddetail, setApprovedDetail] = useState(false);
  const dialogFuncMap = {
    approveddetail: setApprovedDetail,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const compOffDetailData = [
    {
      dayOfDate: 'Thu,',
      date: '1 Dec 2022',
      overtimeHours: '04 H : 20 M',
      creditDays: '0.5',
      usedDays: '-',
      expireDays: '-',
      balanceDays: '-',
      actionByName: '',
      actionByDate: '',
      status: 'Pending',
    },
    {
      dayOfDate: 'Thu,',
      date: '1 Dec 2022',
      overtimeHours: '04 H : 20 M',
      creditDays: '0.5',
      usedDays: '-',
      expireDays: '-',
      balanceDays: '-',
      actionByName: '',
      actionByDate: '',
      status: 'Pending',
    },
    {
      dayOfDate: 'Thu,',
      date: '1 Dec 2022',
      overtimeHours: '04 H : 20 M',
      creditDays: '0.5',
      usedDays: '-',
      expireDays: '-',
      balanceDays: '-',
      actionByName: '',
      actionByDate: '',
      status: 'Approved',
    },
    {
      dayOfDate: 'Thu,',
      date: '1 Dec 2022',
      overtimeHours: '04 H : 20 M',
      creditDays: '0.5',
      usedDays: '-',
      expireDays: '-',
      balanceDays: '-',
      actionByName: '',
      actionByDate: '',
      status: 'Approved',
    },
    {
      dayOfDate: 'Thu,',
      date: '1 Dec 2022',
      overtimeHours: '04 H : 20 M',
      creditDays: '0.5',
      usedDays: '-',
      expireDays: '-',
      balanceDays: '-',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      dayOfDate: 'Thu,',
      date: '1 Dec 2022',
      overtimeHours: '04 H : 20 M',
      creditDays: '0.5',
      usedDays: '-',
      expireDays: '-',
      balanceDays: '-',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
      status: 'Rejected',
    },
  ];
  const edithandleTrClick = () => {
    navigate('/leave/comp-off/comp-off-detail/edit-coff');
  };
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
          <li>COFF Details</li>
        </ul>
      </div>
      <div className="coff_detail d-flex justify-content-between">
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
            <li className="text-center">
              <p className="mb-1">COFF Credited Days :</p>
              <span>0.5</span>
            </li>
            <li className="text-center">
              <p className="mb-1">COFF Balance Days</p>
              <span>0.5</span>
            </li>
            <li className="text-center">
              <p className="mb-0">COFF Used Days</p>
              <span>0</span>
            </li>
            <li className="text-center">
              <p className="mb-0">COFF Expired Days</p>
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="top_filter_wrap mt-3">
        <div className="row">
          <div className="col-md-12">
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
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-sm-6 order-2 order-sm-1">
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
        <div className="col-sm-6 order-1 order-sm-2">
          <div className="text-sm-end">
            <button
              type="button"
              className="btn-border"
              onClick={() => {
                handleTrClick();
              }}
            >
              <img src={Plus} className="me-2" alt="PlusImage" />
              Add COFF Request
            </button>
          </div>
        </div>
      </div>
      <div className="coff_detail_table">
        <div className="data_table_one">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th scope="col">
                    <span>Date</span>
                  </th>
                  <th scope="col">
                    <span>Overtime/Extra Work Hours</span>
                  </th>
                  <th scope="col">
                    <span>Credit Days</span>
                  </th>
                  <th scope="col">
                    <span>Used Days</span>
                  </th>
                  <th scope="col">
                    <span>Expire Days</span>
                  </th>
                  <th scope="col">
                    <span>Balance Days</span>
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
                {compOffDetailData.map((data, i) => {
                  return (
                    <tr>
                      <td>
                        {data.dayOfDate}
                        <br />
                        {data.date}
                      </td>
                      <td>{data.overtimeHours}</td>
                      <td>{data.creditDays}</td>
                      <td>{data.usedDays}</td>
                      <td>{data.expireDays}</td>
                      <td>{data.balanceDays}</td>
                      {data.actionByName === '' && data.actionByDate === '' ? (
                        <td>-</td>
                      ) : (
                        <td>
                          {data.actionByName}
                          <br />
                          <span className="text_gray">{data.actionByDate}</span>
                        </td>
                      )}
                      <td>
                        {data.status === 'Approved' && (
                          <span className="badge bedge_success">
                            {data.status}
                          </span>
                        )}
                        {data.status === 'Rejected' && (
                          <span className="badge bedge_danger">
                            {data.status}
                          </span>
                        )}
                        {data.status === 'Pending' && (
                          <span className="badge bedge_warning">
                            {data.status}
                          </span>
                        )}
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img
                              src={View}
                              data-inject-svg
                              className=""
                              alt="view"
                              onClick={() => onClick('approveddetail')}
                            />
                          </li>

                          <li>
                            <img
                              src={Edit}
                              data-inject-svg
                              className=""
                              alt="Edit"
                              onClick={() => {
                                edithandleTrClick();
                              }}
                            />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
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

      <Dialog
        header="Approved"
        visible={approveddetail}
        draggable={false}
        resizable={false}
        className="medium_popup approve_popup"
        onHide={() => onHide('approveddetail')}
      >
        <div className="">
          <div className="user_info d-flex align-items-center">
            <img src={EmployeeImg} alt="UserImage" />
            <div className="ms-2 flex-grow-1">
              <h4 className="mb-1">Chintan Raval</h4>
              <span>(Applied by Chintan Raval On 15 jul 2022 • 10:52 AM)</span>
            </div>
          </div>
          <div className="date_leave_type">
            <div className="d-flex flex-wrap">
              <div className="d-flex mb-3">
                <div className="date_box text-center">
                  <div className="month">Aug</div>
                  <div className="date">
                    <p className="mb-0">
                      25 <br /> Mon
                    </p>
                  </div>
                </div>
                <div className="date_box text-center">
                  <div className="month">Aug</div>
                  <div className="date">
                    <p className="mb-0">
                      25 <br /> Mon
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-grow-1">
                <div className="type_info">
                  <h6>Leave Days :</h6>
                  <p>6</p>
                </div>
                <div className="type_info">
                  <h6>Leave Type :</h6>
                  <p>Paid</p>
                </div>
                <div className="type_info">
                  <h6>Leave Name :</h6>
                  <p>Casual Leave</p>
                </div>
              </div>
            </div>
          </div>
          <p className="my-3">No Teammate are on Leave on This Day</p>
          <div className="type_info">
            <h6>Reason :</h6>
            <p>Going to Trip</p>
          </div>
          <div className="approve_user">
            <div className="approve_by d-flex align-items-center">
              <img src={CheckCircle} alt="check" />
              <p className="m-0">Approved by</p>
            </div>
            <div className="user_info d-flex align-items-center mt-3 mb-0">
              <img src={EmployeeImg} width="38" alt="UserImage" />
              <h4 className="mb-0 ps-2">Chintan Raval</h4>
              <span>(Applied by Chintan Raval On 15 jul 2022 • 10:52 AM)</span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
