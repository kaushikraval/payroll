import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import DowanloadButtonIcon from '../../../Assets/images/download.svg';
import EditButtonIcon from '../../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import EmployeeIcon from '../../../Assets/images/use-plus.svg';

export default function PublishForm() {
  const navigate = useNavigate();
  const [deleteDetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const publishFormDetail = [
    {
      id: 1,
      policyName: 'PF Form',
      description: 'PF Form',
      createdByName: 'Chintan Raval',
      createdByDate: '10 Dec 2022 • 08:59 AM',
      assignLogo: EmployeeIcon,
      assignName: 'Add Employee',
      actionDownloadLogo: DowanloadButtonIcon,
      actionEditLogo: EditButtonIcon,
      actionDeleteLogo: DeleteButtonIcon,
    },
    {
      id: 2,
      policyName: 'ESIC Form',
      description: 'ESIC Form',
      createdByName: 'Chintan Raval',
      createdByDate: '10 Dec 2022 • 08:59 AM',
      assignLogo: EmployeeIcon,
      assignName: 'Add Employee',
      actionDownloadLogo: DowanloadButtonIcon,
      actionEditLogo: EditButtonIcon,
      actionDeleteLogo: DeleteButtonIcon,
    },
    {
      id: 3,
      policyName: 'Google Details Form',
      description: 'Google Details Form',
      createdByName: 'Chintan Raval',
      createdByDate: '10 Dec 2022 • 08:59 AM',
      assignLogo: EmployeeIcon,
      assignName: 'Add Employee',
      actionDownloadLogo: DowanloadButtonIcon,
      actionEditLogo: EditButtonIcon,
      actionDeleteLogo: DeleteButtonIcon,
    },
  ];
  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Delete"
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
              <img src={HomeIcon} alt="Homeicon" />
            </Link>
          </li>
          <li>
            <b>Employees</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Policies & Forms</li>
        </ul>
      </div>
      <div className="setting_publicform_wrap">
        <div className="data_table_one employee_form_table">
          <div className="publicform_top mb-3">
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
                    to="/employees/setting/publish-form-inner"
                    className="btn-border"
                  >
                    <img
                      src={PlusIcon}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    Add Policies & Forms
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>No</span>
                  </th>
                  <th>
                    <span>Policy Name</span>
                  </th>
                  <th>
                    <span>Description</span>
                  </th>
                  <th>
                    <span>Created By</span>
                  </th>
                  <th>
                    <span>Assign Employee</span>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {publishFormDetail?.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>{emp.id}</td>
                      <td>{emp.policyName}</td>
                      <td>{emp.description}</td>
                      <td>
                        <div className="created_date">
                          {emp.createdByName}
                          <span className="wrap_text">{emp.createdByDate}</span>
                        </div>
                      </td>
                      <td>
                        <Link
                          className="text-secondary"
                          to="/employees/setting/policies-forms-assign-employee"
                        >
                          <img src={emp.assignLogo} alt="Employee Icon" />
                          {emp.assignName}
                        </Link>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <Button
                              tooltip="Download"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={emp.actionDownloadLogo}
                                data-inject-svg
                                className=""
                                alt="DowanloadIcon"
                              />
                            </Button>
                          </li>
                          <li>
                            <Button
                              tooltip="Edit"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                              onClick={() =>
                                navigate(
                                  '/employees/setting/publish-form-inner',
                                )
                              }
                            >
                              <img
                                src={emp.actionEditLogo}
                                data-inject-svg
                                className=""
                                alt="EditIcon"
                              />
                            </Button>
                          </li>
                          <li onClick={() => onClick('deleteDetail')}>
                            <Button
                              tooltip="Delete"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={emp.actionDeleteLogo}
                                alt="DeleteIcon"
                              />
                            </Button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Dialog
              header="Confirm"
              visible={deleteDetail}
              draggable={false}
              resizable={false}
              className="small_popup confirm_popup"
              footer={renderFooterConfirm('deleteDetail')}
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
