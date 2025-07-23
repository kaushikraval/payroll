import React, { useEffect, useState } from 'react';
import Logo from '../../Assets/images/logo.svg';
import Task from '../../Assets/images/task.svg';
import Home from '../../Assets/images/home.svg';
import UserIcon from '../../Assets/images/user-icon.svg';
import Employee from '../../Assets/images/employee.svg';
import Organization from '../../Assets/images/organization.svg';
import SchemeConfiguration from '../../Assets/images/Scheme-Configuration.svg';
import TimeAttendance from '../../Assets/images/Time-Attendance.svg';
import Leave from '../../Assets/images/Leave.svg';
import Statutory from '../../Assets/images/Statutory.svg';
import Payroll from '../../Assets/images/Payroll.svg';
import ExpenseClaims from '../../Assets/images/Expense-Claims.svg';
import LetterConfiguration from '../../Assets/images/Letter-Configuration.svg';
import AssetsConfiguration from '../../Assets/images/Assets-Configuration.svg';
import Reports from '../../Assets/images/Reports.svg';
import Settings from '../../Assets/images/Setting2.svg';
import LogoIcon from '../../Assets/images/logo-icon.svg';
import LeftArrow from '../../Assets/images/left-arrow-long2.svg';
import Helpdesk from '../../Assets/images/helpdesk.svg';
import { Link, useLocation } from 'react-router-dom';
import {
  EmployeeToggle,
  assetsToggle,
  expenseAndReimbursementToogle,
  helpdeskToggle,
  leaveToggle,
  letterToggle,
  organizationToggle,
  payrollToggle,
  schemeToggle,
  settingsToggle,
  statutoryToggle,
  timeAndAttendanceToggle,
} from '../../configs/routesConfigs';
import { useTranslation } from 'react-i18next';

