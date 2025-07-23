import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from '../../Common/Input';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import EditButtonIcon from '../../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';

export default function MasterSetting() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    editCategory: setEditCategory,
    addNew: setAddNew,
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
            <b>Employees</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Miscellaneous Data</li>
        </ul>
      </div>
      <div className="master_setting_wrap">
        <div className="row">
          <div className="col-lg-3">
            <div className="master_category_wrap bg_white_box p-4">
              <div className="master_category_tab">
                <h6>Miscellaneous Categories</h6>
                <input
                  type="search"
                  className="search_box w-100 my-3"
                  placeholder="Search"
                ></input>
                <div
                  className="nav flex-column nav-pills tab_verticle"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-Designation-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Designation"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Designation"
                    aria-selected="true"
                  >
                    Designation
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Department-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Department"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Department"
                    aria-selected="false"
                  >
                    Department
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Grade-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Grade"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Grade"
                    aria-selected="false"
                  >
                    Grade
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Marital_Status-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Marital_Status"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Marital_Status"
                    aria-selected="false"
                  >
                    Marital Status
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Sub_Department-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Sub_Department"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Sub_Department"
                    aria-selected="false"
                  >
                    Sub Department
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Status-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Status"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Status"
                    aria-selected="false"
                  >
                    Status
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tab">
              <div
                className="tab-pane fade show active"
                id="v-pills-Designation"
                role="tabpanel"
                aria-labelledby="v-pills-Designation-tab"
              >
                <div className="tab_result_top d-flex justify-content-between">
                  <div className="tab_result_top_title bg_white_box">
                    <h6 className="m-0">Designation</h6>
                  </div>
                  <button
                    type="button"
                    className="btn-border align-items-center"
                    onClick={() => onClick('addNew')}
                  >
                    <img
                      src={PlusIcon}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    Add New
                  </button>
                </div>
                <div className="tab_result_table">
                  <div className="data_table_one master_code_table">
                    <div className="table-responsive">
                      <table id="example" className="display">
                        <thead>
                          <tr>
                            <th>
                              <span>Description</span>
                            </th>
                            <th>
                              <span>Code</span>
                            </th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Accounting</td>
                            <td>AC</td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li onClick={() => onClick('editCategory')}>
                                  <img src={EditButtonIcon} alt="EditIcon" />
                                </li>
                                <li onClick={() => onClick('deleteDetail')}>
                                  <img
                                    src={DeleteButtonIcon}
                                    alt="DeleteIcon"
                                  />
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Administration</td>
                            <td>ADM</td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li onClick={() => onClick('editCategory')}>
                                  <img src={EditButtonIcon} alt="EditIcon" />
                                </li>
                                <li onClick={() => onClick('deleteDetail')}>
                                  <img
                                    src={DeleteButtonIcon}
                                    alt="DeleteIcon"
                                  />
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Human Resources</td>
                            <td>HR</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Maintenance</td>
                            <td>MN</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Marketing and Advertising</td>
                            <td>MA</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Production</td>
                            <td>P</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>I.T (Information Technology)</td>
                            <td>IT</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Department"
                role="tabpanel"
                aria-labelledby="v-pills-Department-tab"
              >
                <div className="tab_result_top d-flex justify-content-between">
                  <div className="tab_result_top_title bg_white_box">
                    <h6 className="m-0">Department</h6>
                  </div>
                  <button
                    type="button"
                    className="btn-border align-items-center"
                    onClick={() => onClick('addNew')}
                  >
                    <img
                      src={PlusIcon}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    Add New
                  </button>
                </div>
                <div className="tab_result_table">
                  <div className="data_table_one master_code_table">
                    <div className="table-responsive">
                      <table id="example" className="display">
                        <thead>
                          <tr>
                            <th>
                              <span>Description</span>
                            </th>
                            <th>
                              <span>Code</span>
                            </th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Accounting</td>
                            <td>AC</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Administration</td>
                            <td>ADM</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Human Resources</td>
                            <td>HR</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Maintenance</td>
                            <td>MN</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Marketing and Advertising</td>
                            <td>MA</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Production</td>
                            <td>P</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>I.T (Information Technology)</td>
                            <td>IT</td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li onClick={() => onClick('editCategory')}>
                                    <img src={EditButtonIcon} alt="edit_btn" />
                                  </li>
                                  <li onClick={() => onClick('deleteDetail')}>
                                    <img
                                      src={DeleteButtonIcon}
                                      alt="deleteicon"
                                    />
                                  </li>
                                </ul>
                              </div>
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Grade"
                role="tabpanel"
                aria-labelledby="v-pills-Grade-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="v-pills-Marital_Status"
                role="tabpanel"
                aria-labelledby="v-pills-Marital_Status-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="v-pills-Designation"
                role="tabpanel"
                aria-labelledby="v-pills-Designation-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="v-pills-Sub_Department"
                role="tabpanel"
                aria-labelledby="v-pills-Sub_Department-tab"
              ></div>
              <div
                className="tab-pane fade"
                id="v-pills-Status"
                role="tabpanel"
                aria-labelledby="v-pills-Status-tab"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* delete popup */}
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

      {/* edit category */}
      <Dialog
        header="Edit Category"
        visible={editCategory}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterEdit('editCategory')}
        onHide={() => onHide('editCategory')}
      >
        <div className="delate_popup_wrap">
          <div className="edit_category_popup_body">
            <div className="row">
              <div className="col-6">
                <div className="form_group">
                  <label>Description*</label>
                  <Input type="text" placeholder="Accounting" />
                </div>
              </div>
              <div className="col-6">
                <div className="form_group">
                  <label>Code*</label>
                  <Input type="text" placeholder="AC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Add New */}
      <Dialog
        header="Add New"
        visible={addNew}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterEdit('addNew')}
        onHide={() => onHide('addNew')}
      >
        <div className="delate_popup_wrap">
          <div className="edit_category_popup_body">
            <div className="row">
              <div className="col-sm-6">
                <div className="form_group">
                  <label>Description*</label>
                  <Input type="text" placeholder="Accounting" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form_group">
                  <label>Code*</label>
                  <Input type="text" placeholder="AC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
