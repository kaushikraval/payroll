import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import userImage from '../../../../Assets/images/user8.png';
import PlusIcon from '../../../../Assets/images/plus.svg';
import TaskCheck from '../../../../Assets/images/task-check.svg';
import TaskCross from '../../../../Assets/images/task-cross.svg';
import EditIcon from '../../../../Assets/images/edit.svg';
import DeleteBtn from '../../../../Assets/images/DeleteBtn.svg';
import { Button } from 'primereact/button';
import Input from 'Components/Common/Input';
import ReactSelectMultiple from '../../../Common/ReactSelectMultiple';
import ReactCelender from '../../../Common/ReactCelender';
import TextArea from '../../../Common/TextArea';

export default function FullAndFinalStepOne() {
  const [assignTask, setAssignTask] = useState(false);
  const [completeTask, setCompleteTask] = useState(false);
  const [addEditTask, setAddEditTask] = useState(false);
  const [assigneeType, setAssigneeType] = useState([]);

  const assigneeTypeOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const assigneeTypeHandleChange = option => {
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
  const dialogFuncMap = {
    assignTask: setAssignTask,
    addEditTask: setAddEditTask,
    completeTask: setCompleteTask,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
        />
        <Button
          label="Confirm"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const renderFootertask = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
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
  const renderFooterCompleteTask = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="No"
          onClick={() => onHide(name)}
          className="btn-secondary"
        />
        <Button
          label="Yes"
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
            <b>Employees</b>
          </li>
          <li>
            <b>Masters</b>
          </li>
          <li>
            <b>
              <Link to="/employees/master/full-and-final">Full & Final</Link>
            </b>
          </li>
          <li>Full & Final Settlement</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="current">
            <div className="icon"></div>
            <span>Pending Activities</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Attendance & Leave</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Payable Settlement</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Finalize</span>
          </li>
        </ul>
      </div>
      <div className="employee_exit_wrap">
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="employee_exit_left bg_white_box p-3 h-100">
              <div className="row">
                <div className="col-sm-5">
                  <div className="profile_img_name d-flex ">
                    <div className="profile_img">
                      <img src={userImage} alt="employee img" />
                    </div>
                    <div className="profile-name">
                      <h6>Chintan Raval</h6>
                      <span className="bedge bedge_primary mb-2">
                        EMP. CODE: 1002
                      </span>
                      <p className="m-0">UI/UX Designer</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <ul>
                    <li>
                      Department<span>Web Designer</span>
                    </li>
                    <li>
                      Location<span>Station</span>
                    </li>
                  </ul>
                  <ul className="mb-0">
                    <li>
                      Date Of Joining<span>04 Jul 2022</span>
                    </li>
                    <li>
                      Probation End Date<span>04 Oct 2022</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="employee_exit_detail bg_white_box p-3 h-100">
              <h6 className="mb-4">Employee Exit Details</h6>
              <ul>
                <li>
                  Notice Given Date<span>05 Oct 2022</span>
                </li>
                <li>
                  Notice Period<span>30 Days</span>
                </li>
                <li>
                  Exit Type<span>Resigned</span>
                </li>
              </ul>
              <ul className="m-0">
                <li>
                  Last Working Date<span>05 Nov 2022</span>
                </li>
                <li>
                  Allowed To Rehire?<span>Yes</span>
                </li>
                <li>
                  Exit Reason<span>Better Job Opportunity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="offbording_tasks bg_white_box h-100">
              <h6>Offbording Tasks</h6>
              <div className="offbording_tasks_body text-center">
                <p>
                  Add a checklist of tasks that needs to be completed as part of
                  exit process.
                </p>
                <button
                  className="btn-primary w-100 mb-3"
                  onClick={() => onClick('addEditTask')}
                >
                  <img src={PlusIcon} className="me-2" alt="Plus Icon" /> Add
                  Task
                </button>
                <button
                  className="btn-border w-100"
                  onClick={() => onClick('assignTask')}
                >
                  Assign Offboarding Task Checklist
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="offbording_tasks_table data_table_one bg_white_box h-100">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>
                        <span>Task Name</span>
                      </th>
                      <th>
                        <span>Due Date</span>
                      </th>
                      <th>
                        <span>Assign By</span>
                      </th>
                      <th>
                        <span>Action By</span>
                      </th>
                      <th>
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={TaskCheck} alt="Task check" />
                      </td>
                      <td>Have An Exit Interview With Your Direct Reprt</td>
                      <td>05 Oct 2022</td>
                      <td>
                        <span
                          className="add_assignee text-secondary"
                          onClick={() => onClick('addEditTask')}
                        >
                          <img src={PlusIcon} alt="Plus Icon" /> Add Assignee
                        </span>
                      </td>
                      <td>06 Aug 2022</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img src={EditIcon} alt="edit icon" />
                          </li>
                          <li>
                            <img src={DeleteBtn} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={TaskCross}
                          alt="Task check"
                          onClick={() => onClick('completeTask')}
                        />
                      </td>
                      <td>Knowledge Tranfer</td>
                      <td>20 Oct 2022</td>
                      <td>
                        <span
                          className="add_assignee text-secondary"
                          onClick={() => onClick('addEditTask')}
                        >
                          <img src={PlusIcon} alt="Plus Icon" /> Add Assignee
                        </span>
                      </td>
                      <td>06 Aug 2022</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img src={EditIcon} alt="edit icon" />
                          </li>
                          <li>
                            <img src={DeleteBtn} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={TaskCheck} alt="Task check" />
                      </td>
                      <td>Return Company Asset</td>
                      <td>05 Nov 2022</td>
                      <td>Rohan Gondaliya</td>
                      <td>06 Aug 2022</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img src={EditIcon} alt="edit icon" />
                          </li>
                          <li>
                            <img src={DeleteBtn} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={TaskCross}
                          alt="Task check"
                          onClick={() => onClick('completeTask')}
                        />
                      </td>
                      <td>Deactive employee’s portal Login</td>
                      <td>20 Oct 2022</td>
                      <td>Rohan Gondaliya</td>
                      <td>06 Aug 2022</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img src={EditIcon} alt="edit icon" />
                          </li>
                          <li>
                            <img src={DeleteBtn} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end mt-4">
        <Link className="btn-secondary" to="/employees/master/full-and-final">
          Cancel
        </Link>
        <Link
          className="btn-primary mx-3"
          to="/employees/master/full-and-final-step-two"
        >
          Next
        </Link>
        <Link className="btn-primary" to="">
          Save
        </Link>
      </div>
      <Dialog
        header="Assign Task"
        visible={assignTask}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterConfirm('assignTask')}
        onHide={() => onHide('assignTask')}
      >
        <div className="delate_popup_wrap text-center">
          <p>
            Do you want to assign offboarding task Checklist to{' '}
            <b>Chintan Raval?</b>
          </p>
        </div>
      </Dialog>

      <Dialog
        header="Confirm"
        visible={completeTask}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterCompleteTask('completeTask')}
        onHide={() => onHide('completeTask')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to mark this task as Completed ?</p>
        </div>
      </Dialog>

      <Dialog
        header="Add Task"
        visible={addEditTask}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFootertask('addEditTask')}
        onHide={() => onHide('addEditTask')}
      >
        <div className="add_task_Wrapper">
          <div className="form_group">
            <label>Task Name</label>
            <Input type="text" placeholder="Task Details" />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label>Assignee Type</label>
                <ReactSelectMultiple
                  value={assigneeType}
                  options={assigneeTypeOption}
                  onChange={e => setAssigneeType(e.value)}
                  optionLabel="name"
                  placeholder="Assignee Type"
                  filter
                  className="multiselect-custom"
                  itemTemplate={assigneeTypeHandleChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label>Due Date </label>
                <ReactCelender value="date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
          </div>
          <div className="form_group">
            <label>Remark</label>
            <TextArea placeholder="Write Description" rows={5} cols={10} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