export default function Sidebar({
  toggleBtn,
  employeeDropDown,
  setEmployeeDropDown,
  setPageHeading,
  handleToggle,
  statutoryDropDown,
  setStatutoryDropDown,
  timeAttendanceDropDown,
  setTimeAttendanceDropDown,
  schemeDropDown,
  setSchemeDropDown,
}) {
  const { t } = useTranslation();
  let history = useLocation();
  const [organizationPopUp, setOrganizationPopUp] = useState(false);
  const [assetsPopUp, setAssetsPopUp] = useState(false);
  const [letterDropDown, setLetterDropDown] = useState(false);
  const [expenseDropDown, setExpenseDropDown] = useState(false);
  const [leavePopUp, setLeavePopUp] = useState(false);
  const [settingDropDown, setSettingDropDown] = useState({
    mainDropDown: false,
    feedBackDropDown: false,
  });
  const [helpdeskDropDown, setHelpdeskDropDown] = useState({
    helpdeskMainDropDown: false,
    helpdeskSettingDropDown: false,
  });
  const [payrollDropDown, setPayrollDropDown] = useState({
    payrollMainDropDown: false,
    payrollSettingDropDown: {
      payrollSettingMainDropDown: false,
      payrollTdsDropDown: false,
    },
  });
  const TimeDashboardActive = [
    '/time-and-attendance/dashboard/check-in',
    '/time-and-attendance/dashboard/not-check-in',
    '/time-and-attendance/dashboard/on-leave',
    '/time-and-attendance/dashboard/weekly-off',
    '/time-and-attendance/dashboard/holiday',
    '/time-and-attendance/dashboard/late-coming',
    '/time-and-attendance/dashboard/early-going',
  ];
  useEffect(() => {
    if (history.pathname.includes('employees')) setPageHeading('Employees');
    else if (history.pathname.includes('my-profile'))
      setPageHeading('My Profile');
    else if (history.pathname.includes('notification'))
      setPageHeading('Notification');
    else if (history.pathname.includes('inbox')) setPageHeading('Inbox');
    else if (history.pathname.includes('task')) setPageHeading('Tasks');
    else if (history.pathname.includes('statutory'))
      setPageHeading('Statutory');
    else if (history.pathname.includes('letter')) setPageHeading('Letter');
    else if (history.pathname.includes('assets')) setPageHeading('Assets');
    else if (history.pathname.includes('organization'))
      setPageHeading('Organization');
    else if (history.pathname.includes('time-and-attendance'))
      setPageHeading('Time & Attendance');
    else if (history.pathname.includes('setting')) setPageHeading('Settings');
    else if (history.pathname.includes('scheme')) setPageHeading('Scheme');
    else if (history.pathname.includes('leave')) setPageHeading('Leave');
    else if (history.pathname.includes('expense-reimbursement'))
      setPageHeading('Expense & Reimbursement');
    else setPageHeading('Home');
  }, [history, setPageHeading]);
  const closeEmployeeDropDown = () => {
    setEmployeeDropDown({
      employeeMainDropDown: false,
      employeeMasterDropDown: false,
      employeeAdminDropDown: false,
      employeeSettingDropDown: false,
    });
  };
  const closeTimeAttendanceDropDown = () => {
    setTimeAttendanceDropDown({
      timeAttendanceMainDropDown: false,
      timeManagementDropDown: false,
      attendanceManagementDropDown: false,
    });
  };
  const closeStatutoryDropDown = () => {
    setStatutoryDropDown({
      statutoryMainDropDown: false,
      statutoryItDropDown: false,
    });
  };
  const closePayrollDropDown = () => {
    setPayrollDropDown({
      payrollMainDropDown: false,
      payrollSettingDropDown: {
        payrollSettingMainDropDown: false,
        payrollTdsDropDown: false,
      },
    });
  };
  const closeHelpdeskDropDown = () => {
    setHelpdeskDropDown({
      helpdeskMainDropDown: false,
      helpdeskSettingDropDown: false,
    });
  };
  const closeSchemeDropDown = () => {
    setSchemeDropDown({
      schemeMainDropDown: false,
      schemeAttendanceDropDown: false,
    });
  };
  const closeSettingDropDown = () => {
    setSettingDropDown({
      mainDropDown: false,
      feedBackDropDown: false,
    });
  };
  const closeAll = () => {
    closeEmployeeDropDown();
    closeTimeAttendanceDropDown();
    closeStatutoryDropDown();
    closePayrollDropDown();
    closeHelpdeskDropDown();
    closeSchemeDropDown();
    closeSettingDropDown();
    setOrganizationPopUp(false);
    setAssetsPopUp(false);
    setLetterDropDown(false);
    setExpenseDropDown(false);
    setLeavePopUp(false);
  };
  return (
    <div className="sidebar_wrapper">
      <div
        className="close_btn"
        onClick={() => {
          handleToggle();
          closeAll();
        }}
      >
        <img src={LeftArrow} alt="Close Arrow Icon" />
      </div>
      <div className="logo">
        <img src={Logo} data-inject-svg className="logo_full" alt="Logo" />
        <img
          src={LogoIcon}
          data-inject-svg
          className="logo_icon"
          alt="LogoIcon"
        />
      </div>
      <div className="menu_wrapper">
        <ul>
          <li
            onClick={() => {
              setPageHeading('Home');
            }}
          >
            <Link
              to="/"
              className={history.pathname === '/' && 'active'}
              onClick={() => {
                closeSettingDropDown();
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeStatutoryDropDown();
                closeHelpdeskDropDown();
                closeTimeAttendanceDropDown();
                closeEmployeeDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
            >
              <img
                src={Home}
                data-inject-svg
                alt="Home"
                className={history.pathname === '/' && 'active'}
              />
              <span>{t('title.home')}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/my-profile"
              className={history.pathname === '/my-profile' && 'active'}
              onClick={() => {
                closeSettingDropDown();
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeStatutoryDropDown();
                closeHelpdeskDropDown();
                closeTimeAttendanceDropDown();
                closeEmployeeDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
            >
              <img
                src={UserIcon}
                data-inject-svg
                alt="UserIcon"
                className={history.pathname === '/my-profile' && 'active'}
              />
              <span>{t('title.myProfile')}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/task"
              className={history.pathname === '/task' && 'active'}
              onClick={() => {
                closeSettingDropDown();
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeStatutoryDropDown();
                closeHelpdeskDropDown();
                closeTimeAttendanceDropDown();
                closeEmployeeDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
            >
              <img
                src={Task}
                data-inject-svg
                alt="Task"
                className={history.pathname === '/task' && 'active'}
              />
              <span>{t('title.tasks')}</span>
            </Link>
          </li>
          <li
            className={
              employeeDropDown.employeeMainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
          >
            <Link
              onClick={() => {
                closeSettingDropDown();
                setEmployeeDropDown({
                  ...employeeDropDown,
                  employeeMainDropDown: !employeeDropDown.employeeMainDropDown,
                });
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeStatutoryDropDown();
                closeHelpdeskDropDown();
                closeTimeAttendanceDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
              className={
                toggleBtn === true &&
                EmployeeToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Employee} data-inject-svg alt="Employee" />
              <span>{t('title.employees')}</span>
            </Link>
            <ul className={employeeDropDown.employeeMainDropDown && 'show'}>
              <li
                className={
                  employeeDropDown.employeeMasterDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setEmployeeDropDown({
                      ...employeeDropDown,
                      employeeAdminDropDown: false,
                      employeeSettingDropDown: false,
                      employeeMasterDropDown:
                        !employeeDropDown.employeeMasterDropDown,
                    })
                  }
                >
                  {t('title.masters')}
                </Link>
                <ul
                  className={employeeDropDown.employeeMasterDropDown && 'show'}
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/masters/dashboard"
                      className={
                        history.pathname === '/employees/masters/dashboard' &&
                        'active'
                      }
                    >
                      {t('title.dashboard')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/masters/create-employee-step-one"
                      className={
                        (history.pathname ===
                          '/employees/masters/create-employee-step-one' ||
                          history.pathname ===
                            '/employees/masters/create-employee-step-two' ||
                          history.pathname ===
                            '/employees/masters/create-employee-step-three' ||
                          history.pathname ===
                            '/employees/masters/create-employee-step-four') &&
                        'active'
                      }
                    >
                      {t('title.addEmployee')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/masters/employee-list"
                      className={
                        (history.pathname ===
                          '/employees/masters/employee-list' ||
                          history.pathname ===
                            '/employees/masters/employee-profile') &&
                        'active'
                      }
                    >
                      {t('title.ListDirectory')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/master/organization-structure"
                      className={
                        history.pathname ===
                          '/employees/master/organization-structure' && 'active'
                      }
                    >
                      {t('title.orgStructure')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/master/employee-exit"
                      className={
                        history.pathname ===
                          '/employees/master/employee-exit' && 'active'
                      }
                    >
                      {t('title.employeeExit')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/master/full-and-final"
                      className={
                        (history.pathname ===
                          '/employees/master/full-and-final' ||
                          history.pathname ===
                            '/employees/master/full-and-final-step-one' ||
                          history.pathname ===
                            '/employees/master/full-and-final-step-two' ||
                          history.pathname ===
                            '/employees/master/full-and-final-step-three' ||
                          history.pathname ===
                            '/employees/master/full-and-final-step-four') &&
                        'active'
                      }
                    >
                      {t('title.fullFinal')}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  employeeDropDown.employeeAdminDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setEmployeeDropDown({
                      ...employeeDropDown,
                      employeeMasterDropDown: false,
                      employeeSettingDropDown: false,
                      employeeAdminDropDown:
                        !employeeDropDown.employeeAdminDropDown,
                    })
                  }
                >
                  {t('title.administration')}
                </Link>
                <ul
                  className={employeeDropDown.employeeAdminDropDown && 'show'}
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/administration/bulk-excel-upload"
                      className={
                        (history.pathname ===
                          '/employees/administration/bulk-excel-upload' ||
                          history.pathname ===
                            '/employees/administration/bulk-excel-upload-step-one' ||
                          history.pathname ===
                            '/employees/administration/bulk-excel-upload-step-two' ||
                          history.pathname ===
                            '/employees/administration/bulk-excel-upload-step-three' ||
                          history.pathname ===
                            '/employees/administration/bulk-excel-upload-step-four') &&
                        'active'
                      }
                    >
                      {t('title.importExcel')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/administration/bulk-profile-photo-upload"
                      className={
                        (history.pathname ===
                          '/employees/administration/bulk-profile-photo-upload' ||
                          history.pathname ===
                            '/employees/administration/bulk-profile-photo-upload-step-one' ||
                          history.pathname ===
                            '/employees/administration/bulk-profile-photo-upload-step-two' ||
                          history.pathname ===
                            '/employees/administration/bulk-profile-photo-upload-step-three') &&
                        'active'
                      }
                    >
                      {t('title.importPhoto')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/administration/bulk-document-upload"
                      className={
                        (history.pathname ===
                          '/employees/administration/bulk-document-upload' ||
                          history.pathname ===
                            '/employees/administration/bullk-document-upload-step-one' ||
                          history.pathname ===
                            '/employees/administration/bullk-document-upload-step-two') &&
                        'active'
                      }
                    >
                      {t('title.importDocument')}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  employeeDropDown.employeeSettingDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setEmployeeDropDown({
                      ...employeeDropDown,
                      employeeMasterDropDown: false,
                      employeeAdminDropDown: false,
                      employeeSettingDropDown:
                        !employeeDropDown.employeeSettingDropDown,
                    })
                  }
                >
                  {t('title.setting')}
                </Link>
                <ul
                  className={employeeDropDown.employeeSettingDropDown && 'show'}
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/setting/publish-form"
                      className={
                        (history.pathname ===
                          '/employees/setting/publish-form' ||
                          history.pathname ===
                            '/employees/setting/publish-form-inner') &&
                        'active'
                      }
                    >
                      {t('title.policiesForms')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/setting/code-setting"
                      className={
                        history.pathname ===
                          '/employees/setting/code-setting' && 'active'
                      }
                    >
                      {t('title.employeeCode')}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeEmployeeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/employees/setting/master-setting"
                      className={
                        history.pathname ===
                          '/employees/setting/master-setting' && 'active'
                      }
                    >
                      {t('title.miscellaneousData')}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={organizationPopUp ? 'has_dropdown open' : 'has_dropdown'}
          >
            <Link
              onClick={() => {
                setOrganizationPopUp(!organizationPopUp);
                closeSettingDropDown();
                closeEmployeeDropDown();
                closeStatutoryDropDown();
                closeHelpdeskDropDown();
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeTimeAttendanceDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
              className={
                toggleBtn === true &&
                organizationToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Organization} data-inject-svg alt="Organization" />
              <span>{t('title.organization')}</span>
            </Link>
            <ul className={organizationPopUp && 'show'}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setOrganizationPopUp(false);
                  }
                }}
              >
                <Link
                  to="/organization/company"
                  className={
                    (history.pathname === '/organization/company' ||
                      history.pathname === '/organization/company') &&
                    'active'
                  }
                >
                  {t('title.company')}
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setOrganizationPopUp(false);
                  }
                }}
              >
                <Link
                  to="/organization/legal-entity"
                  className={
                    history.pathname === '/organization/legal-entity' &&
                    'active'
                  }
                >
                  {t('title.legal_entity')}
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setOrganizationPopUp(false);
                  }
                }}
              >
                <Link
                  to="/organization/business-unit"
                  className={
                    history.pathname === '/organization/business-unit' &&
                    'active'
                  }
                >
                  {t('title.business_unit')}
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setOrganizationPopUp(false);
                  }
                }}
              >
                <Link
                  to="/organization/location"
                  className={
                    history.pathname === '/organization/location' && 'active'
                  }
                >
                  {t('title.location')}
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setOrganizationPopUp(false);
                  }
                }}
              >
                <Link
                  to="/organization/bank"
                  className={
                    history.pathname === '/organization/bank' && 'active'
                  }
                >
                  {t('title.bank')}
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={
              schemeDropDown.schemeMainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
          >
            <Link
              onClick={() => {
                closeSettingDropDown();
                setSchemeDropDown({
                  ...schemeDropDown,
                  schemeMainDropDown: !schemeDropDown.schemeMainDropDown,
                });
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeEmployeeDropDown();
                closeTimeAttendanceDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
                closeHelpdeskDropDown();
                closeStatutoryDropDown();
              }}
              className={
                toggleBtn === true &&
                schemeToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img
                src={SchemeConfiguration}
                data-inject-svg
                alt="SchemeConfiguration"
              />
              <span>{t('title.scheme')}</span>
            </Link>
            <ul className={schemeDropDown.schemeMainDropDown ? 'show' : ''}>
              <li
                className={
                  schemeDropDown.schemeAttendanceDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setSchemeDropDown({
                      ...schemeDropDown,
                      schemeAttendanceDropDown:
                        !schemeDropDown.schemeAttendanceDropDown,
                    })
                  }
                >
                  Attendance
                </Link>
                <ul
                  className={schemeDropDown.schemeAttendanceDropDown && 'show'}
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSchemeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/scheme/attendance/capture-method"
                      className={
                        (history.pathname ===
                          '/scheme/attendance/capture-method' ||
                          history.pathname ===
                            '/scheme/attendance/create-capture-method' ||
                          history.pathname ===
                            '/scheme/attendance/capture-method/assign-employee') &&
                        'active'
                      }
                    >
                      Capture Method
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSchemeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/scheme/attendance/attendance-tracking"
                      className={
                        (history.pathname ===
                          '/scheme/attendance/attendance-tracking' ||
                          history.pathname ===
                            '/scheme/attendance/create-attendance-tracking' ||
                          history.pathname ===
                            '/scheme/attendance/attendance-tracking/assign-employee') &&
                        'active'
                      }
                    >
                      Attendance Tracking
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSchemeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/scheme/attendance/biometric-device"
                      className={
                        (history.pathname ===
                          '/scheme/attendance/biometric-device' ||
                          history.pathname ===
                            '/scheme/attendance/create-biometric-device' ||
                          history.pathname ===
                            '/scheme/attendance/biometric-device/assign-employee') &&
                        'active'
                      }
                    >
                      Biometric Device
                    </Link>
                  </li>

                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSchemeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/scheme/attendance/geo-fancing"
                      className={
                        (history.pathname ===
                          '/scheme/attendance/geo-fancing' ||
                          history.pathname ===
                            '/scheme/attendance/create-geo-fancing' ||
                          history.pathname ===
                            '/scheme/attendance/geo-fancing/assign-employee') &&
                        'active'
                      }
                    >
                      Geo Fencing
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSchemeDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/scheme/attendance/ip-range"
                      className={
                        (history.pathname === '/scheme/attendance/ip-range' ||
                          history.pathname ===
                            '/scheme/attendance/create-ip-range' ||
                          history.pathname ===
                            '/scheme/attendance/ip-range/assign-employee') &&
                        'active'
                      }
                    >
                      IP Range
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => {
                  setSchemeDropDown({
                    ...schemeDropDown,
                    schemeAttendanceDropDown: false,
                  });
                  closeSchemeDropDown();
                }}
              >
                <Link
                  to="/scheme/overtime"
                  className={
                    (history.pathname === '/scheme/overtime' ||
                      history.pathname ===
                        '/scheme/OverTimemorepage/OverTimeStepone' ||
                      history.pathname ===
                        '/scheme/overtime/assign-employee') &&
                    'active'
                  }
                >
                  Overtime
                </Link>
              </li>
              <li
                onClick={() => {
                  setSchemeDropDown({
                    ...schemeDropDown,
                    schemeAttendanceDropDown: false,
                  });
                  closeSchemeDropDown();
                }}
              >
                <Link
                  to="/scheme/compoff"
                  className={
                    (history.pathname === '/scheme/compoff' ||
                      history.pathname ===
                        '/scheme/CompOffStepone/CompOffStepone' ||
                      history.pathname === '/scheme/compoff/assign-employee') &&
                    'active'
                  }
                >
                  Comp Off
                </Link>
              </li>
              <li
                onClick={() => {
                  setSchemeDropDown({
                    ...schemeDropDown,
                    schemeAttendanceDropDown: false,
                  });
                  closeSchemeDropDown();
                }}
              >
                <Link
                  to="/scheme/leave"
                  className={
                    (history.pathname === '/scheme/leave' ||
                      history.pathname ===
                        '/scheme/leavepages/leave-step-one' ||
                      history.pathname ===
                        '/scheme/leavepages/leave-entitle-setup' ||
                      history.pathname ===
                        '/scheme/leavepages/leave-entitle-prorate' ||
                      history.pathname ===
                        '/scheme/leavepages/leave-application-rule' ||
                      history.pathname ===
                        '/scheme/leavepages/leave-eestriction-setting' ||
                      history.pathname ===
                        '/scheme/leavepages/holiday-weekend' ||
                      history.pathname === '/scheme/leavepages/leave-yearend' ||
                      history.pathname ===
                        '/scheme/leavepages/leave-approval' ||
                      history.pathname === '/scheme/leave/assign-employee') &&
                    'active'
                  }
                >
                  Leave
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={
              timeAttendanceDropDown.timeAttendanceMainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
          >
            <Link
              onClick={() => {
                closeSettingDropDown();
                setTimeAttendanceDropDown({
                  ...timeAttendanceDropDown,
                  timeAttendanceMainDropDown:
                    !timeAttendanceDropDown.timeAttendanceMainDropDown,
                });
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                setEmployeeDropDown(false);
                closeStatutoryDropDown();
                closeHelpdeskDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
              className={
                toggleBtn === true &&
                timeAndAttendanceToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={TimeAttendance} data-inject-svg alt="TimeAttendance" />
              <span>{t('title.timeAttendance')}</span>
            </Link>
            <ul
              className={
                timeAttendanceDropDown.timeAttendanceMainDropDown && 'show'
              }
            >
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeTimeAttendanceDropDown();
                  }
                }}
              >
                <Link
                  to="/time-and-attendance/dashboard"
                  className={
                    (history.pathname === '/time-and-attendance/dashboard' ||
                      TimeDashboardActive.includes(history.pathname)) &&
                    'active'
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li
                className={
                  timeAttendanceDropDown.timeManagementDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setTimeAttendanceDropDown({
                      ...timeAttendanceDropDown,
                      attendanceManagementDropDown: false,
                      timeManagementDropDown:
                        !timeAttendanceDropDown.timeManagementDropDown,
                    })
                  }
                >
                  Time Management
                </Link>
                <ul
                  className={
                    timeAttendanceDropDown.timeManagementDropDown && 'show'
                  }
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/shift-and-day"
                      className={
                        (history.pathname ===
                          '/time-and-attendance/shift-and-day' ||
                          history.pathname ===
                            '/time-and-attendance/create-shift' ||
                          history.pathname ===
                            '/time-and-attendance/create-weekly-off' ||
                          history.pathname ===
                            '/time-and-attendance/holiday-list') &&
                        'active'
                      }
                    >
                      Shift & Day
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/shift-and-day-assign"
                      className={
                        history.pathname ===
                          '/time-and-attendance/shift-and-day-assign' &&
                        'active'
                      }
                    >
                      Shift & Day Assign
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/shift-and-day-calender"
                      className={
                        history.pathname ===
                          '/time-and-attendance/shift-and-day-calender' &&
                        'active'
                      }
                    >
                      Shift & Day Calendar
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/shift-schedule-and-pattern"
                      className={
                        (history.pathname ===
                          '/time-and-attendance/shift-schedule-and-pattern' ||
                          history.pathname ===
                            '/time-and-attendance/configure-new-pattern') &&
                        'active'
                      }
                    >
                      Shift Schedule & Pattern
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  timeAttendanceDropDown.attendanceManagementDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setTimeAttendanceDropDown({
                      ...timeAttendanceDropDown,
                      timeManagementDropDown: false,
                      attendanceManagementDropDown:
                        !timeAttendanceDropDown.attendanceManagementDropDown,
                    })
                  }
                >
                  Attendance Management
                </Link>
                <ul
                  className={
                    timeAttendanceDropDown.attendanceManagementDropDown &&
                    'show'
                  }
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/attendance-management"
                      className={
                        history.pathname ===
                          '/time-and-attendance/attendance-management' &&
                        'active'
                      }
                    >
                      Attendance
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/month-register"
                      className={
                        history.pathname ===
                          '/time-and-attendance/month-register' && 'active'
                      }
                    >
                      Month Register
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/regularization-approval"
                      className={
                        history.pathname ===
                          '/time-and-attendance/regularization-approval' &&
                        'active'
                      }
                    >
                      Regularization Approval
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/overtime"
                      className={
                        history.pathname === '/time-and-attendance/overtime' &&
                        'active'
                      }
                    >
                      Overtime
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeTimeAttendanceDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/time-and-attendance/overtime-approval"
                      className={
                        history.pathname ===
                          '/time-and-attendance/overtime-approval' && 'active'
                      }
                    >
                      Overtime Approval
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={leavePopUp ? 'has_dropdown open' : 'has_dropdown '}
            onClick={() => {
              closeSettingDropDown();
              closeEmployeeDropDown();
              closeStatutoryDropDown();
              closeHelpdeskDropDown();
              setOrganizationPopUp(false);
              setLetterDropDown(false);
              closeTimeAttendanceDropDown();
              closeSchemeDropDown();
              setExpenseDropDown(false);
              closePayrollDropDown();
              setAssetsPopUp(false);
            }}
          >
            <Link
              onClick={() => setLeavePopUp(!leavePopUp)}
              className={
                toggleBtn === true &&
                leaveToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Leave} data-inject-svg alt="Leave" />
              <span>{t('title.leave')}</span>
            </Link>
            <ul className={leavePopUp && 'show'}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/dashboard"
                  className={
                    history.pathname === '/leave/dashboard' && 'active'
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/leave-balance"
                  className={
                    history.pathname === '/leave/leave-balance' && 'active'
                  }
                >
                  Leave Balance
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/leave-approval"
                  className={
                    history.pathname === '/leave/leave-approval' && 'active'
                  }
                >
                  Leave Approval
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/leave-balance-correction"
                  className={
                    history.pathname === '/leave/leave-balance-correction' &&
                    'active'
                  }
                >
                  Leave Balance Correction
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/comp-off"
                  className={history.pathname === '/leave/comp-off' && 'active'}
                >
                  Comp Off
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/comp-off-approval"
                  className={
                    history.pathname === '/leave/comp-off-approval' && 'active'
                  }
                >
                  Comp Off Approval
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLeavePopUp(false);
                  }
                }}
              >
                <Link
                  to="/leave/leave-type"
                  className={
                    history.pathname === '/leave/leave-type' && 'active'
                  }
                >
                  Leave Type
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={
              statutoryDropDown.statutoryMainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
          >
            <Link
              onClick={() => {
                closeSettingDropDown();
                setStatutoryDropDown({
                  ...statutoryDropDown,
                  statutoryMainDropDown:
                    !statutoryDropDown.statutoryMainDropDown,
                });
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeEmployeeDropDown();
                closeTimeAttendanceDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closeHelpdeskDropDown();
                closePayrollDropDown();
              }}
              className={
                toggleBtn === true &&
                statutoryToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Statutory} data-inject-svg alt="Statutory" />
              <span>{t('title.statutory')}</span>
            </Link>
            <ul
              className={statutoryDropDown.statutoryMainDropDown ? 'show' : ''}
            >
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeStatutoryDropDown();
                  }
                }}
              >
                <Link
                  to="/statutory/pfconfiguration"
                  className={
                    (history.pathname === '/statutory/pfconfiguration' ||
                      history.pathname ===
                        '/statutory/pfconfiguration/create-pfconfiguration') &&
                    'active'
                  }
                >
                  PF Configuration
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeStatutoryDropDown();
                  }
                }}
              >
                <Link
                  to="/statutory/esicconfiguration"
                  className={
                    (history.pathname === '/statutory/esicconfiguration' ||
                      history.pathname ===
                        '/statutory/esicconfiguration/create-esicconfiguration') &&
                    'active'
                  }
                >
                  ESIC Configuration
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeStatutoryDropDown();
                  }
                }}
              >
                <Link
                  to="/statutory/lwfconfiguration"
                  className={
                    (history.pathname === '/statutory/lwfconfiguration' ||
                      history.pathname ===
                        '/statutory/lwfconfiguration/create-lwfconfiguration') &&
                    'active'
                  }
                >
                  LWF Configuration
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeStatutoryDropDown();
                  }
                }}
              >
                <Link
                  to="/statutory/ptconfiguration"
                  className={
                    (history.pathname === '/statutory/ptconfiguration' ||
                      history.pathname ===
                        '/statutory/create-ptconfiguration') &&
                    'active'
                  }
                >
                  PT Configuration
                </Link>
              </li>
              <li
                className={
                  statutoryDropDown.statutoryItDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setStatutoryDropDown({
                      ...statutoryDropDown,
                      statutoryItDropDown:
                        !statutoryDropDown.statutoryItDropDown,
                    })
                  }
                >
                  IT Configuration
                </Link>
                <ul
                  className={
                    statutoryDropDown.statutoryMainDropDown &&
                    statutoryDropDown.statutoryItDropDown &&
                    'show'
                  }
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeStatutoryDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/statutory/itconfiguration/tax-regime"
                      className={
                        (history.pathname ===
                          '/statutory/itconfiguration/tax-regime' ||
                          history.pathname ===
                            '/statutory/itconfiguration/create-tax-regime') &&
                        'active'
                      }
                    >
                      Tax Regime
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeStatutoryDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/statutory/itconfiguration/cess-surcharge"
                      className={
                        history.pathname ===
                          '/statutory/itconfiguration/cess-surcharge' &&
                        'active'
                      }
                    >
                      Cess & Surcharge
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={
              payrollDropDown.payrollMainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
          >
            <Link
              onClick={() => {
                closeSettingDropDown();
                setPayrollDropDown(prevState => ({
                  ...prevState,
                  payrollMainDropDown: !payrollDropDown.payrollMainDropDown,
                }));
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeEmployeeDropDown();
                closeTimeAttendanceDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closeHelpdeskDropDown();
                closeStatutoryDropDown();
              }}
              className={
                toggleBtn === true &&
                payrollToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Payroll} data-inject-svg alt="Payroll" />
              <span>{t('title.payroll')}</span>
            </Link>
            <ul className={payrollDropDown.payrollMainDropDown ? 'show' : ''}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closePayrollDropDown();
                  }
                }}
              >
                <Link
                  to="/payroll/dashboard"
                  className={
                    history.pathname === '/payroll/dashboard' && 'active'
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closePayrollDropDown();
                  }
                }}
              >
                <Link
                  to="/payroll/compensation"
                  className={
                    (history.pathname === '/payroll/compensation' ||
                      history.pathname === '/payroll/salary-setup') &&
                    'active'
                  }
                >
                  Compensation
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closePayrollDropDown();
                  }
                }}
              >
                <Link
                  to="/payroll/process-payroll"
                  className={
                    (history.pathname === '/payroll/process-payroll' ||
                      history.pathname ===
                        '/payroll/process-payroll/view-pay-register' ||
                      history.pathname ===
                        '/payroll/process-payroll/manage-payslip') &&
                    'active'
                  }
                >
                  Process Payroll
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closePayrollDropDown();
                  }
                }}
              >
                <Link
                  to="/payroll/earning-deduction"
                  className={
                    (history.pathname === '/payroll/earning-deduction' ||
                      history.pathname ===
                        '/payroll/earning-deduction/add-earning-deduction') &&
                    'active'
                  }
                >
                  Earning & Deduction
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closePayrollDropDown();
                  }
                }}
              >
                <Link
                  to="/payroll/advance-loan"
                  className={
                    (history.pathname === '/payroll/advance-loan' ||
                      history.pathname ===
                        '/payroll/advance-loan/add-advance') &&
                    'active'
                  }
                >
                  Advance & Loan
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closePayrollDropDown();
                  }
                }}
              >
                <Link
                  to="/payroll/manage-tds"
                  className={
                    history.pathname === '/payroll/manage-tds' && 'active'
                  }
                >
                  Manage Tds
                </Link>
              </li>
              <li
                className={
                  payrollDropDown.payrollSettingDropDown
                    .payrollSettingMainDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setPayrollDropDown(prevState => ({
                      ...prevState,
                      payrollSettingDropDown: {
                        ...prevState.payrollSettingDropDown,
                        payrollSettingMainDropDown:
                          !prevState.payrollSettingDropDown
                            .payrollSettingMainDropDown,
                      },
                    }))
                  }
                >
                  Setting
                </Link>
                <ul
                  className={
                    payrollDropDown.payrollMainDropDown &&
                    payrollDropDown.payrollSettingDropDown
                      .payrollSettingMainDropDown &&
                    'show'
                  }
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closePayrollDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/payroll/setting/salary-components"
                      className={
                        (history.pathname ===
                          '/payroll/setting/salary-components' ||
                          history.pathname ===
                            '/payroll/setting/salary-components/add-earning-component') &&
                        'active'
                      }
                    >
                      Salary Components
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closePayrollDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/payroll/setting/salary-template"
                      className={
                        (history.pathname ===
                          '/payroll/setting/salary-template' ||
                          history.pathname ===
                            '/payroll/setting/salary-template/add-salary-template') &&
                        'active'
                      }
                    >
                      Salary Template
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closePayrollDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/payroll/setting/pay-period"
                      className={
                        (history.pathname === '/payroll/setting/pay-period' ||
                          history.pathname ===
                            '/payroll/setting/pay-period/pay-period-edit') &&
                        'active'
                      }
                    >
                      Pay Period
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closePayrollDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/payroll/setting/gratuity"
                      className={
                        history.pathname === '/payroll/setting/gratuity' &&
                        'active'
                      }
                    >
                      Gratuity
                    </Link>
                  </li>
                  <li
                    className={
                      payrollDropDown.payrollSettingDropDown.payrollTdsDropDown
                        ? 'has_dropdown open'
                        : 'has_dropdown '
                    }
                  >
                    <Link
                      onClick={() =>
                        setPayrollDropDown(prevState => ({
                          ...prevState,
                          payrollSettingDropDown: {
                            ...prevState.payrollSettingDropDown,
                            payrollTdsDropDown:
                              !prevState.payrollSettingDropDown
                                .payrollTdsDropDown,
                          },
                        }))
                      }
                    >
                      Tds
                    </Link>
                    <ul
                      className={
                        payrollDropDown.payrollMainDropDown &&
                        payrollDropDown.payrollSettingDropDown
                          .payrollSettingMainDropDown &&
                        payrollDropDown.payrollSettingDropDown
                          .payrollTdsDropDown &&
                        'show'
                      }
                    >
                      <li
                        onClick={() => {
                          if (toggleBtn) {
                            closePayrollDropDown();
                          }
                        }}
                      >
                        <Link
                          to="/payroll/setting/tds/investment"
                          className={
                            history.pathname ===
                              '/payroll/setting/tds/investment' && 'active'
                          }
                        >
                          Investment Section
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          if (toggleBtn) {
                            closePayrollDropDown();
                          }
                        }}
                      >
                        <Link
                          to="/payroll/setting/tds/tax-saving-scheme"
                          className={
                            history.pathname ===
                              '/payroll/setting/tds/tax-saving-scheme' &&
                            'active'
                          }
                        >
                          Tax Saving Scheme
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={expenseDropDown ? 'has_dropdown open' : 'has_dropdown '}
            onClick={() => {
              closeSettingDropDown();
              closeEmployeeDropDown();
              closeStatutoryDropDown();
              closeHelpdeskDropDown();
              setOrganizationPopUp(false);
              setAssetsPopUp(false);
              closeTimeAttendanceDropDown();
              closeSchemeDropDown();
              setLeavePopUp(false);
              closePayrollDropDown();
              setLetterDropDown(false);
            }}
          >
            <Link
              onClick={() => setExpenseDropDown(!expenseDropDown)}
              className={
                toggleBtn === true &&
                expenseAndReimbursementToogle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={ExpenseClaims} data-inject-svg alt="ExpenseClaims" />
              <span>{t('title.expenseClaims')}</span>
            </Link>
            <ul className={expenseDropDown ? 'show' : ''}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setExpenseDropDown(false);
                  }
                }}
              >
                <Link
                  to="/expense-reimbursement/expense-trip"
                  className={
                    (history.pathname ===
                      '/expense-reimbursement/expense-trip' ||
                      history.pathname ===
                        '/expense-reimbursement/expense-trip/reimbursement') &&
                    'active'
                  }
                >
                  Expense & Trip
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setExpenseDropDown(false);
                  }
                }}
              >
                <Link
                  to="/expense-reimbursement/reimbursement-approval"
                  className={
                    (history.pathname ===
                      '/expense-reimbursement/reimbursement-approval' ||
                      history.pathname ===
                        '/expense-reimbursement/expense-trip/reimbursement-request') &&
                    'active'
                  }
                >
                  Reimbursement Approval
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setExpenseDropDown(false);
                  }
                }}
              >
                <Link
                  to="/expense-reimbursement/expense-type"
                  className={
                    history.pathname ===
                      '/expense-reimbursement/expense-type' && 'active'
                  }
                >
                  Expense Type
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setExpenseDropDown(false);
                  }
                }}
              >
                <Link
                  to="/expense-reimbursement/approval-chain"
                  className={
                    history.pathname ===
                      '/expense-reimbursement/approval-chain' && 'active'
                  }
                >
                  Approval Chain
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={letterDropDown ? 'has_dropdown open' : 'has_dropdown '}
            onClick={() => {
              closeSettingDropDown();
              closeEmployeeDropDown();
              closeStatutoryDropDown();
              closeHelpdeskDropDown();
              setOrganizationPopUp(false);
              setAssetsPopUp(false);
              closeTimeAttendanceDropDown();
              closeSchemeDropDown();
              setLeavePopUp(false);
              setExpenseDropDown(false);
              closePayrollDropDown();
            }}
          >
            <Link
              onClick={() => setLetterDropDown(!letterDropDown)}
              className={
                toggleBtn === true &&
                letterToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img
                src={LetterConfiguration}
                data-inject-svg
                alt="LetterConfiguration"
              />
              <span>{t('title.letter')}</span>
            </Link>
            <ul className={letterDropDown ? 'show' : ''}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLetterDropDown(false);
                  }
                }}
              >
                <Link
                  to="/letter/generate"
                  className={
                    (history.pathname === '/letter/generate' ||
                      history.pathname === '/letter/generate/step-one' ||
                      history.pathname === '/letter/generate/step-two' ||
                      history.pathname === '/letter/generate/step-three' ||
                      history.pathname === '/letter/generate/step-four') &&
                    'active'
                  }
                >
                  Generate
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLetterDropDown(false);
                  }
                }}
              >
                <Link
                  to="/letter/letter-template"
                  className={
                    (history.pathname === '/letter/letter-template' ||
                      history.pathname === '/letter/letter-template/step-one' ||
                      history.pathname === '/letter/letter-template/step-two' ||
                      history.pathname ===
                        '/letter/letter-template/step-three' ||
                      history.pathname ===
                        '/letter/letter-template/step-four') &&
                    'active'
                  }
                >
                  Letter Template
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setLetterDropDown(false);
                  }
                }}
              >
                <Link
                  to="/letter/setting"
                  className={history.pathname === '/letter/setting' && 'active'}
                >
                  Setting
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={assetsPopUp ? 'has_dropdown open' : 'has_dropdown '}
            onClick={() => {
              closeSettingDropDown();
              closeEmployeeDropDown();
              closeStatutoryDropDown();
              closeHelpdeskDropDown();
              setOrganizationPopUp(false);
              setLetterDropDown(false);
              closeTimeAttendanceDropDown();
              closeSchemeDropDown();
              setLeavePopUp(false);
              setExpenseDropDown(false);
              closePayrollDropDown();
            }}
          >
            <Link
              onClick={() => setAssetsPopUp(!assetsPopUp)}
              className={
                toggleBtn === true &&
                assetsToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img
                src={AssetsConfiguration}
                data-inject-svg
                alt="AssetsConfiguration"
              />
              <span>{t('title.assets')}</span>
            </Link>
            <ul className={assetsPopUp ? 'show' : ''}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setAssetsPopUp(false);
                  }
                }}
              >
                <Link
                  to="/assets/addassignment-asset"
                  className={
                    history.pathname === '/assets/addassignment-asset' &&
                    'active'
                  }
                >
                  Assigned Assets
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setAssetsPopUp(false);
                  }
                }}
              >
                <Link
                  to="/assets/category"
                  className={
                    history.pathname === '/assets/category' && 'active'
                  }
                >
                  Assets Categories & Type
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    setAssetsPopUp(false);
                  }
                }}
              >
                <Link
                  to="/assets/assigned-list"
                  className={
                    (history.pathname === '/assets/assigned-list' ||
                      history.pathname ===
                        '/assets/assigned-list/create-asset') &&
                    'active'
                  }
                >
                  Add & Assign Asset
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={
              helpdeskDropDown.helpdeskMainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
          >
            <Link
              onClick={() => {
                closeSettingDropDown();
                closeStatutoryDropDown();
                setHelpdeskDropDown({
                  ...helpdeskDropDown,
                  helpdeskMainDropDown: !helpdeskDropDown.helpdeskMainDropDown,
                });
                setOrganizationPopUp(false);
                setAssetsPopUp(false);
                setLetterDropDown(false);
                closeEmployeeDropDown();
                closeTimeAttendanceDropDown();
                closeSchemeDropDown();
                setLeavePopUp(false);
                setExpenseDropDown(false);
                closePayrollDropDown();
              }}
              className={
                toggleBtn === true &&
                helpdeskToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Helpdesk} data-inject-svg alt="Helpdesk" />
              <span>Helpdesk</span>
            </Link>
            <ul className={helpdeskDropDown.helpdeskMainDropDown ? 'show' : ''}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeHelpdeskDropDown();
                  }
                }}
              >
                <Link
                  to="/helpdesk/ticket"
                  className={
                    (history.pathname === '/helpdesk/ticket' ||
                      history.pathname === '/helpdesk/tickets-chat') &&
                    'active'
                  }
                >
                  Tickets
                </Link>
              </li>

              <li
                className={
                  helpdeskDropDown.statutoryItDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() =>
                    setHelpdeskDropDown({
                      ...helpdeskDropDown,
                      helpdeskSettingDropDown:
                        !helpdeskDropDown.helpdeskSettingDropDown,
                    })
                  }
                >
                  Setting
                </Link>
                <ul
                  className={
                    helpdeskDropDown.helpdeskMainDropDown &&
                    helpdeskDropDown.helpdeskSettingDropDown &&
                    'show'
                  }
                >
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeHelpdeskDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/helpdesk/setting/category"
                      className={
                        history.pathname === '/helpdesk/setting/category' &&
                        'active'
                      }
                    >
                      Category
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeHelpdeskDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/helpdesk/setting/status"
                      className={
                        history.pathname === '/helpdesk/setting/status' &&
                        'active'
                      }
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              <img src={Reports} data-inject-svg alt="Reports" />
              <span>{t('title.reports')}</span>
            </Link>
          </li>
          <li
            className={
              settingDropDown.mainDropDown
                ? 'has_dropdown open'
                : 'has_dropdown '
            }
            onClick={() => {
              closeEmployeeDropDown();
              closeStatutoryDropDown();
              closeHelpdeskDropDown();
              setOrganizationPopUp(false);
              setLetterDropDown(false);
              closeTimeAttendanceDropDown();
              setAssetsPopUp(false);
              closeSchemeDropDown();
              setExpenseDropDown(false);
              closePayrollDropDown();
              setLeavePopUp(false);
            }}
          >
            <Link
              onClick={() => {
                setSettingDropDown({
                  ...settingDropDown,
                  mainDropDown: !settingDropDown.mainDropDown,
                });
              }}
              className={
                toggleBtn === true &&
                settingsToggle.includes(history.pathname) &&
                'active'
              }
            >
              <img src={Settings} data-inject-svg alt="Settings" />
              <span>{t('title.settings')}</span>
            </Link>
            <ul className={settingDropDown.mainDropDown ? 'show' : ''}>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeSettingDropDown();
                  }
                }}
              >
                <Link
                  to="/setting/user-roles-permission"
                  className={
                    (history.pathname === '/setting/user-roles-permission' ||
                      history.pathname ===
                        '/setting/User-roles-permission-step-one' ||
                      history.pathname ===
                        '/setting/User-roles-permission-step-Two') &&
                    'active'
                  }
                >
                  User & Roles - Permission
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeSettingDropDown();
                  }
                }}
              >
                <Link
                  to="/setting/email-alert"
                  className={
                    history.pathname === '/setting/email-alert' && 'active'
                  }
                >
                  Email Alert
                </Link>
              </li>
              <li
                onClick={() => {
                  if (toggleBtn) {
                    closeSettingDropDown();
                  }
                }}
              >
                <Link
                  to="/setting/process-cheklist"
                  className={
                    (history.pathname === '/setting/process-cheklist' ||
                      history.pathname ===
                        '/setting/process-cheklist-step-two') &&
                    'active'
                  }
                >
                  Process Checklist
                </Link>
              </li>
              <li
                className={
                  settingDropDown.feedBackDropDown
                    ? 'has_dropdown open'
                    : 'has_dropdown '
                }
              >
                <Link
                  onClick={() => {
                    setSettingDropDown({
                      ...settingDropDown,
                      feedBackDropDown: !settingDropDown.feedBackDropDown,
                    });
                  }}
                >
                  Feedback
                </Link>
                <ul className={settingDropDown.feedBackDropDown ? 'show' : ''}>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSettingDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/setting/praise-badge"
                      className={
                        history.pathname === '/setting/praise-badge' && 'active'
                      }
                    >
                      Praise Badge
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      if (toggleBtn) {
                        closeSettingDropDown();
                      }
                    }}
                  >
                    <Link
                      to="/setting/core-value"
                      className={
                        history.pathname === '/setting/core-value' && 'active'
                      }
                    >
                      Core Value
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
