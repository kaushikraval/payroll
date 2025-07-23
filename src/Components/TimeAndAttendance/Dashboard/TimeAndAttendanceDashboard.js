import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import TimingChart from './TimingChart';
import { Calendar } from 'primereact/calendar';
import LeftArrow from '../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../Assets/images/chevron-right.svg';
import CheckIn from '../../../Assets/images/checkin.svg';
import NotCheckIn from '../../../Assets/images/not-checkin.svg';
import OnLeave from '../../../Assets/images/on-leave.svg';
import WeeklyOff from '../../../Assets/images/weekly-off2.svg';
import Holiday from '../../../Assets/images/holiday2.svg';
import LateComing from '../../../Assets/images/late-coming.svg';
import EarlyGoing from '../../../Assets/images/early-going.svg';
import WorkFromOffice from '../../../Assets/images/work-from-office.svg';
import OutStationDuty from '../../../Assets/images/out-station-duty.svg';
import TeamAttendanceTrendChart from './TeamAttendanceTrendChart';

export default function TimeAndAttendanceDashboard() {
  const [date, setDate] = useState(null);
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
            <b>Time & Attendance</b>
          </li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="timing_chart_wrap bg_white_box h-100">
            <div className="timing_chart_head p-3">
              <div className="row">
                <div className="col-sm-4">
                  <h6 className="m-0">My Timings</h6>
                </div>
                <div className="col-sm-8">
                  <div className="timing_chart_label d-flex align-items-center justify-content-end">
                    {/* <div className="attendance_satus_wrap">
                      <ul>
                        <li className="status status_blue">Before</li>
                        <li className="status status_orange">Break</li>
                        <li className="status status_blue">After</li>
                      </ul>
                    </div> */}
                    <p className="m-0">Nov 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timing_chart_wrap p-3">
              <TimingChart />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="time_attendance_calender_wrap bg_white_box p-3 h-100">
            <h6>My Attendance Calender</h6>
            <Calendar
              value={date}
              onChange={e => setDate(e.value)}
              inline
              showWeek
            />
          </div>
        </div>
      </div>
      <div className="team_attendance_summary_wrap bg_white_box p-3 mb-4">
        <div className="team_attendance_summary_head mb-3">
          <div className="row">
            <div className="col-6">
              <h6 className="m-0">Team Attendance Summary</h6>
            </div>
            <div className="col-6">
              <div className="top_date_wrap">
                <h6>
                  <button type="button">
                    <img src={LeftArrow} alt="LeftArrow" />
                  </button>
                  04 Nov 2022
                  <button type="button">
                    <img src={RightArrow} alt="RightArrow" />
                  </button>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="team_attendance_summary_main">
          <div className="team_attendance_wrap one">
            <div className="row">
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/check-in"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={CheckIn} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Checked In</h6>
                    <h4>65</h4>
                  </div>
                </Link>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/not-check-in"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={NotCheckIn} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Not Checked in</h6>
                    <h4>10</h4>
                  </div>
                </Link>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/on-leave"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={OnLeave} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>On Leave</h6>
                    <h4>06</h4>
                  </div>
                </Link>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/weekly-off"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={WeeklyOff} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Weekly Off</h6>
                    <h4>02</h4>
                  </div>
                </Link>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/holiday"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={Holiday} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Holiday</h6>
                    <h4>00</h4>
                  </div>
                </Link>
              </div>

              {/* <div className="team_attendance_wrap two"> */}
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/late-coming"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={LateComing} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Late Coming</h6>
                    <h4>12</h4>
                  </div>
                </Link>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <Link
                  to="/time-and-attendance/dashboard/early-going"
                  className="team_attendance_box"
                >
                  <div className="icon">
                    <img src={EarlyGoing} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Early Going</h6>
                    <h4>00</h4>
                  </div>
                </Link>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <div className="team_attendance_box">
                  <div className="icon">
                    <img src={WorkFromOffice} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>Work From Office</h6>
                    <h4>60</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl col-md-4 mb-3">
                <div className="team_attendance_box">
                  <div className="icon">
                    <img src={OutStationDuty} alt="Check in" />
                  </div>
                  <div className="content">
                    <h6>WFH/Out Station Duty</h6>
                    <h4>05</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="team_attendance_trend bg_white_box">
        <div className="team_attendance_trend_head p-3">
          <h6 className="m-0">Team Attendance Trend</h6>
        </div>
        <div className="team_attendance_trend_main p-3">
          {/* <div className="attendance_satus_wrap mb-3">
            <ul>
              <li className="status status_blue">Present (%)</li>
              <li className="status status_orange">Absents (%)</li>
              <li className="status status_pink">Leaves (%)</li>
            </ul>
          </div> */}
          <div className="team_attendance_trend_chart">
            <TeamAttendanceTrendChart />
          </div>
        </div>
      </div>
    </div>
  );
}
