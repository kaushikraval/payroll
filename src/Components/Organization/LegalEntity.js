import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from '../Common/Input';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import HomeIcon from '../../Assets/images/home-blue.svg';
import PlusIcon from '../../Assets/images/plus.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import { FileUpload } from 'primereact/fileupload';

export default function LegalEntity() {
  const [citySelect, setCitySelect] = useState([]);
  const [countrySelect, setCountrySelect] = useState([]);
  const [stateSelect, setStateSelect] = useState([]);
  const [industrySelect, setIndustrySelect] = useState([]);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [addLegalEntity, setAddLegalEntity] = useState(false);
  const toast = useRef(null);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    addLegalEntity: setAddLegalEntity,
  };
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
  const industrySelectOption = [
    { label: 'Manufacturing', value: 'Manufacturing' },
    { label: 'Confirmed', value: 'Confirmed' },
    { label: 'Probation', value: 'Probation' },
    { label: 'Trainee', value: 'Trainee' },
  ];
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const employeeCodeDetail = [
    {
      legalEntityName: 'Oozee Solution',
      industry: 'Software Service',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      legalEntityName: 'Metaloop Solution',
      industry: 'It',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      legalEntityName: 'Cmcreation Pvt Ltd',
      industry: 'Seo Service',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      legalEntityName: 'Tempcm Pvt Ltd',
      industry: 'It',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
    },
    {
      legalEntityName: 'Microloop Solution',
      industry: 'It',
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
  const uploadOptions = { label: 'Uplaod', icon: 'pi pi-paperclip' };
  const onBasicUpload = () => {
    toast.current.show({
      icon: 'pi pi-upload',
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
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
          <li>Legal Entity</li>
        </ul>
      </div>
      <div className="legal_entity_wrap">
        <div className="legal_entity_top mb-3">
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
                  onClick={() => onClick('addLegalEntity')}
                >
                  <img
                    src={PlusIcon}
                    data-inject-svg
                    className="me-2"
                    alt="PlusImage"
                  />
                  Add Legal Entity
                </button>
                <Dialog
                  header="Add Legal Entity"
                  visible={addLegalEntity}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('addLegalEntity')}
                  onHide={() => onHide('addLegalEntity')}
                >
                  <div className="legal_entity_details_inner">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Legal Entity Name</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Establishment Date</label>
                          <Input type="text" />
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
                            onChange={e => {
                              setCitySelect(e.value);
                            }}
                            filter={true}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Country</label>
                          <ReactSelectSingle
                            value={countrySelect}
                            options={countrySelectOption}
                            onChange={e => {
                              setCountrySelect(e.value);
                            }}
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
                            onChange={e => {
                              setStateSelect(e.value);
                            }}
                            filter={true}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Pincode</label>
                          <Input type="number" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Email ID</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <label>Industry</label>
                          <ReactSelectSingle
                            value={industrySelect}
                            options={industrySelectOption}
                            onChange={e => {
                              setIndustrySelect(e.value);
                            }}
                            filter={true}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form_group">
                          <div className="form_group custom_attach">
                            <label>Logo Upload</label>
                            <FileUpload
                              mode="basic"
                              name="demo[]"
                              url="https://primefaces.org/primereact/showcase/upload.php"
                              accept="image/*"
                              maxFileSize={1000000}
                              chooseOptions={uploadOptions}
                              onUpload={onBasicUpload}
                              chooseLabel="Logo Upload"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one legal_entity_table">
          <div className="table-responsive employee-code-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Legal Entity Name</span>
                  </th>
                  <th>
                    <span>Industry</span>
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
                {employeeCodeDetail.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>{emp.legalEntityName}</td>
                      <td>{emp.industry}</td>
                      <td>
                        <div className="created_date">
                          {emp.actionByName}
                          <span className="wrap_text">{emp.actionByDate}</span>
                        </div>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => onClick('addLegalEntity')}>
                            <img
                              src={emp.editActionLogo}
                              data-inject-svg
                              className=""
                              alt="EditIcon"
                            />
                          </li>
                          <li onClick={() => onClick('deleteDetail')}>
                            <img src={emp.deleteActionLogo} alt="DeleteIcon" />
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
              onHide={() => onHide('deleteDetail')}
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
