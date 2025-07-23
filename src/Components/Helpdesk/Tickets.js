import React, { useRef, useState } from 'react';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { Link } from 'react-router-dom';
import TicketImg1 from '../../Assets/images/ticket_img1.svg';
import TicketImg2 from '../../Assets/images/ticket_img2.svg';
import TicketImg3 from '../../Assets/images/ticket_img3.svg';
import TicketImg4 from '../../Assets/images/ticket_img4.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import HelpUser from '../../Assets/images/helpuser.png';
import { Dialog } from 'primereact/dialog';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import { useTranslation } from 'react-i18next';
import UserImage from '../../Assets/images/user8.png';
import Plus from '../../Assets/images/plus.svg';
import { Button } from 'primereact/button';
import Input from '../Common/Input';
import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from 'react-quill-emoji';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactCheckbox from '../Common/ReactCheckbox';
import DeleteIcon from '../../Assets/images/DeleteBtn.svg';
import { FileUpload } from 'primereact/fileupload';

export default function Tickets() {
  const [value, setValue] = useState('');
  Quill.register(
    {
      'formats/emoji': quillEmoji.EmojiBlot,
      'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
      'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
      'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
    },
    true,
  );
  const uploadOptions = { label: 'Uplaod', icon: 'pi pi-paperclip' };
  const toast = useRef(null);
  const onBasicUpload = () => {
    toast.current.show({
      icon: 'pi pi-upload',
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  };
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [status, setStatus] = useState([]);
  const [searchEmp, setSearchEmp] = useState([]);
  const [selectReason, setSelectReason] = useState([]);
  const [educationDetails, setEducationDetails] = useState(false);
  const [addExitEmp, setAddExitEmp] = useState(false);
  const dialogFuncMap = {
    educationDetails: setEducationDetails,
    addExitEmp: setAddExitEmp,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const departmentOptions = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
  ];

  const statusOptions = [
    { label: 'Open', value: 'Open' },
    { label: 'Due', value: 'Due' },
    { label: 'Completed', value: 'Completed' },
  ];

  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const designationOptions = [
    { label: 'Project Breeze.', value: 'ProjectBreeze' },
    { label: 'Command Program.', value: 'CommandProgram' },
    { label: 'Project Point.', value: 'ProjectPoint' },
    { label: 'Project Mecha.', value: 'ProjectMecha' },
    { label: 'Program Pad.', value: 'ProgramPad' },
  ];
  const searchempOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const newTicketData = [
    {
      ticketNo: 1,
      ticketDetail: 'Need to update Declaration',
      category: 'HR',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'High',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      ticketNo: 2,
      ticketDetail: 'My Mouse Is Not Working.',
      category: 'System & IT Networks',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'High',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      ticketNo: 3,
      ticketDetail: 'About My Salary Revision',
      category: 'Payroll',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'Medium',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
  ];
  const inProgressData = [
    {
      ticketNo: 1,
      ticketDetail: 'Need to update Declaration',
      category: 'HR',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'High',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      ticketNo: 2,
      ticketDetail: 'My Mouse Is Not Working.',
      category: 'System & IT Networks',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'High',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      ticketNo: 3,
      ticketDetail: 'About My Salary Revision',
      category: 'Payroll',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'Medium',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
  ];
  const resolvedData = [
    {
      ticketNo: 1,
      ticketDetail: 'Need to update Declaration',
      category: 'HR',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'High',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      ticketNo: 2,
      ticketDetail: 'My Mouse Is Not Working.',
      category: 'System & IT Networks',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'High',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      ticketNo: 3,
      ticketDetail: 'About My Salary Revision',
      category: 'Payroll',
      assignee: 'Chintan Raval',
      dueDate: '22 Feb 2022',
      priority: 'Medium',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
  ];
  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label={t('buttonTitle.cancel')}
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label={t('buttonTitle.delete')}
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  const searchempHandleChange = option => {
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
          label={t('buttonTitle.cancel')}
          onClick={() => onHide(name)}
          className="btn-secondary mx-3"
        />
        <Button
          label={t('buttonTitle.save')}
          className="btn-primary m-0"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
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
            <b>Helpdesk</b>
          </li>
          <li>Tickets</li>
        </ul>
      </div>
      <div className="task_statistics bg_white_box p-4">
        <div className="task_statistics_headding">
          <h5>Ticket Statistics</h5>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img">
                <img src={TicketImg1} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>100</h4>
                <p>Total Ticket</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img task_img_red ">
                <img src={TicketImg2} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>125</h4>
                <p>Due Ticket</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img task_img_green">
                <img src={TicketImg3} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>70</h4>
                <p>Resolved Ticket</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img task_img_yellow ">
                <img src={TicketImg4} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>15</h4>
                <p>Pending Ticket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top_filter_wrap mt-4">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setReportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder={t('title.employees')}
                    filter
                    className="multiselect-custom"
                    itemTemplate={reportingAuthorityHandleChange}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={status}
                    options={statusOptions}
                    onChange={e => {
                      setStatus(e.value);
                    }}
                    placeholder={t('workposttype.status')}
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
                    placeholder={t('task.priority')}
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
              onClick={() => onClick('addExitEmp')}
            >
              <img src={Plus} className="me-2" alt="FilterImage" />
              Add Ticket
            </button>
          </div>
        </div>
      </div>
      <div className="data_table_one tickets_table">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Ticket No.</span>
                </th>
                <th>
                  <span>Ticket Details</span>
                </th>
                <th>
                  <span>Category</span>
                </th>
                <th>
                  <span>Assignee</span>
                </th>
                <th>
                  <span>Due Date</span>
                </th>
                <th>
                  <span>Priority</span>
                </th>
                <th>
                  <span>Created By</span>
                </th>
                <th>
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="action_tr py-md-4">
                  <span className="badge bedge_primary">New</span>
                </td>
              </tr>
              {newTicketData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="main_check_wrap mb-0">
                        <div className="epics_checkbox">
                          <ReactCheckbox
                            inputId="PTApplicable"
                            name="Applicable"
                            onChange={e => setChecked(e.checked)}
                            checked={checked}
                          />
                          <label className="ms-2" htmlFor="PTApplicable">
                            {data.ticketNo}
                          </label>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link to="/helpdesk/tickets-chat">
                        {data.ticketDetail}
                      </Link>
                    </td>
                    <td>{data.category}</td>
                    <td>
                      <div className="name_wrap">
                        <img src={HelpUser} alt="UserImage" />
                        <span>{data.assignee}</span>
                      </div>
                    </td>
                    <td>{data.dueDate}</td>
                    <td>
                      {data.priority === 'High' && (
                        <span className="badge bedge_success">
                          {data.priority}
                        </span>
                      )}
                      {data.priority === 'Medium' && (
                        <span className="badge bedge_warning">
                          {data.priority}
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="created_date">
                        {data.createdByName}
                        <span className="wrap_text">{data.createdByDate}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img
                            src={DeleteIcon}
                            onClick={() => onClick('educationDetails')}
                            alt="EyeIcon"
                          />
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan={8} className="action_tr py-md-4">
                  <span className="badge bedge_success">Assigned</span>
                </td>
              </tr>
              <tr>
                <td colSpan={8} className="task_text py-4">
                  <p>There is no ticket in the Assigned Status.</p>
                </td>
              </tr>

              <tr>
                <td colSpan={8} className="action_tr py-md-4">
                  <span className="badge bedge_warning">In Progress</span>
                </td>
              </tr>
              {inProgressData.map((data, index) => {
                return (
                  <tr>
                    <td>
                      <div className="main_check_wrap mb-0">
                        <div className="epics_checkbox">
                          <ReactCheckbox
                            inputId="PTApplicable"
                            name="Applicable"
                            onChange={e => setChecked(e.checked)}
                            checked={checked}
                          />
                          <label className="ms-2" htmlFor="PTApplicable">
                            {data.ticketNo}
                          </label>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link>{data.ticketDetail}</Link>
                    </td>
                    <td>{data.category}</td>
                    <td>
                      <div className="name_wrap">
                        <img src={HelpUser} alt="UserImage" />
                        <span>{data.assignee}</span>
                      </div>
                    </td>
                    <td>{data.dueDate}</td>
                    <td>
                      {data.priority === 'High' && (
                        <span className="badge bedge_success">
                          {data.priority}
                        </span>
                      )}
                      {data.priority === 'Medium' && (
                        <span className="badge bedge_warning">
                          {data.priority}
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="created_date">
                        {data.createdByName}
                        <span className="wrap_text">{data.createdByDate}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img
                            src={DeleteIcon}
                            onClick={() => onClick('educationDetails')}
                            alt="EyeIcon"
                          />
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={8} className="action_tr py-md-4">
                  <span className="badge bedge_success">Resolved</span>
                </td>
              </tr>
              {resolvedData.map((data, i) => {
                return (
                  <tr>
                    <td>
                      <div className="main_check_wrap mb-0">
                        <div className="epics_checkbox">
                          <ReactCheckbox
                            inputId="PTApplicable"
                            name="Applicable"
                            onChange={e => setChecked(e.checked)}
                            checked={checked}
                          />
                          <label className="ms-2" htmlFor="PTApplicable">
                            {data.ticketNo}
                          </label>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link>{data.ticketDetail}</Link>
                    </td>
                    <td>{data.category}</td>
                    <td>
                      <div className="name_wrap">
                        <img src={HelpUser} alt="UserImage" />
                        <span>{data.assignee}</span>
                      </div>
                    </td>
                    <td>{data.dueDate}</td>
                    <td>
                      {data.priority === 'High' && (
                        <span className="badge bedge_success">
                          {data.priority}
                        </span>
                      )}
                      {data.priority === 'Medium' && (
                        <span className="badge bedge_warning">
                          {data.priority}
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="created_date">
                        {data.createdByName}
                        <span className="wrap_text">{data.createdByDate}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img
                            src={DeleteIcon}
                            onClick={() => onClick('educationDetails')}
                            alt="EyeIcon"
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

      <Dialog
        header="Add Ticket"
        visible={addExitEmp}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooter('addExitEmp')}
        onHide={() => onHide('addExitEmp')}
      >
        <div className="edit_task_popup">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="form_group">
                <label>Ticket Category</label>
                <ReactSelectSingle
                  value={selectReason}
                  options={designationOptions}
                  filter
                  onChange={e => {
                    setSelectReason(e.value);
                  }}
                  placeholder="XYZ"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form_group">
                <label>Ticket Details</label>
                <Input type="text" placeholder="Marketing" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form_group">
                <label>Ticket Assignee</label>
                <ReactSelectMultiple
                  value={searchEmp}
                  options={searchempOption}
                  onChange={e => setSearchEmp(e.value)}
                  optionLabel="name"
                  placeholder="Select Task Followers"
                  filter
                  className="multiselect-custom"
                  itemTemplate={searchempHandleChange}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form_group">
                <label>Ticket Priority</label>
                <ReactSelectSingle
                  value={selectReason}
                  options={departmentOptions}
                  filter
                  onChange={e => {
                    setSelectReason(e.value);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form_group">
                <label>Ticket Due Date</label>
                <ReactCelender value="date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form_group custom_attach">
                <label>Logo Upload</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  accept="image/*"
                  maxFileSize={1000000}
                  chooseOptions={uploadOptions}
                  onUpload={onBasicUpload}
                  chooseLabel="Logo Upload"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form_group">
                <label>Description</label>
                <ReactQuill
                  theme="snow"
                  modules={{
                    toolbar: {
                      container: [
                        ['bold', 'italic', 'underline'], // toggled buttons
                        ['link', 'image'],
                        ['emoji'],
                      ],
                    },
                    'emoji-toolbar': true,
                    'emoji-shortname': true,
                  }}
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header={t('title.confirm')}
        visible={educationDetails}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterConfirm('educationDetails')}
        onHide={() => onHide('educationDetails')}
      >
        <div className="delate_popup_wrap text-center">
          <p>{t('title.confirm_message')}</p>
        </div>
      </Dialog>
    </div>
  );
}
