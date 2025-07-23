import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import EditButtonIcon from '../../Assets/images/edit.svg';
import ImportIcon from '../../Assets/images/import_img.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import UserRight from '../../Assets/images/user_right.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactCelender from '../Common/ReactCelender';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import PlusIcon from '../../Assets/images/plus.svg';

export default function AssignedList() {
  const navigate = useNavigate();
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [basicDetail, setBasicDetail] = useState(false);
  const [applicableStatus, setApplicableStatus] = useState([]);
  const [code, setCode] = useState([]);

  const departmentOptions = [
    { label: 'Laptop', value: 'Laptop' },
    { label: 'Pendrive', value: 'Pendrive' },
    { label: 'Card reader', value: 'Card reader' },
  ];
  const reportingAuthorityOption = [
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Furniture', value: 'Furniture' },
    { label: 'Vehical', value: 'Vehical' },
    { label: 'Machine Equipment', value: 'Machine Equipment' },
    { label: 'Inventory', value: 'Inventory' },
  ];
  const applicablestatusoptionTwo = [
    { label: 'Good', value: 'Good' },
    { label: 'Poor', value: 'Poor' },
    { label: 'Damaged', value: 'Damaged' },
    { label: 'Lost', value: 'Lost' },
    { label: 'Sold', value: 'Sold' },
  ];
  const dialogFuncMap = {
    basicDetail: setBasicDetail,
  };

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
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

  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  const employeeCode = [
    { label: 'Assigned', value: 'Assigned' },
    { label: 'Returned', value: 'Returned' },
  ];
  const codeHandleChange = e => {
    setCode(e.value);
  };
  const assignedAssetsDetail = [
    {
      no: 1,
      assetCategory: 'onics',
      assetType: 'Laptop',
      assetId: 'L001',
      assetName: 'Dell Laptop',
      warrantyStatus: 'NO Warranty',
      AssignAssetActionButton: UserRight,
      assetStatus: 'Available',
      editActionButton: EditButtonIcon,
      deleteActionButton: DeleteButtonIcon,
    },
    {
      no: 2,
      assetCategory: 'Electronics',
      assetType: 'Pendrive',
      assetId: 'L001',
      assetName: 'Sandisk',
      warrantyStatus: 'NO Warranty',
      AssignAssetActionButton: UserRight,
      assetStatus: 'Available',
      editActionButton: EditButtonIcon,
      deleteActionButton: DeleteButtonIcon,
    },
    {
      no: 3,
      assetCategory: 'Electronics',
      assetType: 'Card reader',
      assetId: 'L001',
      assetName: 'Samsung M9',
      warrantyStatus: 'NO Warranty',
      AssignAssetActionButton: UserRight,
      assetStatus: 'Available',
      editActionButton: EditButtonIcon,
      deleteActionButton: DeleteButtonIcon,
    },
    {
      no: 4,
      assetCategory: 'Electronics',
      assetType: 'Mobile',
      assetId: 'L001',
      assetName: 'Dell Laptop',
      warrantyStatus: 'NO Warranty',
      AssignAssetActionButton: UserRight,
      assetStatus: 'Available',
      editActionButton: EditButtonIcon,
      deleteActionButton: DeleteButtonIcon,
    },

    {
      no: 5,
      assetCategory: 'onics',
      assetType: 'Lan Cable',
      assetId: 'L001',
      assetName: 'Dell Laptop',
      warrantyStatus: 'NO Warranty',
      AssignAssetActionButton: UserRight,
      assetStatus: 'Available',
      editActionButton: EditButtonIcon,
      deleteActionButton: DeleteButtonIcon,
    },
  ];
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
            <b>Assets</b>
          </li>
          <li>Add & Assign Asset</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group mb-0">
                  <ReactSelectSingle
                    value={code}
                    options={employeeCode}
                    onChange={e => {
                      codeHandleChange(e);
                    }}
                    placeholder="Asset Category"
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setReportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder="Asset Type"
                    filter
                    className="multiselect-custom"
                    itemTemplate={reportingAuthorityHandleChange}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={department}
                    options={departmentOptions}
                    onChange={e => {
                      setDepartment(e.value);
                    }}
                    placeholder="Asset Status"
                  />
                </div>
              </li>
              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
        </div>
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
                        className="btn-primary align-items-center"
                        onClick={() =>
                          navigate('/assets/assigned-list/create-asset')
                        }
                      >
                        <img
                          src={PlusIcon}
                          data-inject-svg
                          className="me-2"
                          alt="PlusImage"
                        />
                        Add Asset
                      </button>
                      <button
                        type="button"
                        className="btn-border align-items-center ms-3"
                      >
                        <img
                          src={ImportIcon}
                          data-inject-svg
                          className="me-2"
                          alt="PlusImage"
                        />
                        Export Excel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employee_list_table_inner employee_list_table_inner_asset">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th>
                          <span>No</span>
                        </th>
                        <th>
                          <span>Asset Category</span>
                        </th>
                        <th>
                          <span>Asset Type</span>
                        </th>
                        <th>
                          <span>Asset ID</span>
                        </th>
                        <th>
                          <span>Asset Name</span>
                        </th>
                        <th>
                          <span>Warranty Status</span>
                        </th>
                        <th>
                          <span>Asset Status</span>
                        </th>
                        <th>
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignedAssetsDetail.map((emp, index) => {
                        return (
                          <tr key={index}>
                            <td>{emp.no}</td>
                            <td>{emp.assetCategory}</td>
                            <td>{emp.assetType}</td>
                            <td>{emp.assetId}</td>
                            <td>{emp.assetName}</td>
                            <td>{emp.warrantyStatus}</td>
                            <td>
                              {emp.assetStatus === 'Available' && (
                                <span className="badge bedge_success">
                                  {emp.assetStatus}
                                </span>
                              )}
                              {emp.assetStatus === 'Returned' && (
                                <span className="badge bedge_danger">
                                  {emp.assetStatus}
                                </span>
                              )}
                            </td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li onClick={() => onClick('basicdetail')}>
                                  <Button
                                    tooltip="Assign Asset"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <img
                                      src={emp.AssignAssetActionButton}
                                      alt="UserRight"
                                    />
                                  </Button>
                                </li>
                                <li
                                  onClick={() =>
                                    navigate(
                                      '/assets/assigned-list/create-asset',
                                    )
                                  }
                                >
                                  <Button
                                    tooltip="Edit Asset"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <img
                                      src={emp.editActionButton}
                                      alt="EditIcon"
                                    />
                                  </Button>
                                </li>
                                <li>
                                  <Button
                                    tooltip="Remove Asset"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <img
                                      src={emp.deleteActionButton}
                                      alt="DeleteButtonIcon"
                                    />
                                  </Button>
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

        {/* edit category */}
        <Dialog
          header="Assign Asset"
          visible={basicDetail}
          draggable={false}
          resizable={false}
          className="small_popup confirm_popup"
          footer={renderFooter('basicDetail')}
          onHide={() => onHide('basicDetail')}
        >
          <div className="delate_popup_wrap">
            <div className="edit_category_popup_body">
              <div className="row">
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset Category : </label>
                    <p>Electronic</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset ID : </label>
                    <p>GT0001</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset Type :</label>
                    <p>Laptop</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset Name : </label>
                    <p>Laptop</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Location : </label>
                    <p>Adajan</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form_group">
                    <label>Select Emplyoee Name</label>
                    <Input type="text" placeholder="Select Employee" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form_group">
                    <label>Select Asset Asign Date</label>
                    <ReactCelender value="date" placeholder="select" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form_group">
                    <label>Condition of Asset</label>
                    <ReactSelectSingle
                      value={applicableStatus}
                      options={applicablestatusoptionTwo}
                      onChange={e => {
                        setApplicableStatus(e.value);
                      }}
                      placeholder="Placeholder Text"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form_group">
                    <label> Remark</label>
                    <TextArea
                      placeholder="Write Discription"
                      rows={5}
                      cols={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
