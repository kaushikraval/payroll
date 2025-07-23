import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Input from '../../Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import ReactRadioButton from '../../Common/ReactRadioButton';
import { Checkbox } from 'primereact/checkbox';

export default function CreateAttendanceTracking() {
  const [monthSelect, setMonthSelect] = useState([]);
  const [leaveSelect, setLeaveSelect] = useState([]);
  const [weekSelect, setWeekSelect] = useState([]);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [attendanceTracking, setAttendanceTracking] = useState({
    lateComing: {
      lateComingMain: false,
      leavePenalty: false,
    },
    missingSwipe: {
      missingSwipeMain: false,
      leavePenalty: false,
    },
    missingAttendance: {
      missingAttendanceMain: false,
      leavePenalty: false,
    },
  });
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const monthSelectOption = [
    { label: '1St', value: '1St' },
    { label: '2nd', value: '2nd' },
    { label: '3rd', value: '3rd' },
    { label: '4th', value: '4th' },
    { label: '5th', value: '5th' },
    { label: '6th', value: '6th' },
    { label: '7th', value: '7th' },
    { label: '8th', value: '8th' },
    { label: '9th', value: '9th' },
  ];
  const leaveSelectOption = [
    { label: 'Sick Leave', value: 'Sick' },
    { label: 'Casual Leave', value: 'Casual' },
    { label: 'Privilege Leave', value: 'Privilege' },
    { label: 'Earned Leave', value: 'Earned' },
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
              <Link to="/scheme/attendance/attendance-tracking">
                Attendance Tracking
              </Link>
            </b>
          </li>
          <li>Add Attendance Tracking</li>
        </ul>
      </div>
      <div className="create_attendence_track_wrap">
        <div className="atd_name">
          <div className="form_group form_letter_name">
            <label>Attendance Tracking</label>
            <Input type="text" placeholder="Attendance Tracking" />
          </div>
          <ul className="atd_select">
            <li>
              Attendance Cycle For Month
              <ReactSelectSingle
                value={monthSelect}
                options={monthSelectOption}
                onChange={e => {
                  setMonthSelect(e.value);
                }}
                placeholder="Select"
              />
              To
              <Input type="number" placeholder="00" />
            </li>
          </ul>
        </div>

        <div className="atd_block_sec">
          <h6 className="mb-3">Late Coming</h6>
          <div className="mobile_check_wrap">
            <div className="contribution_ctc_wrap contribution_doat_remove">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <div className="epics_checkbox d-flex mb-3">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={() => {
                          setAttendanceTracking(prevState => ({
                            ...prevState,
                            lateComing: {
                              ...prevState.lateComing,
                              lateComingMain:
                                !prevState.lateComing.lateComingMain,
                            },
                          }));
                        }}
                        checked={attendanceTracking.lateComing.lateComingMain}
                      />
                      <label>
                        Do you want system to Penalized for late arrival
                        Instances?
                      </label>
                    </div>
                  </div>
                  {attendanceTracking.lateComing.lateComingMain === true && (
                    <ul>
                      <li>
                        <ul className="atd_select ps-0">
                          <li>
                            Late Come Allow Minute
                            <Input type="number" placeholder="00" />
                          </li>
                          <li>
                            Late Coming Instance Allowed Maximum
                            <Input type="number" placeholder="00" />
                            Days in a
                            <ReactSelectSingle
                              value={weekSelect}
                              options={weekSelectOption}
                              onChange={e => {
                                setWeekSelect(e.value);
                              }}
                              placeholder="Select"
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <h6 className="mb-0">
                            Beyond which leave is deducted as Follows :
                          </h6>
                        </div>
                        <ul className="atd_select ps-0">
                          <li>
                            For Every
                            <Input type="number" placeholder="00" />
                            Instance of late coming, Deduct
                            <Input type="number" placeholder="00" />
                            Days of leave
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <h6 className="mb-0">
                            Leave Penalties Deducted From :
                          </h6>
                        </div>
                        <div className="atd_select radio_button_wrapper">
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="paidLeave"
                              name="paidLeave"
                              value="Yes"
                              onChange={() => {
                                setAttendanceTracking(prevState => ({
                                  ...prevState,
                                  lateComing: {
                                    ...prevState.lateComing,
                                    leavePenalty: false,
                                  },
                                }));
                              }}
                              checked={
                                attendanceTracking.lateComing.leavePenalty ===
                                false
                              }
                            />
                            <label className="m-0" htmlFor="actualPf">
                              Deduct From Unpaid Leave (LWP)
                            </label>
                          </div>
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="unPaidLeave"
                              name="unPaidLeave"
                              value="No"
                              onChange={() => {
                                setAttendanceTracking(prevState => ({
                                  ...prevState,
                                  lateComing: {
                                    ...prevState.lateComing,
                                    leavePenalty: true,
                                  },
                                }));
                              }}
                              checked={
                                attendanceTracking.lateComing.leavePenalty ===
                                true
                              }
                            />
                            <label className="m-0" htmlFor="restrictPf">
                              Deduct From Paid Leave Balance
                              <ReactSelectSingle
                                value={leaveSelect}
                                options={leaveSelectOption}
                                onChange={e => {
                                  setLeaveSelect(e.value);
                                }}
                                disabled={
                                  attendanceTracking.lateComing.leavePenalty ===
                                  false
                                }
                                placeholder="Select"
                                className="mx-2"
                              />
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="atd_block_sec">
          <h6 className="mb-3">Missing Swipes</h6>
          <div className="mobile_check_wrap">
            <div className="contribution_ctc_wrap contribution_doat_remove">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <div className="epics_checkbox d-flex mb-3">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={() => {
                          setAttendanceTracking(prevState => ({
                            ...prevState,
                            missingSwipe: {
                              ...prevState.missingSwipe,
                              missingSwipeMain:
                                !prevState.missingSwipe.missingSwipeMain,
                            },
                          }));
                        }}
                        checked={
                          attendanceTracking.missingSwipe.missingSwipeMain
                        }
                      />
                      <label>
                        Do you want system to automatically deduct leave when
                        there is more missing swipes?
                      </label>
                    </div>
                  </div>
                  {attendanceTracking.missingSwipe.missingSwipeMain ===
                    true && (
                    <ul>
                      <li>
                        <ul className="atd_select ps-0">
                          <li>
                            Missing Swipes instance Allowed Maximum
                            <Input type="number" placeholder="00" />
                            Days in a
                            <ReactSelectSingle
                              value={weekSelect}
                              options={weekSelectOption}
                              onChange={e => {
                                setWeekSelect(e.value);
                              }}
                              placeholder="Select"
                            />
                          </li>
                          <li>
                            Deduct
                            <Input type="number" placeholder="00" />
                            Days if missing Swipe in a
                            <ReactSelectSingle
                              value={weekSelect}
                              options={weekSelectOption}
                              onChange={e => {
                                setWeekSelect(e.value);
                              }}
                              placeholder="Select"
                            />
                            Exceed
                            <Input type="number" placeholder="00" />
                            Working Days
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <h6 className="mb-0">
                            Leave Penalties Deducted From :
                          </h6>
                        </div>
                        <div className="atd_select radio_button_wrapper">
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="paidLeave"
                              name="paidLeave"
                              value="Yes"
                              onChange={() => {
                                setAttendanceTracking(prevState => ({
                                  ...prevState,
                                  missingSwipe: {
                                    ...prevState.missingSwipe,
                                    leavePenalty: false,
                                  },
                                }));
                              }}
                              checked={
                                attendanceTracking.missingSwipe.leavePenalty ===
                                false
                              }
                            />
                            <label className="m-0" htmlFor="actualPf">
                              Deduct From Unpaid Leave (LWP)
                            </label>
                          </div>
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="unPaidLeave"
                              name="unPaidLeave"
                              value="No"
                              onChange={() => {
                                setAttendanceTracking(prevState => ({
                                  ...prevState,
                                  missingSwipe: {
                                    ...prevState.missingSwipe,
                                    leavePenalty: true,
                                  },
                                }));
                              }}
                              checked={
                                attendanceTracking.missingSwipe.leavePenalty ===
                                true
                              }
                            />
                            <label className="m-0" htmlFor="restrictPf">
                              Deduct From Paid Leave Balance
                              <ReactSelectSingle
                                value={leaveSelect}
                                options={leaveSelectOption}
                                onChange={e => {
                                  setLeaveSelect(e.value);
                                }}
                                disabled={
                                  attendanceTracking.missingSwipe
                                    .leavePenalty === false
                                }
                                placeholder="Select"
                                className="mx-2"
                              />
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="atd_block_sec">
          <h6 className="mb-3">Missing Attendance For a Day</h6>
          <div className="mobile_check_wrap">
            <div className="contribution_ctc_wrap contribution_doat_remove">
              <ul>
                <li>
                  <div className="main_check_wrap">
                    <div className="epics_checkbox d-flex mb-3">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={() => {
                          setAttendanceTracking(prevState => ({
                            ...prevState,
                            missingAttendance: {
                              ...prevState.missingAttendance,
                              missingAttendanceMain:
                                !prevState.missingAttendance
                                  .missingAttendanceMain,
                            },
                          }));
                        }}
                        checked={
                          attendanceTracking.missingAttendance
                            .missingAttendanceMain
                        }
                      />
                      <label>
                        Do you want system to automatically deduct leave when
                        there is no attendance logged?
                      </label>
                    </div>
                  </div>
                  {attendanceTracking.missingAttendance
                    .missingAttendanceMain === true && (
                    <ul>
                      <li>
                        <ul className="atd_select ps-0">
                          <li>
                            Deduct
                            <Input type="number" placeholder="00" />
                            Days Leave for every missing attendance day after
                            <Input type="number" placeholder="00" />
                            Days
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="main_check_wrap">
                          <h6 className="mb-0">
                            Leave Penalties Deducted From :
                          </h6>
                        </div>
                        <div className="atd_select radio_button_wrapper">
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="paidLeave"
                              name="paidLeave"
                              value="Yes"
                              onChange={() => {
                                setAttendanceTracking(prevState => ({
                                  ...prevState,
                                  missingAttendance: {
                                    ...prevState.missingAttendance,
                                    leavePenalty: false,
                                  },
                                }));
                              }}
                              checked={
                                attendanceTracking.missingAttendance
                                  .leavePenalty === false
                              }
                            />
                            <label className="m-0" htmlFor="actualPf">
                              Deduct From Unpaid Leave (LWP)
                            </label>
                          </div>
                          <div className="radio_button pf_radio_wrap">
                            <ReactRadioButton
                              inputId="unPaidLeave"
                              name="unPaidLeave"
                              value="No"
                              onChange={() => {
                                setAttendanceTracking(prevState => ({
                                  ...prevState,
                                  missingAttendance: {
                                    ...prevState.missingAttendance,
                                    leavePenalty: true,
                                  },
                                }));
                              }}
                              checked={
                                attendanceTracking.missingAttendance
                                  .leavePenalty === true
                              }
                            />
                            <label className="m-0" htmlFor="restrictPf">
                              Deduct From Paid Leave Balance
                              <ReactSelectSingle
                                value={leaveSelect}
                                options={leaveSelectOption}
                                onChange={e => {
                                  setLeaveSelect(e.value);
                                }}
                                disabled={
                                  attendanceTracking.missingAttendance
                                    .leavePenalty === false
                                }
                                placeholder="Select"
                                className="mx-2"
                              />
                            </label>
                          </div>
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
            to="/scheme/attendance/attendance-tracking"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link
            className="btn-primary"
            to="/scheme/attendance/attendance-tracking"
          >
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
