import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Plus from '../../Assets/images/plus.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import { Dialog } from 'primereact/dialog';
import Input from '../Common/Input';
import { Button } from 'primereact/button';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import TextArea from '../Common/TextArea';
import userImage from '../../Assets/images/user8.png';

export default function ProcessCheklist() {
  const [addexitemp, setAddExitEmp] = useState(false);
  const [editcategory, setEditCategory] = useState(false);
  const dialogFuncMap = {
    editcategory: setEditCategory,
    addexitemp: setAddExitEmp,
  };
  const navigate = useNavigate();
  const processCheckListDetail = [
    {
      checklistName: 'Default',
      totalTask: '5',
      description: 'This is Default Template',
      createdByName: 'System',
      createdByDate: '',
      actionDeleteIcon: '',
      actionEditIcon: '',
    },
    {
      checklistName: 'Onboarding',
      totalTask: '4',
      description: 'For Confirmed',
      createdByName: 'Chintan Raval',
      createdByDate: '20 Nov 2022 04:23 PM',
      actionDeleteIcon: DeleteButtonIcon,
      actionEditIcon: EditButtonIcon,
    },
    {
      checklistName: 'General',
      totalTask: '4',
      description: 'For Confirmed',
      createdByName: 'Chintan Raval',
      createdByDate: '20 Nov 2022 04:23 PM',
      actionDeleteIcon: DeleteButtonIcon,
      actionEditIcon: EditButtonIcon,
    },
  ];
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
  const handleTrClick = () => {
    navigate('/setting/process-cheklist-step-two');
  };
  const [dueTypeData, setDueTypeData] = useState([]);
  const [selectChecklist, setSelectChecklist] = useState('');
  const [assignType, setAssignType] = useState('');
  const [dueDayData, setDueDayData] = useState('');
  const DueTypeOption = [
    { label: 'Before', value: 'Before' },
    { label: 'After', value: 'After' },
  ];
  const ChecklistOption = [
    { label: 'Default', value: 'Default' },
    { label: 'Onboarding', value: 'Onboarding' },
    { label: 'General', value: 'General' },
  ];
  const AssignTypeOptionOption = [
    { label: 'Employee', value: 'Employee' },
    { label: 'Reporting Manager', value: 'Reporting Manager' },
    { label: 'User Access', value: 'User Access' },
  ];
  const DueDayOption = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
  ];
  const searchempHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={userImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooterEdit = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          s
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
            <b>Settings</b>
          </li>
          <li>Process Checklist</li>
        </ul>
      </div>
      <div className="letter_temp_top mb-3">
        <div className="row align-items-center">
          <div className="col-sm-4 order-2 order-sm-1">
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
          <div className="col-sm-8 order-1 order-sm-2">
            <div className="letter-right-btn text-sm-end">
              <Link
                className="btn-primary btn me-4"
                onClick={() => onClick('editcategory')}
              >
                <img src={Plus} className="me-2" alt="FilterImage" />
                Add Checklist
              </Link>
              <Link
                className="btn-border btn"
                onClick={() => onClick('addexitemp')}
              >
                <img src={Plus} className="me-2" alt="FilterImage" />
                Add Task
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="data_table_one letter_temp_table">
        <div className="table-responsive employee-code-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Checklist Name</span>
                </th>
                <th>
                  <span>Total Task</span>
                </th>
                <th>
                  <span>Description</span>
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
              {processCheckListDetail.map((user, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="text-secondary"
                      onClick={() => {
                        handleTrClick();
                      }}
                    >
                      {user.checklistName}
                    </td>
                    <td>{user.totalTask}</td>
                    <td>{user.description}</td>
                    <td>
                      <span>{user.createdByName}</span>
                      <br />
                      <span className="text-extraLight">
                        {user.createdByDate}
                      </span>
                    </td>
                    <td>
                      {user.actionDeleteIcon !== '' &&
                      user.DeleteButtonIcon !== '' ? (
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img
                              src={user.actionEditIcon}
                              data-inject-svg
                              className=""
                              alt="editbtn"
                            />
                          </li>
                          <li>
                            <img src={user.actionDeleteIcon} alt="deletebtn" />
                          </li>
                        </ul>
                      ) : (
                        ''
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
          header="Add Checklist"
          visible={editcategory}
          draggable={false}
          resizable={false}
          className="small_popup confirm_popup"
          footer={renderFooterEdit('editcategory')}
          onHide={() => onHide('editcategory')}
        >
          <div className="delate_popup_wrap">
            <div className="edit_category_popup_body">
              <div className="row">
                <div className="col-12">
                  <div className="form_group">
                    <label>Checklist Name</label>
                    <Input type="text" placeholder="Checklist Name" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form_group">
                    <label> Description</label>
                    <TextArea
                      placeholder="Write Description"
                      rows={5}
                      cols={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
        <Dialog
          header="Add Task"
          visible={addexitemp}
          draggable={false}
          resizable={false}
          className="small_popup "
          footer={renderFooter('addexitemp')}
          onHide={() => onHide('addexitemp')}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="form_group">
                <label>Task Name</label>
                <Input type="text" placeholder="Task Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Select Checklist</label>
                <ReactSelectSingle
                  value={selectChecklist}
                  options={ChecklistOption}
                  filter
                  onChange={e => {
                    setSelectChecklist(e.value);
                  }}
                  placeholder="Select Checklist"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Assignee Type</label>
                <ReactSelectSingle
                  value={assignType}
                  options={AssignTypeOptionOption}
                  filter
                  onChange={e => {
                    setAssignType(e.value);
                  }}
                  placeholder="Select Assignee Type"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Due Day</label>
                <div className="d-flex align-items-center">
                  <ReactSelectSingle
                    value={dueDayData}
                    options={DueDayOption}
                    filter
                    onChange={e => {
                      setDueDayData(e.value);
                    }}
                    placeholder="Select Due Day"
                  />
                  <label className="ms-3">Day</label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Due Type</label>
                <div className="d-flex width_process align-items-center">
                  <ReactSelectSingle
                    value={dueTypeData}
                    options={DueTypeOption}
                    filter
                    onChange={e => {
                      setDueTypeData(e.value);
                    }}
                    placeholder="Select Due Type"
                  />
                  <label className="ms-3">Date of Joining</label>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form_group">
                <label>Description</label>
                <TextArea placeholder="Write Description" rows={5} cols={10} />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
