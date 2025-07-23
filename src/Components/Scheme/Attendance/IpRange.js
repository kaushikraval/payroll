import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Plus from '../../../Assets/images/plus.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import EditButtonIcon from '../../../Assets/images/edit.svg';
import EmployeeIcon from '../../../Assets/images/use-plus.svg';

export default function IpRange() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
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
  const ipRangeDetail = [
    {
      networkName: 'Mota Varachha office',
      ipAddress: '49.36.82.176 - 49.36.82.180',
      assignEmployeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
    {
      networkName: 'Adajan office',
      ipAddress: '27.54.182.197 - 27.54.182.210',
      assignEmployeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
    {
      networkName: 'Station office',
      ipAddress: '43.40.82.176 - 43.40.82.180',
      assignEmployeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
  ];
  return (
    <div className="inner_wrapper">
      <div className="iprange_wrap">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="HomeIcon" />
              </Link>
            </li>
            <li>
              <b>Scheme</b>
            </li>
            <li>
              <b>Attendance</b>
            </li>
            <li>IP Range</li>
          </ul>
        </div>
        <div className="iprange_top mb-3">
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
                  to="/scheme/attendance/create-ip-range"
                  className="btn-border"
                >
                  <img src={Plus} className="me-2" alt="FilterImage" />
                  Add IP Range
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one iprange_table">
          <div className="table-responsive employee-code-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Network Name</span>
                  </th>
                  <th>
                    <span>IP Address</span>
                  </th>
                  <th>
                    <span>Assign Employee</span>
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
                {ipRangeDetail.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.networkName}</td>
                      <td>{user.ipAddress}</td>
                      <td>
                        <Link
                          className="text-secondary"
                          to="/scheme/attendance/ip-range/assign-employee"
                        >
                          <img
                            src={user.assignEmployeeIcon}
                            alt="Employee Icon"
                          />{' '}
                          Add Employee
                        </Link>
                      </td>
                      <td>
                        {user.actionByName}
                        <span className="wrap_text">{user.actionByDate}</span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <Link to="/scheme/attendance/create-ip-range">
                              <img
                                src={user.editActionIcon}
                                data-inject-svg
                                alt="EditImage"
                              />
                            </Link>
                          </li>
                          <li onClick={() => setDeleteDetail(true)}>
                            <img
                              src={user.deleteActionIcon}
                              alt="DeleteImage"
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
      <Dialog
        header="Confirm"
        visible={deleteDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setDeleteDetail(false)}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
