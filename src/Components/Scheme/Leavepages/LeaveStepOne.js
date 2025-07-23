import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import LeaveEntitleSetup from './LeaveEntitleSetup';
import LeaveEntitleProrate from './LeaveEntitleProrate';
import LeaveApplicationRule from './LeaveApplicationRule';
import LeaveRestrictionSetting from './LeaveRestrictionSetting';
import HolidayWeekend from './HolidayWeekend';
import LeaveYearend from './LeaveYearend';
import { TabView, TabPanel } from 'primereact/tabview';

export default function LeaveStepOne() {
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
            <b>Leave</b>
          </li>
          <li>Leave Config</li>
        </ul>
      </div>
      <div className="employee_profile_tab leave_tab">
        <TabView scrollable>
          <TabPanel header="Leave Entitle Setup">
            <LeaveEntitleSetup />
          </TabPanel>
          <TabPanel header="Leave Entitle Prorate">
            <LeaveEntitleProrate />
          </TabPanel>
          <TabPanel header="Leave Application Rule">
            <LeaveApplicationRule />
          </TabPanel>
          <TabPanel header="Leave Restriction Setting">
            <LeaveRestrictionSetting />
          </TabPanel>
          <TabPanel header="Holiday & Weekend">
            <HolidayWeekend />
          </TabPanel>
          <TabPanel header="Leave Year end">
            <LeaveYearend />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
