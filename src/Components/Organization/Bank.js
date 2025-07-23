import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import HomeIcon from '../../Assets/images/home-blue.svg';
import PlusIcon from '../../Assets/images/plus.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import Input from '../Common/Input';
import ReactSelectSingle from '../Common/ReactSelectSingle';

export default function Bank() {
  const [addBank, setAddBank] = useState(false);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    addBank: setAddBank,
    deleteDetail: setDeleteDetail,
  };
  const [companySelect, setCompanySelect] = useState([]);
  const [bankSelect, setBankSelect] = useState([]);
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const companySelectOption = [
    { label: 'Tempcm Pvt Ltd', value: 'Tempcm' },
    { label: 'Cmcreation Pvt Ltd', value: 'Cmcreation' },
    { label: 'Metaloop Solution', value: 'Metaloop Solution' },
    { label: 'Microloop Solutions', value: 'Microloop Solutions' },
    { label: 'Tempcm Pvt Ltd', value: 'Tempcm Pvt Ltd' },
    { label: 'Microloop Solutions', value: 'Microloop Solutions' },
  ];
  const bankSelectOption = [
    { label: 'Axis Bank Ltd.', value: 'Axis' },
    { label: 'City Union Bank Ltd.', value: 'City' },
    { label: 'Federal Bank Ltd.', value: 'Federal' },
    { label: 'Microloop Solutions', value: 'Microloop' },
    { label: 'Axis Bank Ltd.', value: 'Axis' },
    { label: 'Federal Bank Ltd.', value: 'Federal' },
  ];
  const bankDetail = [
    {
      companyName: 'Cmcreation Pvt Ltd',
      bankName: 'ICIC Bank Ltd',
      branchName: 'Katargam',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      companyName: 'Tempcm Pvt Ltd',
      bankName: 'HDFC Bank Ltd',
      branchName: 'Adajan',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      companyName: 'Metaloop Solution',
      bankName: 'ICIC Bank Ltd',
      branchName: 'Katargam',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      companyName: 'Metaloop Solution',
      bankName: 'HDFC Bank Ltd',
      branchName: 'Adajan',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      companyName: 'Cmcreation Pvt Ltd',
      bankName: 'ICIC Bank Ltd',
      branchName: 'Katargam',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
  ];
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
            <b>Organization</b>
          </li>
          <li>Bank</li>
        </ul>
      </div>
      <div className="business_unit_wrap">
        <div className="business_unit_top mb-3">
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
                <button
                  type="button"
                  className="btn-border"
                  onClick={() => setAddBank(true)}
                >
                  <img
                    src={PlusIcon}
                    data-inject-svg
                    className="me-2"
                    alt="PlusImage"
                  />
                  Add Bank Details
                </button>
                <Dialog
                  header="Add Bank"
                  visible={addBank}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('addBank')}
                  onHide={() => setAddBank(false)}
                >
                  <div className="bank_popup_inner">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Select Company</label>
                          <ReactSelectSingle
                            value={companySelect}
                            options={companySelectOption}
                            onChange={e => {
                              setCompanySelect(e.value);
                            }}
                            filter={true}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Select Bank Name</label>
                          <ReactSelectSingle
                            value={bankSelect}
                            options={bankSelectOption}
                            onChange={e => {
                              setBankSelect(e.value);
                            }}
                            filter={true}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Bank Branch Name</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Bank IFSC Code</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Bank Account Number</label>
                          <Input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one business_unit_table">
          <div className="table-responsive employee-code-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Company Name</span>
                  </th>
                  <th>
                    <span>Bank Name</span>
                  </th>
                  <th>
                    <span>Bank Branch</span>
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
                {bankDetail.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.companyName}</td>
                      <td>{user.bankName}</td>
                      <td>{user.branchName}</td>
                      <td>
                        <div className="created_date">
                          {user.actionByName}
                          <span className="wrap_text">{user.actionByDate}</span>
                        </div>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => setAddBank(true)}>
                            <img
                              src={user.editActionLogo}
                              data-inject-svg
                              className=""
                              alt="EditIcon"
                            />
                          </li>
                          <li onClick={() => setDeleteDetail(true)}>
                            <img src={user.deleteActionLogo} alt="DeleteIcon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
  );
}
