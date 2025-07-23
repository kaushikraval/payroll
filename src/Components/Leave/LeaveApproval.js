import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TextArea from '../Common/TextArea';
import UserImage from '../../Assets/images/user8.png';
import EmployeeImg from '../../Assets/images/user3.png';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import ReactCheckbox from '../Common/ReactCheckbox';
import Edit from '../../Assets/images/edit.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';
import CheckCircle from '../../Assets/images/close-circle.svg';
export default function LeaveApproval() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [leavename, setLeaveName] = useState([]);

  const navigate = useNavigate();
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
  const departmentOptions = [
    { label: 'Web Designing', value: 'WebDesigning' },
    { label: 'UI/UX Design', value: 'UIUXDesign' },
    { label: 'Web Development', value: 'WebDevelopment' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales Department', value: 'SalesDepartment' },
  ];
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const leavenameOptions = [
    { label: 'Casual Leave', value: 'Casual Leave' },
    { label: 'Sick Leave', value: 'Sick Leave' },
    { label: 'Loss Of Pay', value: 'Loss Of Pay' },
    { label: 'Earned Leave', value: 'Earned Leave' },
  ];
  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={UserImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  const [checked, setChecked] = useState();
  const [approveLeave, setApproveLeave] = useState(false);
  const [bulkApproveLeave, setBulkApproveLeave] = useState(false);
  const [rejectLeave, setRejectLeave] = useState(false);
  const [bulkRejectLeave, setBulkRejectLeave] = useState(false);
  const leaveApprovalRequestData = [
    {
      empCode: '1001',
      empFullName: 'Chintan Raval',
      department: 'Web Designer',
      leaveDate: '16 Aug 2022',
      leaveForDay: '1 Day',
      leaveType: 'Paid',
      leaveName: 'Casual Leave',
      appliedByName: 'Chirag Sondagar',
      appliedByDate: 'On 01 Dec 2022 • 08:59 AM',
    },
    {
      empCode: '1002',
      empFullName: 'Chintan Raval',
      department: 'Web Designer',
      leaveDate: '16 Aug 2022',
      leaveForDay: '1 Day',
      leaveType: 'Paid',
      leaveName: 'Casual Leave',
      appliedByName: 'Chirag Sondagar',
      appliedByDate: 'On 01 Dec 2022 • 08:59 AM',
    },
    {
      empCode: '1003',
      empFullName: 'Chintan Raval',
      department: 'Web Designer',
      leaveDate: '16 Aug 2022',
      leaveForDay: '1 Day',
      leaveType: 'Paid',
      leaveName: 'Casual Leave',
      appliedByName: 'Chirag Sondagar',
      appliedByDate: 'On 01 Dec 2022 • 08:59 AM',
    },
    {
      empCode: '1004',
      empFullName: 'Chintan Raval',
      department: 'Web Designer',
      leaveDate: '16 Aug 2022',
      leaveForDay: '1 Day',
      leaveType: 'Paid',
      leaveName: 'Casual Leave',
      appliedByName: 'Chirag Sondagar',
      appliedByDate: 'On 01 Dec 2022 • 08:59 AM',
    },
    {
      empCode: '1005',
      empFullName: 'Chintan Raval',
      department: 'Web Designer',
      leaveDate: '16 Aug 2022',
      leaveForDay: '1 Day',
      leaveType: 'Paid',
      leaveName: 'Casual Leave',
      appliedByName: 'Chirag Sondagar',
      appliedByDate: 'On 01 Dec 2022 • 08:59 AM',
    },
  ];
  const leaveApprovalHistoryData = [
    {
      empCode: '1001',
      empFullName: 'Chintan Raval',
      department: 'Web Designer',
      leaveDate: '16 Aug 2022',
      leaveForDay: '1 Day',
      leaveType: 'Paid',
      leaveName: 'Casual Leave',
      appliedByName: 'Chirag Sondagar',
      appliedByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
    },
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
          <li>Leave Approval</li>
        </ul>
      </div>

      <div className="tab_request_history">
        <TabView>
          <TabPanel header="Request">
            <div className="top_filter_wrap">
              <div className="row">
                <div className="col-xl-12">
                  <ul className="filter_wrapper">
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={reportingAuthority}
                          options={reportingAuthorityOption}
                          onChange={e => setReportingAuthority(e.value)}
                          optionLabel="name"
                          placeholder="Employees"
                          filter
                          className="multiselect-custom"
                          itemTemplate={reportingAuthorityHandleChange}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={department}
                          options={departmentOptions}
                          onChange={e => {
                            setDepartment(e.value);
                          }}
                          placeholder="Department"
                        />
                      </div>
                    </li>

                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={leavename}
                          options={leavenameOptions}
                          onChange={e => {
                            setLeaveName(e.value);
                          }}
                          placeholder="Leave Name"
                        />
                      </div>
                    </li>
                    <li>
                      <button type="button" className="btn-primary">
                        <img
                          src={FilterIcon}
                          className="me-2"
                          alt="FilterImage"
                        />
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
                    className="btn-border me-3"
                    onClick={() => setBulkApproveLeave(true)}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn-border"
                    onClick={() => setBulkRejectLeave(true)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
            <div className="leave_request_table">
              <div className="data_table_one">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th scope="col">
                          <ReactCheckbox
                            onChange={e => setChecked(e.checked)}
                            checked={checked}
                          />
                          <span className="ps-2">Emp.Code</span>
                        </th>
                        <th scope="col">
                          <span>Full Name</span>
                        </th>
                        <th scope="col">
                          <span>Department</span>
                        </th>
                        <th scope="col">
                          <span>Leave Date</span>
                        </th>

                        <th scope="col">
                          <span>Leave Type</span>
                        </th>
                        <th scope="col">
                          <span>Leave Name</span>
                        </th>
                        <th scope="col">
                          <span>Applied By</span>
                        </th>
                        <th scope="col">
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveApprovalRequestData.map((data, i) => {
                        return (
                          <tr>
                            <td>
                              <ReactCheckbox
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              />
                              <span className="ms-2">{data.empCode}</span>
                            </td>
                            <td>
                              <div className="name_wrap">
                                <img src={EmployeeImg} alt="UserImage" />
                                <span>{data.empFullName}</span>
                              </div>
                            </td>
                            <td>{data.department}</td>
                            <td>
                              {data.leaveDate}
                              <br />
                              <span className="text_gray">
                                {data.leaveForDay}
                              </span>
                            </td>
                            <td>{data.leaveType}</td>
                            <td>{data.leaveName}</td>

                            <td>
                              {data.appliedByName} <br />
                              <span className="text_gray">
                                {data.appliedByDate}
                              </span>
                            </td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li>
                                  <img
                                    src={CheckCircle}
                                    data-inject-svg
                                    className=""
                                    alt="save"
                                    onClick={() => setApproveLeave(true)}
                                  />
                                </li>
                                <li>
                                  <img
                                    src={cancelIcon}
                                    data-inject-svg
                                    className=""
                                    alt="cancel"
                                    onClick={() => setRejectLeave(true)}
                                  />
                                </li>
                                <li>
                                  <img
                                    src={Edit}
                                    data-inject-svg
                                    className=""
                                    alt="Edit"
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
          </TabPanel>
          <TabPanel header="History">
            <div className="top_filter_wrap">
              <div className="row">
                <div className="col-xl-12">
                  <ul className="filter_wrapper">
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={reportingAuthority}
                          options={reportingAuthorityOption}
                          onChange={e => setReportingAuthority(e.value)}
                          optionLabel="name"
                          placeholder="Employees"
                          filter
                          className="multiselect-custom"
                          itemTemplate={reportingAuthorityHandleChange}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={department}
                          options={departmentOptions}
                          onChange={e => {
                            setDepartment(e.value);
                          }}
                          placeholder="Department"
                        />
                      </div>
                    </li>

                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={leavename}
                          options={leavenameOptions}
                          onChange={e => {
                            setLeaveName(e.value);
                          }}
                          placeholder="Leave Name"
                        />
                      </div>
                    </li>
                    <li>
                      <button type="button" className="btn-primary">
                        <img
                          src={FilterIcon}
                          className="me-2"
                          alt="FilterImage"
                        />
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
                    className="btn-border me-3"
                    onClick={() => setBulkApproveLeave(true)}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn-border"
                    onClick={() => setBulkRejectLeave(true)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
            <div className="leave_request_table">
              <div className="data_table_one">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Emp.Code</span>
                        </th>
                        <th scope="col">
                          <span>Full Name</span>
                        </th>
                        <th scope="col">
                          <span>Department</span>
                        </th>
                        <th scope="col">
                          <span>Leave Date</span>
                        </th>

                        <th scope="col">
                          <span>Leave Type</span>
                        </th>
                        <th scope="col">
                          <span>Leave Name</span>
                        </th>
                        <th scope="col">
                          <span>Applied By</span>
                        </th>
                        <th scope="col">
                          <span>Status</span>
                        </th>
                        <th scope="col">
                          <span>Action By</span>
                        </th>
                        <th scope="col">
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveApprovalHistoryData.map((data, i) => {
                        return (
                          <tr key={i}>
                            <td>
                              <span className="ms-2">{data.empCode}</span>
                            </td>
                            <td>
                              <div className="name_wrap">
                                <img src={EmployeeImg} alt="UserImage" />
                                <span>{data.empFullName}</span>
                              </div>
                            </td>
                            <td>{data.department}</td>
                            <td>
                              {data.leaveDate}
                              <br />
                              <span className="text_gray">
                                {data.leaveForDay}
                              </span>
                            </td>
                            <td>{data.leaveType}</td>
                            <td>{data.leaveName}</td>

                            <td>
                              {data.appliedByName} <br />
                              <span className="text_gray">
                                {data.appliedByDate}
                              </span>
                            </td>
                            <td>
                              <span className="badge bedge_success">
                                {data.status}
                              </span>
                            </td>
                            <td>
                              {data.actionByName} <br />
                              <span className="text_gray">
                                {data.actionByDate}
                              </span>
                            </td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li>
                                  <i
                                    className="pi pi-eye"
                                    onClick={() => onClick('approveddetail')}
                                  ></i>
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
          </TabPanel>
        </TabView>
      </div>
      <Dialog
        className="small_popup"
        header="Approve Leave"
        visible={approveLeave}
        // style={{ width: '50vw' }}
        onHide={() => setApproveLeave(false)}
        footer={renderFooter('approveLeave')}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Employee Name :</label>
              <p>Chintan Patel</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Date :</label>
              <p>16 Aug 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Days :</label>
              <p>1</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Name :</label>
              <p>Casual Leave</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Personal </p>
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Approval Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Reject Leave"
        visible={rejectLeave}
        // style={{ width: '50vw' }}
        onHide={() => setRejectLeave(false)}
        footer={renderFooter('rejectLeave')}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Employee Name :</label>
              <p>Chintan Patel</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Date :</label>
              <p>25 Aug - 30 Aug 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Days :</label>
              <p>5</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Name :</label>
              <p>Earned Leave</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Family Function</p>
            </div>
          </div>

          <div className="col-12">
            <div className="form_group">
              <label>Reject Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Bulk Approve Leave Requests"
        visible={bulkApproveLeave}
        onHide={() => setBulkApproveLeave(false)}
        footer={renderFooter('bulkApproveLeave')}
      >
        <p className="text-center">Do You Want to Approve 4 Leave Requests?</p>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Bulk Reject Leave Requests"
        visible={bulkRejectLeave}
        onHide={() => setBulkRejectLeave(false)}
        footer={renderFooter('bulkRejectLeave')}
      >
        <p className="text-center">Do You Want to Approve 4 Leave Requests?</p>
      </Dialog>

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
              <div className="d-flex justify-content-between flex-wrap flex-grow-1">
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
