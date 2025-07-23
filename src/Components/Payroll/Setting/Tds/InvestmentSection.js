import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import Edit from '../../../../Assets/images/edit.svg';
import Deleat from '../../../../Assets/images/DeleteBtn.svg';
import PlusIcon from '../../../../Assets/images/plus.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Input from 'Components/Common/Input';

export default function InvestmentSection() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [editDetail, setEditDetail] = useState(false);
  const investmentSection = [
    {
      sectionName: 'Cmcreation Pvt Ltd',
      sectionLimit: '150,000.00',
    },
  ];
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    editDetail: setEditDetail,
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
          <li>
            <b>TDS</b>
          </li>
          <li>Investment Section</li>
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
            <Button
              to="/payroll/setting/salary-components/add-earning-component"
              className="btn-primary"
              onClick={() => {
                setEditDetail(true);
              }}
            >
              <img className="me-1" src={PlusIcon} alt="Icon" />
              Add Section
            </Button>
          </div>
        </div>
      </div>
      <div className="data_table_one tds_table">
        <div className="table-responsive employee-code-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th scope="col">
                  <span>Section Name</span>
                </th>
                <th scope="col">
                  <span>Section Limit</span>
                </th>
                <th scope="col">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {investmentSection.map(data => {
                return (
                  <tr>
                    <td>{data.sectionName}</td>
                    <td>{data.sectionLimit}</td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li
                          onClick={() => {
                            setEditDetail(true);
                          }}
                        >
                          <img src={Edit} alt="Edit" />
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
      <Dialog
        header="Edit Section"
        visible={editDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setEditDetail(false)}
      >
        <div className="row">
          <div className="col-6">
            <div className="form_group">
              <label>Section Name</label>
              <Input placeholder="80 C" />
            </div>
          </div>
          <div className="col-6">
            <div className="form_group">
              <label>Section Limit</label>
              <Input placeholder="1,50,000.00" />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
