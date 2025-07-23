import React, { useState } from 'react';
import ReactRadioButton from '../../Common/ReactRadioButton';
import Input from '../../Common/Input';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function LeaveRestrictionSetting() {
  const [weekSelect, setWeekSelect] = useState([]);
  const [leaveRestrictionSetting, setLeaveRestrictionSetting] = useState({
    limitOfConsucutiveDay: {
      mainLimitOfConsucutiveDay: false,
      availableBalanceCanUse: false,
      maximumLeaveGap: false,
      allowedWithinSpecificPeriod: false,
      allowedInNoticePeroid: false,
    },
  });
  const weekSelectOption = [
    { label: 'Day', value: 'Day' },
    { label: 'Month', value: 'Month' },
    { label: 'Year', value: 'Year' },
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
          <li className="current">
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
      <div className="scheme_content leave_tab_height  bg_white_box p-3">
        <div className="leave_limit">
          <div className="contribution_ctc_wrap">
            <ul>
              <li>
                <div className="main_check_wrap">
                  <Checkbox
                    inputId="limitOfConsucutiveDay"
                    className="me-2"
                    onChange={e => {
                      setLeaveRestrictionSetting(prevState => ({
                        ...prevState,
                        limitOfConsucutiveDay: {
                          ...prevState.limitOfConsucutiveDay,
                          mainLimitOfConsucutiveDay:
                            !prevState.limitOfConsucutiveDay
                              .mainLimitOfConsucutiveDay,
                        },
                      }));
                    }}
                    checked={
                      leaveRestrictionSetting.limitOfConsucutiveDay
                        .mainLimitOfConsucutiveDay === true
                    }
                  />
                  <label htmlFor="limitOfConsucutiveDay">
                    <b>Limit of Consucutive Days Leave Apply?</b>
                  </label>
                </div>
                {leaveRestrictionSetting.limitOfConsucutiveDay
                  .mainLimitOfConsucutiveDay === true && (
                  <ul>
                    <li>
                      <div className="main_check_wrap">
                        <div className="radio_button_wrapper">
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="noLimit"
                              name="noLimit"
                              value="Yes"
                              onChange={e => {
                                setLeaveRestrictionSetting(prevState => ({
                                  ...prevState,
                                  limitOfConsucutiveDay: {
                                    ...prevState.limitOfConsucutiveDay,
                                    availableBalanceCanUse: false,
                                  },
                                }));
                              }}
                              checked={
                                leaveRestrictionSetting.limitOfConsucutiveDay
                                  .availableBalanceCanUse === false
                              }
                            />
                            <label className="m-0">
                              No Limit, All Available balance can used at the
                              time
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap">
                        <div className="radio_button_wrapper">
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="Limit"
                              name="Limit"
                              value="No"
                              onChange={e => {
                                setLeaveRestrictionSetting(prevState => ({
                                  ...prevState,
                                  limitOfConsucutiveDay: {
                                    ...prevState.limitOfConsucutiveDay,
                                    availableBalanceCanUse:
                                      !leaveRestrictionSetting
                                        .limitOfConsucutiveDay
                                        .availableBalanceCanUse,
                                  },
                                }));
                              }}
                              checked={
                                leaveRestrictionSetting.limitOfConsucutiveDay
                                  .availableBalanceCanUse === true
                              }
                            />
                            <label className="m-0">
                              Yes Limit to
                              <Input
                                type="number"
                                placeholder="00"
                                disabled={
                                  leaveRestrictionSetting.limitOfConsucutiveDay
                                    .availableBalanceCanUse === false
                                }
                              />
                              Maximum Consecutive leave days allow to apply
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap">
                        <Checkbox
                          inputId="maximumLeaveGap"
                          className="me-2"
                          onChange={e => {
                            setLeaveRestrictionSetting(prevState => ({
                              ...prevState,
                              limitOfConsucutiveDay: {
                                ...prevState.limitOfConsucutiveDay,
                                maximumLeaveGap:
                                  !leaveRestrictionSetting.limitOfConsucutiveDay
                                    .maximumLeaveGap,
                              },
                            }));
                          }}
                          checked={
                            leaveRestrictionSetting.limitOfConsucutiveDay
                              .maximumLeaveGap === true
                          }
                        />
                        <label>
                          Minimum Leave gap required between two application
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              leaveRestrictionSetting.limitOfConsucutiveDay
                                .maximumLeaveGap === false
                            }
                          />
                          Calender Days
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap">
                        <Checkbox
                          inputId="allowedWithinSpecificPeriod"
                          className="me-2"
                          onChange={e => {
                            setLeaveRestrictionSetting(prevState => ({
                              ...prevState,
                              limitOfConsucutiveDay: {
                                ...prevState.limitOfConsucutiveDay,
                                allowedWithinSpecificPeriod:
                                  !leaveRestrictionSetting.limitOfConsucutiveDay
                                    .allowedWithinSpecificPeriod,
                              },
                            }));
                          }}
                          checked={
                            leaveRestrictionSetting.limitOfConsucutiveDay
                              .allowedWithinSpecificPeriod === true
                          }
                        />
                        <label>
                          Maximum number of applications allowed within the
                          specified period
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              leaveRestrictionSetting.limitOfConsucutiveDay
                                .allowedWithinSpecificPeriod === false
                            }
                          />
                          /
                          <ReactSelectSingle
                            value={weekSelect}
                            options={weekSelectOption}
                            onChange={e => {
                              setWeekSelect(e.value);
                            }}
                            disabled={
                              leaveRestrictionSetting.limitOfConsucutiveDay
                                .allowedWithinSpecificPeriod === false
                            }
                            placeholder="Select"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap">
                        <Checkbox
                          inputId="allowedInNoticePeroid"
                          className="me-2"
                          onChange={e => {
                            setLeaveRestrictionSetting(prevState => ({
                              ...prevState,
                              limitOfConsucutiveDay: {
                                ...prevState.limitOfConsucutiveDay,
                                allowedInNoticePeroid:
                                  !leaveRestrictionSetting.limitOfConsucutiveDay
                                    .allowedInNoticePeroid,
                              },
                            }));
                          }}
                          checked={
                            leaveRestrictionSetting.limitOfConsucutiveDay
                              .allowedInNoticePeroid === true
                          }
                        />
                        <label htmlFor="allowedInNoticePeroid">
                          Employee can consume/apply for available leave in
                          notice period
                        </label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end mt-4">
        <Link to="/scheme/leave" className="btn-secondary">
          Cancel
        </Link>
        <Link
          to="/scheme/leavepages/leave-application-rule"
          className="btn-secondary mx-3"
        >
          Previous
        </Link>
        <Link
          to="/scheme/leavepages/holiday-weekend"
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
