import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Plus from '../../Assets/images/plus.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import { Dialog } from 'primereact/dialog';
import Input from '../Common/Input';
import { Button } from 'primereact/button';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import TextArea from '../Common/TextArea';

export default function ProcessCheklistStepTwo() {
  const [addexitemp, setAddExitEmp] = useState(false);
  const [editcategory, setEditCategory] = useState(false);
  const dialogFuncMap = {
    editcategory: setEditCategory,
    addexitemp: setAddExitEmp,
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

  const [searchemp, setsearchemp] = useState([]);
  const searchempOption = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ];
  const searchempOptionAfter = [
    { label: 'Before', value: 'Before' },
    { label: 'After', value: 'After' },
  ];

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
          <li>
            <Link to="/setting/process-cheklist">
              <b>Process Cheklist</b>
            </Link>
          </li>
          <li>Task List</li>
        </ul>
      </div>
      <div className="bg_white_box p-3 mb-3">
        <h6 className="m-0">Cheklist - Default</h6>
      </div>
      <div className="letter_temp_top mb-3">
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
              <Link
                className="btn-border"
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
        <div className="table-responsive setting-process-code-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Task Name</span>
                </th>
                <th>
                  <span>Assignee</span>
                </th>
                <th>
                  <span>Due Date</span>
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
                <td>Collect Document From Employee</td>
                <td>-</td>
                <td>Join Date</td>
                <td>-</td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <img
                        src={EditButtonIcon}
                        data-inject-svg
                        className=""
                        alt="editbtn"
                      />
                    </li>
                    <li>
                      <img src={DeleteButtonIcon} alt="delateicon" />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Prepare The System For New Employee</td>
                <td>-</td>
                <td>Join Date</td>
                <td>-</td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <img
                        src={EditButtonIcon}
                        data-inject-svg
                        className=""
                        alt="editbtn"
                      />
                    </li>
                    <li>
                      <img src={DeleteButtonIcon} alt="delateicon" />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Create List Of Task He HAve To Do</td>
                <td>-</td>
                <td>Join Date</td>
                <td>-</td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <img
                        src={EditButtonIcon}
                        data-inject-svg
                        className=""
                        alt="editbtn"
                      />
                    </li>
                    <li>
                      <img src={DeleteButtonIcon} alt="delateicon" />
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Have Introduction Session</td>
                <td>-</td>
                <td>Join Date</td>
                <td>-</td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <img
                        src={EditButtonIcon}
                        data-inject-svg
                        className=""
                        alt="editbtn"
                      />
                    </li>
                    <li>
                      <img src={DeleteButtonIcon} alt="delateicon" />
                    </li>
                  </ul>
                </td>
              </tr>
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
          header="Add Cheklist"
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
                    <label>Cheklist Name</label>
                    <Input type="text" placeholder="Cheklist Name" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form_group">
                    <label> Description</label>
                    <TextArea
                      placeholder="Write Discription"
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
                <label>Select Cheklist</label>
                <ReactSelectMultiple
                  value={searchemp}
                  options={searchempOption}
                  onChange={e => setsearchemp(e.value)}
                  optionLabel="name"
                  placeholder="Select"
                  filter
                  className="multiselect-custom"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Assignee</label>
                <ReactSelectMultiple
                  value={searchemp}
                  options={searchempOption}
                  onChange={e => setsearchemp(e.value)}
                  optionLabel="name"
                  placeholder="Select"
                  filter
                  className="multiselect-custom"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Due Date</label>
                <div className="d-flex align-items-center">
                  <ReactSelectMultiple
                    value={searchemp}
                    options={searchempOption}
                    onChange={e => setsearchemp(e.value)}
                    optionLabel="name"
                    placeholder="Select"
                    filter
                    className="multiselect-custom"
                  />
                  <label className="ms-3">Day</label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Due Type</label>
                <div className="d-flex width_process align-items-center">
                  <ReactSelectMultiple
                    value={searchemp}
                    options={searchempOptionAfter}
                    onChange={e => setsearchemp(e.value)}
                    optionLabel="name"
                    placeholder="Select"
                    filter
                    className="multiselect-custom"
                  />
                  <label className="ms-3">Date of Join</label>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form_group">
                <label>Remark</label>
                <TextArea placeholder="Write Description" rows={5} cols={10} />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
