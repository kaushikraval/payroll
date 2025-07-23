import React, { useState } from 'react';
import ReactRadioButton from 'Components/Common/ReactRadioButton';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import Input from 'Components/Common/Input';
import { Link } from 'react-router-dom';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function LeaveEntitleSetup() {
  const [coreValue, setCoreValue] = useState([]);
  const [entitleSetup, setEntitleSetup] = useState('based on define Interval');
  const [selectAttendanceStatus, setSelectAttendanceStatus] = useState([]);
  const AttendanceStatusHandleChange = e => {
    setSelectAttendanceStatus(e.value);
  };
  const [selectLeaveType, setSelectLeaveType] = useState([]);
  const [leaveEntitleSetupList, setLeaveEntitleSetupList] = useState({
    selectLeavePeriod: 'Yearly',
  });
  const [monthWiseData, setMonthWiseData] = useState({
    januaryDate: '',
    januaryNoOfDay: 0,
    februaryDate: '',
    februaryNoOfDay: 0,
    marchDate: '',
    marchNoOfDay: 0,
    aprilDate: '',
    aprilNoOfDay: 0,
    mayDate: '',
    mayNoOfDay: 0,
    juneDate: '',
    juneNoOfDay: 0,
    julyDate: '',
    julyNoOfDay: 0,
    augustDate: '',
    augustNoOfDay: 0,
    septemberDate: '',
    septemberNoOfDay: 0,
    octomberDate: '',
    octomberNoOfDay: 0,
    novemberDate: '',
    novemberNoOfDay: 0,
    decemberDate: '',
    decemberNoOfDay: 0,
  });
  const [quarterlyWiseData, setQuarterlyWiseData] = useState({
    firstQuarterDate: '',
    firstQuarterNoOfDay: 0,
    secondQuarterDate: '',
    secondQuarterNoOfDay: 0,
    thirdQuarterDate: '',
    thirdQuarterNoOfDay: 0,
    fourthQuarterDate: '',
    fourthQuarterNoOfDay: 0,
  });
  const [halfYearWiseData, setHalfYearWiseData] = useState({
    firstHalfDate: '',
    firstHalfNoOfDay: 0,
    secondHalfDate: '',
    secondHalfNoOfDay: 0,
  });
  const handleUpdateMonthWiseData = (name, e) => {
    setMonthWiseData({
      ...monthWiseData,
      [name]: e.value,
    });
  };
  const handleUpdateMonthDayData = (name, e) => {
    setMonthWiseData({
      ...monthWiseData,
      [name]: e.target.value,
    });
  };
  const handleUpdateQuarterWiseData = (name, e) => {
    setQuarterlyWiseData({
      ...quarterlyWiseData,
      [name]: e.value,
    });
  };
  const handleUpdateQuarterDayData = (name, e) => {
    setQuarterlyWiseData({
      ...quarterlyWiseData,
      [name]: e.target.value,
    });
  };
  const handleUpdateHalfYearWiseData = (name, e) => {
    setHalfYearWiseData({
      ...halfYearWiseData,
      [name]: e.value,
    });
  };
  const handleUpdateHalfYearDayData = (name, e) => {
    setHalfYearWiseData({
      ...halfYearWiseData,
      [name]: e.target.value,
    });
  };
  const MonthlyDataList = [
    {
      monthDate: monthWiseData.januaryDate,
      month: 'January',
      noOfDayInMonth: monthWiseData.januaryNoOfDay,
      setMonthDate: 'januaryDate',
      setMonthDay: 'januaryNoOfDay',
    },
    {
      monthDate: monthWiseData.februaryDate,
      month: 'February',
      noOfDayInMonth: monthWiseData.februaryNoOfDay,
      setMonthDate: 'februaryDate',
      setMonthDay: 'februaryNoOfDay',
    },
    {
      monthDate: monthWiseData.marchDate,
      month: 'March',
      noOfDayInMonth: monthWiseData.marchNoOfDay,
      setMonthDate: 'marchDate',
      setMonthDay: 'marchNoOfDay',
    },
    {
      monthDate: monthWiseData.aprilDate,
      month: 'April',
      noOfDayInMonth: monthWiseData.aprilNoOfDay,
      setMonthDate: 'aprilDate',
      setMonthDay: 'aprilNoOfDay',
    },
    {
      monthDate: monthWiseData.mayDate,
      month: 'May',
      noOfDayInMonth: monthWiseData.mayNoOfDay,
      setMonthDate: 'mayDate',
      setMonthDay: 'mayNoOfDay',
    },
    {
      monthDate: monthWiseData.juneDate,
      month: 'June',
      noOfDayInMonth: monthWiseData.juneNoOfDay,
      setMonthDate: 'juneDate',
      setMonthDay: 'juneNoOfDay',
    },
    {
      monthDate: monthWiseData.julyDate,
      month: 'July',
      noOfDayInMonth: monthWiseData.julyNoOfDay,
      setMonthDate: 'julyDate',
      setMonthDay: 'julyNoOfDay',
    },
    {
      monthDate: monthWiseData.augustDate,
      month: 'August',
      noOfDayInMonth: monthWiseData.augustNoOfDay,
      setMonthDate: 'augustDate',
      setMonthDay: 'augustNoOfDay',
    },
    {
      monthDate: monthWiseData.septemberDate,
      month: 'September',
      noOfDayInMonth: monthWiseData.septemberNoOfDay,
      setMonthDate: 'septemberDate',
      setMonthDay: 'septemberNoOfDay',
    },
    {
      monthDate: monthWiseData.octomberDate,
      month: 'Octomber',
      noOfDayInMonth: monthWiseData.octomberNoOfDay,
      setMonthDate: 'octomberDate',
      setMonthDay: 'octomberNoOfDay',
    },
    {
      monthDate: monthWiseData.novemberDate,
      month: 'November',
      noOfDayInMonth: monthWiseData.novemberNoOfDay,
      setMonthDate: 'novemberDate',
      setMonthDay: 'novemberNoOfDay',
    },
    {
      monthDate: monthWiseData.decemberDate,
      month: 'December',
      noOfDayInMonth: monthWiseData.decemberNoOfDay,
      setMonthDate: 'decemberDate',
      setMonthDay: 'decemberNoOfDay',
    },
  ];
  const QuarterlyDataList = [
    {
      monthDate: quarterlyWiseData.firstQuarterDate,
      month: 'January',
      noOfDayInMonth: quarterlyWiseData.firstQuarterNoOfDay,
      setMonthDate: 'firstQuarterDate',
      setMonthDay: 'firstQuarterNoOfDay',
    },
    {
      monthDate: quarterlyWiseData.secondQuarterDate,
      month: 'April',
      noOfDayInMonth: quarterlyWiseData.secondQuarterNoOfDay,
      setMonthDate: 'secondQuarterDate',
      setMonthDay: 'secondQuarterNoOfDay',
    },
    {
      monthDate: quarterlyWiseData.thirdQuarterDate,
      month: 'July',
      noOfDayInMonth: quarterlyWiseData.thirdQuarterNoOfDay,
      setMonthDate: 'thirdQuarterDate',
      setMonthDay: 'thirdQuarterNoOfDay',
    },
    {
      monthDate: quarterlyWiseData.fourthQuarterDate,
      month: 'Octomber',
      noOfDayInMonth: quarterlyWiseData.fourthQuarterNoOfDay,
      setMonthDate: 'fourthQuarterDate',
      setMonthDay: 'fourthQuarterNoOfDay',
    },
  ];
  const HalfYearDataList = [
    {
      monthDate: halfYearWiseData.firstHalfDate,
      month: 'January',
      noOfDayInMonth: halfYearWiseData.firstHalfNoOfDay,
      setMonthDate: 'firstHalfDate',
      setMonthDay: 'firstHalfNoOfDay',
    },
    {
      monthDate: halfYearWiseData.secondHalfDate,
      month: 'July',
      noOfDayInMonth: halfYearWiseData.secondHalfNoOfDay,
      setMonthDate: 'secondHalfDate',
      setMonthDay: 'secondHalfNoOfDay',
    },
  ];
  const coreValueOption = [
    { label: 'Day', value: 'Day' },
    { label: 'Month', value: 'Month' },
    { label: 'Year', value: 'Year' },
  ];
  const leaveEntitlePeriod = [
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Quarterly', value: 'Quarterly' },
    { label: 'Half Yearly', value: 'Half Yearly' },
    { label: 'One Time', value: 'One Time' },
  ];
  const leaveValueOption = [
    { label: 'Date of Joining', value: 'DateofJoining' },
    { label: 'Date of Confirmation', value: 'DateofConfirmation' },
  ];
  const leaveDayValueOption = [
    { label: '1st', value: '1st' },
    { label: '2nd', value: '2nd' },
    { label: '3rd', value: '3rd' },
    { label: '4th', value: '4th' },
    { label: '5th', value: '5th' },
    { label: 'Last Day', value: 'Last Day' },
  ];
  const leaveFullYearMonthOption = [
    { label: 'Jan', value: 'Jan' },
    { label: 'Feb', value: 'Feb' },
    { label: 'March', value: 'March' },
    { label: 'Apr', value: 'Apr' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'Aug', value: 'Aug' },
    { label: 'Sep', value: 'Sep' },
    { label: 'Oct', value: 'Oct' },
    { label: 'Nov', value: 'Nov' },
    { label: 'Dec', value: 'Dec' },
  ];
  const attendanceStatus = [
    { label: 'Leave', value: 'Leave' },
    { label: 'Holiday', value: 'Holiday' },
    { label: 'Weekly off', value: 'Weekly off' },
  ];
  const LeaveTypeOptions = [
    { label: 'Earned Leave', value: 'EarnedLeave' },
    { label: 'Sick Leave', value: 'SickLeave' },
    { label: 'Casual Leave', value: 'Casual Leave' },
    { label: 'Privillage Leave', value: 'Privillage Leave' },
  ];

  const coreValueHandleChange = e => {
    setCoreValue(e.value);
  };
  const leaveTypeHandleChange = e => {
    setSelectLeaveType(e.value);
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
            <b>Scheme</b>
          </li>
          <li>
            <b>
              <Link to="/scheme/leave">Leave</Link>
            </b>
          </li>
          <li>Configure Leave Type</li>
        </ul>
      </div>

      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="current">
            <div className="icon"></div>
            <span>Leave Entitle Setup</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Entitle Prorate</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Application Rule</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Restriction Setting</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Holiday & Weekend</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Year end</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Approval</span>
          </li>
        </ul>
      </div>
      <div className="leave_tab_height scheme_content">
        <ul>
          <li>
            <div className="radio_button_wrapper">
              <div className="radio_button mb-3">
                <ReactRadioButton
                  inputId="internationalEmp"
                  name="internationalEmp"
                  value="based on define Interval"
                  onChange={e => setEntitleSetup('based on define Interval')}
                  checked={entitleSetup === 'based on define Interval'}
                />
                <label className="m-0" htmlFor="internationalEmp">
                  <b>
                    Do you want to system credit leave balance based on define
                    Interval?
                  </b>
                </label>
              </div>
            </div>
            {entitleSetup === 'based on define Interval' && (
              <ul className="bg_white_box p-4 mb-3">
                <li>
                  <div className="leave_entitle">
                    <h6>Leave Entitle After</h6>
                    <div className="form_group d-flex align-items-center">
                      <div className="leave_input d-flex align-items-center">
                        <label>Effective After</label>
                        <Input type="Number" placeholder="0" />
                        <ReactSelectSingle
                          value={coreValue}
                          options={coreValueOption}
                          filter
                          className="leave_input_border SelectSingle_leave"
                          onChange={e => {
                            coreValueHandleChange(e);
                          }}
                          placeholder="Days"
                        />
                      </div>
                      <div className="leave_input d-flex align-items-center ">
                        <label>From</label>
                        <ReactSelectSingle
                          value={coreValue}
                          className="SelectSingle_leave"
                          options={leaveValueOption}
                          filter
                          onChange={e => {
                            coreValueHandleChange(e);
                          }}
                          placeholder="Date of Joining"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="leave_entitle">
                    <h6>Leave Entitlement Period</h6>
                    <div className="form_group d-flex align-items-baseline">
                      <div className="leave_input d-flex align-items-center">
                        <ReactSelectSingle
                          value={leaveEntitleSetupList.selectLeavePeriod}
                          options={leaveEntitlePeriod}
                          filter
                          className="SelectSingle_leave"
                          onChange={e => {
                            setLeaveEntitleSetupList({
                              ...leaveEntitleSetupList,
                              selectLeavePeriod: e.value,
                            });
                          }}
                          placeholder="Days"
                        />
                      </div>
                      <div className="input_leave_pages">
                        {(leaveEntitleSetupList.selectLeavePeriod ===
                          'Yearly' ||
                          leaveEntitleSetupList.selectLeavePeriod ===
                            'One Time') && (
                          <div className="d-flex mb-3">
                            <div className="leave_input d-flex align-items-center ">
                              <label>On the</label>
                              <ReactSelectSingle
                                value={coreValue}
                                options={leaveDayValueOption}
                                filter
                                className="SelectSingle_leave"
                                onChange={e => {
                                  coreValueHandleChange(e);
                                }}
                                placeholder="1st"
                              />
                            </div>
                            <div className="leave_input ms-3 d-flex align-items-center ">
                              <ReactSelectSingle
                                value={coreValue}
                                options={leaveFullYearMonthOption}
                                filter
                                className="SelectSingle_leave"
                                onChange={e => {
                                  coreValueHandleChange(e);
                                }}
                                placeholder="Jan"
                              />
                              <label>No. of Days</label>
                              <Input
                                type="Number"
                                placeholder="0"
                                className="border_leave_input"
                              />
                            </div>
                          </div>
                        )}
                        {leaveEntitleSetupList.selectLeavePeriod ===
                          'Monthly' &&
                          MonthlyDataList.map((data, i) => {
                            return (
                              <>
                                <div className="d-flex mb-3">
                                  <div className="leave_input d-flex align-items-center ">
                                    <label>
                                      {data.month === 'January'
                                        ? 'On the'
                                        : 'And the'}
                                    </label>
                                    <ReactSelectSingle
                                      value={data.setMonthDate}
                                      options={leaveDayValueOption}
                                      filter
                                      className="SelectSingle_leave"
                                      onChange={e => {
                                        handleUpdateMonthWiseData(
                                          data.setMonthDate,
                                          e,
                                        );
                                      }}
                                      placeholder={data.monthDate}
                                    />
                                  </div>
                                  <div className="leave_input ms-3 d-flex align-items-center ">
                                    <Input
                                      type="text"
                                      value={data.month}
                                      className="SelectSingle_leave"
                                      disabled={true}
                                      placeholder={data.month}
                                    />
                                    <label>No. of Days</label>
                                    <Input
                                      type="Number"
                                      placeholder={data.noOfDayInMonth}
                                      className="border_leave_input"
                                      onChange={e => {
                                        handleUpdateMonthDayData(
                                          data.setMonthDay,
                                          e,
                                        );
                                      }}
                                      value={data.noOfDayInMonth}
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        {leaveEntitleSetupList.selectLeavePeriod ===
                          'Quarterly' &&
                          QuarterlyDataList.map((data, i) => {
                            return (
                              <div className="d-flex mb-3">
                                <div className="leave_input d-flex align-items-center ">
                                  <label>
                                    {data.month === 'January'
                                      ? 'On the'
                                      : 'And the'}
                                  </label>
                                  <ReactSelectSingle
                                    value={data.setMonthDate}
                                    options={leaveDayValueOption}
                                    filter
                                    className="SelectSingle_leave"
                                    onChange={e => {
                                      handleUpdateQuarterWiseData(
                                        data.setMonthDate,
                                        e,
                                      );
                                    }}
                                    placeholder={data.monthDate}
                                  />
                                </div>
                                <div className="leave_input ms-3 d-flex align-items-center ">
                                  <Input
                                    type="text"
                                    value={data.month}
                                    options={leaveDayValueOption}
                                    disabled={true}
                                    className="SelectSingle_leave"
                                    placeholder={data.month}
                                  />
                                  <label>No. of Days</label>
                                  <Input
                                    type="Number"
                                    placeholder={data.noOfDayInMonth}
                                    className="border_leave_input"
                                    onChange={e => {
                                      handleUpdateQuarterDayData(
                                        data.setMonthDay,
                                        e,
                                      );
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        {leaveEntitleSetupList.selectLeavePeriod ===
                          'Half Yearly' &&
                          HalfYearDataList.map((data, i) => {
                            return (
                              <div className="d-flex mb-3">
                                <div className="leave_input d-flex align-items-center ">
                                  <label>
                                    {data.month === 'January'
                                      ? 'On the'
                                      : 'And the'}
                                  </label>
                                  <ReactSelectSingle
                                    value={data.setMonthDate}
                                    options={leaveDayValueOption}
                                    filter
                                    className="SelectSingle_leave"
                                    onChange={e => {
                                      handleUpdateHalfYearWiseData(
                                        data.setMonthDate,
                                        e,
                                      );
                                    }}
                                    placeholder={data.monthDate}
                                  />
                                </div>
                                <div className="leave_input ms-3 d-flex align-items-center ">
                                  <Input
                                    type="text"
                                    value={data.month}
                                    options={leaveDayValueOption}
                                    disabled={true}
                                    className="SelectSingle_leave"
                                    placeholder={data.month}
                                  />
                                  <label>No. of Days</label>
                                  <Input
                                    type="Number"
                                    placeholder={data.noOfDayInMonth}
                                    className="border_leave_input"
                                    onChange={e => {
                                      handleUpdateHalfYearDayData(
                                        data.setMonthDay,
                                        e,
                                      );
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="radio_button_wrapper">
              <div className="radio_button mb-3">
                <ReactRadioButton
                  inputId="internationalEmpleave"
                  name="internationalEmp"
                  value="based on month worked days"
                  onChange={e => {
                    setEntitleSetup('based on month worked days');
                  }}
                  checked={entitleSetup === 'based on month worked days'}
                />
                <label className="m-0" htmlFor="internationalEmpleave">
                  <b>
                    Do you want to system auto credit leave balance based on
                    month worked days?
                  </b>
                </label>
              </div>
            </div>
            {entitleSetup === 'based on month worked days' && (
              <div className="bg_white_box p-4 mb-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form_group">
                      <label>
                        Consider the following attendance statuses along with
                        present days to calculate the Workdays
                      </label>
                      <ReactSelectMultiple
                        value={selectAttendanceStatus}
                        options={attendanceStatus}
                        onChange={e => {
                          AttendanceStatusHandleChange(e);
                        }}
                        placeholder="Select Status"
                        display="chip"
                      />
                    </div>
                    {selectAttendanceStatus.includes('Leave') && (
                      <div className="form_group">
                        <label>
                          Include the following leave types to calculate work
                          days
                        </label>
                        <ReactSelectMultiple
                          value={selectLeaveType}
                          options={LeaveTypeOptions}
                          onChange={e => {
                            leaveTypeHandleChange(e);
                          }}
                          placeholder="Select"
                          display="chip"
                        />
                      </div>
                    )}
                    <div className="form_group leave_input d-flex align-items-center ">
                      <label>Define days to be granted</label>
                      <Input type="next" placeholder="Based on Formula" />
                    </div>
                    <div className="form_group ">
                      <Input type="next" placeholder="Based on Formula" />
                      <label className="text-extraLight">
                        Worksday is calculated based on the attendance status’s
                        you’ve selected.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="btn_group d-flex justify-content-end pt-3">
        <Link to="/scheme/leave" className="btn-secondary">
          Cancel
        </Link>
        <Link
          to="/scheme/leavepages/leave-entitle-prorate"
          className="btn-primary mx-3"
        >
          Next
        </Link>
        <Link className="btn-primary">Save</Link>
      </div>
    </div>
  );
}
