import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import EditButtonIcon from '../../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import DownloadIcon from '../../../Assets/images/downloadicon-blue.svg';
import { Button } from 'primereact/button';
import Input from 'Components/Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import ReactCelender from '../../Common/ReactCelender';

export default function HolidayList() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [addHolidayGroup, setAddHolidayGroup] = useState(false);
  const [holidayType, setHolidayType] = useState([]);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    addHolidayGroup: setAddHolidayGroup,
  };
  const holidayTypeOption = [
    { label: 'General', value: 'General' },
    { label: 'Restricted', value: 'Restricted' },
    { label: 'Public', value: 'Public' },
  ];
  const holidayTypeHandleChange = e => {
    setHolidayType(e.value);
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
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
            <b>Time & Attendance</b>
          </li>
          <li>
            <b>Shift Management</b>
          </li>
          <li>Shift & Days</li>
          <li>Holiday List</li>
        </ul>
      </div>
      <div className="holiday_list_wrap">
        <div className="bg_white_box p-3 mb-3">
          <h6 className="m-0">2022 Holiday List</h6>
        </div>
        <div className="holiday_list_inner">
          <div className="holiday_list_top mb-3">
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
                <div className="d-flex align-items-center justify-content-end">
                  <button className="btn-border">
                    <img src={DownloadIcon} alt="Download Arrow" />
                  </button>
                  <button
                    type="button"
                    className="btn-primary ms-3"
                    onClick={() => onClick('addHolidayGroup')}
                  >
                    <img
                      src={PlusIcon}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    Add Holiday
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="data_table_one holiday_table_wrap">
            <div className="table-responsive">
              <table id="example" className="display">
                <thead>
                  <tr>
                    <th>
                      <span>Holiday</span>
                    </th>
                    <th>
                      <span>Holiday Type</span>
                    </th>
                    <th>
                      <span>Date</span>
                    </th>
                    <th>
                      <span>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Makar Sankranti</td>
                    <td>General</td>
                    <td>14 Jan 2022</td>
                    <td>
                      <ul className="edit_wrap d-flex">
                        <li>
                          <buttom type="button">
                            <img
                              src={EditButtonIcon}
                              data-inject-svg
                              className=""
                              alt="edit_btn"
                            />
                          </buttom>
                        </li>
                        <li onClick={() => onClick('deleteDetail')}>
                          <img src={DeleteButtonIcon} alt="delete_btn" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Ganesh Visharjan</td>
                    <td>General</td>
                    <td>15 Jan 2022</td>
                    <td>
                      <ul className="edit_wrap d-flex">
                        <li>
                          <buttom type="button">
                            <img
                              src={EditButtonIcon}
                              data-inject-svg
                              className=""
                              alt="edit_btn"
                            />
                          </buttom>
                        </li>
                        <li onClick={() => onClick('deleteDetail')}>
                          <img src={DeleteButtonIcon} alt="delete_btn" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Dhuleti </td>
                    <td>Restricted</td>
                    <td>18 Mar 2022</td>
                    <td>
                      <ul className="edit_wrap d-flex">
                        <li>
                          <buttom type="button">
                            <img
                              src={EditButtonIcon}
                              data-inject-svg
                              className=""
                              alt="edit_btn"
                            />
                          </buttom>
                        </li>
                        <li onClick={() => onClick('deleteDetail')}>
                          <img src={DeleteButtonIcon} alt="delete_btn" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Raksha Bandhan</td>
                    <td>General</td>
                    <td>11 Aug 2022</td>
                    <td>
                      <ul className="edit_wrap d-flex">
                        <li>
                          <buttom type="button">
                            <img
                              src={EditButtonIcon}
                              data-inject-svg
                              className=""
                              alt="edit_btn"
                            />
                          </buttom>
                        </li>
                        <li onClick={() => onClick('deleteDetail')}>
                          <img src={DeleteButtonIcon} alt="delete_btn" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Independance Day</td>
                    <td>General</td>
                    <td>15 Aug 2022</td>
                    <td>
                      <ul className="edit_wrap d-flex">
                        <li>
                          <buttom type="button">
                            <img
                              src={EditButtonIcon}
                              data-inject-svg
                              className=""
                              alt="edit_btn"
                            />
                          </buttom>
                        </li>
                        <li onClick={() => onClick('deleteDetail')}>
                          <img src={DeleteButtonIcon} alt="delete_btn" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <Dialog
                header="Add Holiday"
                visible={addHolidayGroup}
                draggable={false}
                resizable={false}
                className="small_popup"
                footer={renderFooter('addHolidayGroup')}
                onHide={() => onHide('addHolidayGroup')}
              >
                <div className="add_holiday_popup">
                  <div className="form_group">
                    <label>Holiday Name</label>
                    <Input type="text" placeholder="Enter Holiday Name" />
                  </div>
                  <div className="form_group">
                    <label>Holiday Group Description</label>
                    <ReactSelectSingle
                      value={holidayType}
                      options={holidayTypeOption}
                      onChange={e => {
                        holidayTypeHandleChange(e);
                      }}
                      placeholder="Select"
                    />
                  </div>
                  <div className="form_group">
                    <label>Date</label>
                    <ReactCelender value="date" placeholder="DD/MM/YYYY" />
                  </div>
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
    </div>
  );
}
