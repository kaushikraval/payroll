import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import userImage from '../../../Assets/images/user8.png';
import EditIcon from '../../../Assets/images/edit.svg';
import TrashIcon from '../../../Assets/images/trash.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import Input from '../../Common/Input';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { useTranslation } from 'react-i18next';

export default function CreateEmployeeStepTwo() {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [legalEntity, setlegalEntity] = useState([]);
  const [businessUnit, setbusinessUnit] = useState([]);
  const [location, setlocation] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [grade, setgrade] = useState([]);
  const [employeeType, setemployeeType] = useState([]);
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [attendanceTrackingScheme, setattendanceTrackingScheme] = useState([]);
  const [leaveTrackingScheme, setleaveTrackingScheme] = useState([]);
  const [weeklyOffType, setweeklyOffType] = useState([]);
  const [shiftType, setshiftType] = useState([]);
  const [holidayType, setholidayType] = useState([]);
  const [subDepartment, setSubDepartment] = useState(false);
  const [subDepartmentPopup, setSubDepartmentPopup] = useState(false);
  const [departmentPopup, setDepartmentPopup] = useState(false);
  const [designationPopup, setDesignationPopup] = useState(false);
  const [gradePopup, setGradePopup] = useState(false);
  const [statusSelct, setStatus] = useState([]);
  const dialogFuncMap = {
    subDepartmentPopup: setSubDepartmentPopup,
    departmentPopup: setDepartmentPopup,
    designationPopup: setDesignationPopup,
    gradePopup: setGradePopup,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const legalEntryoption = [
    { label: 'Codezee Solutions', value: 'CodezeeSolutions' },
    { label: 'Oozee Technologies', value: 'OozeeTechnologies' },
    { label: 'Microloop', value: 'Microloop' },
    { label: 'Metaloop', value: 'Metaloop' },
  ];
  const businessUnitoption = [
    { label: 'Codezee Solutions', value: 'CodezeeSolutions' },
    { label: 'Oozee Technologies', value: 'OozeeTechnologies' },
    { label: 'Microloop', value: 'Microloop' },
    { label: 'Metaloop', value: 'Metaloop' },
  ];
  const locationoption = [
    { label: 'Mota Varachha', value: 'MotaVarachha' },
    { label: 'Adajan', value: 'Adajan' },
    { label: 'Station', value: 'Station' },
  ];
  const departmentoption = [
    { label: 'Desktop', value: 'Desktop' },
    { label: 'Management', value: 'Management' },
    { label: 'Web Developement', value: 'WebDevelopement' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Design', value: 'Design' },
  ];
  const subDepartmentoption = [
    { label: 'ASP .Net', value: 'aspnet' },
    { label: 'Market Research', value: 'MarketResearch' },
    { label: 'Advertizing', value: 'Advertizing' },
    { label: 'Promotion', value: 'Promotion' },
    { label: 'Product Planning', value: 'ProductPlanning' },
    { label: 'UI/UX Designer', value: 'UIUXDesigner' },
    { label: 'Web Design', value: 'WebDesign' },
  ];
  const designationoption = [
    { label: 'General Manger', value: 'GeneralManger' },
    { label: 'Wordpress Developer', value: 'WordpressDeveloper' },
    { label: 'Desktop Developer', value: 'DesktopDeveloper' },
    { label: 'UI/Ux Designer', value: 'UIUxDesigner' },
    { label: 'Android Developer', value: 'AndroidDeveloper' },
    { label: 'IOS Developer', value: 'IOSDeveloper' },
  ];
  const gradeoption = [
    { label: 'M', value: 'M' },
    { label: 'M1', value: 'M1' },
    { label: 'M2', value: 'M2' },
    { label: 'S1', value: 'S1' },
    { label: 'S2', value: 'S2' },
    { label: 'O1', value: 'O1' },
    { label: 'O2', value: 'O2' },
  ];
  const employeeTypeOption = [
    { label: 'Full Time', value: 'FullTime' },
    { label: 'Part Time', value: 'PartTime' },
    { label: 'Contract', value: 'Contract' },
  ];
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const attendanceTrackingSchemeOption = [
    { label: 'General Scheme', value: 'GeneralScheme' },
    { label: 'Probation Scheme', value: 'ProbationScheme' },
    { label: 'Trainee Scheme', value: 'TraineeScheme' },
    { label: 'Contract Scheme', value: 'ContractScheme' },
  ];
  const leaveTrackingSchemeOption = [
    { label: 'General Scheme', value: 'GeneralScheme' },
    { label: 'Probation Scheme', value: 'ProbationScheme' },
    { label: 'Trainee Scheme', value: 'TraineeScheme' },
    { label: 'Contract Scheme', value: 'ContractScheme' },
  ];
  const weeklyOffTypeOption = [
    { label: 'All Sunday', value: 'AllSunday' },
    { label: 'All Saturday & All Sunday', value: 'AllSaturdayAllSunday' },
    {
      label: 'Even(2,4)Saturday & All Sunday',
      value: 'Even(2,4)SaturdayAllSunday',
    },
    { label: 'Odd Saturday & All Sunday', value: 'OddSaturdayAllSunday' },
  ];
  const shiftTypeOption = [
    { label: 'General', value: 'General' },
    { label: 'Morning', value: 'Morning' },
    { label: 'Afternoon', value: 'Afternoon' },
    { label: 'Night', value: 'Night' },
    { label: 'Day', value: 'Day' },
  ];
  const holidayTypeOption = [
    { label: 'Standard Holiday List', value: 'StandardHolidayList' },
    { label: '2022 Holiday', value: '2022Holiday' },
  ];

  const status = [
    { label: 'Confirmed', value: 'Confirmed' },
    { label: 'Probation', value: 'Probation' },
    { label: 'Trainee', value: 'Trainee' },
  ];

  const legalEntityHandleChange = e => {
    setlegalEntity(e.value);
  };
  const businessUnitHandleChange = e => {
    setbusinessUnit(e.value);
  };
  const locationHandleChange = e => {
    setlocation(e.value);
  };
  const departmentHandleChange = e => {
    setDepartment(e.value);
  };
  const subDepartmentHandleChange = e => {
    setSubDepartment(e.value);
  };
  const designationHandleChange = e => {
    setDesignation(e.value);
  };
  const gradeHandleChange = e => {
    setgrade(e.value);
  };
  const employeeTypeHandleChange = e => {
    setemployeeType(e.value);
  };
  const attendanceTrackingSchemeHandleChange = e => {
    setattendanceTrackingScheme(e.value);
  };
  const leaveTrackingSchemeHandleChange = e => {
    setleaveTrackingScheme(e.value);
  };
  const weeklyOffTypeHandleChange = e => {
    setweeklyOffType(e.value);
  };
  const shiftTypeHandleChange = e => {
    setshiftType(e.value);
  };
  const holidayTypeHandleChange = e => {
    setholidayType(e.value);
  };

  const statusHandleChange = e => {
    setStatus(e.value);
  };
  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={userImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
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
            <b>{t('title.employees')}</b>
          </li>
          <li>
            <b>{t('title.masters')}</b>
          </li>
          <li>{t('title.addEmployee')}</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>{t('emp_step_form.basic_details')}</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>{t('emp_step_form.employee_work_post')}</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>{t('emp_step_form.statutory_details')}</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>{t('emp_step_form.payment_details')}</span>
          </li>
        </ul>
      </div>
      <div className="create_employee bg_white_box p-md-4 p-3">
        <form>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('title.legal_entity')}</label>
                  <ReactSelectSingle
                    value={legalEntity}
                    options={legalEntryoption}
                    filter
                    onChange={e => {
                      legalEntityHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.legal_entity_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('title.business_unit')}</label>
                  <ReactSelectSingle
                    value={businessUnit}
                    options={businessUnitoption}
                    filter
                    onChange={e => {
                      businessUnitHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.business_unit_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('title.location')}</label>
                  <ReactSelectSingle
                    filter
                    value={location}
                    options={locationoption}
                    onChange={e => {
                      locationHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.location_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('myProfile.departmentTitle')}*</label>
                  <ReactSelectSingle
                    value={department}
                    options={departmentoption}
                    filter
                    onChange={e => {
                      departmentHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.department_placeholder')}
                  />
                </div>
                <div className="edit_option">
                  <button
                    type="button"
                    className="edit_btn"
                    onClick={() => onClick('departmentPopup')}
                  >
                    <img src={EditIcon} alt="edit" />
                  </button>
                  <Dialog
                    header={t('myProfile.departmentTitle')}
                    visible={departmentPopup}
                    draggable={false}
                    resizable={false}
                    className="small_popup"
                    onHide={() => onHide('departmentPopup')}
                  >
                    <div className="department_wrapper">
                      <h4>{t('employee_document.description_label')}</h4>
                      <ul>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Desktop"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Desktop"
                                className="p-checkbox-label"
                              >
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Management"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Management"
                                className="p-checkbox-label"
                              >
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="WebDevlopment"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="WebDevlopment"
                                className="p-checkbox-label"
                              >
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="HR"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="HR" className="p-checkbox-label">
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Sales"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Sales"
                                className="p-checkbox-label"
                              >
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Marketing"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Marketing"
                                className="p-checkbox-label"
                              >
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Design"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Design"
                                className="p-checkbox-label"
                              >
                                {t('myProfile.department')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div className="modal-footer">
                        <Input
                          type="text"
                          placeholder={t(
                            'emp_step_form.enter_department_placeholder',
                          )}
                        />
                        <div className="modal_btn_group mt-4">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            {t('buttonTitle.cancel')}
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary ms-4"
                          >
                            {t('buttonTitle.save')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.sub_department')}*</label>
                  <ReactSelectSingle
                    value={subDepartment}
                    options={subDepartmentoption}
                    filter
                    onChange={e => {
                      subDepartmentHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.sub_department_placeholder')}
                  />
                </div>
                <div className="edit_option">
                  <button
                    type="button"
                    className="edit_btn"
                    onClick={() => onClick('subDepartmentPopup')}
                  >
                    <img src={EditIcon} alt="edit" />
                  </button>
                  <Dialog
                    header={t('workposttype.sub_department')}
                    visible={subDepartmentPopup}
                    draggable={false}
                    resizable={false}
                    className="small_popup"
                    onHide={() => onHide('subDepartmentPopup')}
                  >
                    <div className="department_wrapper">
                      <h4>{t('employee_document.description_label')}</h4>
                      <ul>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId=".Net"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor=".Net"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="MarketReserch"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="MarketReserch"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Advertizing"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Advertizing"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="Promotion"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="Promotion"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="ProductPlanning"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="ProductPlanning"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="UIUXDesigner"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="UIUXDesigner"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="WebDesign"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="WebDesign"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="GraphicsDesigner"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="GraphicsDesigner"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="UIUXDesigner1"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="UIUXDesigner1"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="WebDesign1"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="WebDesign1"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="GraphicsDesigner1"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="GraphicsDesigner1"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div className="modal-footer">
                        <Input
                          type="text"
                          placeholder={t(
                            'emp_step_form.enter_department_placeholder',
                          )}
                        />
                        <div className="modal_btn_group mt-4">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            {t('buttonTitle.cancel')}
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary ms-4"
                          >
                            {t('buttonTitle.save')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('pastwork_employment.designation')}*</label>
                  <ReactSelectSingle
                    value={designation}
                    options={designationoption}
                    filter
                    onChange={e => {
                      designationHandleChange(e);
                    }}
                    placeholder={t(
                      'pastwork_employment.designation_placeholder',
                    )}
                  />
                </div>
                <div className="edit_option">
                  <button
                    type="button"
                    className="edit_btn"
                    onClick={() => onClick('designationPopup')}
                  >
                    <img src={EditIcon} alt="edit" />
                  </button>
                  <Dialog
                    header={t('pastwork_employment.designation')}
                    visible={designationPopup}
                    draggable={false}
                    resizable={false}
                    className="small_popup"
                    onHide={() => onHide('designationPopup')}
                  >
                    <div className="department_wrapper">
                      <h4>{t('employee_document.description_label')}</h4>
                      <ul>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="GeneralManger"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="GeneralManger"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="WordpressDeveloper"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="WordpressDeveloper"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="DesktopDeveloper"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="DesktopDeveloper"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="UIUxDesigner"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="UIUxDesigner"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="AndroidDeveloper"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="AndroidDeveloper"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="IOSDeveloper"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="IOSDeveloper"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="GraphicsDesigner"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label
                                htmlFor="GraphicsDesigner"
                                className="p-checkbox-label"
                              >
                                {t('userDetail.designation')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div className="modal-footer">
                        <Input
                          type="text"
                          placeholder={t(
                            'emp_step_form.enter_department_placeholder',
                          )}
                        />
                        <div className="modal_btn_group mt-4">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            {t('buttonTitle.cancel')}
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary ms-4"
                          >
                            {t('buttonTitle.save')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.grade')}*</label>
                  <ReactSelectSingle
                    value={grade}
                    options={gradeoption}
                    filter
                    onChange={e => {
                      gradeHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.grade_placeholder')}
                  />
                </div>
                <div className="edit_option">
                  <button
                    type="button"
                    className="edit_btn"
                    onClick={() => onClick('gradePopup')}
                  >
                    <img src={EditIcon} alt="edit" />
                  </button>
                  <Dialog
                    header={t('workposttype.grade')}
                    visible={gradePopup}
                    draggable={false}
                    resizable={false}
                    className="small_popup"
                    onHide={() => onHide('gradePopup')}
                  >
                    <div className="department_wrapper">
                      <h4>{t('employee_document.description_label')}</h4>
                      <ul>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="M"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="M" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="M1"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="M1" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="M2"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="M2" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="S1"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="S1" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="S2"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="S2" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="O1"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="O1" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div className="add_checkbox">
                            <div className="checkbox_wrapper">
                              <Checkbox
                                inputId="O2"
                                onChange={e => setChecked(e.checked)}
                                checked={checked}
                              ></Checkbox>
                              <label htmlFor="O2" className="p-checkbox-label">
                                {t('workposttype.grade_value')}
                              </label>
                            </div>
                          </div>
                          <div className="remove_icon">
                            <button type="button" className="trash_btn">
                              <img src={TrashIcon} alt="Delate Icon" />
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div className="modal-footer">
                        <Input
                          type="text"
                          placeholder={t(
                            'emp_step_form.enter_department_placeholder',
                          )}
                        />
                        <div className="modal_btn_group mt-4">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            {t('buttonTitle.cancel')}
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary ms-4"
                          >
                            {t('buttonTitle.save')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.employee_status')}*</label>
                  <ReactSelectSingle
                    value={statusSelct}
                    options={status}
                    filter
                    onChange={e => {
                      statusHandleChange(e);
                    }}
                    placeholder={t(
                      'employee_profile_detail.blood_group_placeholder',
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.employee_type')}</label>
                  <ReactSelectSingle
                    value={employeeType}
                    options={employeeTypeOption}
                    filter
                    onChange={e => {
                      employeeTypeHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.employee_type_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('title.ReportingAuthority')}</label>
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setreportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder={t('title.selectReportingAuthority')}
                    filter
                    className="multiselect-custom"
                    itemTemplate={reportingAuthorityHandleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.attendance_tracking_scheme')}*</label>
                  <ReactSelectSingle
                    value={attendanceTrackingScheme}
                    options={attendanceTrackingSchemeOption}
                    filter
                    onChange={e => {
                      attendanceTrackingSchemeHandleChange(e);
                    }}
                    placeholder={t(
                      'emp_step_form.attendance_tracking_placeholder',
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.leave_tracking_scheme')}</label>
                  <ReactSelectSingle
                    value={leaveTrackingScheme}
                    options={leaveTrackingSchemeOption}
                    filter
                    onChange={e => {
                      leaveTrackingSchemeHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.leave_tracking_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('emp_step_form.weekly_off_type')}</label>
                  <ReactSelectSingle
                    value={weeklyOffType}
                    options={weeklyOffTypeOption}
                    filter
                    onChange={e => {
                      weeklyOffTypeHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.weekly_off_type_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.shift_type')}</label>
                  <ReactSelectSingle
                    value={shiftType}
                    options={shiftTypeOption}
                    filter
                    onChange={e => {
                      shiftTypeHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.shift_type_placeholder')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>{t('workposttype.holiday_type')}*</label>
                  <ReactSelectSingle
                    value={holidayType}
                    options={holidayTypeOption}
                    filter
                    onChange={e => {
                      holidayTypeHandleChange(e);
                    }}
                    placeholder={t('emp_step_form.holiday_type_placeholder')}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="d-flex align-items-end right_padding">
                <div className="form_group">
                  <label>Salary Type*</label>
                  <ReactSelectSingle
                    value={salaryType}
                    options={salaryTypeOption}
                    onChange={(e) => {
                      salaryTypeHandleChange(e);
                    }}
                    placeholder="Select Salary Type"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </form>
        <div className="btn_group d-flex justify-content-end">
          <Link className="btn-secondary" to="/employees/masters/dashboard">
            {t('buttonTitle.cancel')}
          </Link>
          <Link
            className="btn-secondary mx-3"
            to="/employees/masters/create-employee-step-one"
          >
            {t('title.previous')}
          </Link>
          <Link
            className="btn-primary"
            to="/employees/masters/create-employee-step-three"
          >
            {t('title.next')}
          </Link>
        </div>
      </div>
    </div>
  );
}
