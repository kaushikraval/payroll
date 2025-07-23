import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { TabView, TabPanel } from 'primereact/tabview';
import PlusIcon from '../../../Assets/images/plus.svg';
import Edit from '../../../Assets/images/edit.svg';
import Deleat from '../../../Assets/images/DeleteBtn.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
export default function SalaryComponents() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const earningSalaryComponents = [
    {
      companyName: 'Basic',
      payslipName: 'Basic',
      calculationType: 'System',
      showInPayslip: 'Yes',
      applicableInCf: 'Yes',
      applicableInEsi: 'Yes',
      applicableInOt: 'Yes',
      isTaxable: 'Yes',
      status: 'Active',
    },
  ];
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
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Payroll</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Salary Components</li>
        </ul>
      </div>
      <div className="salary_components_tab">
        <TabView>
          <TabPanel header="Earnings">
            <div className="row align-items-center mb-3">
              <div className="col-sm-4 order-2 order-sm-1">
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
              <div className="col-sm-8 order-1 order-sm-2">
                <div className="text-sm-end">
                  <Link
                    to="/payroll/setting/salary-components/add-earning-component"
                    className="btn-primary"
                  >
                    <img className="me-1" src={PlusIcon} alt="Icon" />
                    Add Earning Component
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one earning_deduction">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span>Component Name</span>
                      </th>
                      <th scope="col">
                        <span>Payslip Name</span>
                      </th>
                      <th scope="col">
                        <span>Calculation Type</span>
                      </th>
                      <th scope="col">
                        <span>Show In Payslip</span>
                      </th>
                      <th scope="col">
                        <span>Applicable in PF</span>
                      </th>
                      <th scope="col">
                        <span>Applicable in ESI</span>
                      </th>
                      <th scope="col">
                        <span>Applicable in OT</span>
                      </th>
                      <th scope="col">
                        <span>Is Taxable</span>
                      </th>

                      <th scope="col">
                        <span>Status</span>
                      </th>
                      <th scope="col">
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {earningSalaryComponents.map(data => {
                      return (
                        <tr>
                          <td>{data.companyName}</td>
                          <td>{data.payslipName}</td>
                          <td>{data.calculationType}</td>
                          <td>{data.showInPayslip}</td>
                          <td>{data.applicableInCf}</td>
                          <td>{data.applicableInEsi}</td>
                          <td>{data.applicableInOt}</td>
                          <td>{data.isTaxable}</td>
                          <td>
                            <span className="badge bedge_success">
                              {data.status}
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <li>
                                  <img src={Edit} alt="Edit" />
                                </li>
                              </li>
                              <li
                                onClick={() => {
                                  setDeleteDetail(true);
                                }}
                              >
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
          </TabPanel>
          <TabPanel header="Deduction">
            <div className="row align-items-center mb-3">
              <div className="col-sm-4 order-2 order-sm-1">
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
              <div className="col-sm-8 order-1 order-sm-2">
                <div className="text-sm-end">
                  <Link
                    to="/payroll/setting/salary-components/add-deducation-component"
                    className="btn-primary"
                  >
                    <img className="me-1" src={PlusIcon} alt="Icon" />
                    Add Deducation Component
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one earning_deduction">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span>Component Name</span>
                      </th>
                      <th scope="col">
                        <span>Payslip Name</span>
                      </th>
                      <th scope="col">
                        <span>Calculation Type</span>
                      </th>
                      <th scope="col">
                        <span>Show In Payslip</span>
                      </th>
                      <th scope="col">
                        <span>Status</span>
                      </th>
                      <th scope="col">
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PT</td>
                      <td>Professional Tax</td>
                      <td>System</td>
                      <td>Yes</td>
                      <td>
                        <span className="badge bedge_success">Active</span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex align-items-center">
                          <li>
                            <li>
                              <img src={Edit} alt="Edit" />
                            </li>
                          </li>
                          <li
                            onClick={() => {
                              setDeleteDetail(true);
                            }}
                          >
                            <img src={Deleat} alt="Deleat" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
          </TabPanel>
        </TabView>
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
    </>
  );
}
