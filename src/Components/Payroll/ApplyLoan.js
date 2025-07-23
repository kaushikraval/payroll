import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import Input from '../Common/Input';
import TextArea from '../Common/TextArea';
import EmployeeImg from '../../Assets/images/user3.png';
import ReactSelectWithImage from '../Common/ReactSelectWithImage';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import UploadImg from '../../Assets/images/Upload-icon.svg';
import FileUploadImg from '../Common/ReactFileUpload';
import ReactCelender from '../Common/ReactCelender';

export default function ApplyLoan() {
  const [AdvanceBased, setAdvanceBased] = useState([]);
  const [LoanType, setLoanType] = useState([]);

  const AdvanceBasedOption = [
    { label: 'Percentage', value: 'Percentage' },
    { label: 'Fixed Amount', value: 'Fixed Amount' },
  ];

  const LoanTypeOption = [
    { label: 'Personal Loan', value: 'Personal Loan' },
    { label: 'Home Loan', value: 'Home Loan' },
    { label: 'Advance Loan', value: 'Advance Loan' },
  ];
  const [postSelect, setPostSelect] = useState([0]);
  const postOptions = [
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
  ];
  const installmentSummary = [
    {
      installmentMonth: 'Sep - 2022',
      principalAmount: '2,500.00',
      interestaPerMonth: '166.67',
      emiAmount: '2,666.67',
      loanBalance: '17,500.00',
      emiDate: '1 Sep 2022',
      status: 'Paid',
    },
    {
      installmentMonth: 'Sep - 2022',
      principalAmount: '2,500.00',
      interestaPerMonth: '166.67',
      emiAmount: '2,666.67',
      loanBalance: '17,500.00',
      emiDate: '1 Sep 2022',
      status: 'Unpaid',
    },
  ];
  const postOptionsTemplate = option => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src={option.src}
          onError={e =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  const selectedPostWrap = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={option.src}
            onError={e =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
  const [totalSize, setTotalSize] = useState(0);
  const toast = useRef(null);

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
            <b>Payroll</b>
          </li>
          <li>Apply Loan</li>
        </ul>
      </div>
      <div className="bg_white_box p-3 mb-3">
        <h6 className="mb-3">Loan Details</h6>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Search Employee</label>
              <ReactSelectWithImage
                value={postSelect}
                isShowClear={false}
                options={postOptions}
                onChange={e => setPostSelect(e.value)}
                optionLabel="name"
                filterBy="name"
                placeholder="Select Employee"
                valueTemplate={selectedPostWrap}
                itemTemplate={postOptionsTemplate}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Loan Type</label>
              <ReactSelectSingle
                value={LoanType}
                options={LoanTypeOption}
                filter
                onChange={e => {
                  setLoanType(e.value);
                }}
                placeholder="Select Here"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Loan Amount</label>
              <Input placeholder="Enter Loan Amount" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Intrest Rate Percentage(Per Annum)</label>
              <Input placeholder="0.0%" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>EMI Installment(Month)</label>
              <Input placeholder="Enter Month" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg_white_box p-3 mb-3">
        <h6 className="mb-3">Loan Status</h6>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="form_group">
                  <label>From Date</label>
                  <ReactCelender value="date" placeholder="DD/MM/YYYY" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group">
                  <label>Description*</label>
                  <TextArea
                    placeholder="Write Description"
                    rows={9}
                    cols={10}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="form_group">
              <label>Attachment</label>
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
      </div>
      <div className="loan_summary_table bg_white_box mb-3">
        <div className="title d-flex p-3 border-bottom flex-lg-row flex-column">
          <h6 className="me-auto mb-0">Loan Installment Summary Details</h6>
          <div className="amount-box">
            <span className="badge mt-2 mt-lg-0 bedge_success me-2">
              Total Paid Amount : 2666.67
            </span>
            <span className="badge bedge_danger mt-2 mt-lg-0">
              Total Unpaid Amount : 18666.66
            </span>
          </div>
        </div>
        <div className="table-responsive">
          <table className="text-nowrap">
            <thead>
              <tr>
                <th>Installment Month</th>
                <th>Principle Amount</th>
                <th>interest Per Month</th>
                <th>EMI Amount</th>
                <th>Loan Balance</th>
                <th>EMI Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {installmentSummary.map(data => {
                return (
                  <tr>
                    <td>{data.installmentMonth}</td>
                    <td>{data.principalAmount}</td>
                    <td>{data.interestaPerMonth}</td>
                    <td>{data.emiAmount}</td>
                    <td>{data.loanBalance}</td>
                    <td>{data.emiDate}</td>
                    <td>
                      <span className="badge bedge_success">{data.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end p-3">
        <Link to="/payroll/advance-loan" className="btn-secondary">
          Cancel
        </Link>
        <Link to="/payroll/advance-loan" className="btn-border mx-2">
          Reject
        </Link>
        <Link to="/payroll/advance-loan" className="btn-primary">
          Approve
        </Link>
      </div>
    </>
  );
}
