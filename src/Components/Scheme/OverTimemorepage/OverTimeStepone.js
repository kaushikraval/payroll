import React, { useState } from 'react';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { Checkbox } from 'primereact/checkbox';

export default function OverTimeStepone() {
  const [DeductionSelect, setDeductionSelect] = useState([]);
  const [overtimePayment, setOvertimePayment] = useState({
    workingDay: {
      mainWorkingDay: false,
      considerHours: false,
      ignoreOTCompensation: false,
      otApplication: false,
    },
    weeklyOffDay: {
      mainWeeklyOffDay: false,
      ignoreOTCompensation: false,
      otApplication: false,
    },
    holiday: {
      mainHoliday: false,
      ignoreOTCompensation: false,
      otApplication: false,
    },
  });
  const DeductionSelectOption = [
    { label: 'Based On Extra Work Hours', value: 'BasedOnExtraWorkHours' },
    { label: 'Fixed Amount Per Hour', value: 'FixedAmountPerHour' },
  ];
  const BothPrefixPostHours = [
    { label: 'Both Prefix & Post Hours', value: 'BothPrefix&PostHours' },
    { label: 'Only Prefix Hours', value: 'OnlyPrefixHours' },
    { label: 'Only Postfix Hours', value: 'OnlyPostfixHours' },
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
              <Link to="/scheme/overtime">Overtime</Link>
            </b>
          </li>
          <li>Add Overtime</li>
        </ul>
      </div>
      <div className="p-3">
        <div className="row">
          <div className="col-md-4">
            <div className="form_group">
              <label>Overtime Scheme Name</label>
              <Input type="text" placeholder="Overtime Scheme Name" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Description</label>
              <Input type="text" placeholder="Description" />
            </div>
          </div>
        </div>
        <div className="create_pfconfig_wrap">
          <h6>Overtime Payment Calculation Criteria</h6>

          <div className="contribution_ctc_wrap mt-4">
            <ul>
              <li>
                <div className="main_check_wrap d-flex">
                  <Checkbox
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setOvertimePayment(prevState => ({
                        ...prevState,
                        workingDay: {
                          ...prevState.workingDay,
                          mainWorkingDay: !prevState.workingDay.mainWorkingDay,
                        },
                      }));
                    }}
                    checked={overtimePayment.workingDay.mainWorkingDay}
                  />
                  <label htmlFor="ctc">
                    <b>
                      Working Day : Employees are compensated for hours worked
                      beyond shift duration
                    </b>
                  </label>
                </div>
                {overtimePayment.workingDay.mainWorkingDay && (
                  <ul>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              workingDay: {
                                ...prevState.workingDay,
                                considerHours:
                                  !prevState.workingDay.considerHours,
                              },
                            }));
                          }}
                          checked={overtimePayment.workingDay.considerHours}
                        />
                        <label className="d-flex">
                          Consider Hours for Calculation
                          <ReactSelectSingle
                            value={DeductionSelect}
                            options={BothPrefixPostHours}
                            onChange={e => {
                              setDeductionSelect(e.value);
                            }}
                            disabled={
                              overtimePayment.workingDay.considerHours === false
                            }
                            placeholder="Select"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcSecond"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              workingDay: {
                                ...prevState.workingDay,
                                ignoreOTCompensation:
                                  !prevState.workingDay.ignoreOTCompensation,
                              },
                            }));
                          }}
                          checked={
                            overtimePayment.workingDay.ignoreOTCompensation
                          }
                        />
                        <label className="d-flex">
                          Ignore OT compensation if OT Hours are less than
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              overtimePayment.workingDay
                                .ignoreOTCompensation === false
                            }
                          />
                          Minites
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcThird"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              workingDay: {
                                ...prevState.workingDay,
                                otApplication:
                                  !prevState.workingDay.otApplication,
                              },
                            }));
                          }}
                          checked={overtimePayment.workingDay.otApplication}
                        />
                        <label className="d-flex">
                          Overtime application cannot be made after
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              overtimePayment.workingDay.otApplication === false
                            }
                          />
                          Calender Days
                        </label>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          <b>Overtime Compensation as :</b>
                        </label>
                      </div>
                      <div className="OverTimeStepone">
                        <label className="d-flex w-50">
                          Hours Paid as
                          <Input type="number" placeholder="00" />
                          Times of
                          <ReactSelectSingle
                            value={DeductionSelect}
                            options={DeductionSelectOption}
                            onChange={e => {
                              setDeductionSelect(e.value);
                            }}
                            placeholder="Select"
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="contribution_ctc_wrap mt-4">
            <ul>
              <li>
                <div className="main_check_wrap d-flex">
                  <Checkbox
                    inputId="ctcWeeklyMain"
                    className="me-2"
                    onChange={e => {
                      setOvertimePayment(prevState => ({
                        ...prevState,
                        weeklyOffDay: {
                          ...prevState.weeklyOffDay,
                          mainWeeklyOffDay:
                            !prevState.weeklyOffDay.mainWeeklyOffDay,
                        },
                      }));
                    }}
                    checked={overtimePayment.weeklyOffDay.mainWeeklyOffDay}
                  />
                  <label htmlFor="ctcWeeklyMain">
                    <b>
                      Weekly off day : Employees are paid for all work hours
                    </b>
                  </label>
                </div>
                {overtimePayment.weeklyOffDay.mainWeeklyOffDay && (
                  <ul>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcIgnoreOt"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              weeklyOffDay: {
                                ...prevState.weeklyOffDay,
                                ignoreOTCompensation:
                                  !prevState.weeklyOffDay.ignoreOTCompensation,
                              },
                            }));
                          }}
                          checked={
                            overtimePayment.weeklyOffDay.ignoreOTCompensation
                          }
                        />
                        <label className="d-flex">
                          Ignore OT compensation if OT Hours are less than
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              overtimePayment.weeklyOffDay
                                .ignoreOTCompensation === false
                            }
                          />
                          Minites
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcOtApplication"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              weeklyOffDay: {
                                ...prevState.weeklyOffDay,
                                otApplication:
                                  !prevState.weeklyOffDay.otApplication,
                              },
                            }));
                          }}
                          checked={overtimePayment.weeklyOffDay.otApplication}
                        />
                        <label className="d-flex">
                          Overtime application cannot be made after
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              overtimePayment.weeklyOffDay.otApplication ===
                              false
                            }
                          />
                          Calender Days
                        </label>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          <b>Overtime Compensation as :</b>
                        </label>
                      </div>
                      <div className="OverTimeStepone">
                        <label className="d-flex w-50">
                          Hours Paid as
                          <Input type="number" placeholder="00" />
                          Times of
                          <ReactSelectSingle
                            value={DeductionSelect}
                            options={DeductionSelectOption}
                            onChange={e => {
                              setDeductionSelect(e.value);
                            }}
                            placeholder="Select"
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="contribution_ctc_wrap mt-4">
            <ul>
              <li>
                <div className="main_check_wrap d-flex">
                  <Checkbox
                    inputId="ctcHolidayMain"
                    className="me-2"
                    onChange={e => {
                      setOvertimePayment(prevState => ({
                        ...prevState,
                        holiday: {
                          ...prevState.holiday,
                          mainHoliday: !prevState.holiday.mainHoliday,
                        },
                      }));
                    }}
                    checked={overtimePayment.holiday.mainHoliday}
                  />
                  <label htmlFor="ctcHolidayMain">
                    <b>Holiday : Employees are paid for all work hours</b>
                  </label>
                </div>
                {overtimePayment.holiday.mainHoliday && (
                  <ul>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcHolidayIgnoreOt"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              holiday: {
                                ...prevState.holiday,
                                ignoreOTCompensation:
                                  !prevState.holiday.ignoreOTCompensation,
                              },
                            }));
                          }}
                          checked={overtimePayment.holiday.ignoreOTCompensation}
                        />
                        <label className="d-flex">
                          Ignore OT compensation if OT Hours are less than
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              overtimePayment.holiday.ignoreOTCompensation ===
                              false
                            }
                          />
                          Minites
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcHolidayOtApplication"
                          className="me-2"
                          onChange={e => {
                            setOvertimePayment(prevState => ({
                              ...prevState,
                              holiday: {
                                ...prevState.holiday,
                                otApplication: !prevState.holiday.otApplication,
                              },
                            }));
                          }}
                          checked={overtimePayment.holiday.otApplication}
                        />
                        <label className="d-flex">
                          Overtime application cannot be made after
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              overtimePayment.holiday.otApplication === false
                            }
                          />
                          Calender Days
                        </label>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          <b>Overtime Compensation as :</b>
                        </label>
                      </div>
                      <div className="OverTimeStepone">
                        <label className="d-flex w-50">
                          Hours Paid as
                          <Input type="number" placeholder="00" />
                          Times of
                          <ReactSelectSingle
                            value={DeductionSelect}
                            options={DeductionSelectOption}
                            onChange={e => {
                              setDeductionSelect(e.value);
                            }}
                            placeholder="Select"
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end mt-4">
          <Link to="/scheme/overtime" className="btn-secondary mx-3">
            Cancel
          </Link>
          <Link to="/scheme/overtime" className="btn-primary">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
