import ReactCheckbox from 'Components/Common/ReactCheckbox';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import userImage from '../../../../Assets/images/user8.png';
import PlusIcon from '../../../../Assets/images/plus.svg';

export default function FullAndFinalStepThree() {
  const [gratuity, setGratuity] = useState([]);
  const gratuityChange = e => {
    let selectedGratuity = [...gratuity];

    if (selectedGratuity.length <= 0 && e.checked) {
      selectedGratuity.push(e.value);
    } else {
      if (!gratuity.includes(e.value)) {
        selectedGratuity.push(e.value);
      } else {
        selectedGratuity.splice(selectedGratuity.indexOf(e.value), 1);
      }
    }
    setGratuity(selectedGratuity);
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
            <b>Masters</b>
          </li>
          <li>
            <b>
              <Link to="/employees/master/full-and-final">Full & Final</Link>
            </b>
          </li>
          <li>Full & Final Settlement</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>Pending Activities</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Attendance & Leave</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Payable Settlement</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Finalize</span>
          </li>
        </ul>
      </div>
      <div className="employee_exit_wrap">
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="employee_exit_left bg_white_box p-3 h-100">
              <div className="row">
                <div className="col-sm-5">
                  <div className="profile_img_name d-flex ">
                    <div className="profile_img">
                      <img src={userImage} alt="employee img" />
                    </div>
                    <div className="profile-name">
                      <h6>Chintan Raval</h6>
                      <span className="bedge bedge_primary mb-2">
                        EMP. CODE: 1002
                      </span>
                      <p className="m-0">UI/UX Designer</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <ul>
                    <li>
                      Department<span>Web Designer</span>
                    </li>
                    <li>
                      Location<span>Station</span>
                    </li>
                  </ul>
                  <ul className="mb-0">
                    <li>
                      Date Of Joining<span>04 Jul 2022</span>
                    </li>
                    <li>
                      Probation End Date<span>04 Oct 2022</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="employee_exit_detail bg_white_box p-3 h-100">
              <h6 className="mb-4">Employee Exit Details</h6>
              <ul>
                <li>
                  Notice Given Date<span>05 Oct 2022</span>
                </li>
                <li>
                  Notice Period<span>30 Days</span>
                </li>
                <li>
                  Exit Type<span>Resigned</span>
                </li>
              </ul>
              <ul className="m-0">
                <li>
                  Last Working Date<span>05 Nov 2022</span>
                </li>
                <li>
                  Allowed To Rehire?<span>Yes</span>
                </li>
                <li>
                  Exit Reason<span>Better Job Opportunity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="employee_earning_wrap">
          <h6>Earnings</h6>
          <p>
            Add any additional amount to pay your employee other than the
            regular salary.
          </p>
          <div className="employee_earning_inner bg_white_box p-3 mb-4">
            <h6 className="mb-2">Gratuity</h6>
            <div className="form_group checkbox_wrap mb-0">
              <ReactCheckbox
                inputId="Gratuity"
                name="Gratuity"
                value="Gratuity"
                onChange={gratuityChange}
                checked={gratuity.indexOf('Gratuity') !== -1}
              />

              <label htmlFor="Gratuity">
                Employee Is eligible for gratuity payment
              </label>
            </div>
            {gratuity.includes('Gratuity') && (
              <div className="process_div d-flex align-items-center mt-3">
                <button className="btn-primary">Process</button>
                <div className="amount_wrap  d-flex align-items-center ms-5">
                  <label for="Amount" className="me-3">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="00"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="employee_earning_inner bg_white_box p-3 mb-4">
            <h6 className="mb-2">Bonus</h6>
            <div className="form_group checkbox_wrap mb-0">
              <ReactCheckbox
                inputId="Bonus"
                name="Bonus"
                value="Bonus"
                onChange={gratuityChange}
                checked={gratuity.indexOf('Bonus') !== -1}
              />

              <label htmlFor="Bonus">
                Employee Is eligible for bonus payment
              </label>
            </div>
            {gratuity.includes('Bonus') && (
              <div className="process_div d-flex align-items-center mt-3">
                <button className="btn-primary">Process</button>
                <div className="amount_wrap  d-flex align-items-center ms-5">
                  <label for="Amount" className="me-3">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="00"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="employee_earning_inner bg_white_box p-3 mb-4">
            <h6 className="mb-2">Leave Encashment</h6>
            <div className="form_group checkbox_wrap mb-0">
              <ReactCheckbox
                inputId="leaveEncashment"
                name="leaveEncashment"
                value="leaveEncashment"
                onChange={gratuityChange}
                checked={gratuity.indexOf('leaveEncashment') !== -1}
              />

              <label htmlFor="leaveEncashment">
                Employee has no leave balances for leave encashment.
              </label>
            </div>
            {gratuity.includes('leaveEncashment') && (
              <div className="process_div d-flex align-items-center mt-3">
                <button className="btn-primary">Process</button>
                <div className="amount_wrap  d-flex align-items-center ms-5">
                  <label for="Amount" className="me-3">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="00"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="employee_earning_inner bg_white_box p-3 mb-4">
            <h6 className="mb-2">One Time Earning</h6>
            <p className="m-0">
              There is no One time earning for this employee. Click on add to
              add One time earning if Any
            </p>
            <button className="btn-primary mt-3">
              <img src={PlusIcon} className="me-2" alt="plus icon" /> Add
            </button>
          </div>
        </div>
        <div className="employee_deduction_wrap">
          <h6>Deducation</h6>
          <p>
            Add any additional amount to pay your employee other than the
            regular salary.
          </p>
          <div className="employee_earning_inner bg_white_box p-3 mb-4">
            <h6 className="mb-2">Loans</h6>
            <p className="m-0">
              There is no Outstanding loan balance for this employee.
            </p>
          </div>
          <div className="employee_earning_inner bg_white_box p-3 mb-4">
            <h6 className="mb-2">One Time Deducation</h6>
            <p className="m-0">
              Employee has no leave balances for leave encashment.
            </p>
            <button className="btn-primary mt-3">
              <img src={PlusIcon} className="me-2" alt="plus icon" /> Add
            </button>
          </div>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end mt-4">
        <Link className="btn-secondary" to="/employees/master/full-and-final">
          Cancel
        </Link>
        <Link
          className="btn-secondary ms-3"
          to="/employees/master/full-and-final-step-two"
        >
          Previous
        </Link>
        <Link
          className="btn-primary mx-3"
          to="/employees/master/full-and-final-step-four"
        >
          Next
        </Link>
        <Link className="btn-primary" to="">
          Save
        </Link>
      </div>
    </div>
  );
}
