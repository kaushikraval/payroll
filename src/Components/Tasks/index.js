import React, { useState } from 'react';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Listicon1 from '../../Assets/images/list_icon_1.png';
import Listicon2 from '../../Assets/images/list_icon_2.png';
import Listicon3 from '../../Assets/images/list_icon_3.png';
import { Link } from 'react-router-dom';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import ReactCelender from '../Common/ReactCelender';
import Input from '../Common/Input';
import UserImage from '../../Assets/images/user8.png';
import { Button } from 'primereact/button';
import FilterIcon from '../../Assets/images/filter.svg';
import Plus from '../../Assets/images/plus.svg';
import { Dialog } from 'primereact/dialog';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import TaskList from './TaskList';
import ReactQuill, { Quill } from 'react-quill';
import { useTranslation } from 'react-i18next';
import 'react-quill/dist/quill.snow.css';
import 'react-quill-emoji/dist/quill-emoji.css';
import quillEmoji from 'react-quill-emoji';

export default function Task() {
  const { t } = useTranslation();
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [searchEmp, setSearchEmp] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [status, setStatus] = useState([]);
  const [educationDetails, setEducationDetails] = useState(false);
  const [addExitEmp, setAddExitEmp] = useState(false);
  const [selectReason, setSelectReason] = useState([]);
  const dialogFuncMap = {
    educationDetails: setEducationDetails,
    addExitEmp: setAddExitEmp,
  };
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
  const designationOptions = [
    { label: 'Project Breeze.', value: 'ProjectBreeze' },
    { label: 'Command Program.', value: 'CommandProgram' },
    { label: 'Project Point.', value: 'ProjectPoint' },
    { label: 'Project Mecha.', value: 'ProjectMecha' },
    { label: 'Program Pad.', value: 'ProgramPad' },
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
  const searchempOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
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
      <div className="d-flex justify-content-end">
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
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>{t('task.title')}</li>
        </ul>
      </div>
      <div className="task_statistics bg_white_box p-3">
        <div className="task_statistics_headding">
          <h5>{t('task.task_statistics')}</h5>
        </div>
        <div className="row mt-4">
          <div className="col-sm-4 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img flex-shrink-0">
                <img src={Listicon1} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>100</h4>
                <p>{t('task.open_task')}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img task_img_yellow flex-shrink-0">
                <img src={Listicon2} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>125</h4>
                <p>{t('task.due_task')}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="d-flex align-items-center task_statistics_inner">
              <div className="task_img task_img_green flex-shrink-0">
                <img src={Listicon3} alt="HomeIcon" />
              </div>
              <div className="task_text">
                <h4>70</h4>
                <p>{t('task.completed_task')}</p>
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
                <div className="form_group">
                  <ReactSelectMultiple
                    value={designation}
                    options={designationOptions}
                    onChange={e => {
                      setDesignation(e.value);
                    }}
                    placeholder={t('task.project_label')}
                  />
                </div>
              </li>
              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  {t('leave.filter')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="data_table_one employee_exit_table">
        <div className="employee_exit_top mb-3">
          <div className="row align-items-center">
            <div className="col-sm-6 order-2 order-sm-1">
              <div className="show_entries">
                {t('title.show')}
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                {t('title.entries')}
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
                  {t('task.add_task')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <TaskList onClick={onClick} />
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

      {/* popup */}
      <Dialog
        header={t('task.edit_task')}
        visible={addExitEmp}
        draggable={false}
        resizable={false}
        className="small_popup"
        footer={renderFooter('addExitEmp')}
        onHide={() => onHide('addExitEmp')}
      >
        <div className="edit_task_popup">
          <div className="row">
            <div className="col-md-12">
              <div className="form_group">
                <label>{t('task.task_name')}</label>
                <Input
                  type="text"
                  value={t('task.task_name_value')}
                  placeholder={t('task.task_name_placeholder')}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form_group">
                <label>{t('employee_document.description_label')}</label>
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
            <div className="col-md-6">
              <div className="form_group">
                <label>{t('task.task_due_date')}</label>
                <ReactCelender
                  value="date"
                  placeholder={t('myProfile.select_date')}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>{t('task.project_name')}</label>
                <ReactSelectSingle
                  value={selectReason}
                  options={designationOptions}
                  filter
                  onChange={e => {
                    setSelectReason(e.value);
                  }}
                  placeholder={t('projectTitle')}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>{t('task.assignee')}</label>
                <ReactSelectMultiple
                  value={searchEmp}
                  options={searchempOption}
                  onChange={e => setSearchEmp(e.value)}
                  optionLabel="name"
                  placeholder={t('task.employees_placeholder')}
                  filter
                  className="multiselect-custom"
                  itemTemplate={searchempHandleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>{t('task.task_followers')}</label>
                <ReactSelectMultiple
                  value={searchEmp}
                  options={searchempOption}
                  onChange={e => setSearchEmp(e.value)}
                  optionLabel="name"
                  placeholder={t('task.task_followers_placeholder')}
                  filter
                  className="multiselect-custom"
                  itemTemplate={searchempHandleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form_group">
                <label>{t('task.priority')}</label>
                <ReactSelectSingle
                  value={selectReason}
                  options={departmentOptions}
                  filter
                  onChange={e => {
                    setSelectReason(e.value);
                  }}
                  placeholder={t(
                    'employee_profile_detail.blood_group_placeholder',
                  )}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>{t('workposttype.status')}</label>
                <ReactSelectSingle
                  value={selectReason}
                  options={statusOptions}
                  filter
                  onChange={e => {
                    setSelectReason(e.value);
                  }}
                  placeholder={t(
                    'employee_profile_detail.blood_group_placeholder',
                  )}
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
