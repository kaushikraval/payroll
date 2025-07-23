import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import Input from '../Common/Input';
import EarningIcon from '../../Assets/images/earning-icon.svg';
import DeductionIcon from '../../Assets/images/deduction-icon.svg';

export default function SalarySetup() {
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
          <li>Salary Setup</li>
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
        <h6 className="mt-2 mb-0">Salary Setup</h6>
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
