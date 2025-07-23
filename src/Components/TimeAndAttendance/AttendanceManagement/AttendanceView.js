import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import EditIcon from '../../../Assets/images/edit.svg';
import MobileIcon from '../../../Assets/images/mobile.svg';
import DesktopIcon from '../../../Assets/images/desktop.svg';
import MapIcon from '../../../Assets/images/map.svg';
import ReactEventCelender from '../../Common/ReactEventCelender';
import { Dialog } from 'primereact/dialog';
import PlusIcon from '../../../Assets/images/plus.svg';
import WeeklyOffImg from '../../../Assets/images/weekly-off.svg';
import HolidayImg from '../../../Assets/images/holiday.svg';
import PaidLeaveImg from '../../../Assets/images/paid-leave.svg';
import LeftArrow from '../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../Assets/images/chevron-right.svg';
import AbsentImg from '../../../Assets/images/absent.svg';
import DownRightIcon from '../../../Assets/images/down-right.svg';
import TopLeftIcon from '../../../Assets/images/top-left.svg';
import MapIconA from '../../../Assets/images/mapiconA.svg';
import MapIconB from '../../../Assets/images/mapiconB.svg';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import EmployeeImg from '../../../Assets/images/user3.png';
import DownloadIcon from '../../../Assets/images/downloadicon-blue.svg';
import { Link } from 'react-router-dom';
import AttendanceRequest from '../../Employee/Master/EmployeeList/EmployeeProfileDetail/AttendanceRequest';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import ReactCelenderRange from 'Components/Common/ReactCelenderRange';
import { SplitButton } from 'primereact/splitbutton';

