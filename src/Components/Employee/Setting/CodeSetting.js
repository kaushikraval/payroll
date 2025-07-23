import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ReactRadioButton from '../../Common/ReactRadioButton';
import Input from '../../Common/Input';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import EditButtonIcon from '../../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';

export default function CodeSetting() {
  const [isEditCode, setIsEditCode] = useState('No');
  const [personalInformation, setPersonalInformation] = useState(false);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [addNewCode, setAddNewCode] = useState(false);
  const dialogFuncMap = {
    addNewCode: setAddNewCode,
    personalInformation: setPersonalInformation,
    deleteDetail: setDeleteDetail,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  // const applicablestatusoption = [
  //   { label: 'All', value: 'all' },
  //   { label: 'Confirmed', value: 'Confirmed' },
  //   { label: 'Probation', value: 'Probation' },
  //   { label: 'Trainee', value: 'Trainee' },
  // ];
  // const applicablestatusHandleChange = e => {
  //   setapplicablestatus(e.value);
  // };
  const employeeCodeDetail = [
    {
      name: 'Default Series',
      seriesStart: '1',
      example: '1',
      active: 'Yes',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: '',
      deleteActionLogo: '',
    },
    {
      name: 'Manual',
      seriesStart: '-',
      example: '-',
      active: 'Yes',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: '',
      deleteActionLogo: '',
    },
    {
      name: 'OoZee',
      seriesStart: '1100',
      example: 'CO1100C',
      active: 'Yes',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      name: 'CodeZee',
      seriesStart: '1000',
      example: 'CO1000P',
      active: 'Yes',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
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
            <b>Setting</b>
          </li>
          <li>Employee Code</li>
        </ul>
      </div>
      <div className="code_setting_wrap">
        <div className="code_seeting_top mb-3">
          <div className="row align-items-center">
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
                  className="btn-border align-items-center"
                  onClick={() => onClick('addNewCode')}
                >
                  <img
                    src={PlusIcon}
                    data-inject-svg
                    className="me-2"
                    alt="PlusImage"
                  />
                  Add Employee Code
                </button>
                <Dialog
                  header="Add Employee Code"
                  visible={addNewCode}
                  draggable={false}
                  resizable={false}
                  className="setting_popup"
                  footer={renderFooter('addNewCode')}
                  onHide={() => onHide('addNewCode')}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Name*</label>
                        <Input type="text" placeholder="Codezee" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Series Star*</label>
                        <Input type="number" placeholder="1000" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label className="mb-3">Active*</label>
                        <div className="radio_button_wrapper d-flex">
                          <div className="radio_button d-flex">
                            <ReactRadioButton
                              inputId="editcode"
                              name="editcode"
                              value="Yes"
                              onChange={e => setIsEditCode(e.value)}
                              checked={isEditCode === 'Yes'}
                            />
                            <label className="m-0" htmlFor="editcode">
                              Yes
                            </label>
                          </div>
                          <div className="radio_button d-flex">
                            <ReactRadioButton
                              inputId="editcode1"
                              name="editcode1"
                              value="No"
                              onChange={e => setIsEditCode(e.value)}
                              checked={isEditCode === 'No'}
                            />
                            <label className="m-0" htmlFor="internationalEmp1">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6>Employee Code Format</h6>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Prefix*</label>
                        <Input type="text" placeholder="CO" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Numeric Series*</label>
                        <Input type="number" placeholder="1000" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Suffix*</label>
                        <Input type="text" placeholder="C" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Example*</label>
                        <Input type="text" placeholder="CO1000C" />
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one employee_code_table">
          <div className="table-responsive employee-code-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Name</span>
                  </th>
                  <th>
                    <span>Series Start</span>
                  </th>
                  <th>
                    <span>Example</span>
                  </th>
                  <th>
                    <span>Active</span>
                  </th>
                  <th>
                    <span>Action By</span>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeCodeDetail.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>{emp.name}</td>
                      <td>{emp.seriesStart}</td>
                      <td>{emp.example}</td>
                      <td>
                        <span className="badge bedge_success">
                          {emp.active}
                        </span>
                      </td>
                      <td>
                        <div className="created_date">
                          {emp.actionByName}
                          <span className="wrap_text">{emp.actionByDate}</span>
                        </div>
                      </td>
                      <td>
                        {emp.editActionLogo === '' &&
                        emp.deleteActionLogo === '' ? (
                          '-'
                        ) : (
                          <ul className="edit_wrap d-flex">
                            <li onClick={() => onClick('personalInformation')}>
                              <img
                                src={emp.editActionLogo}
                                data-inject-svg
                                className=""
                                alt="EditIcon"
                              />
                            </li>
                            <li onClick={() => onClick('deleteDetail')}>
                              <img
                                src={emp.deleteActionLogo}
                                alt="DeleteIcon"
                              />
                            </li>
                          </ul>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Dialog
              header="Edit Code"
              visible={personalInformation}
              draggable={false}
              resizable={false}
              className="setting_popup"
              footer={renderFooter('personalInformation')}
              onHide={() => onHide('personalInformation')}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Name*</label>
                    <Input type="text" placeholder="Codezee" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Series Star*</label>
                    <Input type="number" placeholder="1000" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label className="mb-3">Active*</label>
                    <div className="radio_button_wrapper d-flex">
                      <div className="radio_button d-flex">
                        <ReactRadioButton
                          inputId="editcode"
                          name="editcode"
                          value="Yes"
                          onChange={e => setIsEditCode(e.value)}
                          checked={isEditCode === 'Yes'}
                        />
                        <label className="m-0" htmlFor="internationalEmp">
                          Yes
                        </label>
                      </div>
                      <div className="radio_button d-flex">
                        <ReactRadioButton
                          inputId="editcode1"
                          name="editcode1"
                          value="No"
                          onChange={e => setIsEditCode(e.value)}
                          checked={isEditCode === 'No'}
                        />
                        <label className="m-0" htmlFor="internationalEmp1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <h6>Employee Code Format</h6>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Prefix*</label>
                    <Input type="text" placeholder="CO" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Numeric Series*</label>
                    <Input type="number" placeholder="1000" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Suffix*</label>
                    <Input type="text" placeholder="C" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Example*</label>
                    <Input type="text" placeholder="CO1000C" />
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header="Confirm"
              visible={deleteDetail}
              draggable={false}
              resizable={false}
              className="small_popup confirm_popup"
              footer={renderFooter('deleteDetail')}
              onHide={() => onHide('deleteDetail')}
            >
              <div className="delate_popup_wrap text-center">
                <p>Are you sure you want to delete?</p>
              </div>
            </Dialog>
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
      </div>
    </div>
  );
}
