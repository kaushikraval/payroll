import { useState } from 'react';
import { Link } from 'react-router-dom';
import userImage from '../../Assets/images/user8.png';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import Eyes from '../../Assets/images/eyes.svg';
import { Checkbox } from 'primereact/checkbox';
import ReactInputSwitch from '../Common/ReactInputSwitch';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactCelender from '../Common/ReactCelender';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import ReactCheckbox from '../../Components/Common/ReactCheckbox';
export default function EmailAlert() {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(true);
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [cities, setCities] = useState([]);
  const emailAlertDetail = [
    {
      eventName: 'Attendance Regulations Request',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Attendance Regulations Request Approved',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Attendance Regulations Request Rejected',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Forgot Check Out',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Late In',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Early Out',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Status Report',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Leave Request Pending',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Leave Request Approved',
      category: 'Attendance',
      viewIcon: Eyes,
    },
    {
      eventName: 'Leave Request Rejected',
      category: 'Attendance',
      viewIcon: Eyes,
    },
  ];
  const onCityChange = e => {
    let selectedCities = [...cities];

    if (selectedCities.length <= 0 && e.checked) {
      selectedCities.push(e.value);
    } else {
      if (!cities.includes(e.value)) {
        selectedCities.push(e.value);
      } else {
        selectedCities.splice(selectedCities.indexOf(e.value), 1);
      }
    }
    setCities(selectedCities);
  };
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end">
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
  const renderFooterEdit = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          s
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
  const [editcategory, setEditCategory] = useState(false);
  const [basicdetail, setBasicDetail] = useState(false);
  const dialogFuncMap = {
    editcategory: setEditCategory,
    basicdetail: setBasicDetail,
  };

  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const departmentOptions = [
    { label: 'Attendance', value: 'Attendance' },
    { label: 'Leave', value: 'Leave' },
    { label: 'Overtime', value: 'Overtime' },
    { label: 'COFF', value: 'COFF' },
  ];

  const reportingAuthorityOption = [
    {
      label: 'Attendance Regulations Request',
      value: 'AttendanceRegulationsRequest',
    },
    { label: 'Forgot Check Out', value: 'ForgotCheckOut' },
    { label: 'Late In', value: 'LateIn' },
    { label: 'Early Out', value: 'EarlyOut' },
    { label: 'Leave Request Pending', value: 'LeaveRequestPending' },
  ];
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
          src={userImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
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
            <b>Settings </b>
          </li>
          <li>Email Alert</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectSingle
                    value={applicablestatus}
                    options={reportingAuthorityOption}
                    onChange={e => {
                      applicablestatusHandleChange(e);
                    }}
                    filter
                    placeholder="Event"
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectSingle
                    value={applicablestatus}
                    options={departmentOptions}
                    onChange={e => {
                      applicablestatusHandleChange(e);
                    }}
                    filter
                    placeholder="Category"
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
                          <span>Event Name</span>
                        </th>
                        <th>
                          <span>Category</span>
                        </th>
                        <th>
                          <span>Access Level</span>
                        </th>
                        <th>
                          <span>Action</span>
                        </th>
                        <th>
                          <span>Status</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {emailAlertDetail.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{user.eventName}</td>
                            <td>
                              <div className="name_wrap">
                                <div className="EmailAlert_text">
                                  {user.category}
                                </div>
                                <div className="epics_checkbox">
                                  <Checkbox
                                    inputId="ctc"
                                    className="me-2"
                                    onChange={e => setChecked(e.checked)}
                                    checked={checked}
                                  />
                                  <label>Select All</label>
                                </div>
                              </div>
                            </td>
                            <td>
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
                            </td>
                            <td>
                              <div className="action_btn">
                                <ul className="d-flex align-items-center">
                                  <li>
                                    <img src={user.viewIcon} alt="Eyes" />
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>
                              <div className="group_by_EmailAlert">
                                <ReactInputSwitch
                                  id="goupByDepartment"
                                  checked={checked1}
                                  onChange={e => setChecked1(e.value)}
                                />
                              </div>
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
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset Category</label>
                    <p>GT0001</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset ID</label>
                    <p>Laptop</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset Type</label>
                    <p>Electronic</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Asset Name</label>
                    <p>Laptop</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Location</label>
                    <p>Adajan</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Emplyoee Name</label>
                    <p>Chintan Raval (1001)</p>
                  </div>
                </div>
                <div className="col-6">
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
                <div className="col-6">
                  <div className="form_group">
                    <label>Code*</label>
                    <ReactCelender value="date" placeholder="select" />
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
                <div className="col-4">
                  <div className="form_group">
                    <label>Assigned To </label>
                    <p>Dhaval Radadiya</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form_group">
                    <label>Assigned Date </label>
                    <p>22 June 2022</p>
                  </div>
                </div>
                <div className="col-4">
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
                <div className="col-6">
                  <div className="form_group">
                    <label>Return Asset Person Name</label>
                    <Input type="text" placeholder="Select Employee" />
                  </div>
                </div>
                <div className="col-6">
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
                <div className="col-6">
                  <div className="form_group">
                    <label>Code*</label>
                    <ReactCelender value="date" placeholder="select" />
                  </div>
                </div>
                <div className="col-6">
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
                      onChange={onCityChange}
                      checked={cities.indexOf('PF Applicable') !== -1}
                      // setIsPfApplicable
                    />
                    <label htmlFor="PFApplicable">
                      Is Applicable for Fine?
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form_group">
                    <label>Return Asset Person Name</label>
                    <Input type="number" placeholder="Amount" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form_group">
                    <label>Code*</label>
                    <ReactCelender value="date" placeholder="select" />
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
