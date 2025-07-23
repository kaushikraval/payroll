import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Plus from '../../Assets/images/plus.svg';
import Edit from '../../Assets/images/edit.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ReactSelectSingle from 'Components/Common/ReactSelectSingle';
import ReactSelectWithImage from 'Components/Common/ReactSelectWithImage';
import ConceptSharing from '../../Assets/images/concept-sharing.png';
import { RadioButton } from 'primereact/radiobutton';

export default function LeaveType() {
  const [ingredient, setIngredient] = useState('');
  const [addLeave, setAddLeave] = useState(false);
  const dialogFuncMap = {
    addLeave: setAddLeave,
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

  const [measureUnitSelect, setMeasureUnitSelect] = useState([]);
  const measureUnitSelectOption = [
    { label: 'Day', value: 'Day' },
    { label: 'Hours', value: 'Hours' },
  ];
  const measureUnitSelectHandleChange = e => {
    setMeasureUnitSelect(e.value);
  };
  const [leaveTypeSelect, setLeaveTypeSelect] = useState([]);
  const leaveTypeSelectOption = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
  ];
  const leaveTypeSelectHandleChange = e => {
    setLeaveTypeSelect(e.value);
  };
  const [maritalStatusSelect, setMaritalStatusSelect] = useState([]);
  const maritalStatusSelectOption = [
    { label: 'All', value: 'All' },
    { label: 'Married', value: 'Married' },
    { label: 'Unmarride', value: 'Unmarride' },
  ];
  const maritalStatusSelectHandleChange = e => {
    setMaritalStatusSelect(e.value);
  };
  const [genderSelect, setGenderSelect] = useState([]);
  const genderSelectOption = [
    { label: 'All', value: 'All' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  const genderSelectHandleChange = e => {
    setGenderSelect(e.value);
  };

  const [selectIcon, setSelectIconSelect] = useState([0]);
  const selectIconOptions = [
    { code: '', src: ConceptSharing },
    { code: '', src: ConceptSharing },
    { code: '', src: ConceptSharing },
    { code: '', src: ConceptSharing },
  ];
  const leaveTypeData = [
    {
      leaveName: 'Privillage Leave',
      dotClassName: 'privillage_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
    {
      leaveName: 'Sick Leave',
      dotClassName: 'sick_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
    {
      leaveName: 'Casual Leave',
      dotClassName: 'casual_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
    {
      leaveName: 'Earned Leave',
      dotClassName: 'earned_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
    {
      leaveName: 'Short Leave',
      dotClassName: 'short_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
    {
      leaveName: 'Maternity Leave',
      dotClassName: 'maternity_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
    {
      leaveName: 'Paternity Leave',
      dotClassName: 'paternity_leave',
      leaveCode: 'PL',
      leaveType: 'Paid',
      measureUnit: 'Day',
      status: 'Active',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 10 Dec 2022 • 08:59 AM',
    },
  ];
  const selectIconTemplate = option => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src={option.src}
          onError={e =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        {/* <div>{option.name}</div> */}
      </div>
    );
  };
  const selectedIconPostWrap = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={option.src}
            onError={e =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
  const [selectColor, setSelectColorSelect] = useState([0]);
  const selectColorOptions = [
    { code: '', src: ConceptSharing },
    { code: '', src: ConceptSharing },
    { code: '', src: ConceptSharing },
    { code: '', src: ConceptSharing },
  ];
  const selectColorTemplate = option => {
    return (
      <div className="select_color">
        <div className="color_box"></div>
      </div>
    );
  };
  const selectedColorPostWrap = (option, props) => {
    if (option) {
      return (
        <div className="select_color">
          <div className="select_color">
            <div className="color_box"></div>
          </div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
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
            <b>Leave</b>
          </li>
          <li>Leave Type Master</li>
        </ul>
      </div>
      <div className="leave_type_table">
        <div className="row align-items-center mb-3">
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
                onClick={() => setAddLeave(true)}
              >
                <img src={Plus} className="me-2" alt="PlusImage" />
                Add Leave
              </button>
            </div>
          </div>
        </div>
        <div className="data_table_one">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th scope="col">
                    <span>Leave Name</span>
                  </th>
                  <th scope="col">
                    <span>Leave Code</span>
                  </th>
                  <th scope="col">
                    <span>Leave Type</span>
                  </th>
                  <th scope="col">
                    <span>Measure Unit</span>
                  </th>
                  <th scope="col">
                    <span>Status</span>
                  </th>
                  <th scope="col">
                    <span>Action By</span>
                  </th>
                  <th scope="col">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaveTypeData.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <span
                          className={`${data.dotClassName} leave_doat d-inline-block me-3`}
                        ></span>
                        {data.leaveName}
                      </td>
                      <td>{data.leaveCode}</td>
                      <td>{data.leaveType}</td>
                      <td>{data.measureUnit}</td>
                      <td>
                        <span className="badge bedge_success">
                          {data.status}
                        </span>
                      </td>

                      <td>
                        {data.actionByName} <br />
                        <span className="text_gray">{data.actionByDate}</span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img
                              src={Edit}
                              data-inject-svg
                              className=""
                              alt="Edit"
                            />
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
      <Dialog
        className="medium_popup add_leave_type"
        header="Add Leave Type"
        visible={addLeave}
        style={{ width: '50vw' }}
        onHide={() => setAddLeave(false)}
        footer={renderFooter('addLeave')}
      >
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form_group">
                <label>Leave Name</label>
                <input className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Leave Code</label>
                <input className="form-control" />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Select Icon</label>

                    <ReactSelectWithImage
                      value={selectIcon}
                      isShowClear={false}
                      options={selectIconOptions}
                      onChange={e => setSelectIconSelect(e.value)}
                      optionLabel="name"
                      filterBy="name"
                      placeholder="Select Employee"
                      valueTemplate={selectedIconPostWrap}
                      itemTemplate={selectIconTemplate}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Select Color</label>

                    <ReactSelectWithImage
                      value={selectColor}
                      isShowClear={false}
                      options={selectColorOptions}
                      onChange={e => setSelectColorSelect(e.value)}
                      optionLabel="name"
                      filterBy="name"
                      placeholder="Select Color"
                      valueTemplate={selectedColorPostWrap}
                      itemTemplate={selectColorTemplate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Measure Unit</label>
                <ReactSelectSingle
                  value={measureUnitSelect}
                  options={measureUnitSelectOption}
                  filter={false}
                  onChange={e => {
                    measureUnitSelectHandleChange(e);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Leave Tyape</label>
                <ReactSelectSingle
                  value={leaveTypeSelect}
                  options={leaveTypeSelectOption}
                  filter={false}
                  onChange={e => {
                    leaveTypeSelectHandleChange(e);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Leave Type Applicable For Marital Status</label>
                <ReactSelectSingle
                  value={maritalStatusSelect}
                  options={maritalStatusSelectOption}
                  filter={false}
                  onChange={e => {
                    maritalStatusSelectHandleChange(e);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Leave Type Applicable for Gender</label>
                <ReactSelectSingle
                  value={genderSelect}
                  options={genderSelectOption}
                  filter={false}
                  onChange={e => {
                    genderSelectHandleChange(e);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_group">
                <label>Leave Reason</label>
                <input
                  className="form-control"
                  placeholder="Write Discription"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap">
                <div className="d-flex align-items-center mb-2 me-3">
                  <RadioButton
                    inputId="ingredient1"
                    name="pizza"
                    value="Active"
                    onChange={e => setIngredient(e.value)}
                    checked={ingredient === 'Active'}
                  />
                  <label htmlFor="ingredient1" className="ml-2">
                    Active
                  </label>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <RadioButton
                    inputId="ingredient2"
                    name="pizza"
                    value="Inactive"
                    onChange={e => setIngredient(e.value)}
                    checked={ingredient === 'Inactive'}
                  />
                  <label htmlFor="ingredient2" className="ml-2">
                    Inactive
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
}
