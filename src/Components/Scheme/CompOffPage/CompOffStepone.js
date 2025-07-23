import { useState } from 'react';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { Checkbox } from 'primereact/checkbox';
import PlusIcon from '../../../Assets/images/plus.svg';
import WorkingDayTableData from './WorkingDayTableData';
import WeeklyDayOffTableData from './WeeklyDayOffTableData';
import HolidayTableData from './HolidayTableData';

export default function CreatePfConfiguration() {
  const [deductionSelect, setDeductionSelect] = useState([]);
  const [compOff, setCompOff] = useState({
    workingDay: {
      mainWorkingDay: false,
      ignoreOTCompensation: false,
      otApplication: false,
    },
    weeklyOffDay: {
      mainWeelyOffDay: false,
      ignoreOTCompensation: false,
      otApplication: false,
    },
    holiday: {
      mainHoliday: false,
      ignoreOTCompensation: false,
      otApplication: false,
    },
  });
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
              <Link to="/scheme/compoff">Comp Off</Link>
            </b>
          </li>
          <li>Add Comp Off</li>
        </ul>
      </div>
      <div className=" p-3">
        <div className="row">
          <div className="col-md-4">
            <div className="form_group">
              <label>Comp Off Scheme Name</label>
              <Input type="text" placeholder="Comp Off Scheme Name" />
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
          <h6>COFF Credit Calculation Criteria</h6>

          <div className="contribution_ctc_wrap mt-4">
            <ul>
              <li>
                <div className="main_check_wrap d-flex">
                  <Checkbox
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setCompOff(prevState => ({
                        ...prevState,
                        workingDay: {
                          ...prevState.workingDay,
                          mainWorkingDay: !prevState.workingDay.mainWorkingDay,
                        },
                      }));
                    }}
                    checked={compOff.workingDay.mainWorkingDay}
                  />
                  <label>
                    <b>
                      Working Day : Comp-off will be credited for hours worked
                      beyond shift duration on a regular day.
                    </b>
                  </label>
                </div>
                {compOff.workingDay.mainWorkingDay && (
                  <ul>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setCompOff(prevState => ({
                              ...prevState,
                              workingDay: {
                                ...prevState.workingDay,
                                ignoreOTCompensation:
                                  !prevState.workingDay.ignoreOTCompensation,
                              },
                            }));
                          }}
                          checked={compOff.workingDay.ignoreOTCompensation}
                        />
                        <label className="d-flex">
                          Ignore Comp-off credit if overtime/extra hoursare less
                          than
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              compOff.workingDay.ignoreOTCompensation === false
                            }
                          />
                          Minites
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setCompOff(prevState => ({
                              ...prevState,
                              workingDay: {
                                ...prevState.workingDay,
                                otApplication:
                                  !prevState.workingDay.otApplication,
                              },
                            }));
                          }}
                          checked={compOff.workingDay.otApplication}
                        />
                        <label className="d-flex">
                          Comp-off application can not be made after
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              compOff.workingDay.otApplication === false
                            }
                          />
                          Calender Days
                        </label>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          Consider Shift Hours
                          <ReactSelectSingle
                            value={deductionSelect}
                            options={BothPrefixPostHours}
                            onChange={e => {
                              setDeductionSelect(e.value);
                            }}
                            placeholder="Select"
                          />
                        </label>
                      </div>
                      <b className="mb-3 d-block">
                        Employee will be awarded with Comp-off as Full
                        Day/Partial Day Based on Following criteria
                      </b>
                      <WorkingDayTableData />
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <div className="OverTimeStepone d-flex">
                          <label className="d-flex">
                            Comp-off will be added to leave type
                            <Input type="text" placeholder="COFF Leave" />
                          </label>
                        </div>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <div className="OverTimeStepone d-flex">
                          <label className="d-flex">
                            Credited leaves expire after
                            <Input type="number" placeholder="00" />
                            Calender Days
                          </label>
                        </div>
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
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setCompOff(prevState => ({
                        ...prevState,
                        weeklyOffDay: {
                          ...prevState.weeklyOffDay,
                          mainWeelyOffDay:
                            !prevState.weeklyOffDay.mainWeelyOffDay,
                        },
                      }));
                    }}
                    checked={compOff.weeklyOffDay.mainWeelyOffDay}
                  />
                  <label>
                    <b>
                      Weekly off Day : Comp-off will be credited for total work
                      hours
                    </b>
                  </label>
                </div>
                {compOff.weeklyOffDay.mainWeelyOffDay && (
                  <ul>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setCompOff(prevState => ({
                              ...prevState,
                              weeklyOffDay: {
                                ...prevState.weeklyOffDay,
                                ignoreOTCompensation:
                                  !prevState.weeklyOffDay.ignoreOTCompensation,
                              },
                            }));
                          }}
                          checked={compOff.weeklyOffDay.ignoreOTCompensation}
                        />
                        <label className="d-flex ">
                          Ignore Comp-off credit if overtime/extra hours are
                          less than
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              compOff.weeklyOffDay.ignoreOTCompensation ===
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
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setCompOff(prevState => ({
                              ...prevState,
                              weeklyOffDay: {
                                ...prevState.weeklyOffDay,
                                otApplication:
                                  !prevState.weeklyOffDay.otApplication,
                              },
                            }));
                          }}
                          checked={compOff.weeklyOffDay.otApplication}
                        />
                        <label className="d-flex">
                          Comp-off application can not be made after
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              compOff.weeklyOffDay.otApplication === false
                            }
                          />
                          Calender Days
                        </label>
                      </div>

                      <b className="mb-3 d-block">
                        Employee will be awarded with Comp-off as Full
                        Day/Partial Day Based on Following criteria
                      </b>
                      <WeeklyDayOffTableData />
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          Comp-off will be added to leave type
                          <Input type="text" placeholder="COFF Leave" />
                        </label>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          Credited leaves expire after
                          <Input type="number" placeholder="00" />
                          Calender Days
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
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setCompOff(prevState => ({
                        ...prevState,
                        holiday: {
                          ...prevState.holiday,
                          mainHoliday: !prevState.holiday.mainHoliday,
                        },
                      }));
                    }}
                    checked={compOff.holiday.mainHoliday}
                  />
                  <label>
                    <b>
                      Holiday : Comp-off will be credited for total work hours
                    </b>
                  </label>
                </div>
                {compOff.holiday.mainHoliday && (
                  <ul>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setCompOff(prevState => ({
                              ...prevState,
                              holiday: {
                                ...prevState.holiday,
                                ignoreOTCompensation:
                                  !prevState.holiday.ignoreOTCompensation,
                              },
                            }));
                          }}
                          checked={compOff.holiday.ignoreOTCompensation}
                        />
                        <label className="d-flex">
                          Ignore Comp-off credit if overtime/extra hours are
                          less than
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={
                              compOff.holiday.ignoreOTCompensation === false
                            }
                          />
                          Minites
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setCompOff(prevState => ({
                              ...prevState,
                              holiday: {
                                ...prevState.holiday,
                                otApplication: !prevState.holiday.otApplication,
                              },
                            }));
                          }}
                          checked={compOff.holiday.otApplication}
                        />
                        <label className="d-flex">
                          Comp-off application can not be made after
                          <Input
                            type="number"
                            placeholder="00"
                            disabled={compOff.holiday.otApplication === false}
                          />
                          Calender Days
                        </label>
                      </div>
                      <b className="mb-3 d-block">
                        Employee will be awarded with Comp-off as Full
                        Day/Partial Day Based on Following criteria
                      </b>
                      <HolidayTableData />
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          Comp-off will be added to leave type
                          <Input type="text" placeholder="COFF Leave" />
                        </label>
                      </div>
                    </li>
                    <li className="without_after">
                      <div className="main_check_wrap OverTimeStepone d-flex">
                        <label className="d-flex">
                          Credited leaves expire after
                          <Input type="number" placeholder="00" />
                          Calender Days
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
          <Link to="/scheme/compoff" className="btn-secondary mx-3">
            Cancel
          </Link>
          <Link to="/scheme/compoff" className="btn-primary">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
