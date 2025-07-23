import React, { useState } from 'react';
import Header from 'Components/Common/Header';
import Sidebar from 'Components/Common/Sidebar';
import { Navigate } from 'react-router-dom';
import { getSessionDatavalue } from 'utils/common';

export default function PrivateRouter({ children, ...rest }) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [pageHeading, setPageHeading] = useState('Home');
  const [employeeDropDown, setEmployeeDropDown] = useState({
    employeeMainDropDown: false,
    employeeMasterDropDown: false,
    employeeAdminDropDown: false,
    employeeSettingDropDown: false,
  });
  const [timeAttendanceDropDown, setTimeAttendanceDropDown] = useState({
    timeAttendanceMainDropDown: false,
    timeManagementDropDown: false,
    attendanceManagementDropDown: false,
  });
  const [statutoryDropDown, setStatutoryDropDown] = useState({
    statutoryMainDropDown: false,
    statutoryItDropDown: false,
  });
  const [schemeDropDown, setSchemeDropDown] = useState({
    schemeMainDropDown: false,
    schemeAttendanceDropDown: false,
  });
  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
    setEmployeeDropDown({
      employeeMainDropDown: false,
      employeeMasterDropDown: false,
      employeeAdminDropDown: false,
      employeeSettingDropDown: false,
    });
    setStatutoryDropDown({
      statutoryMainDropDown: false,
      statutoryItDropDown: false,
    });
    setTimeAttendanceDropDown({
      timeAttendanceMainDropDown: false,
      timeManagementDropDown: false,
      attendanceManagementDropDown: false,
    });
    setSchemeDropDown({
      schemeMainDropDown: false,
      schemeAttendanceDropDown: false,
    });
  };
  return getSessionDatavalue('isLogin') ? (
    <div className={toggleBtn ? 'main_wrapper sidebar_toggle' : 'main_wrapper'}>
      <Sidebar
        setPageHeading={setPageHeading}
        toggleBtn={toggleBtn}
        employeeDropDown={employeeDropDown}
        setEmployeeDropDown={setEmployeeDropDown}
        statutoryDropDown={statutoryDropDown}
        setStatutoryDropDown={setStatutoryDropDown}
        timeAttendanceDropDown={timeAttendanceDropDown}
        setTimeAttendanceDropDown={setTimeAttendanceDropDown}
        handleToggle={handleToggle}
        setSchemeDropDown={setSchemeDropDown}
        schemeDropDown={schemeDropDown}
      />
      <div className="dashboard_content">
        <Header handleToggle={handleToggle} pageHeading={pageHeading} />
        {children}
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
