import React, { useState } from 'react';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { Link } from 'react-router-dom';
import Input from '../Common/Input';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import { Checkbox } from 'primereact/checkbox';

export default function CreateEsicConfiguration() {
  const [DeductionSelect, setDeductionSelect] = useState([]);
  const [checked, setChecked] = useState(false);
  const DeductionSelectOption = [
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Half Yearly', value: 'Half Yearly' },
    { label: 'Monthly', value: 'Monthly' },
  ];
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
            <b>Statutory</b>
          </li>
          <li>
            <Link to="/statutory/esicconfiguration">
              <b>ESIC Configuration</b>
            </Link>
          </li>
          <li>Add ESIC Group</li>
        </ul>
      </div>
      <div className="bg_white_box p-3">
        <h6 className="mb-sm-3 mb-2">ESIC Configuration</h6>
        <div className="create_esicconfig_wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="form_group">
                <label>ESIC Group Name</label>
                <Input type="text" placeholder="Enter ESIC Group Name" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Effective Month</label>
                <ReactCelender placeholder="DD/MM/YYYY" value="date" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Deduction Type</label>
                <ReactSelectSingle
                  value={DeductionSelect}
                  options={DeductionSelectOption}
                  onChange={e => {
                    setDeductionSelect(e.value);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <h6 className="mb-sm-3 mb-2">Employer Contribution Rate</h6>
              <div className="pf_radio_wrap">
                <label className="m-0" htmlFor="actualPf">
                  Employer Contribution
                  <Input type="number" placeholder="00" className="mx-sm-2" />%
                  of Gross salary
                </label>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <h6 className="mb-sm-3 mb-2">Employee Contribution Rate</h6>
              <div className="pf_radio_wrap">
                <label className="m-0" htmlFor="actualPf">
                  Employee Contribution
                  <Input type="number" placeholder="00" className="mx-sm-2" />%
                  of Gross salary
                </label>
              </div>
            </div>
          </div>
          <div className="pf_radio_wrap">
            <label className="m-0" htmlFor="actualPf">
              Maximum monthly gross salary eligible for ESIC
              <Input type="number" placeholder="00" className="mx-sm-2" />
            </label>
          </div>
          <div className="epics_checkbox d-flex">
            <Checkbox
              inputId="ctc"
              className="me-2"
              onChange={e => setChecked(e.checked)}
              checked={checked}
            />
            <label>Include Employer Contribution in the CTC.</label>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end mt-3">
          <Link
            to="/statutory/esicconfiguration"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link to="/statutory/esicconfiguration" className="btn-primary">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
