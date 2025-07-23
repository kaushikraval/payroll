import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import MalePtConfiguration from './MalePtConfiguration';
import FemalePtConfiguration from './FemalePtConfiguration';

export default function CreatePtConfiguration() {
  const [DeductionSelect, setDeductionSelect] = useState([]);
  const [stateSelect, setStateSelect] = useState([]);
  const DeductionSelectOption = [
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Half Yearly', value: 'Half Yearly' },
    { label: 'Monthly', value: 'Monthly' },
  ];
  const stateSelectOption = [
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Rajasthan', value: 'Rajasthan' },
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
            <Link to="/statutory/ptconfiguration">
              <b>PT Configuration</b>
            </Link>
          </li>
          <li>Add PT</li>
        </ul>
      </div>
      <div className="create_ptconfig_wrap bg_white_box p-3">
        <h6 className="mb-3">PT Configuration</h6>
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="form_group">
              <label>Select State</label>
              <ReactSelectSingle
                value={stateSelect}
                options={stateSelectOption}
                onChange={e => {
                  setStateSelect(e.value);
                }}
                filter={true}
                placeholder="Select State"
              />
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
        <div className="pt_config_table_wrap">
          <MalePtConfiguration />
          <FemalePtConfiguration />
        </div>
        <div className="btn_group d-flex justify-content-end mt-4">
          <Link to="/statutory/ptconfiguration" className="btn-secondary mx-3">
            Cancel
          </Link>
          <Link className="btn-primary" to="/statutory/ptconfiguration">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
