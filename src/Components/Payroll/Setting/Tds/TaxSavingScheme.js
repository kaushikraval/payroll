import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import Edit from '../../../../Assets/images/edit.svg';
import Deleat from '../../../../Assets/images/DeleteBtn.svg';
import PlusIcon from '../../../../Assets/images/plus.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Input from 'Components/Common/Input';
import ReactSelectSingle from '../../../Common/ReactSelectSingle';

export default function TaxSavingScheme() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [editDetail, setEditDetail] = useState(false);
  const taxSavingScheme = [
    {
      sectionName: '80 C',
      schemeName: 'Employee PF',
      schemeMaxLimit: 'No Limit',
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
  const [selectSection, setSelectSection] = useState();
  const selectSectionOpction = [
    { label: '80 C', value: '80 C' },
    { label: '80 CCC', value: '80 CCC' },
    { label: '80 CCD (1)', value: '80 CCD (1)' },
    { label: '80 CCD (2)', value: '80 CCD (2)' },
    { label: '80 DD', value: '80 DD' },
    { label: '80 DDB', value: '80 DDB' },
  ];
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
          <li>Tax Saving Scheme</li>
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
              Add Tax Saving Scheme
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
                  <span>Scheme Name</span>
                </th>
                <th scope="col">
                  <span>Scheme Max Limit</span>
                </th>
                <th scope="col">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {taxSavingScheme.map(data => {
                return (
                  <tr>
                    <td>{data.sectionName}</td>
                    <td>{data.schemeName}</td>
                    <td>{data.schemeMaxLimit}</td>
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
        header="Edit Tax Saving Scheme"
        visible={editDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setEditDetail(false)}
      >
        <div className="row">
          <div className="col-12">
            <div className="form_group">
              <label>Select Section</label>
              <ReactSelectSingle
                value={selectSection}
                onChange={e => {
                  setSelectSection(e.value);
                }}
                options={selectSectionOpction}
                placeholder="Select Section"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Scheme Name</label>
              <Input placeholder="Employee PF" />
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Scheme Max Limit</label>
              <Input placeholder="No Limit" />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
