import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Import from '../../../Assets/images/import_img.svg';
import Rocket from '../../../Assets/images/rocket.svg';
import { TreeSelect } from 'primereact/treeselect';
import ReactSelectSingleWithoutFilter from '../../Common/ReactSelectSingleWithoutFilter';
import ReactTreeSelect from '../../Common/ReactTreeSelect';

export default function DataRequest() {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const countries = [
    {
      name: 'Identity Docs',
      code: 'AU',
      states: [
        {
          cname: 'Driving License',
          code: 'NSW',
        },
        {
          cname: 'Aadhar Card',
          code: 'QS',
        },
        {
          cname: 'Pan Card',
          code: 'QS',
        },
        {
          cname: 'Voter Id',
          code: 'QS',
        },
        {
          cname: 'Passport',
          code: 'QS',
        },
      ],
    },
    {
      cname: 'Bank Docs',
      code: 'CA',
    },
    {
      cname: 'Previous Experience',
      code: 'US',
    },
    {
      cname: 'Address',
      code: 'US',
    },
    {
      cname: 'Degree & Certificate',
      code: 'US',
    },
  ];
  const countryOptionTemplate = option => {
    return (
      <div className="country-item">
        {/* {option.states && <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                   className={`flag flag-${option.code.toLowerCase()}`} />} */}
        {/* {option.cities && <i className="pi pi-compass mr-2"/>} */}
        {/* {option.cname && <i className="pi pi-map-marker mr-2"/>} */}
        <span>{option.cname || option.name}</span>
      </div>
    );
  };
  const [code, setCode] = useState([]);
  const employeeCode = [
    { label: 'Work From Home', value: 'NY' },
    { label: 'Work From Office', value: 'RM' },
  ];
  const codeHandleChange = e => {
    setCode(e.value);
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
            <b>Employees</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Document Data Request</li>
        </ul>
      </div>
      <div className="data_request_wrap">
        <div className="aadhar_detail_wrap">
          <div className="row">
            <div className="col-5">
              <div className="aadhar_select d-flex align-items-center mb-4">
                <label>Select Document :</label>
                <ReactTreeSelect
                  value={selectedCity1}
                  options={countries}
                  optionLabel={'cname'}
                  optionGroupLabel={'name'}
                  optionGroupChildren={['states', 'cities']}
                  placeholder={'Aadhar Card'}
                  onChange={event => setSelectedCity1(event.value)}
                  itemTemplate={countryOptionTemplate}
                />
              </div>
            </div>
          </div>
          <div className="aadhar_detail">
            <h6>Aadhar Detail</h6>
            <div className="row align-items-center">
              <div className="col-3">
                <div className="aadhar_detail_left">
                  <div className="form_group m-0">
                    <ReactSelectSingleWithoutFilter
                      value={code}
                      options={employeeCode}
                      onChange={e => {
                        codeHandleChange(e);
                      }}
                      placeholder="Status: Pending Data Request"
                    />
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="btn_group d-flex justify-content-end aadhar_detail_right">
                  <Link className="btn-primary">Send Data Request</Link>
                  <Link className="btn-border ms-4">
                    <img
                      src={Import}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    Export
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="aadhar_table_wrap">
            <div className="aadhar_table_left">
              <ul>
                <li>
                  <div className="data_box">
                    <img
                      src={Rocket}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    <h5>60</h5>
                    <p className="m-0">Pending Data Request</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="aadhar_table_right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
