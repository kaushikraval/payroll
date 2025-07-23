import { NotFoundPage } from 'app/pages/NotFoundPage';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import Header from 'Components/Common/Header';
import Sidebar from 'Components/Common/Sidebar';
import { Navigate } from 'react-router-dom';
import { getSessionDatavalue } from 'utils/common';

const Home = React.lazy(() => import('Components/Home/index.js'));
const Login = React.lazy(() => import('Components/Login/Login'));
const Register = React.lazy(() => import('Components/Login/Register'));
const ForgetPassword = React.lazy(() =>
  import('Components/Login/ForgetPassword'),
);
const Inbox = React.lazy(() => import('Components/Pages/Inbox'));
const Task = React.lazy(() => import('Components/Tasks/index.js'));
const Notification = React.lazy(() => import('Components/Pages/Notification'));
const MyProfile = React.lazy(() => import('Components/Profile/index.js'));
const EmployeeDashboard = React.lazy(() =>
  import('Components/Employee/Master/Dashboard/EmployeeDashboard'),
);
const CreateEmployeeOne = React.lazy(() =>
  import('Components/Employee/Master/CreateEmployeeStepOne'),
);
const CreateEmployeeTwo = React.lazy(() =>
  import('Components/Employee/Master/CreateEmployeeStepTwo'),
);
const CreateEmployeeThree = React.lazy(() =>
  import('Components/Employee/Master/CreateEmployeeStepThree'),
);
const CreateEmployeeFour = React.lazy(() =>
  import('Components/Employee/Master/CreateEmployeeStepFour'),
);
const EmployeeList = React.lazy(() =>
  import('Components/Employee/Master/EmployeeList/EmployeeList'),
);
const EmployeeProfile = React.lazy(() =>
  import('Components/Employee/Master/EmployeeList/EmployeeProfile'),
);
const OrganizationStructure = React.lazy(() =>
  import('Components/Employee/Master/OrganizationStructure'),
);
const EmployeeExit = React.lazy(() =>
  import('Components/Employee/Master/EmployeeExit'),
);
const FullAndFinal = React.lazy(() =>
  import('Components/Employee/Master/FullAndFinal/FullAndFinal'),
);
const FullAndFinalStepOne = React.lazy(() =>
  import('Components/Employee/Master/FullAndFinal/FullAndFinalStepOne'),
);
const FullAndFinalStepTwo = React.lazy(() =>
  import('Components/Employee/Master/FullAndFinal/FullAndFinalStepTwo'),
);
const FullAndFinalStepThree = React.lazy(() =>
  import('Components/Employee/Master/FullAndFinal/FullAndFinalStepThree'),
);
const FullAndFinalStepFour = React.lazy(() =>
  import('Components/Employee/Master/FullAndFinal/FullAndFinalStepFour'),
);
const BullkExcelUpload = React.lazy(() =>
  import('Components/Employee/Administration/BulkExcelUpload'),
);
const BulkExcelUploadStepOne = React.lazy(() =>
  import('Components/Employee/Administration/BulkExcelUploadStepOne'),
);
const BulkExcelUploadStepTwo = React.lazy(() =>
  import('Components/Employee/Administration/BulkExcelUploadStepTwo'),
);
const BulkExcelUploadStepThree = React.lazy(() =>
  import('Components/Employee/Administration/BulkExcelUploadStepThree'),
);
const BulkExcelUploadStepFour = React.lazy(() =>
  import('Components/Employee/Administration/BulkExcelUploadStepFour'),
);
const BulkProfilePhotoUpload = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkProfilePhotoUpload/BulkProfilePhotoUpload'
  ),
);
const BulkProfilePhotoUploadStepOne = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkProfilePhotoUpload/BulkProfilePhotoUploadStepOne'
  ),
);
const BulkProfilePhotoUploadStepTwo = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkProfilePhotoUpload/BulkProfilePhotoUploadStepTwo'
  ),
);
const BulkProfilePhotoUploadStepThree = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkProfilePhotoUpload/BulkProfilePhotoUploadStepThree'
  ),
);
const BulkDocumentUpload = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkDocumentUpload/BulkDocumentUpload'
  ),
);
const BullkDocumentUploadStepOne = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkDocumentUpload/BullkDocumentUploadStepOne'
  ),
);
const BullkDocumentUploadStepTwo = React.lazy(() =>
  import(
    'Components/Employee/Administration/BulkDocumentUpload/BullkDocumentUploadStepTwo'
  ),
);
const PublishForm = React.lazy(() =>
  import('Components/Employee/Setting/PublishForm'),
);
const PoliciesAndFormAssignEmployee = React.lazy(() =>
  import('Components/Employee/Setting/PoliciesAndFormAssignEmployee'),
);
const PublishFormInner = React.lazy(() =>
  import('Components/Employee/Setting/PublishFormInner'),
);
const CodeSetting = React.lazy(() =>
  import('Components/Employee/Setting/CodeSetting'),
);
const MasterSetting = React.lazy(() =>
  import('Components/Employee/Setting/MasterSetting'),
);
const Company = React.lazy(() => import('Components/Organization/Company'));
const LegalEntity = React.lazy(() =>
  import('Components/Organization/LegalEntity'),
);
const BusinessUnit = React.lazy(() =>
  import('Components/Organization/BusinessUnit'),
);
const Location = React.lazy(() => import('Components/Organization/Location'));
const Bank = React.lazy(() => import('Components/Organization/Bank'));
const AddAssignAsset = React.lazy(() =>
  import('Components/AssetConfiguration/AddAssignAsset'),
);
const AssetCategory = React.lazy(() =>
  import('Components/AssetConfiguration/AssetCategory'),
);
const AssignedList = React.lazy(() =>
  import('Components/AssetConfiguration/AssignedList'),
);
const CreateAsset = React.lazy(() =>
  import('Components/AssetConfiguration/CreateAsset'),
);
const PfConfiguration = React.lazy(() =>
  import('Components/Statutory/PfConfiguration'),
);
const CreatePfConfiguration = React.lazy(() =>
  import('Components/Statutory/CreatePfConfiguration'),
);
const EsicConfiguration = React.lazy(() =>
  import('Components/Statutory/EsicConfiguration'),
);
const CreateEsicConfiguration = React.lazy(() =>
  import('Components/Statutory/CreateEsicConfiguration'),
);
const LwfConfiguration = React.lazy(() =>
  import('Components/Statutory/LwfConfiguration'),
);
const CreateLwfConfiguration = React.lazy(() =>
  import('Components/Statutory/CreateLwfConfiguration'),
);
const PtConfiguration = React.lazy(() =>
  import('Components/Statutory/PtConfiguration'),
);
const CreatePtConfiguration = React.lazy(() =>
  import('Components/Statutory/CreatePtConfiguration'),
);
const TaxRagime = React.lazy(() =>
  import('Components/Statutory/ItConfiguration/TaxRagime'),
);
const CreateTaxRagime = React.lazy(() =>
  import('Components/Statutory/ItConfiguration/CreateTaxRagime'),
);
const CessAndSurcharge = React.lazy(() =>
  import('Components/Statutory/ItConfiguration/CessAndSurcharge'),
);
const LetterGenerate = React.lazy(() =>
  import('Components/Letter/Generate/Generate'),
);
const GenerateLetterStepOne = React.lazy(() =>
  import('Components/Letter/Generate/GenerateLetterStepOne'),
);
const GenerateLetterStepTwo = React.lazy(() =>
  import('Components/Letter/Generate/GenerateLetterStepTwo'),
);
const GenerateLetterStepThree = React.lazy(() =>
  import('Components/Letter/Generate/GenerateLetterStepThree'),
);
const GenerateLetterStepFour = React.lazy(() =>
  import('Components/Letter/Generate/GenerateLetterStepFour'),
);
const LetterTemplate = React.lazy(() =>
  import('Components/Letter/LetterTemplate/LetterTemplate'),
);
const LetterSetting = React.lazy(() =>
  import('Components/Letter/LetterSetting'),
);
const LetterTemplateStepOne = React.lazy(() =>
  import('Components/Letter/LetterTemplate/LetterTemplateStepOne'),
);
const LetterTemplateStepTwo = React.lazy(() =>
  import('Components/Letter/LetterTemplate/LetterTemplateStepTwo'),
);
const LetterTemplateStepThree = React.lazy(() =>
  import('Components/Letter/LetterTemplate/LetterTemplateStepThree'),
);
const LetterTemplateStepFour = React.lazy(() =>
  import('Components/Letter/LetterTemplate/LetterTemplateStepFour'),
);
const TimeAndAttendanceDashboard = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/TimeAndAttendanceDashboard'),
);
const CheckIn = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/CheckIn'),
);
const NotCheckIn = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/NotCheckIn'),
);
const OnLeave = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/OnLeave'),
);
const WeeklyOff = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/WeeklyOff'),
);
const Holiday = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/Holiday'),
);
const LateComing = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/LateComing'),
);
const EarlyGoing = React.lazy(() =>
  import('Components/TimeAndAttendance/Dashboard/EarlyGoing'),
);
const ShiftAndDay = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/ShiftAndDay'),
);
const ShiftAssignEmployee = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/ShiftAssignEmployee'),
);
const WeeklyOffAssignEmployee = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/WeeklyOffAssignEmployee'),
);
const HolidayAssignEmployee = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/HolidayAssignEmployee'),
);
const CreateWeeklyOff = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/CreateWeeklyOff'),
);
const HolidayList = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/HolidayList'),
);
const CreateShift = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/CreateShift'),
);
const ShiftAndDayAssign = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/ShiftAndDayAssign'),
);
const ShiftAndDayCalendar = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/ShiftAndDayCalendar'),
);
const ShiftScheduleAndPattern = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/ShiftScheduleAndPattern'),
);
const ShiftScheduleAndPatternAssignEmployee = React.lazy(() =>
  import(
    'Components/TimeAndAttendance/TimeManagement/ShiftScheduleAndPatternAssignEmployee'
  ),
);
const AttendanceManagement = React.lazy(() =>
  import(
    'Components/TimeAndAttendance/AttendanceManagement/AttendanceManagement'
  ),
);
const MonthRegister = React.lazy(() =>
  import('Components/TimeAndAttendance/AttendanceManagement/MonthRegister'),
);
const Overtime = React.lazy(() =>
  import('Components/TimeAndAttendance/AttendanceManagement/Overtime'),
);
const OvertimeDetail = React.lazy(() =>
  import('Components/TimeAndAttendance/AttendanceManagement/OvertimeDetail'),
);
const ApplyOvertime = React.lazy(() =>
  import('Components/TimeAndAttendance/AttendanceManagement/ApplyOvertime'),
);
const OvertimeApproval = React.lazy(() =>
  import('Components/TimeAndAttendance/AttendanceManagement/OvertimeApproval'),
);
const RegularizationApproval = React.lazy(() =>
  import(
    'Components/TimeAndAttendance/AttendanceManagement/RegularizationApproval'
  ),
);
const ConfigureNewPattern = React.lazy(() =>
  import('Components/TimeAndAttendance/TimeManagement/ConfigureNewPattern'),
);
const AttendanceView = React.lazy(() =>
  import('Components/TimeAndAttendance/AttendanceManagement/AttendanceView'),
);
const UserRolesPermission = React.lazy(() =>
  import('Components/Setting/UserRolesPermission'),
);
const UserRolesPermissionAssignEmployee = React.lazy(() =>
  import('Components/Setting/UserRolesPermissionAssignEmployee'),
);
const UserRolesPermissionStepOne = React.lazy(() =>
  import('Components/Setting/UserRolesPermissionStepOne'),
);
const UserRolesPermissionStepTwo = React.lazy(() =>
  import('Components/Setting/UserRolesPermissionStepTwo'),
);
const EmailAlert = React.lazy(() => import('Components/Setting/EmailAlert'));
const ProcessCheklist = React.lazy(() =>
  import('Components/Setting/ProcessCheklist'),
);
const ProcessCheklistStepTwo = React.lazy(() =>
  import('Components/Setting/ProcessCheklistStepTwo'),
);
const CoreValue = React.lazy(() => import('Components/Setting/CoreValue'));
const PraiseBadge = React.lazy(() => import('Components/Setting/PraiseBadge'));
const AttendanceTracking = React.lazy(() =>
  import('Components/Scheme/Attendance/AttendanceTracking'),
);
const AttendaceTrackingAssignEmployee = React.lazy(() =>
  import('Components/Scheme/Attendance/AttendaceTrackingAssignEmployee'),
);
const CreateAttendanceTracking = React.lazy(() =>
  import('Components/Scheme/Attendance/CreateAttendanceTracking'),
);
const BiometricDevices = React.lazy(() =>
  import('Components/Scheme/Attendance/BiometricDevices'),
);
const BiometricDevicesAssignEmployee = React.lazy(() =>
  import('Components/Scheme/Attendance/BiometricDevicesAssignEmployee'),
);
const CreateBiometricDevices = React.lazy(() =>
  import('Components/Scheme/Attendance/CreateBiometricDevices'),
);
const CaptureMethod = React.lazy(() =>
  import('Components/Scheme/Attendance/CaptureMethod'),
);
const CaptureMethodAssignEmployee = React.lazy(() =>
  import('Components/Scheme/Attendance/CaptureMethodAssignEmployee'),
);
const CreateCaptureMethod = React.lazy(() =>
  import('Components/Scheme/Attendance/CreateCaptureMethod'),
);
const GeoFancing = React.lazy(() =>
  import('Components/Scheme/Attendance/GeoFancing'),
);
const GeoFancingAssignEmployee = React.lazy(() =>
  import('Components/Scheme/Attendance/GeoFancingAssignEmployee'),
);
const CreateGeoFancing = React.lazy(() =>
  import('Components/Scheme/Attendance/CreateGeoFancing'),
);
const IpRange = React.lazy(() =>
  import('Components/Scheme/Attendance/IpRange'),
);
const IpRangeAssignEmployee = React.lazy(() =>
  import('Components/Scheme/Attendance/IpRangeAssignEmployee'),
);
const CreateIpRange = React.lazy(() =>
  import('Components/Scheme/Attendance/CreateIpRange'),
);
const CompOff = React.lazy(() => import('Components/Scheme/CompOff'));
const CompOffAssignEmployee = React.lazy(() =>
  import('Components/Scheme/CompOffAssignEmployee'),
);
const CompOffStepone = React.lazy(() =>
  import('Components/Scheme/CompOffPage/CompOffStepone'),
);
const LeaveStepOne = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveStepOne'),
);
const Leave = React.lazy(() => import('Components/Scheme/Leave'));
const LeaveAssignEmployee = React.lazy(() =>
  import('Components/Scheme/LeaveAssignEmployee'),
);
const OverTime = React.lazy(() => import('Components/Scheme/OverTime'));
const OvertimeAssignEmployee = React.lazy(() =>
  import('Components/Scheme/OvertimeAssignEmployee'),
);

