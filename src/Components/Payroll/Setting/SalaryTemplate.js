import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import Edit from '../../../Assets/images/edit.svg';
import Deleat from '../../../Assets/images/DeleteBtn.svg';
import Eyes from '../../../Assets/images/eyes.svg';
import Clone from '../../../Assets/images/clone-leave.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
export default function SalaryTemplate() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const salaryTemplate = [
    {
      salaryTemplateName: 'Default',
      description: 'Default',
      status: 'Active',
      createdByName: 'Chirag Sondagar',
      createdByDate: 'On 20 June 2022 • 06:04 PM',
      lastModifiedByName: 'Chirag Sondagar',
      lastModifiedByDate: 'On 20 June 2022 • 06:04 PM',
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
          <li>Salary Template</li>
        </ul>
      </div>
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
              to="/payroll/setting/salary-template/add-salary-template"
              className="btn-primary"
            >
              <img className="me-1" src={PlusIcon} alt="Icon" />
              Add Salary Template
            </Link>
          </div>
        </div>
      </div>
      <div className="data_table_one salary_template_table">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th scope="col">
                  <span>Salary Template Name</span>
                </th>
                <th scope="col">
                  <span>Description</span>
                </th>
                <th scope="col">
                  <span>Status</span>
                </th>
                <th scope="col">
                  <span>Created By</span>
                </th>
                <th scope="col">
                  <span>Last Modified By</span>
                </th>
                <th scope="col">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {salaryTemplate.map(data => {
                return (
                  <tr>
                    <td>{data.salaryTemplateName}</td>
                    <td>{data.description}</td>
                    <td>
                      <span className="badge bedge_success">{data.status}</span>
                    </td>
                    <td>
                      {data.createdByName}
                      <span className="d-block wrap_text">
                        {data.createdByDate}
                      </span>
                    </td>
                    <td>
                      {data.lastModifiedByName}
                      <span className="d-block wrap_text">
                        {data.lastModifiedByDate}
                      </span>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img src={Eyes} alt="Eyes" />
                        </li>
                        <li>
                          <img src={Edit} alt="Edit" />
                        </li>
                        <li>
                          <img src={Clone} alt="Clone" />
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
