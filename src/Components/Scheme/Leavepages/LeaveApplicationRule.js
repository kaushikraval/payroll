import React, { useState } from 'react';
import ReactRadioButton from '../../Common/ReactRadioButton';
import Input from '../../Common/Input';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import Info from '../../../Assets/images/info_grey.svg';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function LeaveApplicationRule() {
  const [applicationRule, setApplicationRule] = useState({
    allowForHalfDay: false,
    DocumentProofRequire: false,
    appliedForFutureDay: {
      mainAppliedForFutureDay: false,
      allowToApply: false,
      applicationToBeSubmitted: false,
    },
    isPastDateLeaveApply: {
      mainIsPastDateLeaveApply: false,
      allowToApply: false,
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
          <li className="current">
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
      <div className="scheme_content leave_tab_height bg_white_box p-3">
        <div className="leave_halfday_wrap mb-3">
          <div className="d-flex align-items-center mb-3">
            <h6 className="m-0">Allow applying for a half day?</h6>
            <img src={Info} alt="info" className="ms-2" />
          </div>
          <div className="radio_button_wrapper">
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="paidLeave"
                name="paidLeave"
                value="Yes"
                onChange={e =>
                  setApplicationRule({
                    ...applicationRule,
                    allowForHalfDay: true,
                  })
                }
                checked={applicationRule.allowForHalfDay === true}
              />
              <label className="m-0" htmlFor="paidLeave">
                Yes
              </label>
            </div>
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="unPaidLeave"
                name="unPaidLeave"
                value="No"
                onChange={e =>
                  setApplicationRule({
                    ...applicationRule,
                    allowForHalfDay: false,
                  })
                }
                checked={applicationRule.allowForHalfDay === false}
              />
              <label className="m-0" htmlFor="unPaidLeave">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="leave_proof_wrap mb-3">
          <div className="d-flex align-items-center mb-3">
            <h6 className="m-0">Document proof required?</h6>
            <img src={Info} alt="info" className="ms-2" />
          </div>
          <div className="radio_button_wrapper radio_input">
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="paidLeave"
                name="paidLeave"
                value="Yes"
                onChange={e =>
                  setApplicationRule({
                    ...applicationRule,
                    DocumentProofRequire: false,
                  })
                }
                checked={applicationRule.DocumentProofRequire === false}
              />
              <label className="m-0" htmlFor="paidLeave">
                No. Doesn’t require a Document Proof.
              </label>
            </div>
            <div className="radio_button pf_radio_wrap">
              <ReactRadioButton
                inputId="unPaidLeave"
                name="unPaidLeave"
                value="No"
                onChange={e =>
                  setApplicationRule({
                    ...applicationRule,
                    DocumentProofRequire: true,
                  })
                }
                checked={applicationRule.DocumentProofRequire === true}
              />
              <label className="m-0" htmlFor="unPaidLeave">
                Yes, Require a Document Proof if the leave days exceeds
                <Input
                  type="number"
                  placeholder="00"
                  disabled={applicationRule.DocumentProofRequire === false}
                />
                Calender Days
              </label>
            </div>
          </div>
        </div>
        <div className="leave_past_date">
          <div className="contribution_ctc_wrap">
            <ul>
              <li>
                <div className="main_check_wrap">
                  <Checkbox
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setApplicationRule(prevState => ({
                        ...prevState,
                        appliedForFutureDay: {
                          ...prevState.appliedForFutureDay,
                          mainAppliedForFutureDay:
                            !prevState.appliedForFutureDay
                              .mainAppliedForFutureDay,
                        },
                      }));
                    }}
                    checked={
                      applicationRule.appliedForFutureDay
                        .mainAppliedForFutureDay === true
                    }
                  />
                  <label>
                    <b>Can leave be applied for future dates?</b>
                  </label>
                </div>
                {applicationRule.appliedForFutureDay.mainAppliedForFutureDay ===
                  true && (
                  <ul>
                    <li>
                      <div className="main_check_wrap">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setApplicationRule(prevState => ({
                              ...prevState,
                              appliedForFutureDay: {
                                ...prevState.appliedForFutureDay,
                                allowToApply:
                                  !prevState.appliedForFutureDay.allowToApply,
                              },
                            }));
                          }}
                          checked={
                            applicationRule.appliedForFutureDay.allowToApply ===
                            true
                          }
                        />
                        <label>
                          Allow to apply future date leave
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              applicationRule.appliedForFutureDay
                                .allowToApply === false
                            }
                          />
                          Calender Days
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setApplicationRule(prevState => ({
                              ...prevState,
                              appliedForFutureDay: {
                                ...prevState.appliedForFutureDay,
                                applicationToBeSubmitted:
                                  !prevState.appliedForFutureDay
                                    .applicationToBeSubmitted,
                              },
                            }));
                          }}
                          checked={
                            applicationRule.appliedForFutureDay
                              .applicationToBeSubmitted === true
                          }
                        />
                        <label>
                          Application to be submitted for future date
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              applicationRule.appliedForFutureDay
                                .applicationToBeSubmitted === false
                            }
                          />
                          Calender Days in advance
                        </label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="leave_date">
          <div className="contribution_ctc_wrap">
            <ul>
              <li>
                <div className="main_check_wrap">
                  <Checkbox
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setApplicationRule(prevState => ({
                        ...prevState,
                        isPastDateLeaveApply: {
                          ...prevState.isPastDateLeaveApply,
                          mainIsPastDateLeaveApply:
                            !prevState.isPastDateLeaveApply
                              .mainIsPastDateLeaveApply,
                        },
                      }));
                    }}
                    checked={
                      applicationRule.isPastDateLeaveApply
                        .mainIsPastDateLeaveApply === true
                    }
                  />
                  <label>
                    <b>Is Past Dates Leave Application Allowed?</b>
                  </label>
                </div>
                {applicationRule.isPastDateLeaveApply
                  .mainIsPastDateLeaveApply === true && (
                  <ul>
                    <li>
                      <div className="main_check_wrap">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setApplicationRule(prevState => ({
                              ...prevState,
                              isPastDateLeaveApply: {
                                ...prevState.isPastDateLeaveApply,
                                allowToApply:
                                  !prevState.isPastDateLeaveApply.allowToApply,
                              },
                            }));
                          }}
                          checked={
                            applicationRule.isPastDateLeaveApply
                              .allowToApply === true
                          }
                        />
                        <label>
                          Allow to Apply past dated leave
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              applicationRule.isPastDateLeaveApply
                                .allowToApply === false
                            }
                          />
                          Calender Days back
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
          to="/scheme/leavepages/leave-entitle-prorate"
          className="btn-secondary mx-3"
        >
          Previous
        </Link>
        <Link
          to="/scheme/leavepages/leave-eestriction-setting"
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
