import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { RadioButton } from 'primereact/radiobutton';
import Input from 'Components/Common/Input';

export default function Gratuity() {
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
            <b>Setting</b>
          </li>
          <li>Gratuity</li>
        </ul>
      </div>
      <div className="gratuity_form bg_white_box p-3">
        <div className="d-inline-block me-4">
          <h6>Is Gratutiy Applicable For Your Organization?</h6>
          <div className="d-flex mb-4">
            <RadioButton
              inputId="ingredient1"
              name="Weekly"
              value="Yes"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Yes'}
            />
            <label htmlFor="ingredient1" className="me-4 mb-0">
              Yes
            </label>
            <RadioButton
              inputId="ingredient2"
              name="Weekly"
              value="No"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'No'}
            />
            <label htmlFor="ingredient2" className="me-2 mb-0">
              No
            </label>
          </div>
        </div>
        <div className="form_group d-flex align-items-center gravity_row">
          <label className="mb-0 pe-2">Year</label>
          <Input placeholder="00" />
        </div>
        <div className="form_group d-flex align-items-center gravity_row">
          <label className="mb-0 pe-2">Pay Day</label>
          <Input placeholder="00" />
        </div>
        <div className="form_group d-flex align-items-center gravity_row">
          <label className="mb-0 pe-2">Working Day</label>
          <Input placeholder="00" />
        </div>
        <div className="form_group d-flex align-items-center gravity_row">
          <label className="mb-0 pe-2">Maximum Gratutiy Amount</label>
          <Input placeholder="00" />
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end pt-3">
        <Link to="/payroll/setting/pay-period" className="btn-secondary mx-3">
          Cancel
        </Link>
        <Link to="/payroll/setting/pay-period" className="btn-primary">
          Save
        </Link>
      </div>
    </>
  );
}
