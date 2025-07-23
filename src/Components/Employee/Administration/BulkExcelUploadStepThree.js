import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImportIcon from '../../../Assets/images/Upload-icon-2.svg';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import DeleteBtn from '../../../Assets/images/DeleteBtn.svg';
import EditIcon from '../../../Assets/images/edit.svg';
import Input from '../../Common/Input';
import { Button } from 'primereact/button';

export default function BulkExcelUploadStepThree() {
  const [employeeDetail, setemployeeDetail] = useState([
    {
      empId: 1,
      empCode: '',
      name: 'Nirmal Sanadiya',
      dob: '31 oct 1999',
      gender: 'Male',
      bloodGroup: 'B+',
      relation: 'Father',
      profession: 'Tailor',
      nationality: 'Indian',
      address: 'Surat',
    },
    {
      empId: 2,
      empCode: 'C1001',
      name: '',
      dob: '31 oct 1999',
      gender: 'Male',
      bloodGroup: 'B+',
      relation: 'Father',
      profession: 'Tailor',
      nationality: 'Indian',
      address: 'Surat',
    },
    {
      empId: 3,
      empCode: 'C1001',
      name: '',
      dob: '31 oct 1999',
      gender: 'Male',
      bloodGroup: 'B+',
      relation: 'Father',
      profession: 'Tailor',
      nationality: 'Indian',
      address: 'Surat',
    },
    {
      empId: 4,
      empCode: 'C1001',
      name: 'Nirmal Sanadiya',
      dob: '31 oct 1999',
      gender: 'Male',
      bloodGroup: 'B+',
      relation: 'Father',
      profession: 'Tailor',
      nationality: 'Indian',
      address: 'Surat',
    },
  ]);

  const onChangeHandler = (item, event) => {
    const empDetail = employeeDetail.map(emp => {
      if (emp.empId === item.empId) {
        return { ...emp, [event.target.name]: event.target.value };
      }
      return emp;
    });
    setemployeeDetail(empDetail);
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
          <li className="completed">
            <div className="icon"></div>
            <span>Excel Field Mapping</span>
          </li>
          <li className="current">
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
            <h6 className="mb-4">Step 3 : Excel Data Preview</h6>
            <ul>
              <li className="mb-4">
                <p className="mb-0 text-light">
                  Please check if all the details valid or not and import users
                </p>
              </li>
            </ul>
          </div>
          <div className="data_table_one input_table excel_preview_table">
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
                      <table id="example" className="display border_teble ">
                        <thead>
                          <tr>
                            <th scope="col">
                              <span>Action</span>
                            </th>
                            <th scope="col">
                              <span>Employee Code</span>
                            </th>
                            <th scope="col">
                              <span>Name</span>
                            </th>
                            <th scope="col">
                              <span>DOB</span>
                            </th>
                            <th scope="col">
                              <span>Gender</span>
                            </th>
                            <th scope="col">
                              <span>Blood Group</span>
                            </th>
                            <th scope="col">
                              <span>Relation</span>
                            </th>
                            <th scope="col">
                              <span>Profession</span>
                            </th>
                            <th scope="col">
                              <span>Nationality</span>
                            </th>
                            <th scope="col">
                              <span>Address</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                            <td>
                              <Input type="text" />
                            </td>
                          </tr>
                          {employeeDetail.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  <ul className="edit_wrap d-flex">
                                    <li>
                                      <Button
                                        tooltip="Upload"
                                        tooltipOptions={{
                                          position: 'bottom',
                                        }}
                                        className="tooltip_button"
                                      >
                                        <img
                                          src={ImportIcon}
                                          alt="ImportIcon"
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
                                      >
                                        <img src={EditIcon} alt="EditIcon" />
                                      </Button>
                                    </li>
                                    <li>
                                      <Button
                                        tooltip="Delete"
                                        tooltipOptions={{
                                          position: 'bottom',
                                        }}
                                        className="tooltip_button"
                                      >
                                        <img src={DeleteBtn} alt="DeleteBtn" />
                                      </Button>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <input
                                    name="empCode"
                                    className="transparent_input"
                                    value={item.empCode}
                                    type="text"
                                    placeholder="The Employee Id Is Already  Present In This Excel File. "
                                    title={
                                      !item.empCode &&
                                      'The Employee Id Is Already  Present In This Excel File. '
                                    }
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.name}
                                    name="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    title={!item.name && 'Enter Name '}
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.dob}
                                    name="dob"
                                    type="text"
                                    placeholder="Enter BOB"
                                    title={!item.dob && 'Enter BOB '}
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.gender}
                                    name="gender"
                                    type="text"
                                    placeholder="Gender"
                                    title={!item.gender && 'Enter gender '}
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.bloodGroup}
                                    name="bloodGroup"
                                    type="text"
                                    placeholder="Enter bloodGroup"
                                    title={
                                      !item.bloodGroup && 'Enter bloodGroup '
                                    }
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.relation}
                                    name="relation"
                                    type="text"
                                    placeholder="Enter relation"
                                    title={!item.relation && 'Enter relation '}
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.profession}
                                    name="profession"
                                    type="text"
                                    placeholder="Enter profession"
                                    title={
                                      !item.profession && 'Enter profession '
                                    }
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.nationality}
                                    name="nationality"
                                    type="text"
                                    placeholder="Enter nationality"
                                    title={
                                      !item.nationality && 'Enter nationality '
                                    }
                                    onChange={e => onChangeHandler(item, e)}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="transparent_input"
                                    value={item.address}
                                    name="address"
                                    type="text"
                                    placeholder="Enter address"
                                    title={!item.address && 'Enter address '}
                                    onChange={e => onChangeHandler(item, e)}
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
              </div>
            </div>
          </div>
        </div>
        <div className="info_line  p-3  mb-0 m-4">
          <p className="mb-0">Total Records : 3</p>
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
            to="/employees/administration/bulk-excel-upload-step-two"
          >
            Previous
          </Link>
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-excel-upload-step-four"
          >
            Import
          </Link>
        </div>
      </div>
    </div>
  );
}