export default function AttendanceView() {
  const { t } = useTranslation();
  const [weeklyOff, setWeeklyOff] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [paidLeave, setPaidLeave] = useState(false);
  const [absent, setAbsent] = useState(false);
  const [present, setPresent] = useState(false);
  const [checkoutMap, setCheckoutMap] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogFuncMap = {
    weeklyOff: setWeeklyOff,
    holiday: setHoliday,
    paidLeave: setPaidLeave,
    absent: setAbsent,
    present: setPresent,
    checkoutMap: setCheckoutMap,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };

  const items = [
    {
      label: 'Import',
      icon: 'pi pi-download',
    },
    {
      label: 'Download as PDF',
      icon: 'pi pi-file-pdf',
    },
    {
      label: 'Export',
      icon: 'pi pi-file-export',
    },
  ];
  return (
    <div className="employee_profile_tab">
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
          <li>
            <b>Time Management</b>
          </li>
          <li>Attendence View</li>
        </ul>
      </div>

      <div className="user_wrap">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <div className="employee_img">
                <img src={EmployeeImg} />
              </div>
              <div className="employee_text">
                <p className="m-0">
                  Dhaval Patel <br /> <span>UX/UI Designer</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center justify-content-end">
              <div className="top_date_wrap text_celender">
                <h6>
                  <button type="button">
                    <img src={LeftArrow} alt="LeftArrow" />
                  </button>
                  <ReactCelenderRange placeholder="26 July 2022" />
                  <button type="button">
                    <img src={RightArrow} alt="RightArrow" />
                  </button>
                </h6>
              </div>
              {/* <button className="btn-border">
                <img src={DownloadIcon} alt="Download Arrow" />
              </button> */}
              <SplitButton
                className="p-button-primary icon_dropdown"
                model={items}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="attendence_wrapper">
        <div className="attencence_count_wrap mb-3">
          <div className="bg_white_box p-3">
            <div className="add_attendance_wrap d-flex align-items-center justify-content-center justify-content-sm-end">
              {activeIndex === 0 && (
                <div className="top_date_wrap">
                  <h6>
                    <button type="button">
                      <img src={LeftArrow} alt="LeftArrow" />
                    </button>
                    {t('attendance.attendance_of_month')}
                    <button type="button">
                      <img src={RightArrow} alt="RightArrow" />
                    </button>
                  </h6>
                </div>
              )}
              <button className="btn-primary">
                <img src={PlusIcon} className="me-2" alt="Plus Icon" />
                {t('attendance.add_attendance')}
              </button>
            </div>
            <div className="leave_balance_wrap">
              <TabView>
                <TabPanel header={t('attendance.days_label')}>
                  <div className="attencence_box_wrap">
                    <ul>
                      <li className="payable in_out_box">
                        <h4>
                          {t('attendance.late_in')}
                          <span>{t('event.no_of_birthday')}</span>
                        </h4>
                        <h4>
                          {t('attendance.early_out')}
                          <span>{t('event.no_of_birthday')}</span>
                        </h4>
                      </li>
                      {/* <li className="payable">
                  <h6>Payable Days</h6>
                  <h4>17 Days</h4>
                </li> */}
                      <li className="present">
                        <h6>{t('attendance.present')}</h6>
                        <h4>{t('attendance.days_value')}</h4>
                      </li>
                      <li className="absent">
                        <h6>{t('attendance.absent')}</h6>
                        <h4>{t('attendance.days_value')}</h4>
                      </li>
                      <li className="weekly_off">
                        <h6>{t('attendance.weekly_off')}</h6>
                        <h4>{t('attendance.days_value')}</h4>
                      </li>
                      <li className="holiday">
                        <h6>{t('attendance.holiday')}</h6>
                        <h4>{t('attendance.days_value')}</h4>
                      </li>
                      <li className="paid_leave">
                        <h6>{t('attendance.paid_leave')}</h6>
                        <h4>{t('attendance.days_value')}</h4>
                      </li>
                      <li className="unpaid_leave">
                        <h6>{t('attendance.unpaid_leave')}</h6>
                        <h4>{t('attendance.days_value')}</h4>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel header={t('attendance.hours_label')}>
                  <div className="attencence_box_wrap">
                    <ul>
                      <li className="payable in_out_box">
                        <h4>
                          {t('attendance.late_in')}
                          <span>{t('attendance.hours_value')}</span>
                        </h4>
                        <h4>
                          {t('attendance.early_out')}
                          <span>{t('attendance.hours_value')}</span>
                        </h4>
                      </li>
                      <li className="present">
                        <h6>{t('attendance.present_hours')}</h6>
                        <h4>{t('attendance.hours_value')}</h4>
                      </li>
                      <li className="absent">
                        <h6>{t('attendance.absent_hours')}</h6>
                        <h4>{t('attendance.hours_value')}</h4>
                      </li>
                      <li className="weekly_off">
                        <h6>{t('attendance.weekly_off_hours')}</h6>
                        <h4>{t('attendance.hours_value')}</h4>
                      </li>
                      <li className="holiday">
                        <h6>{t('attendance.holiday_hours')}</h6>
                        <h4>{t('attendance.hours_value')}</h4>
                      </li>
                      <li className="paid_leave">
                        <h6>{t('attendance.paid_leave_hours')}</h6>
                        <h4>{t('attendance.hours_value')}</h4>
                      </li>
                      <li className="unpaid_leave">
                        <h6>{t('attendance.unpaid_leave_hours')}</h6>
                        <h4>{t('attendance.hours_value')}</h4>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
        <div className="attendence_list_wrpper">
          <div className="">
            {activeIndex !== 2 && (
              <div className="attendance_satus_wrap">
                <ul>
                  <li className="status status_green">
                    {t('attendance.present')}
                  </li>
                  <li className="status status_red">
                    {t('attendance.absent')}
                  </li>
                  <li className="status status_orange">
                    {t('attendance.weekly_off')}
                  </li>
                  <li className="status status_bluePantone">
                    {t('attendance.holiday')}
                  </li>
                  <li className="status status_pink">
                    {t('attendance.paid_leave')}
                  </li>
                  <li className="status status_cyan">
                    {t('attendance.unpaid_leave')}
                  </li>
                </ul>
              </div>
            )}
            <div className="attendence_tab">
              <TabView
                activeIndex={activeIndex}
                onTabChange={e => setActiveIndex(e.index)}
              >
                <TabPanel header={t('attendance.list_view')}>
                  <div className="data_table_one full_page_table">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <span>{t('attendance.date_label')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.shift_label')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.shift_hours')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.first_chek_in')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.last_check_out')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.actual_work_hours')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.break_hours')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.day_status')}</span>
                            </th>
                            <th>
                              <span>{t('attendance.overtime_hours')}</span>
                            </th>
                            <th>
                              <span>{t('title.action')}</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr className="unpaid_leave">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_cyan">
                                  {t('attendance.unpaid_leave')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                // onClick={() => onClick("educationDetails")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr className="paid_leave">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_pink">
                                  {t('attendance.paid_leave')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('paidLeave')}
                              />
                            </td>
                          </tr>
                          <tr className="paid_leave">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_pink">
                                  {t('attendance.paid_leave')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('paidLeave')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_red">
                                  {t('attendance.absent')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('absent')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <Button
                                placeholder="Right"
                                tooltip={t('attendance.latein_by_tooltip')}
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button late_arrival"
                              >
                                {t('attendance.first_chek_in_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.last_check_out_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_green">
                                  {t('attendance.present')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                // onClick={() => onClick("educationDetails")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <Button
                                placeholder="Right"
                                tooltip={t('attendance.latein_by_tooltip')}
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button late_arrival"
                              >
                                {t('attendance.first_chek_in_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.last_check_out_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_green">
                                  {t('attendance.present')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                // onClick={() => onClick("educationDetails")}
                              />
                            </td>
                          </tr>
                          <tr className="holiday">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_bluePantone">
                                  {t('attendance.holiday')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('holiday')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <Button
                                placeholder="Right"
                                tooltip={t('attendance.latein_by_tooltip')}
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button late_arrival"
                              >
                                {t('attendance.first_chek_in_value')}
                              </Button>
                            </td>
                            <td>
                              <Button
                                tooltip={t('attendance.earlyout_by_tooltip')}
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button early_out"
                              >
                                {t('attendance.last_check_out_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_green">
                                  {t('attendance.present')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                // onClick={() => onClick("educationDetails")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.latein_by_tooltip')}
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button late_arrival"
                              >
                                {t('attendance.first_chek_in_value')}
                              </Button>
                            </td>
                            <td>
                              <span className="phone_checkout d-flex">
                                <Button
                                  tooltip={t('attendance.mobile_tooltip')}
                                  tooltipOptions={{
                                    position: 'bottom',
                                  }}
                                  className="tooltip_button early_out"
                                >
                                  <img
                                    src={MobileIcon}
                                    className="me-1"
                                    alt="MobileIcon"
                                  />
                                </Button>
                                {t('attendance.last_check_out_value')}
                                <Button
                                  tooltip="View Map"
                                  tooltipOptions={{
                                    position: 'bottom',
                                  }}
                                  className="tooltip_button early_out"
                                  onClick={() => onClick('checkoutMap')}
                                >
                                  <img
                                    src={MapIcon}
                                    className="ms-1"
                                    alt="MapIcon"
                                  />
                                </Button>
                              </span>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_green">
                                  {t('attendance.present')}
                                </li>
                              </ul>
                            </td>
                            <div className="dropdown overtime_dropdown">
                              <td
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdownMenuLink"
                              >
                                {t('attendance.hours_value')}
                              </td>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink"
                              >
                                <li>
                                  <Link className="dropdown-item">
                                    {t('attendance.add_ot_request')}
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item">
                                    {t('attendance.add_coff_request')}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                // onClick={() => onClick("educationDetails")}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr className="weekly_off">
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                              <ul>
                                <li className="status status_orange">
                                  {t('attendance.weekly_off')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('weeklyOff')}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t('attendance.date_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button text-dark"
                              >
                                {t('workposttype.shift_type_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>{t('attendance.first_chek_in_value')}</td>
                            <td>
                              <Button
                                tooltip={t('attendance.earlyout_by_tooltip')}
                                tooltipOptions={{
                                  position: 'top',
                                }}
                                className="tooltip_button early_out"
                              >
                                {t('attendance.last_check_out_value')}
                              </Button>
                            </td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>{t('attendance.hours_value')}</td>
                            <td>
                              <ul>
                                <li className="status status_green">
                                  {t('attendance.present')}
                                </li>
                              </ul>
                            </td>
                            <td>-</td>
                            <td>
                              <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => onClick('present')}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header={t('attendance.calendar_view')}>
                  <ReactEventCelender />
                </TabPanel>
                <TabPanel header={t('attendance.attendance_request')}>
                  <AttendanceRequest />
                </TabPanel>
              </TabView>
            </div>
            <Dialog
              header=""
              visible={weeklyOff}
              draggable={false}
              resizable={false}
              className="custom_popup attendence_popup"
              onHide={() => onHide('weeklyOff')}
            >
              <div className="attendence_popup_wrap">
                <div className="row align-items-center mt-2">
                  <div className="col-6">
                    <h5>{t('attendance.date_value')}</h5>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button className="btn-primary">
                        <img src={PlusIcon} className="me-1" alt="PlusIcon" />
                        {t('attendance.add_entry')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="attendence_content_wrap">
                  <div className="popup_image_wrap">
                    <img src={WeeklyOffImg} alt="WeeklyOffImg" />
                  </div>
                  <div className="attendence_content_Inner">
                    <h5>{t('attendance.weekly_off_day')}</h5>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header=""
              visible={holiday}
              draggable={false}
              resizable={false}
              className="custom_popup attendence_popup"
              onHide={() => onHide('holiday')}
            >
              <div className="attendence_popup_wrap">
                <div className="row align-items-center mt-2">
                  <div className="col-6">
                    <h5>{t('attendance.date_value')}</h5>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button className="btn-primary">
                        <img src={PlusIcon} className="me-1" alt="PlusIcon" />
                        {t('attendance.add_entry')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="attendence_content_wrap">
                  <div className="popup_image_wrap">
                    <img src={HolidayImg} alt="HolidayImg" />
                  </div>
                  <div className="attendence_content_Inner">
                    <h5>{t('attendance.holiday')}</h5>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header=""
              visible={paidLeave}
              draggable={false}
              resizable={false}
              className="custom_popup attendence_popup"
              onHide={() => onHide('paidLeave')}
            >
              <div className="attendence_popup_wrap">
                <div className="row align-items-center mt-2">
                  <div className="col-6">
                    <h5>{t('attendance.date_value')}</h5>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button className="btn-primary">
                        <img src={PlusIcon} className="me-1" alt="PlusIcon" />
                        {t('attendance.add_entry')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="attendence_content_wrap">
                  <div className="popup_image_wrap">
                    <img src={PaidLeaveImg} alt="PaidLeaveImg" />
                  </div>
                  <div className="attendence_content_Inner">
                    <h5>{t('attendance.leave_for_day_msg')}</h5>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header=""
              visible={absent}
              draggable={false}
              resizable={false}
              className="custom_popup attendence_popup"
              onHide={() => onHide('absent')}
            >
              <div className="attendence_popup_wrap">
                <div className="row align-items-center mt-2">
                  <div className="col-6">
                    <h5>{t('attendance.date_value')}</h5>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button className="btn-primary">
                        <img src={PlusIcon} className="me-1" alt="PlusIcon" />
                        {t('attendance.add_entry')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="attendence_content_wrap">
                  <div className="popup_image_wrap">
                    <img src={AbsentImg} alt="AbsentImg" />
                  </div>
                  <div className="attendence_content_Inner">
                    <p>{t('attendance.absent_of_day_msg')}</p>
                    <button type="button" className="btn-primary">
                      {t('todayTiming.applyLeave')}
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header=""
              visible={present}
              draggable={false}
              resizable={false}
              className="custom_popup attendence_popup"
              onHide={() => onHide('present')}
            >
              <div className="attendence_popup_wrap">
                <div className="row align-items-center mt-2">
                  <div className="col-6">
                    <h5>{t('attendance.date_value')}</h5>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button className="btn-primary">
                        <img src={PlusIcon} className="me-1" alt="PlusIcon" />
                        {t('attendance.add_entry')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="attendence_content_wrap">
                  <div className="present_wrapper mt-4">
                    <div className="present_box mb-4">
                      <ul>
                        <li>
                          <div className="in_Time_wrap">
                            <h5>{t('attendance.in_time')}</h5>
                            <h6>
                              <img src={MobileIcon} alt="MobileIcon" />
                              {t('attendance.first_chek_in_value')}
                            </h6>
                          </div>
                          <div className="view_map_wrap me-3">
                            <Button
                              tooltip="View Map"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button text-dark"
                            >
                              <img src={MapIcon} alt="MapIcon" />
                            </Button>
                          </div>
                        </li>
                        <li>
                          <div className="line_wrap"></div>
                        </li>
                        <li>
                          <div className="in_Time_wrap">
                            <h5>{t('attendance.out_time')}</h5>
                            <h6>
                              <img src={DesktopIcon} alt="DesktopIcon" />
                              {t('attendance.last_check_out_value')}
                            </h6>
                          </div>
                          <div className="view_map_wrap me-3">
                            <Button
                              tooltip="View Map"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button text-dark"
                            >
                              <img src={MapIcon} alt="MapIcon" />
                            </Button>
                          </div>
                        </li>
                        <li>
                          <img src={EditIcon} alt="EditIcon" />
                        </li>
                      </ul>
                    </div>
                    <div className="present_box mb-4">
                      <ul>
                        <li>
                          <div className="in_Time_wrap">
                            <h5>{t('attendance.in_time')}</h5>
                            <h6>
                              <img src={MobileIcon} alt="MobileIcon" />
                              {t('attendance.last_check_out_value')}
                            </h6>
                          </div>
                          <div className="view_map_wrap me-3">
                            <Button
                              tooltip="View Map"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button text-dark"
                            >
                              <img src={MapIcon} alt="MapIcon" />
                            </Button>
                          </div>
                        </li>
                        <li>
                          <div className="line_wrap"></div>
                        </li>
                        <li>
                          <div className="in_Time_wrap">
                            <h5>{t('attendance.out_time')}</h5>
                            <h6>
                              <img src={DesktopIcon} alt="DesktopIcon" />
                              {t('attendance.last_check_out_value')}
                            </h6>
                          </div>
                          <div className="view_map_wrap me-3">
                            <Button
                              tooltip="View Map"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button text-dark"
                            >
                              <img src={MapIcon} alt="MapIcon" />
                            </Button>
                          </div>
                        </li>
                        <li>
                          <img src={EditIcon} alt="EditIcon" />
                        </li>
                      </ul>
                    </div>
                    <div className="present_box mb-4">
                      <ul>
                        <li>
                          <div className="in_Time_wrap">
                            <h5>{t('attendance.in_time')}</h5>
                            <h6>
                              <img src={MobileIcon} alt="MobileIcon" />
                              {t('attendance.last_check_out_value')}
                            </h6>
                          </div>
                          <div className="view_map_wrap me-3">
                            <Button
                              tooltip="View Map"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button text-dark"
                            >
                              <img src={MapIcon} alt="MapIcon" />
                            </Button>
                          </div>
                        </li>
                        <li>
                          <div className="line_wrap"></div>
                        </li>
                        <li>
                          <div className="in_Time_wrap">
                            <h5>{t('attendance.out_time')}</h5>
                            <h6>
                              <img src={DesktopIcon} alt="DesktopIcon" />
                              {t('attendance.last_check_out_value')}
                            </h6>
                          </div>
                          <div className="view_map_wrap me-3">
                            <Button
                              tooltip="View Map"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button text-dark"
                            >
                              <img src={MapIcon} alt="MapIcon" />
                            </Button>
                          </div>
                        </li>
                        <li>
                          <img src={EditIcon} alt="EditIcon" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>

            <Dialog
              header={
                t('attendance.map_view') +
                ' - ' +
                t('teamSummary.todayDate') +
                ' - ' +
                t('userDetail.secondName')
              }
              visible={checkoutMap}
              draggable={false}
              resizable={false}
              className="large_popup map_popup"
              onHide={() => onHide('checkoutMap')}
            >
              <div className="map_popup_wrapper">
                <div className="map_location_wrap">
                  <ul>
                    <li className="d-flex align-items-center ">
                      <img src={DownRightIcon} alt="Down Right Icon" />
                      <h6>
                        9:17 AM <span>21.2143947.72.841554846</span>
                      </h6>
                      <img src={MapIconA} alt="Map Icon" />
                    </li>
                    <li className="d-flex align-items-center ">
                      <img src={TopLeftIcon} alt="Top Left Icon" />
                      <h6>
                        9:17 AM <span>21.2143947.72.841554846</span>
                      </h6>
                      <img src={MapIconB} alt="Map Icon" />
                    </li>
                  </ul>
                </div>
                <div className="map_wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4423.19923756932!2d72.83772819718047!3d21.213902458453447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc789919359%3A0xdc8f1d468f830c77!2sMahek%20icon!5e0!3m2!1sen!2sin!4v1674455684707!5m2!1sen!2sin"
                    width="100%"
                    height="550"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="CheckoutMap"
                  ></iframe>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
