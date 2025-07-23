import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Input from '../../Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { Checkbox } from 'primereact/checkbox';

export default function CreateCaptureMethod() {
  const [holidaySelect, setHolidaySelect] = useState([]);
  const [logSelect, setLogSelect] = useState([]);
  const [weekSelect, setWeekSelect] = useState([]);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [attendanceCheckIn, setAttendanceCheckIn] = useState({
    biometricDeviceCheckIn: false,
    webCheckIn: {
      mainWebCheckIn: false,
      restrictEmplyoyeeCheckIn: false,
    },
    mobileCheckIn: {
      mainMobileCheckIn: false,
      restrictEmplyoyeeCheckIn: false,
      allowFaceCapture: false,
      allowFaceAndVerifyCheckIn: false,
    },
    workFromHome: {
      mainWorkFromHome: false,
      allowEmployeeForCheckIn: false,
      allowWFHDaysIn: false,
      restrictEmployee: false,
      commentIsMandatory: false,
      allowDuration: {
        mainAllowDuration: false,
        fulllDay: false,
        halfDay: false,
        hourly: false,
      },
    },
    outStationDuty: {
      mainoutStationDuty: false,
      allowEmployeeForCheckIn: false,
      dutyRequestDays: false,
      restrictPastDateRequest: false,
      restrictEmployee: false,
      commentIsMandatory: false,
      allowDuration: {
        mainAllowDuration: false,
        fulllDay: false,
        halfDay: false,
        hourly: false,
      },
    },
    attendanceRegularization: {
      mainAttendanceRegularization: false,
      regularizationAllowed: false,
      allowAttendanceLog: false,
      restrictPastDateRequest: false,
      restrictEmployee: false,
      commentIsMandatory: false,
    },
  });
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const holidaySelectOption = [
    { label: 'Weekly Offs', value: 'Weekly' },
    { label: 'Holidays', value: 'Holidays' },
    { label: 'Weekly Offs  & Holidays', value: 'WeeklyOffs' },
  ];
  const logSelectOption = [
    { label: 'All Attendance Logs', value: 'Attendance' },
    { label: 'Only For Missing Check In/Check Out', value: 'Missing' },
  ];
  const weekSelectOption = [
    { label: 'Week', value: 'Week' },
    { label: 'Month', value: 'Month' },
  ];

  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
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
            <b>Attendance</b>
          </li>
          <li>
            <b>
              <Link to="/scheme/attendance/capture-method">Capture Method</Link>
            </b>
          </li>
          <li>Add Capture Method</li>
        </ul>
      </div>
      <div className="create_capture_wrap">
        <div className="form_group form_letter_name">
          <label>Capture Method</label>
          <Input type="text" placeholder="Capture Method" />
        </div>
        <div className="attnd_option mb-3">
          <h6 className="mb-3">Attendance Check In/Check Out Options</h6>
        </div>
        <div className="create_capture_checkshow">
          <div className="biomatric_wrap">
            <div className="contribution_ctc_wrap">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <Checkbox
                      inputId="biomateric"
                      className="me-2"
                      onChange={e => {
                        setAttendanceCheckIn({
                          ...attendanceCheckIn,
                          biometricDeviceCheckIn:
                            !attendanceCheckIn.biometricDeviceCheckIn,
                        });
                      }}
                      checked={attendanceCheckIn.biometricDeviceCheckIn}
                    />
                    <label>
                      <b>Biometric Device Check In/Check Out</b>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="web_check_wrap mb-3">
            <div className="contribution_ctc_wrap">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => {
                        setAttendanceCheckIn(prevState => ({
                          ...prevState,
                          webCheckIn: {
                            ...prevState.webCheckIn,
                            mainWebCheckIn:
                              !prevState.webCheckIn.mainWebCheckIn,
                          },
                        }));
                      }}
                      checked={attendanceCheckIn.webCheckIn.mainWebCheckIn}
                    />
                    <label>
                      <b>Web Check In / Check Out</b>
                    </label>
                  </div>
                  {attendanceCheckIn.webCheckIn.mainWebCheckIn === true && (
                    <ul>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                webCheckIn: {
                                  ...prevState.webCheckIn,
                                  restrictEmplyoyeeCheckIn:
                                    !prevState.webCheckIn
                                      .restrictEmplyoyeeCheckIn,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.webCheckIn
                                .restrictEmplyoyeeCheckIn
                            }
                          />
                          <label>
                            Restrict Emplyoyee to Check In/Check Out only from
                            following IP Ranges
                          </label>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile_check_wrap">
            <div className="contribution_ctc_wrap">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => {
                        setAttendanceCheckIn(prevState => ({
                          ...prevState,
                          mobileCheckIn: {
                            ...prevState.mobileCheckIn,
                            mainMobileCheckIn:
                              !prevState.mobileCheckIn.mainMobileCheckIn,
                          },
                        }));
                      }}
                      checked={
                        attendanceCheckIn.mobileCheckIn.mainMobileCheckIn
                      }
                    />
                    <label>
                      <b>Mobile Check In / Check Out</b>
                    </label>
                  </div>
                  {attendanceCheckIn.mobileCheckIn.mainMobileCheckIn ===
                    true && (
                    <ul>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                mobileCheckIn: {
                                  ...prevState.mobileCheckIn,
                                  restrictEmplyoyeeCheckIn:
                                    !prevState.mobileCheckIn
                                      .restrictEmplyoyeeCheckIn,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.mobileCheckIn
                                .restrictEmplyoyeeCheckIn
                            }
                          />
                          <label>
                            Restrict Emplyoyee to Check In/Check Out only from
                            pre Defined Geo Location only
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                mobileCheckIn: {
                                  ...prevState.mobileCheckIn,
                                  allowFaceCapture:
                                    !prevState.mobileCheckIn.allowFaceCapture,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.mobileCheckIn.allowFaceCapture
                            }
                          />
                          <label>Allow Face Capture Check In/Check Out</label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                mobileCheckIn: {
                                  ...prevState.mobileCheckIn,
                                  allowFaceAndVerifyCheckIn:
                                    !prevState.mobileCheckIn
                                      .allowFaceAndVerifyCheckIn,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.mobileCheckIn
                                .allowFaceAndVerifyCheckIn
                            }
                          />
                          <label>
                            Allow Face Capture/Verify Check In/Check Out
                          </label>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="work_home_wrap">
            <div className="contribution_ctc_wrap">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => {
                        setAttendanceCheckIn(prevState => ({
                          ...prevState,
                          workFromHome: {
                            ...prevState.workFromHome,
                            mainWorkFromHome:
                              !prevState.workFromHome.mainWorkFromHome,
                          },
                        }));
                      }}
                      checked={attendanceCheckIn.workFromHome.mainWorkFromHome}
                    />
                    <label>
                      <b>Work From Home (WFH)</b>
                    </label>
                  </div>
                  {attendanceCheckIn.workFromHome.mainWorkFromHome && (
                    <ul>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  allowEmployeeForCheckIn:
                                    !prevState.workFromHome
                                      .allowEmployeeForCheckIn,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome
                                .allowEmployeeForCheckIn
                            }
                          />
                          <label>
                            Allow Employee to Check In/Check Out While On Work
                            from Home
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  allowWFHDaysIn:
                                    !prevState.workFromHome.allowWFHDaysIn,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome.allowWFHDaysIn
                            }
                          />
                          <label>
                            Work From Home Request Allowed
                            <Input
                              type="number"
                              placeholder="00"
                              disabled={
                                attendanceCheckIn.workFromHome
                                  .allowWFHDaysIn === false
                              }
                            />
                            Days In a
                            <ReactSelectSingle
                              value={weekSelect}
                              options={weekSelectOption}
                              onChange={e => {
                                setWeekSelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.workFromHome
                                  .allowWFHDaysIn === false
                              }
                              placeholder="Select"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  restrictEmployee:
                                    !prevState.workFromHome.restrictEmployee,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome.restrictEmployee
                            }
                          />
                          <label>
                            Restrict Employee to raised request on
                            <ReactSelectSingle
                              value={holidaySelect}
                              options={holidaySelectOption}
                              onChange={e => {
                                setHolidaySelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.workFromHome
                                  .restrictEmployee === false
                              }
                              placeholder="Select"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  commentIsMandatory:
                                    !prevState.workFromHome.commentIsMandatory,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome.commentIsMandatory
                            }
                          />
                          <label>
                            Comment is mandatory for Out Station Duty Request?
                          </label>
                        </div>
                      </li>
                      <li className="without_after">
                        <div className="main_check_wrap">
                          <label>
                            <b>Allowed Duration:</b>
                          </label>
                        </div>
                        <div className="inner_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  allowDuration: {
                                    ...prevState.workFromHome.allowDuration,
                                    fulllDay:
                                      !prevState.workFromHome.allowDuration
                                        .fulllDay,
                                  },
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome.allowDuration
                                .fulllDay
                            }
                          />
                          <label className="me-3">Full Day</label>
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  allowDuration: {
                                    ...prevState.workFromHome.allowDuration,
                                    halfDay:
                                      !prevState.workFromHome.allowDuration
                                        .halfDay,
                                  },
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome.allowDuration
                                .halfDay
                            }
                          />
                          <label className="me-3">Half Day</label>
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                workFromHome: {
                                  ...prevState.workFromHome,
                                  allowDuration: {
                                    ...prevState.workFromHome.allowDuration,
                                    hourly:
                                      !prevState.workFromHome.allowDuration
                                        .hourly,
                                  },
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.workFromHome.allowDuration
                                .hourly
                            }
                          />
                          <label>Hourly</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="work_home_wrap">
            <div className="contribution_ctc_wrap">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => {
                        setAttendanceCheckIn(prevState => ({
                          ...prevState,
                          outStationDuty: {
                            ...prevState.outStationDuty,
                            mainoutStationDuty:
                              !prevState.outStationDuty.mainoutStationDuty,
                          },
                        }));
                      }}
                      checked={
                        attendanceCheckIn.outStationDuty.mainoutStationDuty
                      }
                    />
                    <label>
                      <b>Out Station Duty</b>
                    </label>
                  </div>
                  {attendanceCheckIn.outStationDuty.mainoutStationDuty && (
                    <ul>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  allowEmployeeForCheckIn:
                                    !prevState.outStationDuty
                                      .allowEmployeeForCheckIn,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty
                                .allowEmployeeForCheckIn
                            }
                          />
                          <label>
                            Allow Employee to Check In/Check Out While Out
                            Station Duty
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  dutyRequestDays:
                                    !prevState.outStationDuty.dutyRequestDays,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty.dutyRequestDays
                            }
                          />
                          <label>
                            Out Station Duty Request
                            <Input
                              type="number"
                              placeholder="00"
                              disabled={
                                attendanceCheckIn.outStationDuty
                                  .dutyRequestDays === false
                              }
                            />
                            Days In a
                            <ReactSelectSingle
                              value={weekSelect}
                              options={weekSelectOption}
                              onChange={e => {
                                setWeekSelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.outStationDuty
                                  .dutyRequestDays === false
                              }
                              placeholder="Select"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  restrictPastDateRequest:
                                    !prevState.outStationDuty
                                      .restrictPastDateRequest,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty
                                .restrictPastDateRequest
                            }
                          />
                          <label>
                            Restrict Past Dated Request
                            <Input
                              type="number"
                              placeholder="00"
                              disabled={
                                attendanceCheckIn.outStationDuty
                                  .restrictPastDateRequest === false
                              }
                            />
                            Calander Days Back
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  restrictEmployee:
                                    !prevState.outStationDuty.restrictEmployee,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty.restrictEmployee
                            }
                          />
                          <label>
                            Restrict Emplyoee to raised Out Station Duty Request
                            On
                            <ReactSelectSingle
                              value={holidaySelect}
                              options={holidaySelectOption}
                              onChange={e => {
                                setHolidaySelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.outStationDuty
                                  .restrictEmployee === false
                              }
                              placeholder="Select"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  commentIsMandatory:
                                    !prevState.outStationDuty
                                      .commentIsMandatory,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty
                                .commentIsMandatory
                            }
                          />
                          <label>
                            Comment is mandatory for Out Station Duty Request?
                          </label>
                        </div>
                      </li>
                      <li className="without_after">
                        <div className="main_check_wrap">
                          <label>
                            <b>Out Station Duty Allowed Duration:</b>
                          </label>
                        </div>
                        <div className="inner_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  allowDuration: {
                                    ...prevState.outStationDuty.allowDuration,
                                    fulllDay:
                                      !prevState.outStationDuty.allowDuration
                                        .fulllDay,
                                  },
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty.allowDuration
                                .fulllDay
                            }
                          />
                          <label className="me-3">Full Day</label>
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  allowDuration: {
                                    ...prevState.outStationDuty.allowDuration,
                                    halfDay:
                                      !prevState.outStationDuty.allowDuration
                                        .halfDay,
                                  },
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty.allowDuration
                                .halfDay
                            }
                          />
                          <label className="me-3">Half Day</label>
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                outStationDuty: {
                                  ...prevState.outStationDuty,
                                  allowDuration: {
                                    ...prevState.outStationDuty.allowDuration,
                                    hourly:
                                      !prevState.outStationDuty.allowDuration
                                        .hourly,
                                  },
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.outStationDuty.allowDuration
                                .hourly
                            }
                          />
                          <label>Hourly</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="Attnd_regularization_wrap">
            <div className="contribution_ctc_wrap">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => {
                        setAttendanceCheckIn(prevState => ({
                          ...prevState,
                          attendanceRegularization: {
                            ...prevState.attendanceRegularization,
                            mainAttendanceRegularization:
                              !prevState.attendanceRegularization
                                .mainAttendanceRegularization,
                          },
                        }));
                      }}
                      checked={
                        attendanceCheckIn.attendanceRegularization
                          .mainAttendanceRegularization
                      }
                    />
                    <label>
                      <b>Attendance Regularization</b>
                    </label>
                  </div>
                  {attendanceCheckIn.attendanceRegularization
                    .mainAttendanceRegularization && (
                    <ul>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                attendanceRegularization: {
                                  ...prevState.attendanceRegularization,
                                  regularizationAllowed:
                                    !prevState.attendanceRegularization
                                      .regularizationAllowed,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.attendanceRegularization
                                .regularizationAllowed
                            }
                          />
                          <label>
                            Regularization Allowed For
                            <ReactSelectSingle
                              value={logSelect}
                              options={logSelectOption}
                              onChange={e => {
                                setLogSelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.attendanceRegularization
                                  .regularizationAllowed === false
                              }
                              placeholder="Select"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                attendanceRegularization: {
                                  ...prevState.attendanceRegularization,
                                  allowAttendanceLog:
                                    !prevState.attendanceRegularization
                                      .allowAttendanceLog,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.attendanceRegularization
                                .allowAttendanceLog
                            }
                          />
                          <label>
                            Employee Can Allowed
                            <Input
                              type="number"
                              placeholder="00"
                              disabled={
                                attendanceCheckIn.attendanceRegularization
                                  .allowAttendanceLog === false
                              }
                            />
                            Time In a
                            <ReactSelectSingle
                              value={weekSelect}
                              options={weekSelectOption}
                              onChange={e => {
                                setWeekSelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.attendanceRegularization
                                  .allowAttendanceLog === false
                              }
                              placeholder="Select"
                            />
                            to adjust attendance logs
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                attendanceRegularization: {
                                  ...prevState.attendanceRegularization,
                                  restrictPastDateRequest:
                                    !prevState.attendanceRegularization
                                      .restrictPastDateRequest,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.attendanceRegularization
                                .restrictPastDateRequest
                            }
                          />
                          <label>
                            Restrict Past Dated Request
                            <Input
                              type="number"
                              placeholder="00"
                              disabled={
                                attendanceCheckIn.attendanceRegularization
                                  .restrictPastDateRequest === false
                              }
                            />
                            Calander Days Back
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                attendanceRegularization: {
                                  ...prevState.attendanceRegularization,
                                  restrictEmployee:
                                    !prevState.attendanceRegularization
                                      .restrictEmployee,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.attendanceRegularization
                                .restrictEmployee
                            }
                          />
                          <label>
                            Restrict Emplyoee to raised Regularization Request
                            on
                            <ReactSelectSingle
                              value={holidaySelect}
                              options={holidaySelectOption}
                              onChange={e => {
                                setHolidaySelect(e.value);
                              }}
                              disabled={
                                attendanceCheckIn.attendanceRegularization
                                  .restrictEmployee === false
                              }
                              placeholder="Select"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <Checkbox
                            inputId="ctcFirst"
                            className="me-2"
                            onChange={e => {
                              setAttendanceCheckIn(prevState => ({
                                ...prevState,
                                attendanceRegularization: {
                                  ...prevState.attendanceRegularization,
                                  commentIsMandatory:
                                    !prevState.attendanceRegularization
                                      .commentIsMandatory,
                                },
                              }));
                            }}
                            checked={
                              attendanceCheckIn.attendanceRegularization
                                .commentIsMandatory
                            }
                          />
                          <label>
                            Comment is mandatory for Regularization Request?
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

        <div className="btn_group d-flex justify-content-end">
          <Link
            to="/scheme/attendance/capture-method"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link className="btn-primary" to="/scheme/attendance/capture-method">
            Save
          </Link>
        </div>
      </div>
      <Dialog
        header="Confirm"
        visible={deleteDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setDeleteDetail(false)}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
