import React, { useState } from 'react';
import ReactRadioButton from '../../Common/ReactRadioButton';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function HolidayWeekend() {
  const [holidayAndWeekend, setHolidayAndWeekend] = useState({
    weekendBetweenLeave: {
      isWeekendBetweenLeave: false,
      considerAsLeave: 'betweenTwoLeaves',
    },
    holidayBetweenLeave: {
      isHolidayBetweenLeave: false,
      considerAsLeave: 'betweenTwoLeaves',
    },
  });
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
          <li className="current">
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
      <div className="scheme_content leave_tab_height bg_white_box p-3">
        <div className="wknd_leave">
          <h6 className="mb-3">If a weekend between leave</h6>
          <div className="radio_button_wrapper">
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="paidLeave"
                name="paidLeave"
                value="paidLeave"
                onChange={e => {
                  setHolidayAndWeekend(prevState => ({
                    ...prevState,
                    weekendBetweenLeave: {
                      ...prevState.weekendBetweenLeave,
                      isWeekendBetweenLeave: false,
                    },
                  }));
                }}
                checked={
                  holidayAndWeekend.weekendBetweenLeave
                    .isWeekendBetweenLeave === false
                }
              />
              <label className="m-0" htmlFor="paidLeave">
                Do not Consider as leave
              </label>
            </div>
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="unPaidLeave"
                name="unPaidLeave"
                value="unPaidLeave"
                onChange={e => {
                  setHolidayAndWeekend(prevState => ({
                    ...prevState,
                    weekendBetweenLeave: {
                      ...prevState.weekendBetweenLeave,
                      isWeekendBetweenLeave: true,
                    },
                  }));
                }}
                checked={
                  holidayAndWeekend.weekendBetweenLeave
                    .isWeekendBetweenLeave === true
                }
              />
              <label className="m-0" htmlFor="unPaidLeave">
                Yes count as leave
              </label>
            </div>
          </div>
        </div>
        {holidayAndWeekend.weekendBetweenLeave.isWeekendBetweenLeave ===
          true && (
          <div className="consider_wknd_leave">
            <h6 className="mb-3">Consider as leave if weekend</h6>
            <div className="radio_button_wrapper">
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="twoLeaveDay"
                  name="twoLeaveDay"
                  value="twoLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      weekendBetweenLeave: {
                        ...prevState.weekendBetweenLeave,
                        considerAsLeave: 'betweenTwoLeaves',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.weekendBetweenLeave.considerAsLeave ===
                    'betweenTwoLeaves'
                  }
                />
                <label className="m-0" htmlFor="twoLeaveDay">
                  If weekend between two leave days
                </label>
              </div>
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="beforeLeaveDay"
                  name="beforeLeaveDay"
                  value="beforeLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      weekendBetweenLeave: {
                        ...prevState.weekendBetweenLeave,
                        considerAsLeave: 'beforeLeaveDay',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.weekendBetweenLeave.considerAsLeave ===
                    'beforeLeaveDay'
                  }
                />
                <label className="m-0" htmlFor="beforeLeaveDay">
                  If weekend right before leave days
                </label>
              </div>
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="afterLeaveDay"
                  name="afterLeaveDay"
                  value="afterLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      weekendBetweenLeave: {
                        ...prevState.weekendBetweenLeave,
                        considerAsLeave: 'afterLeaveDay',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.weekendBetweenLeave.considerAsLeave ===
                    'afterLeaveDay'
                  }
                />
                <label className="m-0" htmlFor="afterLeaveDay">
                  If weekend right after leave days
                </label>
              </div>
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="betweenLeaveDay"
                  name="betweenLeaveDay"
                  value="betweenLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      weekendBetweenLeave: {
                        ...prevState.weekendBetweenLeave,
                        considerAsLeave: 'betweenLeaveDay',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.weekendBetweenLeave.considerAsLeave ===
                    'betweenLeaveDay'
                  }
                />
                <label className="m-0" htmlFor="betweenLeaveDay">
                  If weekend is after or before or in-between leave
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="wknd_leave">
          <h6 className="mb-3">If a holidays between leave</h6>
          <div className="radio_button_wrapper">
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="paidLeave"
                name="paidLeave"
                value="paidLeave"
                onChange={e => {
                  setHolidayAndWeekend(prevState => ({
                    ...prevState,
                    holidayBetweenLeave: {
                      ...prevState.holidayBetweenLeave,
                      isHolidayBetweenLeave: false,
                    },
                  }));
                }}
                checked={
                  holidayAndWeekend.holidayBetweenLeave
                    .isHolidayBetweenLeave === false
                }
              />
              <label className="m-0" htmlFor="paidLeave">
                Do not Consider as leave
              </label>
            </div>
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="unPaidLeave"
                name="unPaidLeave"
                value="unPaidLeave"
                onChange={e => {
                  setHolidayAndWeekend(prevState => ({
                    ...prevState,
                    holidayBetweenLeave: {
                      ...prevState.holidayBetweenLeave,
                      isHolidayBetweenLeave: true,
                    },
                  }));
                }}
                checked={
                  holidayAndWeekend.holidayBetweenLeave
                    .isHolidayBetweenLeave === true
                }
              />
              <label className="m-0" htmlFor="unPaidLeave">
                Yes count as leave
              </label>
            </div>
          </div>
        </div>
        {holidayAndWeekend.holidayBetweenLeave.isHolidayBetweenLeave ===
          true && (
          <div className="consider_wknd_leave">
            <h6 className="mb-3">Consider as leave if holidays</h6>
            <div className="radio_button_wrapper">
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="twoLeaveDay"
                  name="twoLeaveDay"
                  value="twoLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      holidayBetweenLeave: {
                        ...prevState.holidayBetweenLeave,
                        considerAsLeave: 'betweenTwoLeaves',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.holidayBetweenLeave.considerAsLeave ===
                    'betweenTwoLeaves'
                  }
                />
                <label className="m-0" htmlFor="twoLeaveDay">
                  If holiday between two leave days
                </label>
              </div>
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="beforeLeaveDay"
                  name="beforeLeaveDay"
                  value="beforeLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      holidayBetweenLeave: {
                        ...prevState.holidayBetweenLeave,
                        considerAsLeave: 'beforeLeaveDay',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.holidayBetweenLeave.considerAsLeave ===
                    'beforeLeaveDay'
                  }
                />
                <label className="m-0" htmlFor="beforeLeaveDay">
                  If holiday right before leave days
                </label>
              </div>
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="afterLeaveDay"
                  name="afterLeaveDay"
                  value="afterLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      holidayBetweenLeave: {
                        ...prevState.holidayBetweenLeave,
                        considerAsLeave: 'afterLeaveDay',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.holidayBetweenLeave.considerAsLeave ===
                    'afterLeaveDay'
                  }
                />
                <label className="m-0" htmlFor="afterLeaveDay">
                  If holiday right after leave days
                </label>
              </div>
              <div className="radio_button pf_radio_wrap">
                <ReactRadioButton
                  inputId="betweenLeaveDay"
                  name="betweenLeaveDay"
                  value="betweenLeaveDay"
                  onChange={e => {
                    setHolidayAndWeekend(prevState => ({
                      ...prevState,
                      holidayBetweenLeave: {
                        ...prevState.holidayBetweenLeave,
                        considerAsLeave: 'betweenLeaveDay',
                      },
                    }));
                  }}
                  checked={
                    holidayAndWeekend.holidayBetweenLeave.considerAsLeave ===
                    'betweenLeaveDay'
                  }
                />
                <label className="m-0" htmlFor="betweenLeaveDay">
                  If holiday is after or before or in-between leave
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="btn_group d-flex justify-content-end mt-4">
        <Link to="/scheme/leave" className="btn-secondary">
          Cancel
        </Link>
        <Link
          to="/scheme/leavepages/leave-eestriction-setting"
          className="btn-secondary mx-3"
        >
          Previous
        </Link>
        <Link
          to="/scheme/leavepages/leave-yearend"
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
