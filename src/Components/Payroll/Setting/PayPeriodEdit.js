import React, { useState } from 'react';
import Input from 'Components/Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
export default function PayPeriodEdit() {
  const [payCycleMonth, setPayCycleMonth] = useState();
  const payCycleMonthOpction = [
    { label: 'Jan', value: 'Jan' },
    { label: 'Feb', value: 'Feb' },
    { label: 'Mar', value: 'Mar' },
    { label: 'Apr', value: 'Apr' },
    { label: 'May', value: 'May' },
  ];
  const [payCycleSelection, setPayCycleSelection] = useState();
  const payCycleSelectionOpction = [
    { label: '1st', value: '1st' },
    { label: '2nd', value: '2nd' },
    { label: '3rd', value: '3rd' },
    { label: '4th', value: '4th' },
    { label: '5th', value: '5th' },
  ];
  const [ingredient, setIngredient] = useState('');
  return (
    <>
      <div className="pay_period_edit bg_white_box p-3">
        <div className="form_group">
          <label>Pay Frequency</label>
          <Input placeholder="Monthly" />
        </div>
        <div className="form_group">
          <label>Pay Cycle Start Month</label>
          <ReactSelectSingle
            value={payCycleMonth}
            onChange={e => {
              setPayCycleMonth(e.value);
            }}
            options={payCycleMonthOpction}
            placeholder="Select Here"
          />
        </div>
        <div className="pay_period_row">
          <div className="form_group">
            <label>Pay Cycle Selection</label>
            <div>
              <ReactSelectSingle
                value={payCycleSelection}
                onChange={e => {
                  setPayCycleSelection(e.value);
                }}
                options={payCycleSelectionOpction}
                placeholder="Select Here"
              />
              <span className="px-md-3 my-md-0 my-1 d-md-inline d-block">
                To
              </span>
              <Input placeholder="Last Day" />
            </div>
          </div>
        </div>
        <h6>Pay Day For Employees</h6>
        <div className="radio_button_wrapper">
          <div className="radio_button pf_radio_wrap form_group">
            <RadioButton
              inputId="ingredient1"
              name="pizza"
              value="Cheese"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Cheese'}
            />
            <label htmlFor="ingredient1" className="ml-2 mb-0">
              The last working day of every Month
            </label>
          </div>
          <div className="radio_button pf_radio_wrap form_group">
            <RadioButton
              inputId="ingredient2"
              name="pizza"
              value="Mushroom"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Mushroom'}
            />
            <label className="m-0">
              <span className="input_after_text d-inline-block mb-md-0 mb-1">
                Day
              </span>
              <ReactSelectSingle
                value={payCycleSelection}
                onChange={e => {
                  setPayCycleSelection(e.value);
                }}
                options={payCycleSelectionOpction}
                placeholder="Select Here"
                className="mx-md-2"
              />
              of every month
            </label>
          </div>
        </div>
        <h6>Payroll Period Calculation</h6>
        <div className="radio_button_wrapper">
          <div className="radio_button pf_radio_wrap form_group">
            <RadioButton
              inputId="ingredient1"
              name="pizza"
              value="Cheese"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Cheese'}
            />
            <label htmlFor="ingredient1" className="ml-2 mb-0">
              Actual days In Month
            </label>
          </div>
          <div className="radio_button pf_radio_wrap form_group">
            <RadioButton
              inputId="ingredient2"
              name="pizza"
              value="Mushroom"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Mushroom'}
            />
            <label className="m-0">
              <span className="input_after_text imgUploadDetail d-inline-block mb-md-0 mb-1">
                {' '}
                Organisation Working Days
              </span>
              <Input className="mx-md-2" placeholder="00" />
              of every month
            </label>
          </div>
        </div>
        <div className="d-inline-block mb-sm-0 mb-3 me-4">
          <h6>Exclude Weekly Offs</h6>
          <div className="d-flex align-items-center Exclude Holidays">
            <RadioButton
              inputId="ingredient1"
              name="Weekly"
              value="Yes"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Yes'}
            />
            <label htmlFor="ingredient1" className="me-3 mb-0">
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
        <div className="d-inline-block">
          <h6>Exclude Holidays</h6>
          <div className="d-flex align-items-center Exclude Holidays">
            <RadioButton
              inputId="ingredient1"
              name="Holiday"
              value="Yes"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'Yes'}
            />
            <label htmlFor="ingredient1" className="me-3 mb-0">
              Yes
            </label>
            <RadioButton
              inputId="ingredient2"
              name="Holiday"
              value="No"
              onChange={e => setIngredient(e.value)}
              checked={ingredient === 'No'}
            />
            <label htmlFor="ingredient2" className="me-2 mb-0">
              + No
            </label>
          </div>
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
