import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import ImportIcon from '../../../../Assets/images/import_img.svg';
import EyesShow from '../../../../Assets/images/eyes.svg';
import DeleteBtn from '../../../../Assets/images/DeleteBtn.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function BulkProfilePhotoUpload() {
  const [educationDetails, setEducationDetails] = useState(false);
  const [logStatus, setLogStatus] = useState(false);
  const dialogFuncMap = {
    educationDetails: setEducationDetails,
    logStatus: setLogStatus,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const employeeImportDetail = [
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: false,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      file: 'Employee Profile Photo.zip',
      type: 'Employee Profile Photo',
      status: true,
      importLogo: EyesShow,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
  ];
  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
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
  const renderFooterLogStatus = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Ok"
          onClick={() => onHide(name)}
          className="btn-primary"
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
            <b>Administration</b>
          </li>
          <li>Import Photo</li>
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
                to="/employees/administration/bulk-profile-photo-upload-step-one"
                className="btn-border"
              >
                <img src={ImportIcon} className="me-2" alt="FilterImage" />
                Import
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
                          <span>File</span>
                        </th>
                        <th scope="col">
                          <span>Type</span>
                        </th>
                        <th scope="col">
                          <span>Status</span>
                        </th>
                        <th scope="col">
                          <span>Import Log</span>
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
                      {employeeImportDetail.map((emp, index) => {
                        return (
                          <tr key={index}>
                            <td>{emp.file}</td>
                            <td>{emp.type}</td>
                            <td>
                              {emp.status === false ? (
                                <div className="flex align-items-center">
                                  <Button
                                    tooltip="Error"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <div className="deactive"></div>
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex align-items-center">
                                  <Button
                                    tooltip="Completed"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <div className="active_completed"></div>
                                  </Button>
                                </div>
                              )}
                            </td>
                            <td>
                              <Button
                                tooltip="View Log Details"
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button"
                              >
                                <img
                                  src={emp.importLogo}
                                  alt="edit"
                                  onClick={() => onClick('logStatus')}
                                />
                              </Button>
                            </td>
                            <td>
                              <div className="created_date">
                                {emp.actionByName}
                                <span className="wrap_text">
                                  {emp.actionByDate}
                                </span>
                              </div>
                            </td>
                            <td>
                              <img
                                src={emp.actionLogo}
                                alt="edit"
                                onClick={() => onClick('educationDetails')}
                              />
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
          <div
            className="tab-pane fade"
            id="pills-Directory"
            role="tabpanel"
            aria-labelledby="pills-Directory-tab"
          >
            <div className="grid_tab_wrap">
              <div className="show_entries mb-3">
                Show
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                entiries
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
      <Dialog
        header="Confirm"
        visible={educationDetails}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterConfirm('educationDetails')}
        onHide={() => onHide('educationDetails')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
      <Dialog
        header="Log Status"
        visible={logStatus}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterLogStatus('logStatus')}
        onHide={() => onHide('logStatus')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Started processing the excel file...</p>
          <p>
            Read 3 rows(s) of data from excel file successfully! Importing data
            from the Excel File Uploaded SuccessFully.
          </p>
        </div>
      </Dialog>
    </div>
  );
}
