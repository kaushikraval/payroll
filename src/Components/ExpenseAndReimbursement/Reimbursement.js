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
import Plus from '../../Assets/images/plus.svg';
import EditIcon from '../../Assets/images/edit.svg';
import DeleteIcon from '../../Assets/images/DeleteBtn.svg';
import EyeIcon from '../../Assets/images/eyes.svg';
import AttachFile from '../../Assets/images/attach-file.svg';
import { Dialog } from 'primereact/dialog';
import ReactCelender from '../Common/ReactCelender';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import UploadImg from '../../Assets/images/Upload-icon.svg';
import FileUploadImg from '../Common/ReactFileUpload';

import { Tag } from 'primereact/tag';

export default function Reimbursement() {
  const [expense, setExpense] = useState([]);
  const expenseOptions = [
    { label: 'Travel Expenses', value: 'CityplusSurat' },
    { label: 'Business Expenses', value: 'VarachhaSurat' },
    { label: 'Food Expenses', value: 'StationSurat' },
    { label: 'Fuel Expenses', value: 'AdajanSurat' },
  ];
  const [expenseType, setExpenseType] = useState([]);
  const expenseTyepOptions = [
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
  const [addExpenseTrip, setAddExpenseTrip] = useState(false);
  const dialogFuncMap = {
    addExpenseTrip: setAddExpenseTrip,
  };
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
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const headerTemplate = options => {
    const { className, chooseButton, cancelButton } = options;
    return (
      <div
        className={className}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };
  const fileUploadRef = useRef();
  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className:
      'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };
  const onTemplateSelect = e => {
    let _totalSize = totalSize;
    e?.files.FileList?.map(file => (_totalSize += file.size));
    setTotalSize(_totalSize);
  };

  const onTemplateUpload = e => {
    let _totalSize = 0;
    e.files.forEach(file => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
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

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };
  const emptyTemplate = () => {
    return (
      <div className="outer_img_border">
        <div className="d-flex align-items-center flex-column">
          <img src={UploadImg} className="me-2" alt="FilterImage" />
          <h6
            style={{ fontWeight: '500', color: '#000' }}
            className="mt-3 mb-2"
          >
            Drag & drop files or Browse
          </h6>
          <p className="mb-0">
            Supported formates: Only ZIP, RAR files are accepted.
          </p>
        </div>
      </div>
    );
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
            <b>Expense & Reimbursement</b>
          </li>
          <li>
            <Link to="/expense-reimbursement/expense-trip">
              <b>Expense & Trip</b>
            </Link>
          </li>
          <li>Reimbursement</li>
        </ul>
      </div>
      <div className="expense_info mb-3">
        <div className="d-flex flex-wrap">
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
            <p className="mb-0">13 Feb 2023 - 15 Feb 2023</p>
          </div>
          <div className="info_box">
            <h6>Mumbai Client</h6>
            <p className="mb-0">Personal Meeting</p>
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
            <Link
              className="btn-primary"
              onClick={() => setAddExpenseTrip(true)}
            >
              <img src={Plus} className="me-2" alt="FilterImage" />
              Add Reimbursement
            </Link>
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
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img src={EyeIcon} alt="EyeIcon" />
                        </li>
                        <li>
                          <img src={EditIcon} alt="EditIcon" />
                        </li>
                        <li>
                          <img src={DeleteIcon} alt="DeleteIcon" />
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
        <div className="d-flex justify-content-end flex-wrap">
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
        className="medium_popup"
        header="Add Expense & Trip"
        visible={addExpenseTrip}
        // style={{ width: '50vw' }}
        onHide={() => setAddExpenseTrip(false)}
        footer={renderFooter('addExpenseTrip')}
      >
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label>Expense Type</label>
              <ReactSelectMultiple
                value={expenseType}
                options={expenseTyepOptions}
                onChange={e => {
                  setExpenseType(e.value);
                }}
                placeholder="Expense Type"
                display="chip"
                maxSelectedLabels={2}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label>From Date</label>
              <ReactCelender value="date" placeholder="Billing Date" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Bill Number</label>
              <Input placeholder="Bill Number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Amount</label>
              <Input placeholder="0.00" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>GST Amount</label>
              <Input placeholder="0.00" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label>Description</label>
              <TextArea placeholder="Write Remark" rows={14} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label>Description</label>
              <div className="upload_wrapper">
                <FileUploadImg
                  ref={fileUploadRef}
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  multiple
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onTemplateUpload}
                  onSelect={onTemplateSelect}
                  onError={onTemplateClear}
                  onClear={onTemplateClear}
                  headerTemplate={headerTemplate}
                  itemTemplate={itemTemplate}
                  emptyTemplate={emptyTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
