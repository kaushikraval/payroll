import ReactSelectWithImage from 'Components/Common/ReactSelectWithImage';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import userImage from '../../../../Assets/images/user8.png';
import ReactSelectSingle from '../../../Common/ReactSelectSingle';

export default function FullAndFinalStepFour() {
  const [paySelect, setPaySelect] = useState([]);
  const [settlementPayDate, setSettlementPayDate] = useState([]);
  const paySelectOption = [
    { label: 'Void', value: 'Void' },
    { label: 'Pay', value: 'Pay' },
    { label: 'Already Pay', value: 'Already Pay' },
  ];
  const settlementPayDateOption = [
    { label: 'Nov-2022', value: 'Nov-2022' },
    { label: 'Dec-2022', value: 'Dec-2022' },
    { label: 'Jan-2023', value: 'Jan-2023' },
    { label: 'Fab-2023', value: 'Fab-2023' },
    { label: 'Mar-2023', value: 'Mar-2023' },
    { label: 'Apr-2023', value: 'Apr-2023' },
    { label: 'May-2023', value: 'May-2023' },
  ];
  const postOptions = [
    { name: 'Chintan Raval', code: 'post', src: userImage },
    {
      name: 'Chintan Raval',
      code: 'announcement',
      src: userImage,
    },
    { name: 'Chintan Raval', code: 'poll', src: userImage },
    { name: 'Chintan Raval', code: 'praise', src: userImage },
  ];
  const [postSelect, setPostSelect] = useState(postOptions[0]);
  const selectedPostWrap = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={option.src}
            onError={e =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
  const PostOptionsTemplate = option => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src={option.src}
          onError={e =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  const paySelectHandleChange = e => {
    setPaySelect(e.value);
  };
  const settlementPayDateHandleChange = e => {
    setSettlementPayDate(e.value);
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
          <li className="completed">
            <div className="icon"></div>
            <span>Payable Settlement</span>
          </li>
          <li className="current">
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
        <div className="bg_white_box p-3 mb-4">
          <h6>Settlement Summary</h6>
          <p className="m-0">
            The final Settlement summary is provided below. For any corrections
            go to the previous screen and make changes
          </p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="settlement_amount bg_white_box p-3">
              <div className="row align-items-center mb-3">
                <div className="col-sm-6">
                  <h6 className="mb-0">Settlement Amount</h6>
                </div>
                <div className="col-sm-6 text-end">
                  <button className="btn-primary">View Breakup</button>
                </div>
              </div>
              <div className="settlement_table data_table_one">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <span>Components</span>
                        </th>
                        <th>
                          <span>Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Earnings</td>
                        <td>20,000.00</td>
                      </tr>
                      <tr>
                        <td>Deductions</td>
                        <td>200.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Total</td>
                        <td>19,800.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="settlement_amount_right bg_white_box p-3">
              <div className="d-flex align-items-center flex-wrap mb-3">
                <p className="mb-0 me-3">
                  What do you want to do with settlement amount 19,800.00?
                </p>
                <ReactSelectSingle
                  value={paySelect}
                  options={paySelectOption}
                  filter
                  onChange={e => {
                    paySelectHandleChange(e);
                  }}
                  placeholder="Pay"
                />
              </div>
              <p>
                Pay: Settlement amount will be paid to the employee alog with
                the payroll
              </p>
              <div className="d-flex align-items-center flex-wrap mb-3">
                <p className="mb-0 me-3">
                  Settlement amount is payable in which payroll?
                </p>
                <ReactSelectSingle
                  value={settlementPayDate}
                  options={settlementPayDateOption}
                  filter
                  onChange={e => {
                    settlementPayDateHandleChange(e);
                  }}
                  placeholder="Nov-2022"
                />
              </div>
              <div className="row justify-content-between">
                <div className="col-md-4">
                  <div className="form_group m-0">
                    <label>Approved By</label>
                    <ReactSelectWithImage
                      value={postSelect}
                      isShowClear={false}
                      options={postOptions}
                      onChange={e => setPostSelect(e.value)}
                      optionLabel="name"
                      filterBy="name"
                      placeholder="Approved By"
                      valueTemplate={selectedPostWrap}
                      itemTemplate={PostOptionsTemplate}
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form_group m-0">
                    <label>Processed By</label>
                    <ReactSelectWithImage
                      value={postSelect}
                      isShowClear={false}
                      options={postOptions}
                      onChange={e => setPostSelect(e.value)}
                      optionLabel="name"
                      filterBy="name"
                      placeholder="Processed By"
                      valueTemplate={selectedPostWrap}
                      itemTemplate={PostOptionsTemplate}
                      className="w-100"
                    />
                  </div>
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
          className="btn-secondary mx-3"
          to="/employees/master/full-and-final-step-three"
        >
          Previous
        </Link>
        <Link className="btn-primary" to="/employees/master/full-and-final">
          Finalize
        </Link>
      </div>
    </div>
  );
}
