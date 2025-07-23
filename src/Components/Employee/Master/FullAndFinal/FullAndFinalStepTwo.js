import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import userImage from '../../../../Assets/images/user8.png';

export default function FullAndFinalStepTwo() {
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
          <li className="current">
            <div className="icon"></div>
            <span>Attendance & Leave</span>
          </li>
          <li>
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
        <div className="row">
          <div className="col-md-8">
            <div className="employee_atendance_detail bg_white_box p-3 h-100">
              <div className="row">
                <div className="col-sm-5">
                  <div className="employee_atendance_inner">
                    <h6 className="mb-4">Attendance Details</h6>
                    <ul>
                      <li>
                        Month<span>Nov - 2022</span>
                      </li>
                      <li>
                        Month Days<span>30</span>
                      </li>
                      <li>
                        Worked Days<span>22</span>
                      </li>
                      <li>
                        Payable Days<span>22</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="employee_atendance_inner right">
                    <div className="row align-items-center mb-2">
                      <div className="col-sm-6">
                        <h6 className="mb-0">LOP Days</h6>
                      </div>
                      <div className="col-sm-6 text-end">
                        <button className="btn-primary">View Attendance</button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        Actual Lop<span>Nov - 2022</span>
                      </li>
                      <li>
                        Final Lop<span>30</span>
                      </li>
                      <li>
                        Lop Adjustment
                        <span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="00"
                          />
                        </span>
                      </li>
                      <li>
                        Remark
                        <span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Remark"
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="employee_leave_detail bg_white_box p-3 h-100">
              <div className="row align-items-center mb-3">
                <div className="col-sm-6">
                  <h6 className="mb-0">Leave Details</h6>
                </div>
                <div className="col-sm-6 text-end">
                  <button className="btn-primary">View Leave</button>
                </div>
              </div>
              <div className="leave_table_wrap data_table_one">
                <div className="table_responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <span>Leave Name</span>
                        </th>
                        <th>
                          <span>Leave Balance</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Previllage Leave</td>
                        <td>07</td>
                      </tr>
                      <tr>
                        <td>Sick Leave</td>
                        <td>04</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end mt-4">
        <Link className="btn-secondary" to="/employees/master/full-and-final">
          Cancel
        </Link>
        <Link
          className="btn-secondary ms-3"
          to="/employees/master/full-and-final-step-one"
        >
          Previous
        </Link>
        <Link
          className="btn-primary mx-3"
          to="/employees/master/full-and-final-step-three"
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