const OverTimeStepone = React.lazy(() =>
  import('Components/Scheme/OverTimemorepage/OverTimeStepone'),
);
const LeaveEntitleSetup = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveEntitleSetup'),
);
const LeaveEntitleProrate = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveEntitleProrate'),
);
const LeaveApplicationRule = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveApplicationRule'),
);
const LeaveRestrictionSetting = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveRestrictionSetting'),
);
const HolidayWeekend = React.lazy(() =>
  import('Components/Scheme/Leavepages/HolidayWeekend'),
);
const LeaveYearend = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveYearend'),
);
const LeaveApprovalScheme = React.lazy(() =>
  import('Components/Scheme/Leavepages/LeaveApprovalScheme'),
);
const ExpenseTrip = React.lazy(() =>
  import('Components/ExpenseAndReimbursement/ExpenseAndTrip'),
);
const Reimbursement = React.lazy(() =>
  import('Components/ExpenseAndReimbursement/Reimbursement'),
);
const ReimbursementRequest = React.lazy(() =>
  import('Components/ExpenseAndReimbursement/ReimbursementRequest'),
);
const ExpenseType = React.lazy(() =>
  import('Components/ExpenseAndReimbursement/ExpenseType'),
);
const ReimbursementApproval = React.lazy(() =>
  import('Components/ExpenseAndReimbursement/ReimbursementApproval'),
);
const ApprovalChain = React.lazy(() =>
  import('Components/ExpenseAndReimbursement/ApprovalChain'),
);
const LeaveDashboard = React.lazy(() => import('Components/Leave/Dashboard'));
const LeaveBalance = React.lazy(() => import('Components/Leave/LeaveBalance'));
const LeaveApproval = React.lazy(() =>
  import('Components/Leave/LeaveApproval'),
);
const LeaveBalanceCorrection = React.lazy(() =>
  import('Components/Leave/LeaveBalanceCorrection'),
);
const LeaveBalanceDetail = React.lazy(() =>
  import('Components/Leave/LeaveBalanceDetail'),
);
const CompOffDetail = React.lazy(() =>
  import('Components/Leave/CompOffDetail'),
);
const ApplyCOFF = React.lazy(() => import('Components/Leave/ApplyCOFF'));
const EditCOFF = React.lazy(() => import('Components/Leave/EditCOFF'));
const LeaveType = React.lazy(() => import('Components/Leave/LeaveType'));
const LeaveCompOffApproval = React.lazy(() =>
  import('Components/Leave/CompOffApproval'),
);
const LeaveCompOff = React.lazy(() => import('Components/Leave/CompOff'));
const OnLeaveToday = React.lazy(() => import('Components/Leave/OnLeaveToday'));
const LeaveSummary = React.lazy(() => import('Components/Leave/LeaveSummary'));
const ApplyLeave = React.lazy(() => import('Components/Leave/ApplyLeave'));
const EditLeave = React.lazy(() => import('Components/Leave/EditLeave'));
const Ticket = React.lazy(() => import('Components/Helpdesk/Tickets'));
const TicketsChat = React.lazy(() => import('Components/Helpdesk/TicketsChat'));
const Category = React.lazy(() =>
  import('Components/Helpdesk/Setting/Category'),
);
const Status = React.lazy(() => import('Components/Helpdesk/Setting/Status'));
const PayrollDashboard = React.lazy(() =>
  import('Components/Payroll/Dashboard'),
);
const Compensation = React.lazy(() =>
  import('Components/Payroll/Compensation'),
);
const SalarySetup = React.lazy(() => import('Components/Payroll/SalarySetup'));
const ViewCompensationDetails = React.lazy(() =>
  import('Components/Payroll/ViewCompensationDetails'),
);
const CompensationEdit = React.lazy(() =>
  import('Components/Payroll/CompensationEdit'),
);
const CompensationSalaryRevision = React.lazy(() =>
  import('Components/Payroll/CompensationSalaryRevision'),
);
const ProcessPayroll = React.lazy(() =>
  import('Components/Payroll/ProcessPayroll'),
);
const NewJoinees = React.lazy(() =>
  import('Components/Payroll/NewJoineesExitEmployee/NewJoinees'),
);
const ExitEmployee = React.lazy(() =>
  import('Components/Payroll/NewJoineesExitEmployee/ExitEmployee'),
);
const PayrollLeave = React.lazy(() =>
  import('Components/Payroll/AttendanceLeave/PayrollLeave'),
);
const AttendanceRegularization = React.lazy(() =>
  import('Components/Payroll/AttendanceLeave/AttendanceRegularization'),
);
const MissingAttendanceDays = React.lazy(() =>
  import('Components/Payroll/AttendanceLeave/MissingAttendanceDays'),
);
const SalaryRevisions = React.lazy(() =>
  import('Components/Payroll/SalaryRevisionsArrear/SalaryRevisions'),
);
const Arrear = React.lazy(() =>
  import('Components/Payroll/SalaryRevisionsArrear/Arrear'),
);
const PayrollOvertime = React.lazy(() =>
  import('Components/Payroll/OvertimeEarningDeduction/PayrollOvertime'),
);
const Earning = React.lazy(() =>
  import('Components/Payroll/OvertimeEarningDeduction/Earning'),
);
const Deduction = React.lazy(() =>
  import('Components/Payroll/OvertimeEarningDeduction/Deduction'),
);
const AdvanceLoan = React.lazy(() =>
  import('Components/Payroll/OvertimeEarningDeduction/AdvanceLoan'),
);
const ProvidentFund = React.lazy(() =>
  import('Components/Payroll/StatutoryNetPay/ProvidentFund'),
);
const Esic = React.lazy(() =>
  import('Components/Payroll/StatutoryNetPay/Esic'),
);
const Pt = React.lazy(() => import('Components/Payroll/StatutoryNetPay/Pt'));
const Tds = React.lazy(() => import('Components/Payroll/StatutoryNetPay/Tds'));
const NetSalary = React.lazy(() =>
  import('Components/Payroll/StatutoryNetPay/NetSalary'),
);
const ViewPayRegister = React.lazy(() =>
  import('Components/Payroll/ViewPayRegister'),
);
const ManagePayslip = React.lazy(() =>
  import('Components/Payroll/ManagePayslip'),
);
const EarningAndDeduction = React.lazy(() =>
  import('Components/Payroll/EarningAndDeduction'),
);
const AddEarningDeduction = React.lazy(() =>
  import('Components/Payroll/AddEarningDeduction'),
);
const EditHistory = React.lazy(() => import('Components/Payroll/EditHistory'));
const AdvanceAndLoan = React.lazy(() =>
  import('Components/Payroll/AdvanceAndLoan'),
);
const AddAdvance = React.lazy(() => import('Components/Payroll/AddAdvance'));
const ApplyLoan = React.lazy(() => import('Components/Payroll/ApplyLoan'));
const ViewLoan = React.lazy(() => import('Components/Payroll/ViewLoan'));
const ManageTds = React.lazy(() => import('Components/Payroll/ManageTds'));
const ManageTdsDetails = React.lazy(() =>
  import('Components/Payroll/ManageTdsDetails'),
);
const SalaryComponents = React.lazy(() =>
  import('Components/Payroll/Setting/SalaryComponents'),
);
const AddEarningComponent = React.lazy(() =>
  import('Components/Payroll/Setting/AddEarningComponent'),
);
const AddDeducationComponent = React.lazy(() =>
  import('Components/Payroll/Setting/AddDeducationComponent'),
);
const SalaryTemplate = React.lazy(() =>
  import('Components/Payroll/Setting/SalaryTemplate'),
);
const AddSalaryTemplate = React.lazy(() =>
  import('Components/Payroll/Setting/AddSalaryTemplate'),
);
const PayPeriod = React.lazy(() =>
  import('Components/Payroll/Setting/PayPeriod'),
);
const PayPeriodEdit = React.lazy(() =>
  import('Components/Payroll/Setting/PayPeriodEdit'),
);
const Gratuity = React.lazy(() =>
  import('Components/Payroll/Setting/Gratuity'),
);
const InvestmentSection = React.lazy(() =>
  import('Components/Payroll/Setting/Tds/InvestmentSection'),
);
const TaxSavingScheme = React.lazy(() =>
  import('Components/Payroll/Setting/Tds/TaxSavingScheme'),
);
const Chat = React.lazy(() => import('Components/Chat/Chat'));
export default function Index({children}) {

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
  return (
    <>
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
          {/* {children} */}
          <Routes>
        <Route
          path="/"
          element={
            // <PrivateRouter>
              <Home />
            // </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/inbox"
          element={
            // <PrivateRouter>
              <Inbox />
            // </PrivateRouter>
          }
        />
        <Route
          path="/notification"
          element={
            // <PrivateRouter>
              <Notification />
            // </PrivateRouter>
          }
        />
        <Route
          path="/my-profile"
          element={
            // <PrivateRouter>
              <MyProfile />
            // </PrivateRouter>
          }
        />
        <Route
          path="/task"
          element={
            // <PrivateRouter>
              <Task />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/dashboard"
          element={
            // <PrivateRouter>
              <EmployeeDashboard />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/create-employee-step-one"
          element={
            // <PrivateRouter>
              <CreateEmployeeOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/create-employee-step-two"
          element={
            // <PrivateRouter>
              <CreateEmployeeTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/create-employee-step-three"
          element={
            // <PrivateRouter>
              <CreateEmployeeThree />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/create-employee-step-four"
          element={
            // <PrivateRouter>
              <CreateEmployeeFour />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/employee-list"
          element={
            // <PrivateRouter>
              <EmployeeList />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/masters/employee-profile"
          element={
            // <PrivateRouter>
              <EmployeeProfile />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/organization-structure"
          element={
            // <PrivateRouter>
              <OrganizationStructure />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/employee-exit"
          element={
            // <PrivateRouter>
              <EmployeeExit />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/full-and-final"
          element={
            // <PrivateRouter>
              <FullAndFinal />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/full-and-final-step-one"
          element={
            // <PrivateRouter>
              <FullAndFinalStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/full-and-final-step-two"
          element={
            // <PrivateRouter>
              <FullAndFinalStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/full-and-final-step-three"
          element={
            // <PrivateRouter>
              <FullAndFinalStepThree />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/master/full-and-final-step-four"
          element={
            // <PrivateRouter>
              <FullAndFinalStepFour />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-excel-upload"
          element={
            // <PrivateRouter>
              <BullkExcelUpload />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-excel-upload-step-one"
          element={
            // <PrivateRouter>
              <BulkExcelUploadStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-excel-upload-step-two"
          element={
            // <PrivateRouter>
              <BulkExcelUploadStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-excel-upload-step-three"
          element={
            // <PrivateRouter>
              <BulkExcelUploadStepThree />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-excel-upload-step-four"
          element={
            // <PrivateRouter>
              <BulkExcelUploadStepFour />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-profile-photo-upload"
          element={
            // <PrivateRouter>
              <BulkProfilePhotoUpload />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-profile-photo-upload-step-one"
          element={
            // <PrivateRouter>
              <BulkProfilePhotoUploadStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-profile-photo-upload-step-two"
          element={
            // <PrivateRouter>
              <BulkProfilePhotoUploadStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-profile-photo-upload-step-three"
          element={
            // <PrivateRouter>
              <BulkProfilePhotoUploadStepThree />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bulk-document-upload"
          element={
            // <PrivateRouter>
              <BulkDocumentUpload />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bullk-document-upload-step-one"
          element={
            // <PrivateRouter>
              <BullkDocumentUploadStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/administration/bullk-document-upload-step-two"
          element={
            // <PrivateRouter>
              <BullkDocumentUploadStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/setting/publish-form"
          element={
            // <PrivateRouter>
              <PublishForm />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/setting/policies-forms-assign-employee"
          element={
            // <PrivateRouter>
              <PoliciesAndFormAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/setting/publish-form-inner"
          element={
            // <PrivateRouter>
              <PublishFormInner />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/setting/code-setting"
          element={
            // <PrivateRouter>
              <CodeSetting />
            // </PrivateRouter>
          }
        />
        <Route
          path="/employees/setting/master-setting"
          element={
            // <PrivateRouter>
              <MasterSetting />
            // </PrivateRouter>
          }
        />
        <Route
          path="/organization/company"
          element={
            // <PrivateRouter>
              <Company />
            // </PrivateRouter>
          }
        />
        <Route
          path="/organization/legal-entity"
          element={
            // <PrivateRouter>
              <LegalEntity />
            // </PrivateRouter>
          }
        />
        <Route
          path="/organization/business-unit"
          element={
            // <PrivateRouter>
              <BusinessUnit />
            // </PrivateRouter>
          }
        />
        <Route
          path="/organization/location"
          element={
            // <PrivateRouter>
              <Location />
            // </PrivateRouter>
          }
        />
        <Route
          path="/organization/bank"
          element={
            // <PrivateRouter>
              <Bank />
            // </PrivateRouter>
          }
        />
        <Route
          path="/assets/addassignment-asset"
          element={
            // <PrivateRouter>
              <AddAssignAsset />
            // </PrivateRouter>
          }
        />
        <Route
          path="/assets/category"
          element={
            // <PrivateRouter>
              <AssetCategory />
            // </PrivateRouter>
          }
        />
        <Route
          path="/assets/assigned-list"
          element={
            // <PrivateRouter>
              <AssignedList />
            // </PrivateRouter>
          }
        />
        <Route
          path="/assets/assigned-list/create-asset"
          element={
            // <PrivateRouter>
              <CreateAsset />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/pfconfiguration"
          element={
            // <PrivateRouter>
              <PfConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/pfconfiguration/create-pfconfiguration"
          element={
            // <PrivateRouter>
              <CreatePfConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/esicconfiguration"
          element={
            // <PrivateRouter>
              <EsicConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/esicconfiguration/create-esicconfiguration"
          element={
            // <PrivateRouter>
              <CreateEsicConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/lwfconfiguration"
          element={
            // <PrivateRouter>
              <LwfConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/lwfconfiguration/create-lwfconfiguration"
          element={
            // <PrivateRouter>
              <CreateLwfConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/ptconfiguration"
          element={
            // <PrivateRouter>
              <PtConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/create-ptconfiguration"
          element={
            // <PrivateRouter>
              <CreatePtConfiguration />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/itconfiguration/tax-regime"
          element={
            // <PrivateRouter>
              <TaxRagime />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/itconfiguration/create-tax-regime"
          element={
            // <PrivateRouter>
              <CreateTaxRagime />
            // </PrivateRouter>
          }
        />
        <Route
          path="/statutory/itconfiguration/cess-surcharge"
          element={
            // <PrivateRouter>
              <CessAndSurcharge />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/generate"
          element={
            // <PrivateRouter>
              <LetterGenerate />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/generate/step-one"
          element={
            // <PrivateRouter>
              <GenerateLetterStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/generate/step-two"
          element={
            // <PrivateRouter>
              <GenerateLetterStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/generate/step-three"
          element={
            // <PrivateRouter>
              <GenerateLetterStepThree />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/generate/step-four"
          element={
            // <PrivateRouter>
              <GenerateLetterStepFour />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/letter-template"
          element={
            // <PrivateRouter>
              <LetterTemplate />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/letter-template/step-one"
          element={
            // <PrivateRouter>
              <LetterTemplateStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/letter-template/step-two"
          element={
            // <PrivateRouter>
              <LetterTemplateStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/letter-template/step-three"
          element={
            // <PrivateRouter>
              <LetterTemplateStepThree />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/letter-template/step-four"
          element={
            // <PrivateRouter>
              <LetterTemplateStepFour />
            // </PrivateRouter>
          }
        />
        <Route
          path="/letter/setting"
          element={
            // <PrivateRouter>
              <LetterSetting />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard"
          element={
            // <PrivateRouter>
              <TimeAndAttendanceDashboard />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/check-in"
          element={
            // <PrivateRouter>
              <CheckIn />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/not-check-in"
          element={
            // <PrivateRouter>
              <NotCheckIn />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/on-leave"
          element={
            // <PrivateRouter>
              <OnLeave />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/weekly-off"
          element={
            // <PrivateRouter>
              <WeeklyOff />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/holiday"
          element={
            // <PrivateRouter>
              <Holiday />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/late-coming"
          element={
            // <PrivateRouter>
              <LateComing />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/dashboard/early-going"
          element={
            // <PrivateRouter>
              <EarlyGoing />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/shift-and-day"
          element={
            // <PrivateRouter>
              <ShiftAndDay />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/shift/assign-employee"
          element={
            // <PrivateRouter>
              <ShiftAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/weekly-off/assign-employee"
          element={
            // <PrivateRouter>
              <WeeklyOffAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/holiday/assign-employee"
          element={
            // <PrivateRouter>
              <HolidayAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/create-shift"
          element={
            // <PrivateRouter>
              <CreateShift />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/create-weekly-off"
          element={
            // <PrivateRouter>
              <CreateWeeklyOff />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/holiday-list"
          element={
            // <PrivateRouter>
              <HolidayList />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/shift-and-day-assign"
          element={
            // <PrivateRouter>
              <ShiftAndDayAssign />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/shift-and-day-calender"
          element={
            // <PrivateRouter>
              <ShiftAndDayCalendar />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/shift-schedule-and-pattern"
          element={
            // <PrivateRouter>
              <ShiftScheduleAndPattern />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/shift-schedule-and-pattern/assign-Employee"
          element={
            // <PrivateRouter>
              <ShiftScheduleAndPatternAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/attendance-management"
          element={
            // <PrivateRouter>
              <AttendanceManagement />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/month-register"
          element={
            // <PrivateRouter>
              <MonthRegister />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/overtime"
          element={
            // <PrivateRouter>
              <Overtime />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/overtime-detail"
          element={
            // <PrivateRouter>
              <OvertimeDetail />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/overtime-apply"
          element={
            // <PrivateRouter>
              <ApplyOvertime />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/overtime-approval"
          element={
            // <PrivateRouter>
              <OvertimeApproval />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/regularization-approval"
          element={
            // <PrivateRouter>
              <RegularizationApproval />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/configure-new-pattern"
          element={
            // <PrivateRouter>
              <ConfigureNewPattern />
            // </PrivateRouter>
          }
        />
        <Route
          path="/time-and-attendance/attendance-view"
          element={
            // <PrivateRouter>
              <AttendanceView />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/user-roles-permission"
          element={
            // <PrivateRouter>
              <UserRolesPermission />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/user-roles-permission/assign-employee"
          element={
            // <PrivateRouter>
              <UserRolesPermissionAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/User-roles-permission-step-one"
          element={
            // <PrivateRouter>
              <UserRolesPermissionStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/User-roles-permission-step-Two"
          element={
            // <PrivateRouter>
              <UserRolesPermissionStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/email-alert"
          element={
            // <PrivateRouter>
              <EmailAlert />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/process-cheklist"
          element={
            // <PrivateRouter>
              <ProcessCheklist />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/process-cheklist-step-two"
          element={
            // <PrivateRouter>
              <ProcessCheklistStepTwo />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/praise-badge"
          element={
            // <PrivateRouter>
              <PraiseBadge />
            // </PrivateRouter>
          }
        />
        <Route
          path="/setting/core-value"
          element={
            // <PrivateRouter>
              <CoreValue />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/attendance-tracking"
          element={
            // <PrivateRouter>
              <AttendanceTracking />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/attendance-tracking/assign-employee"
          element={
            // <PrivateRouter>
              <AttendaceTrackingAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/create-attendance-tracking"
          element={
            // <PrivateRouter>
              <CreateAttendanceTracking />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/biometric-device"
          element={
            // <PrivateRouter>
              <BiometricDevices />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/biometric-device/assign-employee"
          element={
            // <PrivateRouter>
              <BiometricDevicesAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/create-biometric-device"
          element={
            // <PrivateRouter>
              <CreateBiometricDevices />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/capture-method"
          element={
            // <PrivateRouter>
              <CaptureMethod />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/capture-method/assign-employee"
          element={
            // <PrivateRouter>
              <CaptureMethodAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/create-capture-method"
          element={
            // <PrivateRouter>
              <CreateCaptureMethod />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/geo-fancing"
          element={
            // <PrivateRouter>
              <GeoFancing />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/geo-fancing/assign-employee"
          element={
            // <PrivateRouter>
              <GeoFancingAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/create-geo-fancing"
          element={
            // <PrivateRouter>
              <CreateGeoFancing />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/ip-range"
          element={
            // <PrivateRouter>
              <IpRange />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/ip-range/assign-employee"
          element={
            // <PrivateRouter>
              <IpRangeAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/attendance/create-ip-range"
          element={
            // <PrivateRouter>
              <CreateIpRange />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/compoff"
          element={
            // <PrivateRouter>
              <CompOff />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/compoff/assign-employee"
          element={
            // <PrivateRouter>
              <CompOffAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leave"
          element={
            // <PrivateRouter>
              <Leave />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leave/assign-employee"
          element={
            // <PrivateRouter>
              <LeaveAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/overtime"
          element={
            // <PrivateRouter>
              <OverTime />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/overtime/assign-employee"
          element={
            // <PrivateRouter>
              <OvertimeAssignEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/overtimemorepage/overtimestepone"
          element={
            // <PrivateRouter>
              <OverTimeStepone />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/compoffstepone/compoffstepone"
          element={
            // <PrivateRouter>
              <CompOffStepone />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-step-one"
          element={
            // <PrivateRouter>
              <LeaveStepOne />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-entitle-setup"
          element={
            // <PrivateRouter>
              <LeaveEntitleSetup />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-entitle-prorate"
          element={
            // <PrivateRouter>
              <LeaveEntitleProrate />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-application-rule"
          element={
            // <PrivateRouter>
              <LeaveApplicationRule />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-eestriction-setting"
          element={
            // <PrivateRouter>
              <LeaveRestrictionSetting />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/holiday-weekend"
          element={
            // <PrivateRouter>
              <HolidayWeekend />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-yearend"
          element={
            // <PrivateRouter>
              <LeaveYearend />
            // </PrivateRouter>
          }
        />
        <Route
          path="/scheme/leavepages/leave-approval"
          element={
            // <PrivateRouter>
              <LeaveApprovalScheme />
            // </PrivateRouter>
          }
        />
        <Route
          path="/expense-reimbursement/expense-trip"
          element={
            // <PrivateRouter>
              <ExpenseTrip />
            // </PrivateRouter>
          }
        />
        <Route
          path="/expense-reimbursement/expense-trip/reimbursement"
          element={
            // <PrivateRouter>
              <Reimbursement />
            // </PrivateRouter>
          }
        />
        <Route
          path="/expense-reimbursement/expense-trip/reimbursement-request"
          element={
            // <PrivateRouter>
              <ReimbursementRequest />
            // </PrivateRouter>
          }
        />
        <Route
          path="/expense-reimbursement/expense-type"
          element={
            // <PrivateRouter>
              <ExpenseType />
            // </PrivateRouter>
          }
        />
        <Route
          path="/expense-reimbursement/reimbursement-approval"
          element={
            // <PrivateRouter>
              <ReimbursementApproval />
            // </PrivateRouter>
          }
        />
        <Route
          path="/expense-reimbursement/approval-chain"
          element={
            // <PrivateRouter>
              <ApprovalChain />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/dashboard"
          element={
            // <PrivateRouter>
              <LeaveDashboard />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-balance"
          element={
            // <PrivateRouter>
              <LeaveBalance />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-approval"
          element={
            // <PrivateRouter>
              <LeaveApproval />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-balance-correction"
          element={
            // <PrivateRouter>
              <LeaveBalanceCorrection />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-balance-correction/leave-balance-detail"
          element={
            // <PrivateRouter>
              <LeaveBalanceDetail />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/comp-off"
          element={
            // <PrivateRouter>
              <LeaveCompOff />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/comp-off/comp-off-detail"
          element={
            // <PrivateRouter>
              <CompOffDetail />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/comp-off/comp-off-detail/apply-coff"
          element={
            // <PrivateRouter>
              <ApplyCOFF />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/comp-off/comp-off-detail/edit-coff"
          element={
            // <PrivateRouter>
              <EditCOFF />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/comp-off-approval"
          element={
            // <PrivateRouter>
              <LeaveCompOffApproval />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-type"
          element={
            // <PrivateRouter>
              <LeaveType />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/dashboard/on-leave-today"
          element={
            // <PrivateRouter>
              <OnLeaveToday />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-transaction/leave-summary"
          element={
            // <PrivateRouter>
              <LeaveSummary />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-transaction/leave-apply"
          element={
            // <PrivateRouter>
              <ApplyLeave />
            // </PrivateRouter>
          }
        />
        <Route
          path="/leave/leave-transaction/leave-edit"
          element={
            // <PrivateRouter>
              <EditLeave />
            // </PrivateRouter>
          }
        />
        <Route
          path="/helpdesk/ticket"
          element={
            // <PrivateRouter>
              <Ticket />
            // </PrivateRouter>
          }
        />
        <Route
          path="/helpdesk/tickets-chat"
          element={
            // <PrivateRouter>
              <TicketsChat />
            // </PrivateRouter>
          }
        />
        <Route
          path="/helpdesk/setting/category"
          element={
            // <PrivateRouter>
              <Category />
            // </PrivateRouter>
          }
        />
        <Route
          path="/helpdesk/setting/status"
          element={
            // <PrivateRouter>
              <Status />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/dashboard"
          element={
            // <PrivateRouter>
              <PayrollDashboard />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/compensation"
          element={
            // <PrivateRouter>
              <Compensation />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/salary-setup"
          element={
            // <PrivateRouter>
              <SalarySetup />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/view-compensation-details"
          element={
            // <PrivateRouter>
              <ViewCompensationDetails />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/compensation-edit"
          element={
            // <PrivateRouter>
              <CompensationEdit />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/compensation-salary-revision"
          element={
            // <PrivateRouter>
              <CompensationSalaryRevision />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll"
          element={
            // <PrivateRouter>
              <ProcessPayroll />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/new-joinees"
          element={
            // <PrivateRouter>
              <NewJoinees />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/exit-employee"
          element={
            // <PrivateRouter>
              <ExitEmployee />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/leave"
          element={
            // <PrivateRouter>
              <PayrollLeave />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/attendance-regularization"
          element={
            // <PrivateRouter>
              <AttendanceRegularization />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/missing-attendance-days"
          element={
            // <PrivateRouter>
              <MissingAttendanceDays />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/salary-revisions"
          element={
            // <PrivateRouter>
              <SalaryRevisions />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/arrear"
          element={
            // <PrivateRouter>
              <Arrear />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/overtime"
          element={
            // <PrivateRouter>
              <PayrollOvertime />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/earning"
          element={
            // <PrivateRouter>
              <Earning />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/deduction"
          element={
            // <PrivateRouter>
              <Deduction />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/advance-loan"
          element={
            // <PrivateRouter>
              <AdvanceLoan />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/provident-fund"
          element={
            // <PrivateRouter>
              <ProvidentFund />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/ESIC"
          element={
            // <PrivateRouter>
              <Esic />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/PT"
          element={
            // <PrivateRouter>
              <Pt />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/TDS"
          element={
            // <PrivateRouter>
              <Tds />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/net-salary"
          element={
            // <PrivateRouter>
              <NetSalary />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/view-pay-register"
          element={
            // <PrivateRouter>
              <ViewPayRegister />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/process-payroll/manage-payslip"
          element={
            // <PrivateRouter>
              <ManagePayslip />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/earning-deduction"
          element={
            // <PrivateRouter>
              <EarningAndDeduction />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/earning-deduction/add-earning-deduction"
          element={
            // <PrivateRouter>
              <AddEarningDeduction />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/earning-deduction/edit-history"
          element={
            // <PrivateRouter>
              <EditHistory />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/advance-loan"
          element={
            // <PrivateRouter>
              <AdvanceAndLoan />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/advance-loan/add-advance"
          element={
            // <PrivateRouter>
              <AddAdvance />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/advance-loan/apply-loan"
          element={
            // <PrivateRouter>
              <ApplyLoan />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/advance-loan/view-loan"
          element={
            // <PrivateRouter>
              <ViewLoan />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/manage-tds"
          element={
            // <PrivateRouter>
              <ManageTds />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/manage-tds/manage-tds-detail"
          element={
            // <PrivateRouter>
              <ManageTdsDetails />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/salary-components"
          element={
            // <PrivateRouter>
              <SalaryComponents />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/salary-components/add-earning-component"
          element={
            // <PrivateRouter>
              <AddEarningComponent />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/salary-components/add-deducation-component"
          element={
            // <PrivateRouter>
              <AddDeducationComponent />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/pay-period"
          element={
            // <PrivateRouter>
              <PayPeriod />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/pay-period/pay-period-edit"
          element={
            // <PrivateRouter>
              <PayPeriodEdit />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/salary-template"
          element={
            // <PrivateRouter>
              <SalaryTemplate />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/salary-template/add-salary-template"
          element={
            // <PrivateRouter>
              <AddSalaryTemplate />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/gratuity"
          element={
            // <PrivateRouter>
              <Gratuity />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/tds/investment"
          element={
            // <PrivateRouter>
              <InvestmentSection />
            // </PrivateRouter>
          }
        />
        <Route
          path="/payroll/setting/tds/tax-saving-scheme"
          element={
            // <PrivateRouter>
              <TaxSavingScheme />
            // </PrivateRouter>
          }
        />
        <Route
          path="/Chat/"
          element={
            // <PrivateRouter>
              <Chat />
            // </PrivateRouter>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        </div>
      </div>
    </>
  );
}
