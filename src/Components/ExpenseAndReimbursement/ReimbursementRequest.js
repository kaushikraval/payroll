import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import UserImagesFive from '../../Assets/images/user5.png';
import UserImagesSix from '../../Assets/images/user6.png';
import UserImagesSeven from '../../Assets/images/user7.png';
import { Button } from 'primereact/button';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import AttachFile from '../../Assets/images/attach-file.svg';
import { Dialog } from 'primereact/dialog';
import TextArea from '../Common/TextArea';

export default function ReimbursementRequest() {
  const [expense, setExpense] = useState([]);
  const expenseOptions = [
    { label: 'Travel Expenses', value: 'CityplusSurat' },
    { label: 'Business Expenses', value: 'VarachhaSurat' },
    { label: 'Food Expenses', value: 'StationSurat' },
    { label: 'Fuel Expenses', value: 'AdajanSurat' },
  ];

  const [status, setStatus] = useState([]);
  const statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Approved', value: 'Approved' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'Rejected', value: 'Rejected' },
  ];
  const dialogFuncMap = {};
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
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
  const expenseTripDetailData = [
    {
      expenseTypeName: 'Travel Expenses',
      billingDate: '22 June 2022',
      billNumber: 'BH2012',
      description: 'Project Work',
      amount: '2,000.00',
      gstAmount: '-',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      status: 'Approved',
    },
  ];
  const [approveReimbursement, setApproveReimbursement] = useState(false);
  const [rejectReimbursement, setRejectReimbursement] = useState(false);

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
            <b>Expense & Reimbursement</b>
          </li>
          <li>Reimbursement Approval</li>
        </ul>
      </div>
      <div className="expense_info mb-3">
        <div className="d-flex">
          <div className="info_box">
            <h6>Expense & Trip Employees</h6>
            <span className="group_member">
              <Button
                tooltip="Chintan Raval"
                tooltipOptions={{
                  position: 'bottom',
                }}
                className="tooltip_button"
              >
                <img src={UserImagesFive} alt="Reporting" />
              </Button>
              <Button
                tooltip="Chintan Raval"
                tooltipOptions={{
                  position: 'bottom',
                }}
                className="tooltip_button"
              >
                <img src={UserImagesSix} alt="Reporting" />
              </Button>
              <Button
                tooltip="Chintan Raval"
                tooltipOptions={{
                  position: 'bottom',
                }}
                className="tooltip_button"
              >
                <img src={UserImagesSeven} alt="Reporting" />
              </Button>
              <Button
                tooltip="Chintan Raval"
                tooltipOptions={{
                  position: 'bottom',
                }}
                className="tooltip_button"
              >
                <img src={UserImagesFive} alt="Reporting" />
              </Button>
            </span>
          </div>
          <div className="info_box">
            <h6>Date</h6>
            <p>13 Feb 2023 - 15 Feb 2023</p>
          </div>
          <div className="info_box">
            <h6>Mumbai Client</h6>
            <p>Personal Meeting</p>
          </div>
        </div>
      </div>
      <div className="top_filter_wrap">
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={expense}
                    options={expenseOptions}
                    onChange={e => {
                      setExpense(e.value);
                    }}
                    placeholder="Expense Type"
                    display="chip"
                    maxSelectedLabels={2}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectSingle
                    value={status}
                    options={statusOptions}
                    filter
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
      <div className="data_table_one expense_table expense_height">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Expense Type</span>
                </th>
                <th>
                  <span>Billing Date</span>
                </th>
                <th>
                  <span>Bill Number</span>
                </th>
                <th>
                  <span>Description</span>
                </th>
                <th>
                  <span>Amount</span>
                </th>
                <th>
                  <span>Gst Amount</span>
                </th>
                <th>
                  <span>Attachment</span>
                </th>
                <th>
                  <span>Created By</span>
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
              {expenseTripDetailData.map((data, i) => {
                return (
                  <tr>
                    <td>{data.expenseTypeName}</td>
                    <td>{data.billingDate}</td>
                    <td>{data.billNumber}</td>
                    <td>{data.description}</td>
                    <td>{data.amount}</td>
                    <td>-</td>
                    <td>
                      <img src={AttachFile} alt="AttachFile" />
                    </td>
                    <td>
                      <div className="created_date">
                        {data.createdByName}
                        <span className="wrap_text">{data.createdByDate}</span>
                      </div>
                    </td>
                    <td>
                      <div className="created_date">
                        {data.actionByName}
                        <span className="wrap_text">{data.actionByDate}</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_success">{data.status}</span>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex">
                        <li>
                          <i
                            className="pi pi-check-circle active"
                            onClick={() => setApproveReimbursement(true)}
                          ></i>
                        </li>
                        <li>
                          <i
                            className="pi pi-times-circle active"
                            onClick={() => setRejectReimbursement(true)}
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
      <div className="expense_info mt-3">
        <div className="d-flex justify-content-end">
          <div className="info_box">
            <h6>Total Amount</h6>
            <p className="mb-0">2,800.00</p>
          </div>
          <div className="info_box">
            <h6>Approved</h6>
            <p className="mb-0 text_green">2,800.00</p>
          </div>
          <div className="info_box">
            <h6>Pending</h6>
            <p className="mb-0 text_orange">0.00</p>
          </div>
          <div className="info_box">
            <h6>Rejected</h6>
            <p className="mb-0 text_rad">0.00</p>
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
        className="small_popup"
        header="Approve Reimbursement"
        visible={approveReimbursement}
        // style={{ width: '50vw' }}
        onHide={() => setApproveReimbursement(false)}
        footer={renderFooter('approveReimbursement')}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Expense Type :</label>
              <p>Travel Expense</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Date :</label>
              <p>16 Aug 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Amount :</label>
              <p>2000.00</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Project Work</p>
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
        header="Reject Reimbursement"
        visible={rejectReimbursement}
        // style={{ width: '50vw' }}
        onHide={() => setRejectReimbursement(false)}
        footer={renderFooter('rejectReimbursement')}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Expense Type :</label>
              <p>Travel Expense</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Date :</label>
              <p>16 Aug 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Amount :</label>
              <p>2000.00</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Project Work</p>
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
    </>
  );
}
