import React, { useState } from 'react';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import Input from 'Components/Common/Input';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function LeaveYearend() {
  const [coreValue, setCoreValue] = useState([]);
  const [selectDay, setSelectDay] = useState([]);
  const [leaveYearEndList, setLeaveYearEndList] = useState({
    selectLeavePeriod: 'Yearly',
  });
  const [monthWiseData, setMonthWiseData] = useState({
    januaryDate: '',
    februaryDate: '',
    marchDate: '',
    aprilDate: '',
    mayDate: '',
    juneDate: '',
    julyDate: '',
    augustDate: '',
    septemberDate: '',
    octomberDate: '',
    novemberDate: '',
    decemberDate: '',
  });
  const [quarterlyWiseData, setQuarterlyWiseData] = useState({
    firstQuarterDate: '',
    secondQuarterDate: '',
    thirdQuarterDate: '',
    fourthQuarterDate: '',
  });
  const [halfYearWiseData, setHalfYearWiseData] = useState({
    firstHalfDate: '',
    secondHalfDate: '',
  });
  const handleUpdateMonthWiseData = (name, e) => {
    setMonthWiseData({
      ...monthWiseData,
      [name]: e.value,
    });
  };
  const handleUpdateQuarterWiseData = (name, e) => {
    setQuarterlyWiseData({
      ...quarterlyWiseData,
      [name]: e.value,
    });
  };
  const handleUpdateHalfYearWiseData = (name, e) => {
    setHalfYearWiseData({
      ...halfYearWiseData,
      [name]: e.value,
    });
  };
  const MonthlyDataList = [
    {
      monthDate: monthWiseData.januaryDate,
      month: 'January',
      setMonthDate: 'januaryDate',
    },
    {
      monthDate: monthWiseData.februaryDate,
      month: 'February',
      setMonthDate: 'februaryDate',
    },
    {
      monthDate: monthWiseData.marchDate,
      month: 'March',
      setMonthDate: 'marchDate',
    },
    {
      monthDate: monthWiseData.aprilDate,
      month: 'April',
      setMonthDate: 'aprilDate',
    },
    {
      monthDate: monthWiseData.mayDate,
      month: 'May',
      setMonthDate: 'mayDate',
    },
    {
      monthDate: monthWiseData.juneDate,
      month: 'June',
      setMonthDate: 'juneDate',
    },
    {
      monthDate: monthWiseData.julyDate,
      month: 'July',
      setMonthDate: 'julyDate',
    },
    {
      monthDate: monthWiseData.augustDate,
      month: 'August',
      setMonthDate: 'augustDate',
    },
    {
      monthDate: monthWiseData.septemberDate,
      month: 'September',
      setMonthDate: 'septemberDate',
    },
    {
      monthDate: monthWiseData.octomberDate,
      month: 'Octomber',
      setMonthDate: 'octomberDate',
    },
    {
      monthDate: monthWiseData.novemberDate,
      month: 'November',
      setMonthDate: 'novemberDate',
    },
    {
      monthDate: monthWiseData.decemberDate,
      month: 'December',
      setMonthDate: 'decemberDate',
    },
  ];
  const QuarterlyDataList = [
    {
      monthDate: quarterlyWiseData.firstQuarterDate,
      month: 'January',
      setMonthDate: 'firstQuarterDate',
    },
    {
      monthDate: quarterlyWiseData.secondQuarterDate,
      month: 'April',
      setMonthDate: 'secondQuarterDate',
    },
    {
      monthDate: quarterlyWiseData.thirdQuarterDate,
      month: 'July',
      setMonthDate: 'thirdQuarterDate',
    },
    {
      monthDate: quarterlyWiseData.fourthQuarterDate,
      month: 'Octomber',
      setMonthDate: 'fourthQuarterDate',
    },
  ];
  const HalfYearDataList = [
    {
      monthDate: halfYearWiseData.firstHalfDate,
      month: 'January',
      setMonthDate: 'firstHalfDate',
    },
    {
      monthDate: halfYearWiseData.secondHalfDate,
      month: 'July',
      setMonthDate: 'secondHalfDate',
    },
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
  const selectDayOption = [
    { label: 'Percentage', value: 'Percentage' },
    { label: 'Unit', value: 'Unit' },
  ];
  const leaveEntitlePeriod = [
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Quarterly', value: 'Quarterly' },
    { label: 'Half Yearly', value: 'Half Yearly' },
    { label: 'One Time', value: 'One Time' },
  ];
  const leaveDayValueOption = [
    { label: '1st', value: '1st' },
    { label: '2nd', value: '2nd' },
    { label: '3rd', value: '3rd' },
    { label: '4th', value: '4th' },
    { label: '5th', value: '5th' },
    { label: 'Last Day', value: 'Last Day' },
  ];
  const coreValueHandleChange = e => {
    setCoreValue(e.value);
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
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Entitle Setup</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Entitle Prorate</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Application Rule</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Restriction Setting</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Holiday & Weekend</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Leave Year end</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Approval</span>
          </li>
        </ul>
      </div>
      <div className="scheme_content leave_tab_height bg_white_box p-3">
        <h6 className="mb-3">
          What happens to the leave balance at the end of year?
        </h6>
        <div className="leave_yearend_inner">
          <ul className="mb-3">
            <li>
              <div className="leave_multi_wrap">
                <div className="d-flex align-items-center">
                  <label>Leave Reset Period</label>
                  <ReactSelectSingle
                    value={leaveYearEndList.selectLeavePeriod}
                    options={leaveEntitlePeriod}
                    filter
                    className="SelectSingle_leave"
                    onChange={e => {
                      setLeaveYearEndList({
                        ...leaveYearEndList,
                        selectLeavePeriod: e.value,
                      });
                    }}
                    placeholder="Days"
                  />
                </div>
                <div className="input_multi">
                  {(leaveYearEndList.selectLeavePeriod === 'Yearly' ||
                    leaveYearEndList.selectLeavePeriod === 'One Time') && (
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
                      </div>
                    </div>
                  )}
                  {leaveYearEndList.selectLeavePeriod === 'Monthly' &&
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
                            </div>
                          </div>
                        </>
                      );
                    })}
                  {leaveYearEndList.selectLeavePeriod === 'Quarterly' &&
                    QuarterlyDataList.map((data, i) => {
                      return (
                        <div className="d-flex mb-3">
                          <div className="leave_input d-flex align-items-center ">
                            <label>
                              {data.month === 'January' ? 'On the' : 'And the'}
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
                          </div>
                        </div>
                      );
                    })}
                  {leaveYearEndList.selectLeavePeriod === 'Half Yearly' &&
                    HalfYearDataList.map((data, i) => {
                      return (
                        <div className="d-flex mb-3">
                          <div className="leave_input d-flex align-items-center ">
                            <label>
                              {data.month === 'January' ? 'On the' : 'And the'}
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
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </li>
            <li>
              <label>Leave Carryforward</label>
              <div className="leave_input_join">
                <Input type="Number" placeholder="0" />
                <ReactSelectSingle
                  value={selectDay}
                  options={selectDayOption}
                  filter
                  className="leave_input_border SelectSingle_leave"
                  onChange={e => {
                    setSelectDay(e.value);
                  }}
                  placeholder="Select Day"
                />
              </div>
              <label>Max Limit</label>
              <Input type="Number" placeholder="0" />
            </li>
            <li>
              <label>Leave Encashment</label>
              <div className="leave_input_join">
                <Input type="Number" placeholder="0" />
                <ReactSelectSingle
                  value={selectDay}
                  options={selectDayOption}
                  filter
                  className="leave_input_border SelectSingle_leave"
                  onChange={e => {
                    setSelectDay(e.value);
                  }}
                  placeholder="Select Day"
                />
              </div>
              <label>Max Limit</label>
              <Input type="Number" placeholder="0" />
            </li>
          </ul>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end pt-3">
        <Link to="/scheme/leave" className="btn-secondary">
          Cancel
        </Link>
        <Link
          to="/scheme/leavepages/holiday-weekend"
          className="btn-secondary mx-3"
        >
          Previous
        </Link>
        <Link
          to="/scheme/leavepages/leave-approval"
          className="btn-primary me-3"
        >
          Next
        </Link>
        <Link to="" className="btn-primary">
          Save
        </Link>
      </div>
    </div>
  );
}
