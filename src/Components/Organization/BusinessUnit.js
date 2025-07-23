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

export default function BusinessUnit() {
  const [citySelect, setCitySelect] = useState([]);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [stateSelect, setStateSelect] = useState([]);
  const [countrySelect, setCountrySelect] = useState([]);
  const [addBusinessUnit, setAddBusinessUnit] = useState(false);
  const countrySelectOption = [
    { label: 'India', value: 'India' },
    { label: 'Israel', value: 'Israel' },
    { label: 'Switzerland', value: 'Switzerland' },
    { label: 'Turkey', value: 'Turkey' },
    { label: 'Iran', value: 'Iran' },
    { label: 'Germany', value: 'Germany' },
    { label: 'Togo', value: 'Togo' },
    { label: 'Holy See', value: 'Holy See' },
  ];
  const stateSelectOption = [
    { label: 'Gujrat', value: 'Gujrat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Maharashtra', value: 'Maharashtra' },
  ];
  const citySelectOption = [
    { label: 'Surat', value: 'Surat' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Hyderabad', value: 'Hyderabad' },
    { label: 'Ahmedabad', value: 'Ahmedabad' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Kolkata', value: 'Kolkata' },
  ];
  const buisenessUnitDetail = [
    {
      businessUnitName: 'Oozee Solution',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      businessUnitName: 'Metaloop Solution',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      businessUnitName: 'Cmcreation Pvt Ltd',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      businessUnitName: 'Tempcm Pvt Ltd',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      businessUnitName: 'Microloop Solution',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
  ];
  const dialogFuncMap = {
    addBusinessUnit: setAddBusinessUnit,
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
          <li>Business Unit </li>
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
                  onClick={() => setAddBusinessUnit(true)}
                >
                  <img
                    src={PlusIcon}
                    data-inject-svg
                    className="me-2"
                    alt="PlusImage"
                  />
                  Add Business Unit
                </button>
                <Dialog
                  header="Add Business Unit"
                  visible={addBusinessUnit}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('addBusinessUnit')}
                  onHide={() => setAddBusinessUnit(!addBusinessUnit)}
                >
                  <div className="business_unit_details_inner">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Business Entity Name</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Email ID</label>
                          <Input type="email" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Address Line 1</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Address Line 2</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Mobile No</label>
                          <Input type="number" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>City</label>
                          <ReactSelectSingle
                            value={citySelect}
                            options={citySelectOption}
                            onChange={e => setCitySelect(e.value)}
                            filter={true}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>State/Province</label>
                          <ReactSelectSingle
                            value={stateSelect}
                            options={stateSelectOption}
                            onChange={e => setStateSelect(e.value)}
                            filter={true}
                            placeholder="Select State"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Country</label>
                          <ReactSelectSingle
                            value={countrySelect}
                            options={countrySelectOption}
                            onChange={e => setCountrySelect(e.value)}
                            filter={true}
                            placeholder="Select Country"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Pincode</label>
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
                    <span>Business Unit Name</span>
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
                {buisenessUnitDetail.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.businessUnitName}</td>
                      <td>
                        <div className="created_date">
                          {user.actionByName}
                          <span className="wrap_text">{user.actionByDate}</span>
                        </div>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => setAddBusinessUnit(true)}>
                            <img
                              src={user.editActionLogo}
                              data-inject-svg
                              className=""
                              alt="EditIcon"
                            />
                          </li>
                          <li onClick={() => setDeleteDetail(!deleteDetail)}>
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
              onHide={() => setDeleteDetail(!deleteDetail)}
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
