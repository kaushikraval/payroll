import { useTranslation } from 'react-i18next';
import UserPro from '../../Assets/images/user9.png';
import LeaveDetail from './LeaveDetail';
import { TabView, TabPanel } from 'primereact/tabview';

export default function Leave() {
  const { t } = useTranslation();
  const EmployeeLeaveDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 2,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 3,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 4,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 5,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 6,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 7,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 8,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 9,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 10,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 11,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
    {
      id: 12,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      today: t('event.today'),
      leavePeriod: t('event.leave_period'),
      leaveDay: t('event.leave_day'),
    },
  ];
  return (
    <div className="col-12">
      <div className="bg_white_box p-2 mb-3">
        <div className="nav_tab_bar">
          <TabView>
            <TabPanel header="Today Leave">
              {EmployeeLeaveDetail.map(employee => (
                <LeaveDetail status="TodayLeave" employee={employee} />
              ))}
            </TabPanel>
            <TabPanel header="Upcoming Leave">
              {EmployeeLeaveDetail.map(employee => (
                <LeaveDetail status="UpcomingLeave" employee={employee} />
              ))}
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
