import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { EmployeeData } from '../../Common/EmployeeData';
import AssignEmployeeDetail from '../../Common/AssignEmployeeDetail';

export default function BiometricDevicesAssignEmployee() {
  const [department, setdepartment] = useState([]);
  const [designation, setdesignation] = useState([]);
  const [location, setlocation] = useState([]);
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState([]);
  useEffect(() => {
    EmployeeData.getProductsSmall().then(data => setSource(data));
  }, []);

  const departmentOptions = [
    { label: 'Web Designing', value: 'WebDesigning' },
    { label: 'UI/UX Design', value: 'UIUXDesign' },
    { label: 'Web Development', value: 'WebDevelopment' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales Department', value: 'SalesDepartment' },
  ];
  const designationOptions = [
    { label: 'H.R Manager', value: 'HRManager' },
    { label: 'PHP Developer', value: 'PHPDeveloper' },
    { label: 'Android Developer', value: 'AndroidDeveloper' },
    { label: 'Project Manager', value: 'ProjectManager' },
    { label: 'General Manager', value: 'GeneralManager' },
    { label: 'Content Writter', value: 'ContentWritter' },
  ];
  const locationOptions = [
    { label: 'Cityplus, Surat', value: 'CityplusSurat' },
    { label: 'Varachha, Surat', value: 'VarachhaSurat' },
    { label: 'Station, Surat', value: 'StationSurat' },
    { label: 'Adajan, Surat', value: 'AdajanSurat' },
    { label: 'Vesu, Surat', value: 'VesuSurat' },
    { label: 'Navsari', value: 'Navsari' },
  ];
  const departmentHandleChange = e => {
    setdepartment(e.value);
  };
  const designationHandleChange = e => {
    setdesignation(e.value);
  };
  const locationHandleChange = e => {
    setlocation(e.value);
  };
  const onChange = event => {
    setSource(event.source);
    setTarget(event.target);
  };
  const itemTemplate = item => {
    return (
      <div className="assign_employee_box">
        <div className="assign_employee_img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="assign_employee_text">
          <h6>
            {item.name} <span>({item.id})</span>
          </h6>
          <p className="m-0">{item.designation}</p>
        </div>
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
              <Link to="/scheme/attendance/biometric-device">
                Biometric Device
              </Link>
            </b>
          </li>
          <li>Assign Employee</li>
        </ul>
      </div>
      <AssignEmployeeDetail
        department={department}
        departmentOptions={departmentOptions}
        departmentHandleChange={departmentHandleChange}
        designation={designation}
        designationOptions={designationOptions}
        designationHandleChange={designationHandleChange}
        location={location}
        locationOptions={locationOptions}
        locationHandleChange={locationHandleChange}
        source={source}
        target={target}
        itemTemplate={itemTemplate}
        onChange={onChange}
      />
      <div className="btn_group d-flex justify-content-end pt-3">
        <Link
          className="btn-secondary mx-3"
          to="/scheme/attendance/biometric-device"
        >
          Cancel
        </Link>
        <Link className="btn-primary" to="/scheme/attendance/biometric-device">
          Save
        </Link>
      </div>
    </div>
  );
}
