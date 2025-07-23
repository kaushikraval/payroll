import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EmployeeImg from '../../Assets/images/user3.png';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactSelectWithImage from '../Common/ReactSelectWithImage';
import ReactCelender from '../Common/ReactCelender';
import FileUploadImg from '../Common/ReactFileUpload';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import UploadImg from '../../Assets/images/Upload-icon.svg';
import TextArea from 'Components/Common/TextArea';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
export default function EditLeave() {
  const [leaveSelect, setLeaveSelect] = useState([0]);
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const [date, setDate] = useState(null);
  const [ingredient, setIngredient] = useState('');
  const leaveOptions = [
    { name: 'Privillage Leave', code: '' },
    { name: 'Sick Leave', code: '' },
    { name: 'Casual Leave', code: '' },
    { name: 'Earned Leave', code: '' },
    { name: 'Short Leave', code: '' },
    { name: 'Maternity Leave', code: '' },
    { name: 'Paternity Leave', code: '' },
  ];
  const leaveOptionsTemplate = option => {
    return (
      <div className="leave_item d-flex align-items-center">
        <div className="baged privillage_leave me-2"></div>
        <div>{option.name}</div>
      </div>
    );
  };
  const selectedLeaveWrap = (option, props) => {
    if (option) {
      return (
        <div className="leave_item d-flex align-items-center">
          <div className="baged privillage_leave me-2"></div>
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
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
            <b>Leave</b>
          </li>
          <li>
            <Link to="/leave/leave-balance">
              <b>Leave Transaction</b>
            </Link>
          </li>
          <li>Edit Leave</li>
        </ul>
      </div>
      <div className="leave_form p-3 bg-white">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="user_info d-flex align-items-center">
                  <img src={EmployeeImg} width="50" alt="user" />
                  <div className="ms-3 flex-grow-1">
                    <h5 className="mb-0">Chintan Raval</h5>
                    <p className="mb-0">UX/UI Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Select available leave Name</label>
                  <ReactSelectWithImage
                    value={leaveSelect}
                    isShowClear={false}
                    options={leaveOptions}
                    onChange={e => setLeaveSelect(e.value)}
                    optionLabel="name"
                    filterBy="name"
                    placeholder="Select Employee"
                    valueTemplate={selectedLeaveWrap}
                    itemTemplate={leaveOptionsTemplate}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>From Date</label>
                  <ReactCelender value="date" placeholder="Select Date" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>To Date</label>
                  <ReactCelender value="date" placeholder="Select Date" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={e => setIngredient(e.value)}
                      checked={ingredient === 'Cheese'}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      Full Day
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="Mushroom"
                      onChange={e => setIngredient(e.value)}
                      checked={ingredient === 'Mushroom'}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      First Half
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient3"
                      name="pizza"
                      value="Pepper"
                      onChange={e => setIngredient(e.value)}
                      checked={ingredient === 'Pepper'}
                    />
                    <label htmlFor="ingredient3" className="ml-2">
                      Second Half
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-ms-12">
                <div className="leave_desc mt-3">
                  <p className="mb-0">Leave request is for 4 days.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
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

          <div className="col-sm-12">
            <div className="form_group">
              <label>Reason</label>
              <TextArea
                placeholder="Type here leave reason"
                rows={5}
                cols={10}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="btn_group d-flex justify-content-end p-4">
              <Link className="btn-secondary me-3" to="">
                Cancel
              </Link>
              <Link className="btn-secondary me-3" to="">
                Save
              </Link>
              <Link className="btn-primary" to="">
                Cancel Leave
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="calender_leave">
        <div className="row">
          <div className="col-sm-3">
            <div className="calender_info p-3 bg-white">
              <h6 className="text-center">Leave Calender</h6>
              <Calendar
                value={date}
                onChange={e => setDate(e.value)}
                inline
                showWeek
              />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="leave_table">
              <div className="data_table_one">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Emp.Name</span>
                        </th>
                        <th scope="col">
                          <span>Leave Type</span>
                        </th>
                        <th scope="col">
                          <span>Leave Name</span>
                        </th>
                        <th scope="col">
                          <span>Leave Date</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Paid</td>
                        <td>Sick Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Paid</td>
                        <td>Sick Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Paid</td>
                        <td>Sick Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Paid</td>
                        <td>Casual Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Unpaid</td>
                        <td>Casual Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Unpaid</td>
                        <td>Casual Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>Chintan Raval</span>
                          </div>
                        </td>
                        <td>Unpaid</td>
                        <td>Sick Leave</td>
                        <td>
                          05 Jul 2022 <br />
                          <span className="text_gray">1 Day</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
