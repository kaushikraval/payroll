import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../../Assets/images/user8.png';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import EditButtonIcon from '../../Assets/images/edit.svg';
import Return from '../../Assets/images/return.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactCelender from '../Common/ReactCelender';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import ReactCheckbox from '../../Components/Common/ReactCheckbox';
export default function AddAssignAsset() {
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [department, setdepartment] = useState([]);
  const [fineAmountToggle, setFineAmountToggle] = useState(false);

  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end">
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
  const renderFooterEdit = name => {
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
  const [editcategory, setEditCategory] = useState(false);
  const [basicdetail, setBasicDetail] = useState(false);
  const dialogFuncMap = {
    editcategory: setEditCategory,
    basicdetail: setBasicDetail,
  };

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const departmentOptions = [
    { label: 'Assigned', value: 'Assigned' },
    { label: 'Returned', value: 'Returned' },
  ];

  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const departmentHandleChange = e => {
    setdepartment(e.value);
  };
  const [applicablestatus, setapplicablestatus] = useState([]);
  const applicablestatusoption = [
    { label: 'Good', value: 'Good' },
    { label: 'Poor', value: 'Poor' },
    { label: 'Damaged', value: 'Damaged' },
    { label: 'Lost', value: 'Lost' },
    { label: 'Sold', value: 'Sold' },
  ];
  const applicablestatusoptionTwo = [
    { label: 'Available', value: 'Available' },
    { label: 'Not available', value: 'Not available' },
  ];
  const applicablestatusHandleChange = e => {
    setapplicablestatus(e.value);
  };

  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={UserImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  const assignedAssetsDetail = [
    {
      no: 1,
      assetUserName: 'Dhaval Radadiya',
      assetUserProfile: EmployeeImg,
      assetType: 'Laptop',
      assetId: 'L001',
      assetName: 'Dell Laptop',
      issueDate: '22 June 2022',
      assetValue: '5,000.00',
      assetStatus: 'Assigned',
      editActionButton: EditButtonIcon,
      returnActionButton: Return,
    },
    {
      no: 2,
      assetUserName: 'Parth Patel',
      assetUserProfile: EmployeeImg,
      assetType: 'Pendrive',
      assetId: 'L001',
      assetName: 'Pendrive',
      issueDate: '22 June 2022',
      assetValue: '5,000.00',
      assetStatus: 'Assigned',
      editActionButton: EditButtonIcon,
      returnActionButton: Return,
    },
    {
      no: 3,
      assetUserName: 'Aarav Kohli',
      assetUserProfile: EmployeeImg,
      assetType: 'Card reader',
      assetId: 'L001',
      assetName: 'Samsung M9',
      issueDate: '22 June 2022',
      assetValue: '5,000.00',
      assetStatus: 'Assigned',
      editActionButton: EditButtonIcon,
      returnActionButton: Return,
    },
    {
      no: 4,
      assetUserName: 'Bhavin Gandhi',
      assetUserProfile: EmployeeImg,
      assetType: 'Mobile',
      assetId: 'L001',
      assetName: 'Dell Laptop',
      issueDate: '22 June 2022',
      assetValue: '5,000.00',
      assetStatus: 'Returned',
      editActionButton: EditButtonIcon,
      returnActionButton: Return,
    },

    {
      no: 5,
      assetUserName: 'Dhairya Gupta',
      assetUserProfile: EmployeeImg,
      assetType: 'Lan Cable',
      assetId: 'L001',
      assetName: 'Dell Laptop',
      issueDate: '22 June 2022',
      assetValue: '5,000.00',
      assetStatus: 'Returned',
      editActionButton: EditButtonIcon,
      returnActionButton: Return,
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
          <li>Assigned Assets</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setreportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder="Employees"
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
                      departmentHandleChange(e);
                    }}
                    placeholder="Status"
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
              <div className="show_entries mb-3">
                Show
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                entiries
              </div>
              <div className="employee_list_table_inner">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th>
                          <span>No</span>
                        </th>
                        <th>
                          <span>Asset User</span>
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
                          <span>Issue Date</span>
                        </th>
                        <th>
                          <span>Asset Value</span>
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
                            <td>
                              <div className="name_wrap">
                                <img
                                  src={emp.assetUserProfile}
                                  alt="EmployeeImage"
                                />
                                <span>{emp.assetUserName}</span>
                              </div>
                            </td>
                            <td>{emp.assetType}</td>
                            <td>{emp.assetId}</td>
                            <td>{emp.assetName}</td>
                            <td>{emp.issueDate}</td>
                            <td>{emp.assetValue}</td>
                            {emp.assetStatus === 'Assigned' && (
                              <td>
                                <span className="badge bedge_success">
                                  {emp.assetStatus}
                                </span>
                              </td>
                            )}
                            {emp.assetStatus === 'Returned' && (
                              <td>
                                <span className="badge bedge_danger">
                                  {emp.assetStatus}
                                </span>
                              </td>
                            )}
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li onClick={() => onClick('basicdetail')}>
                                  <Button
                                    tooltip="Return Asset"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <img
                                      src={emp.returnActionButton}
                                      alt="Return"
                                    />
                                  </Button>
                                </li>
                                <li onClick={() => onClick('editcategory')}>
                                  <Button
                                    tooltip="Edit Asset"
                                    tooltipOptions={{
                                      position: 'bottom',
                                    }}
                                    className="tooltip_button"
                                  >
                                    <img
                                      src={emp.editActionButton}
                                      alt="edit_btn"
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
          header="Edit Asset"
          visible={editcategory}
          draggable={false}
          resizable={false}
          className="small_popup confirm_popup"
          footer={renderFooterEdit('editcategory')}
          onHide={() => onHide('editcategory')}
        >
          <div className="delate_popup_wrap">
            <div className="edit_category_popup_body">
              <div className="row">
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Asset Category</label>
                    <p>GT0001</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Asset ID</label>
                    <p>Laptop</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Asset Type</label>
                    <p>Electronic</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Asset Name</label>
                    <p>Laptop</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Location</label>
                    <p>Adajan</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Emplyoee Name</label>
                    <p>Chintan Raval (1001)</p>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_group">
                    <label>Condition of Asset</label>
                    <ReactSelectSingle
                      value={applicablestatus}
                      options={applicablestatusoption}
                      onChange={e => {
                        applicablestatusHandleChange(e);
                      }}
                      placeholder="Confirmed"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_group">
                    <label>Date</label>
                    <ReactCelender value="date" placeholder="select Date" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form_group">
                    <label>Remark</label>
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
        {/* edit category */}
        <Dialog
          header="Return Assets"
          visible={basicdetail}
          draggable={false}
          resizable={false}
          className="small_popup confirm_popup"
          footer={renderFooter('basicdetail')}
          onHide={() => onHide('basicdetail')}
        >
          <div className="delate_popup_wrap">
            <div className="edit_category_popup_body">
              <div className="row">
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Assigned To </label>
                    <p>Dhaval Radadiya</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Assigned Date </label>
                    <p>22 June 2022</p>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="form_group">
                    <label>Assigned Condition</label>
                    <p>Good</p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form_group">
                    <label>Remark :</label>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat morbi enim, diam nec commodo egestas. At eget sit
                      nec potenti fermentum sit. Mauris elit, et eget velit
                      elementum posuere aliquam aliquet tortor. Vestibulum
                      libero augue id augue
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_group">
                    <label>Return Asset Person Name</label>
                    <Input type="text" placeholder="Select Employee" />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_group">
                    <label>Condition Of Asset When Retun</label>
                    <ReactSelectSingle
                      value={applicablestatus}
                      options={applicablestatusoption}
                      onChange={e => {
                        applicablestatusHandleChange(e);
                      }}
                      placeholder="Asset Type"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_group">
                    <label>Asset Return Date</label>
                    <ReactCelender value="date" placeholder="select" />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_group">
                    <label>Status</label>
                    <ReactSelectSingle
                      value={applicablestatus}
                      options={applicablestatusoptionTwo}
                      onChange={e => {
                        applicablestatusHandleChange(e);
                      }}
                      placeholder="Placeholder Text"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form_group checkbox_wrap">
                    <ReactCheckbox
                      inputId="PFApplicable"
                      name="Applicable"
                      value="PF Applicable"
                      checked={fineAmountToggle}
                      onChange={() => setFineAmountToggle(!fineAmountToggle)}
                    />
                    <label htmlFor="PFApplicable">
                      Is Applicable for Fine?
                    </label>
                  </div>
                </div>
                {fineAmountToggle === true && (
                  <>
                    <div className="col-6">
                      <div className="form_group">
                        <label>Fine Amount</label>
                        <Input type="number" placeholder="Amount" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form_group">
                        <label>Deduction Date</label>
                        <ReactCelender value="date" placeholder="select" />
                      </div>
                    </div>
                  </>
                )}
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
