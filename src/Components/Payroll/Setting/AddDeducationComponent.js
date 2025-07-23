import React, { useState } from 'react';
import Input from 'Components/Common/Input';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

export default function AddDeducationComponent() {
  const [calculat, setCalculat] = useState([]);
  const calculatOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Approved', value: 'Approved' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'Rejected', value: 'Rejected' },
  ];
  const [notifyCheck, setNotifyCheck] = useState(false);
  const [ingredient, setIngredient] = useState('');

  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Payroll</b>
          </li>
          <li>
            <b>Payroll Setup</b>
          </li>
          <li>
            <b>Salary Components</b>
          </li>
          <li>Add Earning</li>
        </ul>
      </div>
      <div className="add_earning_deducation_form">
        <div className="row">
          <div className="col-md-4">
            <div className="form_group">
              <label>Component Name</label>
              <Input placeholder="Component Name" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Payslip Name</label>
              <Input placeholder="Payslip Name" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Component Calculation Type</label>
              <ReactSelectSingle
                value={calculat}
                options={calculatOptions}
                filter
                onChange={e => {
                  setCalculat(e.value);
                }}
                placeholder="Component Calculation Type"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <Checkbox
            inputId="WebDevlopment"
            onChange={e => setNotifyCheck(e.checked)}
            checked={notifyCheck}
          ></Checkbox>
          <label htmlFor="WebDevlopment" className="p-checkbox-label ms-2">
            Show this component in salary slip
          </label>
        </div>
        <div className="col-12">
          <h6 className="mb-3">Component Status</h6>
          <div className="d-flex flex-wrap gap-3">
            <div className="d-flex align-items-center">
              <RadioButton
                inputId="ingredient1"
                name="edittype"
                value="Active"
                onChange={e => setIngredient(e.value)}
                checked={ingredient === 'Active'}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Active
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="ingredient2"
                name="edittype"
                value="Inactive"
                onChange={e => setIngredient(e.value)}
                checked={ingredient === 'Inactive'}
              />
              <label htmlFor="ingredient2" className="ml-2">
                Inactive
              </label>
            </div>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end pt-3">
          <Link
            to="/payroll/setting/salary-components"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link to="/payroll/setting/salary-components" className="btn-primary">
            Save
          </Link>
        </div>
      </div>
    </>
  );
}
