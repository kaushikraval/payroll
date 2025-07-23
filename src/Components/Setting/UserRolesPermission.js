import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Plus from '../../Assets/images/plus.svg';
import UsePlus from '../../Assets/images/use-plus.svg';
import CopyIcon from '../../Assets/images/copy-icon.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import { Button } from 'primereact/button';
export default function UserRolesPermission() {
  const userRoleDetail = [
    {
      userAccessName: 'Super Admin',
      assignEmployeeIcon: UsePlus,
      actionByName: 'Chintan Raval',
      actionByDate: '10 Dec 2022 • 08:59 AM',
      editActionIcon: '',
      copyActionIcon: '',
    },
    {
      userAccessName: 'Hr Executive',
      assignEmployeeIcon: UsePlus,
      actionByName: 'Chintan Raval',
      actionByDate: '10 Dec 2022 • 08:59 AM',
      editActionIcon: EditButtonIcon,
      copyActionIcon: CopyIcon,
    },
    {
      userAccessName: 'Employee',
      assignEmployeeIcon: UsePlus,
      actionByName: 'Chintan Raval',
      actionByDate: '10 Dec 2022 • 08:59 AM',
      editActionIcon: EditButtonIcon,
      copyActionIcon: CopyIcon,
    },
  ];
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
          <li>User & Roles - Permission</li>
        </ul>
      </div>
      <div className="top_filter_wrap mb-3">
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
                to="/setting/User-roles-permission-step-one"
              >
                <img src={Plus} className="me-2" alt="Plus" />
                Add User Access
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="data_table_one import_photo_wrap">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-List"
            role="tabpanel"
            aria-labelledby="pills-List-tab"
          >
            <div className="list_tab_wrap">
              <div className="employee_list_table_inner">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>User Access Name</span>
                        </th>
                        <th scope="col">
                          <span>Assign Employee</span>
                        </th>
                        <th scope="col">
                          <span>Action By</span>
                        </th>
                        <th scope="col">
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userRoleDetail.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{user.userAccessName}</td>
                            <td>
                              <Link to="/setting/user-roles-permission/assign-employee">
                                <span className="add_employee_btn d-flex text-secondary">
                                  <img
                                    src={user.assignEmployeeIcon}
                                    className="me-2"
                                    alt="Plus Icon"
                                  />
                                  Add Employee
                                </span>
                              </Link>
                            </td>
                            <td>
                              <div className="created_date">
                                {user.actionByName}
                                <span className="wrap_text">
                                  {user.actionByDate}
                                </span>
                              </div>
                            </td>
                            <td>
                              {user.editActionIcon !== '' ? (
                                <ul className="edit_wrap d-flex">
                                  <li>
                                    <Button
                                      tooltip="Edit Access & Roles"
                                      tooltipOptions={{
                                        position: 'bottom',
                                      }}
                                      className="tooltip_button"
                                    >
                                      {' '}
                                      <img
                                        src={EditButtonIcon}
                                        alt="EditIcon"
                                      />
                                    </Button>
                                  </li>
                                  <li>
                                    <Button
                                      tooltip="Clone Access & Roles"
                                      tooltipOptions={{
                                        position: 'bottom',
                                      }}
                                      className="tooltip_button"
                                    >
                                      <img src={CopyIcon} alt="EditIcon" />
                                    </Button>
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
          </div>
        </div>
      </div>
    </div>
  );
}
