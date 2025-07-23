import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function BulkExcelUploadStepTwo() {
  const [code, setCode] = useState([]);
  const employeeCode = [
    { label: 'Employee Code', value: 'EC' },
    { label: 'Name', value: 'NM' },
    { label: 'DOB', value: 'DOB' },
    { label: 'Gender', value: 'GD' },
    { label: 'Blood Group', value: 'BG' },
    { label: 'Relation', value: 'Rl' },
    { label: 'Profession', value: 'PF' },
    { label: 'Nationality', value: 'NT' },
    { label: 'Address', value: 'ADR' },
  ];
  const codeHandleChange = e => {
    setCode(e.value);
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
          <li>
            <b>
              <Link to="/employees/administration/bulk-excel-upload">
                Import Excel
              </Link>
            </b>
          </li>
          <li>Import Process</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>Excel Import</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Excel Field Mapping</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Excel Data Preview</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Summary</span>
          </li>
        </ul>
      </div>
      <div className=" bg_white_box import_excel_inner">
        <div className="p-4 pb-0">
          <div className="inner_heading ">
            <h6 className="mb-4">Step 2 : Excel Field Mapping</h6>
            <ul>
              <li className="mb-4">
                <p className="mb-0 text-light">
                  If your Excel file column titles are different from the
                  suggested titles, you need to manually map your columns to the
                  database fields.
                </p>
              </li>
              <li className="mb-4">
                <p className="mb-0 text-light">
                  If you did use the suggested format, the columns are
                  automatically mapped to the related field.
                </p>
              </li>
              <li className="mb-4">
                <p className="mb-1 text-light">
                  Fields From Excel: indicates the column headings from the
                  Excel file
                </p>
                <p className="mb-1 text-light">
                  Mapped To: indicates the actual field names
                </p>
                <p className="mb-1 text-light">
                  First Record: indicates the first data recorded in the Excel
                  file
                </p>
              </li>
            </ul>
          </div>

          <div className="data_table_one employee_list_table">
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
                      <table id="example" className="display border_table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <span>Fields From Excel</span>
                            </th>
                            <th scope="col">
                              <span>Mapped To</span>
                            </th>
                            <th scope="col">
                              <span>First Record</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Employee Code</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>C10001</td>
                          </tr>
                          <tr>
                            <td>Name</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>Nirmal Sanadiya</td>
                          </tr>
                          <tr>
                            <td>DOB</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>01 Oct 1994</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td>Blood Group</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>O+</td>
                          </tr>
                          <tr>
                            <td>Relation</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>Father</td>
                          </tr>
                          <tr>
                            <td>Profession</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>Tailor</td>
                          </tr>
                          <tr>
                            <td>Nationality</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>Indian</td>
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={code}
                                  options={employeeCode}
                                  filter
                                  onChange={e => {
                                    codeHandleChange(e);
                                  }}
                                  placeholder="Select"
                                />
                              </div>
                            </td>
                            <td>Surat</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end p-4">
          <Link
            className="btn-secondary me-3"
            to="/employees/administration/bulk-excel-upload"
          >
            Cancel
          </Link>
          <Link
            className="btn-secondary me-3"
            to="/employees/administration/bulk-excel-upload-step-one"
          >
            Previous
          </Link>
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-excel-upload-step-three"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
