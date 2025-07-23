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

export default function AddAdvance() {
  const [selectReason, setSelectReason] = useState([]);
  const [ComponentType, setComponentType] = useState([]);
  const [AdvanceBased, setAdvanceBased] = useState([]);
  const [EntryType, setEntryType] = useState([]);
  const [ProcessMonthYear, setProcessMonthYear] = useState([]);

  const selectReasonOption = [
    { label: 'Earning', value: 'relocation' },
    { label: 'Deduction', value: 'Deduction' },
  ];
  const ComponentTypeOption = [
    { label: 'Incentive', value: 'Incentive' },
    { label: 'Other Earning', value: 'Other Earning' },
    { label: 'Performance Bonus', value: 'Performance Bonus' },
  ];
  const AdvanceBasedOption = [
    { label: 'Percentage', value: 'Percentage' },
    { label: 'Fixed Amount', value: 'Fixed Amount' },
  ];
  const EntryTypeOption = [
    { label: 'Singel', value: 'Singel' },
    { label: 'Multiple', value: 'Multiple' },
  ];
  const ProcessMonthYearOption = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
    { label: 'Jul - 2022', value: 'Jul - 2022' },
    { label: 'Aug - 2022', value: 'Aug - 2022' },
  ];
  const [postSelect, setPostSelect] = useState([0]);
  const postOptions = [
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
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
          <li>Add Advance</li>
        </ul>
      </div>
      <div className="bg_white_box p-3">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Employee</label>
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
              <label>Month/Year</label>
              <ReactSelectSingle
                value={ProcessMonthYear}
                options={ProcessMonthYearOption}
                filter
                onChange={e => {
                  setProcessMonthYear(e.value);
                }}
                placeholder="Month/Year"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Appliable Amount</label>
              <Input placeholder="Amount" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Advance Based on</label>
              <ReactSelectSingle
                value={AdvanceBased}
                options={AdvanceBasedOption}
                onChange={e => {
                  setAdvanceBased(e.value);
                }}
                placeholder="select Here"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Percentage</label>
              <Input placeholder="Enter Percentage" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Payable Amount</label>
              <Input placeholder="Amount" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form_group">
              <label>Reason*</label>
              <TextArea placeholder="Enter your reason" rows={5} cols={10} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
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
        <div className="d-flex justify-content-end p-3">
          <Link to="/payroll/advance-loan" className="btn-secondary me-2">
            Cancel
          </Link>
          <Link to="/payroll/advance-loan" className="btn-primary">
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}
