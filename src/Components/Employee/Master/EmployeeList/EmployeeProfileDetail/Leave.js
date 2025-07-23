import React, { useState } from 'react';
import ReactSelectSingle from '../../../../Common/ReactSelectSingle';
import EarnLeaveIcon from '../../../../../Assets/images/earn-leave.svg';
import SickLeaveIcon from '../../../../../Assets/images/sick-leave.svg';
import CasualLeaveIcon from '../../../../../Assets/images/casual-leave.svg';
import MaternityLeaveIcon from '../../../../../Assets/images/maternity-leave.svg';
import PaternityLeaveIcon from '../../../../../Assets/images/paternity-leave.svg';
import LeaveHistoryIcon from '../../../../../Assets/images/leave-history.svg';
import EyeIcon from '../../../../../Assets/images/eyes.svg';
import EditIcon from '../../../../../Assets/images/edit.svg';
import FilterIcon from '../../../../../Assets/images/filter.svg';
import EmployeeImg from '../../../../../Assets/images/user3.png';
import CheckCircle from '../../../../../Assets/images/close-circle.svg';
import { Dialog } from 'primereact/dialog';
import { Knob } from 'primereact/knob';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';
import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EarnedLeaveGaugesChart from '../EmployeeProfileDetail/Chart/EarnedLeaveGaugesChart';
import SickLeaveGaugesChart from '../EmployeeProfileDetail/Chart/SickLeaveGaugesChart';
import MaternityLeaveGaugesChart from '../EmployeeProfileDetail/Chart/MaternityLeaveGaugesChart';
import CasualLeaveGaugesChart from '../EmployeeProfileDetail/Chart/CasualLeaveGaugesChart';
import PaternityLeaveGaugesChart from '../EmployeeProfileDetail/Chart/PaternityLeaveGaugesChart';
export default function Leave() {
  const { t } = useTranslation();
  const [selectMonth, setSelectMonth] = useState([]);
  const [leaveHistory, setLeaveHistory] = useState(false);
  const [leaveType, setLeaveType] = useState([]);
  const [status, setStatus] = useState([]);
  const [approveddetail, setApprovedDetail] = useState(false);
  const dialogFuncMap = {
    leaveHistory: setLeaveHistory,
    approveddetail: setApprovedDetail,
  };
  const leaveTypeHandleChange = e => {
    setLeaveType(e.value);
  };
  const statusHandleChange = e => {
    setStatus(e.value);
  };
  const leaveTypeOptions = [
    { label: 'Casual Leave', value: 'Casual Leave' },
    { label: 'Sick Leave', value: 'Sick Leave' },
    { label: 'Loss of Pay', value: 'Loss of Pay' },
    { label: 'Earned Leave', value: 'Earned Leave' },
  ];
  const statusOptions = [
    { label: 'All Status', value: 'All Status' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Approved', value: 'Approved' },
    { label: 'Rejected', value: 'Rejected' },
  ];
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const selectMonthOption = [
    { label: 'Jan 2022 - Dec 2022', value: 'Jan 2022 - Dec 2022' },
    { label: 'Jan 2022 - Dec 2022', value: 'Jan 2022 - Dec 2022' },
    { label: 'Jan 2022 - Dec 2022', value: 'Jan 2022 - Dec 2022' },
  ];
  const selectMonthHandleChange = e => {
    setSelectMonth(e.value);
  };

  return (
    <div className="leave_wrapper">
      <div className="leave_balance_wrap mb-3">
        <div className="bg_white_box p-3">
          <div className="row align-items-center mb-3">
            <div className="col-md-9">
              <h6 className="my-3">{t('leave.title')}</h6>
            </div>
            <div className="col-md-3">
              <div className="apply_leave_wrap d-flex align-items-center justify-content-end">
                <div className="form_group m-0 w-100">
                  <ReactSelectSingle
                    value={selectMonth}
                    options={selectMonthOption}
                    filter
                    onChange={e => {
                      selectMonthHandleChange(e);
                    }}
                    placeholder="Select"
                  />
                </div>
                <button className="btn-primary ms-3">
                  {t('todayTiming.applyLeave')}
                </button>
              </div>
            </div>
          </div>
          <div className="leave_balance_chart_wrap">
            <div className="leave_balance_chart_inner">
              <div className="leave_title">
                <div className="leave_icon">
                  <img src={EarnLeaveIcon} alt="EarnLeaveIcon" />
                </div>
                <div className="leave_title_in">
                  <h6>{t('leave.earned_leave')}</h6>
                  <p>{t('attendance.paid_leave')}</p>
                </div>
              </div>
              <div className="circle_chart_wrap">
                <Tooltip
                  target=".Earned .p-knob-range"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.used_days')}
                />
                <Tooltip
                  target=".Earned .p-knob-value"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.available_days')}
                />
                {/* <Knob
                  className="Earned"
                  value={60}
                  readOnly
                  size={200}
                  strokeWidth={9}
                  valueColor={'#345DC6'}
                  rangeColor={'#D6DFF4'}
                  showValue={false}
                /> */}
                <EarnedLeaveGaugesChart />
                {/* <span>{t('event.leave_day')}</span> */}
              </div>
              <ul>
                <li>
                  {t('leave.used')}
                  <span>3</span>
                </li>
                <li>
                  {t('leave.accrued_till_now')}
                  <span>9</span>
                </li>
                <li>
                  {t('leave.annual_leave')}
                  <span>18</span>
                </li>
              </ul>
              <div className="leave_history">
                <Button
                  onClick={() => onClick('leaveHistory')}
                  placeholder="Right"
                  tooltip={t('leave.leave_tooltip')}
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                >
                  <img src={LeaveHistoryIcon} alt="LeaveHistoryIcon" />
                </Button>
              </div>
              <Dialog
                header={t('leave.paid_leave_history')}
                visible={leaveHistory}
                draggable={false}
                resizable={false}
                className="medium_popup leaveHistoryPopup"
                onHide={() => onHide('leaveHistory')}
              >
                <div className="table_design_three">
                  <table>
                    <thead>
                      <tr>
                        <th>{t('leave.dates')}</th>
                        <th>{t('leave.activity_type_status')}</th>
                        <th>{t('leave.opening_balance')}</th>
                        <th>{t('leave.added_leave')}</th>
                        <th>{t('leave.used_leave')}</th>
                        <th>{t('leave.balance')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>10</td>
                        <td>-</td>
                        <td>-</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>-</td>
                        <td>9</td>
                        <td>-</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>1</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>00</td>
                      </tr>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>-</td>
                        <td>2</td>
                        <td>-</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>{t('leave.date_value')}</td>
                        <td>{t('leave.opening_balance')}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>5</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Dialog>
            </div>
            <div className="leave_balance_chart_inner">
              <div className="leave_title">
                <div className="leave_icon">
                  <img src={SickLeaveIcon} alt="SickLeaveIcon" />
                </div>
                <div className="leave_title_in">
                  <h6>{t('leave.sick_leave')}</h6>
                  <p>{t('attendance.paid_leave')}</p>
                </div>
              </div>
              <div className="circle_chart_wrap">
                <Tooltip
                  target=".Sick .p-knob-range"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.used_days')}
                />
                <Tooltip
                  target=".Sick .p-knob-value"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.available_days')}
                />
                <SickLeaveGaugesChart />
              </div>
              <ul>
                <li>
                  {t('leave.used')}
                  <span>3</span>
                </li>
                <li>
                  {t('leave.accrued_till_now')}
                  <span>7</span>
                </li>
                <li>
                  {t('leave.annual_leave')}
                  <span>7</span>
                </li>
              </ul>
              <div className="leave_history">
                <Button
                  onClick={() => onClick('leaveHistory')}
                  placeholder="Right"
                  tooltip={t('leave.leave_tooltip')}
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                >
                  <img src={LeaveHistoryIcon} alt="LeaveHistoryIcon" />
                </Button>
              </div>
            </div>
            <div className="leave_balance_chart_inner">
              <div className="leave_title">
                <div className="leave_icon">
                  <img src={CasualLeaveIcon} alt="CasualLeaveIcon" />
                </div>
                <div className="leave_title_in">
                  <h6>{t('leave.casual_leave')}</h6>
                  <p>{t('attendance.paid_leave')}</p>
                </div>
              </div>
              <div className="circle_chart_wrap">
                <Tooltip
                  target=".Casual .p-knob-range"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.used_days')}
                />
                <Tooltip
                  target=".Casual .p-knob-value"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.available_days')}
                />
                <CasualLeaveGaugesChart />
                {/* <span>{t('event.leave_day')}</span> */}
              </div>
              <ul>
                <li>
                  {t('leave.used')}
                  <span>4</span>
                </li>
                <li>
                  {t('leave.accrued_till_now')}
                  <span>7</span>
                </li>
                <li>
                  {t('leave.annual_leave')}
                  <span>7</span>
                </li>
              </ul>
              <div className="leave_history">
                <Button
                  onClick={() => onClick('leaveHistory')}
                  placeholder="Right"
                  tooltip={t('leave.leave_tooltip')}
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                >
                  <img src={LeaveHistoryIcon} alt="LeaveHistoryIcon" />
                </Button>
              </div>
            </div>
            <div className="leave_balance_chart_inner">
              <div className="leave_title">
                <div className="leave_icon">
                  <img src={MaternityLeaveIcon} alt="MaternityLeaveIcon" />
                </div>
                <div className="leave_title_in">
                  <h6>{t('leave.maternity_leave')}</h6>
                  <p>{t('attendance.paid_leave')}</p>
                </div>
              </div>
              <div className="circle_chart_wrap">
                <Tooltip
                  target=".Maternity .p-knob-range"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.used_days')}
                />
                <Tooltip
                  target=".Maternity .p-knob-value"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.available_days')}
                />
                <MaternityLeaveGaugesChart />

                {/* <span>{t('event.leave_day')}</span> */}
              </div>
              <ul>
                <li>
                  {t('leave.used')}
                  <span>0</span>
                </li>
                <li>
                  {t('leave.accrued_till_now')}
                  <span>0</span>
                </li>
                <li>
                  {t('leave.annual_leave')}
                  <span>180</span>
                </li>
              </ul>
              <div className="leave_history">
                <Button
                  onClick={() => onClick('leaveHistory')}
                  placeholder="Right"
                  tooltip={t('leave.leave_tooltip')}
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                >
                  <img src={LeaveHistoryIcon} alt="LeaveHistoryIcon" />
                </Button>
              </div>
            </div>
            <div className="leave_balance_chart_inner">
              <div className="leave_title">
                <div className="leave_icon">
                  <img src={PaternityLeaveIcon} alt="PaternityLeaveIcon" />
                </div>
                <div className="leave_title_in">
                  <h6>{t('leave.paternity_leave')}</h6>
                  <p>{t('attendance.paid_leave')}</p>
                </div>
              </div>
              <div className="circle_chart_wrap">
                <Tooltip
                  target=".Paternity .p-knob-range"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.used_days')}
                />
                <Tooltip
                  target=".Paternity .p-knob-value"
                  mouseTrack
                  mouseTrackLeft={10}
                  content={t('leave.available_days')}
                />
                <PaternityLeaveGaugesChart />

                {/* <span>{t('event.leave_day')}</span> */}
              </div>
              <ul>
                <li>
                  {t('leave.used')}
                  <span>0</span>
                </li>
                <li>
                  {t('leave.accrued_till_now')}
                  <span>0</span>
                </li>
                <li>
                  {t('leave.annual_leave')}
                  <span>15</span>
                </li>
              </ul>
              <div className="leave_history">
                <Button
                  onClick={() => onClick('leaveHistory')}
                  placeholder="Right"
                  tooltip={t('leave.leave_tooltip')}
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                >
                  <img src={LeaveHistoryIcon} alt="LeaveHistoryIcon" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panding_leave_request_wrap mb-3">
        <div className="bg_white_box p-3">
          <h6 className="mb-3">{t('leave.pending_leave_requests')}</h6>
          <div className="table_border data_table_one">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th style={{ minWidth: '16.66%' }}>
                      {t('leave.leave_date')}
                    </th>
                    <th style={{ minWidth: '16.66%' }}>
                      {t('leave.leave_type')}
                    </th>
                    <th style={{ minWidth: '16.66%' }}>
                      {t('leave.leave_name')}
                    </th>
                    <th style={{ minWidth: '16.66%' }}>
                      {t('leave.applied_by')}
                    </th>
                    <th style={{ minWidth: '16.66%' }}>
                      {t('workposttype.status')}
                    </th>
                    <th style={{ minWidth: '16.66%' }}>{t('title.action')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <ul>
                        <li>
                          {t('event.birthdate')} - {t('myProfile.dateOfJoin')}
                          <span className="text-extraLight wrap_text">
                            ({t('event.leave_day')})
                          </span>
                        </li>
                        <li>{t('leave.paid')}</li>
                        <li>{t('leave.casual_leave')}</li>
                        <li>
                          {t('userDetail.firstName')}
                          <span className="text-extraLight wrap_text">
                            {t('leave.on')} {t('myProfile.dateOfJoin')} •{' '}
                            {t('attendance.first_chek_in_value')}
                          </span>
                        </li>
                        <li>
                          <span className="badge bedge_warning">
                            {t('leave.pending')}
                          </span>
                        </li>
                        <li>
                          <img src={EditIcon} alt="Edit Icon" />
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <p className="text-wrap">
                            {t('leave.leave_reason_title')}:
                            <span className="text-extraLight">
                              {t('loremText')}
                            </span>
                          </p>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <ul>
                        <li>
                          {t('myProfile.dateOfJoin')}
                          <span className="text-extraLight wrap_text">
                            ({t('event.leave_day')})
                          </span>
                        </li>
                        <li>{t('leave.paid')}</li>
                        <li>{t('leave.casual_leave')}</li>
                        <li>
                          {t('userDetail.firstName')}
                          <span className="text-extraLight wrap_text">
                            {t('leave.on')} {t('myProfile.dateOfJoin')} •{' '}
                            {t('attendance.first_chek_in_value')}
                          </span>
                        </li>
                        <li>
                          <span className="badge bedge_warning">
                            {t('leave.pending')}
                          </span>
                        </li>
                        <li>
                          <img src={EditIcon} alt="Edit Icon" />
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <p className="text-wrap">
                            {t('leave.leave_reason_title')}:
                            <span className="text-extraLight">
                              {t('loremText')}
                            </span>
                          </p>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="table_bottom_wrap">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <p className="m-0 text-center text-sm-start">
              Showing <span>10</span> to <span>20</span> of
              <span>20</span> entries
            </p>
          </div>
          <div className="col-sm-6">
            <div className="table_pagination">
              <ul className="d-flex justify-content-center justify-content-sm-end">
                <li className="prev">
                  <Link className="w-auto d-block">Previous</Link>
                </li>
                <li>
                  <Link className="d-block">1</Link>
                </li>
                <li className="active">
                  <Link className="d-block">2</Link>
                </li>
                <li className="next">
                  <Link className="w-auto d-block">Next</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Approved"
        visible={approveddetail}
        draggable={false}
        resizable={false}
        className="medium_popup approve_popup"
        onHide={() => onHide('approveddetail')}
      >
        <div className="">
          <div className="user_info d-flex align-items-center">
            <img src={EmployeeImg} alt="UserImage" />
            <div className="ms-2 flex-grow-1">
              <h4 className="mb-1">Chintan Raval</h4>
              <span>(Applied by Chintan Raval On 15 jul 2022 • 10:52 AM)</span>
            </div>
          </div>
          <div className="date_leave_type">
            <div className="d-flex flex-wrap">
              <div className="d-flex mb-3">
                <div className="date_box text-center">
                  <div className="month">Aug</div>
                  <div className="date">
                    <p className="mb-0">
                      25 <br /> Mon
                    </p>
                  </div>
                </div>
                <div className="date_box text-center">
                  <div className="month">Aug</div>
                  <div className="date">
                    <p className="mb-0">
                      25 <br /> Mon
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-grow-1">
                <div className="type_info">
                  <h6>Leave Days :</h6>
                  <p>6</p>
                </div>
                <div className="type_info">
                  <h6>Leave Type :</h6>
                  <p>Paid</p>
                </div>
                <div className="type_info">
                  <h6>Leave Name :</h6>
                  <p>Casual Leave</p>
                </div>
              </div>
            </div>
          </div>
          <p className="my-3">No Teammate are on Leave on This Day</p>
          <div className="type_info">
            <h6>Reason :</h6>
            <p>Going to Trip</p>
          </div>
          <div className="approve_user">
            <div className="approve_by d-flex align-items-center">
              <img src={CheckCircle} alt="check" />
              <p className="m-0">Approved by</p>
            </div>
            <div className="user_info d-flex align-items-center mt-3 mb-0">
              <img src={EmployeeImg} width="38" alt="UserImage" />
              <h4 className="mb-0 ps-2">Chintan Raval</h4>
              <span>(Applied by Chintan Raval On 15 jul 2022 • 10:52 AM)</span>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
