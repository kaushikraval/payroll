import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import Input from '../Common/Input';
import EarningIcon from '../../Assets/images/earning-icon.svg';
import DeductionIcon from '../../Assets/images/deduction-icon.svg';
import { RadioButton } from 'primereact/radiobutton';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import { Checkbox } from 'primereact/checkbox';
export default function CompensationEdit() {
  const [ingredient, setIngredient] = useState('');
  const [applicablestatus, setapplicablestatus] = useState([]);
  const applicablestatusoption = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
    { label: 'Jul - 2022', value: 'Jul - 2022' },
  ];
  const applicablestatusoptionTwo = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
    { label: 'Jul - 2022', value: 'Jul - 2022' },
  ];
  const applicablestatusHandleChange = e => {
    setapplicablestatus(e.value);
  };
  const [ingredients, setIngredients] = useState([]);
  const onIngredientsChange = e => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };
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
            <b>Compensation</b>
          </li>
          <li>
            <b>View Compensation Details</b>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="salary_user d-flex flex-wrap justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div className="employee_img">
            <img src={EmployeeImg} width={38} alt="user" />
          </div>
          <div className="employee_text ms-2 d-sm-flex align-items-start">
            <p className="m-0">
              Dhaval Patel <br /> <span>UX/UI Designer</span>
            </p>
            <span className="emp_code d-block ms-sm-2 mt-1 mt-sm-0 ms-0">
              EMP. CODE: 1002
            </span>
          </div>
        </div>
        <h6 className="mt-2 mb-0">Salary Revision</h6>
      </div>
      <div className="compansation_detail_wrap">
        <div className="salary_component_wrap mb-3">
          <div className="bg_white_box p-3">
            <div className="salary_template_wrap mb-3">
              <div className="row">
                <div className="col-xxl-3 col-lg-4">
                  <div className="form_group">
                    <label>Salary Template</label>
                    <Input
                      type="text"
                      className="p-inputtext p-component p-filled"
                      value="Surat"
                    />
                  </div>
                </div>
                <div className="col-xxl-3 col-lg-4">
                  <div className="d-flex align-items-center right_padding">
                    <div className="form_group">
                      <label>Annual CTC Amount</label>
                      <Input
                        type="text"
                        className="p-inputtext p-component p-filled"
                        value="5,00,000"
                      />
                    </div>
                    <div className="right_label">
                      <p className="m-0">Per Year</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-lg-4">
                  <div className="d-flex align-items-center right_padding">
                    <div className="form_group">
                      <label>Monthly Salary</label>
                      <Input
                        type="text"
                        className="p-inputtext p-component p-filled"
                        value="41,000.00"
                      />
                    </div>
                    <div className="right_label">
                      <p className="m-0">Per Month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="revise_type">
              <h6>Revise Type</h6>
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-sm-6 mb-3 mb-sm-0">
                  <div className="type_box d-flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="revisetype"
                      value="Percentage"
                      onChange={e => setIngredient(e.value)}
                      checked={ingredient === 'Percentage'}
                    />
                    <div className="form_group flex-grow-1 ms-3 mb-0">
                      <label>Revise CTC Based on Percentage</label>
                      <div className="d-flex align-items-center">
                        <Input className="me-2" placeholder="0.00" />{' '}
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-sm-6 mb-3 mb-sm-0">
                  <div className="type_box d-flex align-items-center">
                    <RadioButton
                      inputId="ingredient2"
                      name="revisetype"
                      value="Amount"
                      onChange={e => setIngredient(e.value)}
                      checked={ingredient === 'Amount'}
                    />
                    <div className="form_group flex-grow-1 ms-3 mb-0">
                      <label>Revise CTC Based on Amount</label>
                      <div className="d-flex align-items-center">
                        <Input placeholder="0.00" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-3">
                <li className="mb-3 d-flex flex-wrap align-items-center">
                  <div className="slary_text">
                    <p className="m-0">Revised Annual CTC</p>
                  </div>
                  <div className="slary_input_box">
                    <Input className="mx-2" placeholder="00" />
                    <span>Per Year</span>
                  </div>
                </li>
                <li className="mb-3 d-flex flex-wrap align-items-center">
                  <div className="slary_text">
                    <p className="m-0">Revised Monthly Salary</p>
                  </div>
                  <div className="slary_input_box">
                    <Input className="mx-2" placeholder="00" />
                    <span>Per Month</span>
                  </div>
                  <button type="button" className="btn-border ms-3">
                    Update
                  </button>
                </li>
              </ul>
            </div>
            <div className="salary_component_table">
              <div className="table-responsive">
                <table className="text-nowrap">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Salary Component</th>
                      <th style={{ width: '20%' }}>Monthly</th>
                      <th style={{ width: '50%' }}>Annually</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="earning_first_Wrap">
                      <td colSpan="3">
                        <div className="earning_tag">
                          <h6>
                            <img src={EarningIcon} alt="EarningIcon" />
                            Earnings
                          </h6>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Basic</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="16,000.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="192,000.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>House Rent Allowance</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="5,500.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="66,000.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Conveyance Allowance</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="6,000.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="72,000.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Transport Allowance</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="2,655.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="31,860.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Special Allowance</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="1,845.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="22,140.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="salary_total_wrap">
                      <td>Gross Earning</td>
                      <td>41,000.00</td>
                      <td>5,00,000</td>
                    </tr>
                    <tr className="earning_first_Wrap">
                      <td colSpan="3">
                        <div className="earning_tag">
                          <h6>
                            <img src={DeductionIcon} alt="DeductionIcon" />
                            Deduction
                          </h6>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Employer PF</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Employer ESI</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Gratuity</td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form_group">
                          <Input
                            type="text"
                            className="p-inputtext p-component p-filled"
                            value="0.00"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="salary_total_wrap">
                      <td>Cost To Company</td>
                      <td>41,000.00</td>
                      <td>5,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3">
                <div className="form_group">
                  <label>Revise Salary Effective Month</label>
                  <ReactSelectSingle
                    value={applicablestatus}
                    options={applicablestatusoption}
                    onChange={e => {
                      applicablestatusHandleChange(e);
                    }}
                    placeholder="Confirmed"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form_group">
                  <label>Revise Salary Payout Month</label>
                  <ReactSelectSingle
                    value={applicablestatus}
                    options={applicablestatusoption}
                    onChange={e => {
                      applicablestatusHandleChange(e);
                    }}
                    placeholder="Confirmed"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <Checkbox
                    inputId="ingredient1"
                    name="pizza"
                    value="Cheese"
                    onChange={onIngredientsChange}
                    checked={ingredients.includes('Cheese')}
                  />
                  <label htmlFor="ingredient1" className="ms-2">
                    Want to Pay Arrear
                  </label>
                </div>
              </div>
            </div>
            <div className="btn_group d-flex justify-content-end pt-3">
              <Link to="/payroll/compensation" className="btn-secondary mx-2">
                Cancel
              </Link>
              <Link to="/payroll/compensation" className="btn-primary">
                Save
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
