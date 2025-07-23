import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import Input from '../../Common/Input';

export default function CreateBiometricDevices() {
  const [locationSelect, setLocationSelect] = useState([]);
  const [companyName, setCompanyName] = useState([]);

  const locationSelectOption = [
    { label: 'Adajan Branch', value: 'Adajan' },
    { label: 'Varachha Branch', value: 'Varachha' },
    { label: 'Station Branch', value: 'Station' },
    { label: 'Navsari Branch', value: 'Navsari' },
  ];
  const companyNameOption = [
    { label: 'ESSL', value: 'ESSL' },
    { label: 'BIOMAX', value: 'BIOMAX' },
    { label: 'MANTRA', value: 'MANTRA' },
    { label: 'MATRIX', value: 'MATRIX' },
    { label: 'SPECTRA', value: 'SPECTRA' },
  ];

  return (
    <div className="inner_wrapper">
      <div className="create_biometric_wrap">
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
            <li>Add Biometric Device</li>
          </ul>
        </div>
        <div className="bg_white_box p-3">
          <div className="create_biometric_inner">
            <div className="row">
              <div className="col-md-4">
                <div className="form_group">
                  <label>Location</label>
                  <ReactSelectSingle
                    value={locationSelect}
                    options={locationSelectOption}
                    onChange={e => {
                      setLocationSelect(e.value);
                    }}
                    filter={true}
                    placeholder="Select Location"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Name</label>
                  <Input type="text" placeholder="Enter Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Device Company Name</label>
                  <ReactSelectSingle
                    value={companyName}
                    options={companyNameOption}
                    onChange={e => {
                      setCompanyName(e.value);
                    }}
                    filter={true}
                    placeholder="Select Device Company"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Device IP</label>
                  <Input type="number" placeholder="Enter Device IP" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Device ID</label>
                  <Input type="number" placeholder="Enter Device ID" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Serial Number</label>
                  <Input type="number" placeholder="Enter Serial Number" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Port Number</label>
                  <Input type="number" placeholder="Enter Port Number" />
                </div>
              </div>
            </div>
          </div>
          <div className="btn_group d-flex justify-content-end mt-4">
            <Link
              to="/scheme/attendance/biometric-device"
              className="btn-secondary mx-3"
            >
              Cancel
            </Link>
            <Link
              className="btn-primary"
              to="/scheme/attendance/biometric-device"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
