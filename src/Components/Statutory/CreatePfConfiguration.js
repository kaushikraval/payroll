import React, { useState } from 'react';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { Link } from 'react-router-dom';
import Input from '../Common/Input';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactRadioButton from '../Common/ReactRadioButton';
import { Checkbox } from 'primereact/checkbox';

export default function CreatePfConfiguration() {
  const [isActualPf, setIsActualPf] = useState('No');
  const [isActualPfSnd, setIsActualPfSnd] = useState('No');
  const [deductionSelect, setDeductionSelect] = useState([]);
  const [includeEmployer, setIncludeEmployer] = useState([
    {
      includeEmployerMain: false,
      includeEmployerEdli: false,
      includeAdmin: false,
    },
  ]);
  const deductionSelectOption = [
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
            <Link to="/statutory/pfconfiguration">
              <b>PF Configuration</b>
            </Link>
          </li>
          <li>Add PF Group</li>
        </ul>
      </div>
      <div className="bg_white_box p-3">
        <h6 className="mb-3">PF Configuration</h6>
        <div className="create_pfconfig_wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="form_group">
                <label>PF Group Name</label>
                <Input type="text" placeholder="Enter PF Group Name" />
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
                  value={deductionSelect}
                  options={deductionSelectOption}
                  onChange={e => {
                    setDeductionSelect(e.value);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <h6 className="mb-sm-3 mb-2">Employer Contribution Rate</h6>
              <div className="radio_button_wrapper">
                <div className="radio_button pf_radio_wrap">
                  <ReactRadioButton
                    inputId="actualPf"
                    name="actualPf"
                    value="No"
                    onChange={e => setIsActualPf(e.value)}
                    checked={isActualPf === 'No'}
                  />
                  <label className="m-0" htmlFor="actualPf">
                    <Input type="number" placeholder="00" className="me-sm-2" />
                    % of Actual PF Wage
                  </label>
                </div>
                <div className="radio_button pf_radio_wrap">
                  <ReactRadioButton
                    inputId="restrictPf"
                    name="restrictPf"
                    value="Yes"
                    onChange={e => setIsActualPf(e.value)}
                    checked={isActualPf === 'Yes'}
                  />
                  <label className="m-0" htmlFor="restrictPf">
                    <span className="input_after_text">
                      Restrict Contribution to
                    </span>
                    <Input type="number" placeholder="00" className="mx-sm-2" />
                    PF wages
                  </label>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <h6 className="mb-sm-3 mb-2">Employee Contribution Rate</h6>
              <div className="radio_button_wrapper">
                <div className="radio_button pf_radio_wrap">
                  <ReactRadioButton
                    inputId="actualPf"
                    name="actualPf"
                    value="No"
                    onChange={e => setIsActualPfSnd(e.value)}
                    checked={isActualPfSnd === 'No'}
                  />
                  <label className="m-0" htmlFor="actualPf">
                    <Input type="number" placeholder="00" className="me-sm-2" />
                    <span>% of Actual PF Wage</span>
                  </label>
                </div>
                <div className="radio_button pf_radio_wrap">
                  <ReactRadioButton
                    inputId="restrictPf"
                    name="restrictPf"
                    value="Yes"
                    onChange={e => setIsActualPfSnd(e.value)}
                    checked={isActualPfSnd === 'Yes'}
                  />
                  <label className="m-0" htmlFor="restrictPf">
                    <span className="input_after_text">
                      Restrict Contribution to
                    </span>
                    <Input type="number" placeholder="00" className="mx-sm-2" />
                    PF wages
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="contribution_percentage">
            <ul>
              <li>
                <div className="pf_radio_wrap">
                  <label className="m-0" htmlFor="actualPf">
                    EPF Contribution
                    <Input type="number" placeholder="00" className="mx-sm-2" />
                    <span className="percentage_input">%</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pf_radio_wrap mb-0">
                  <label className="m-0" htmlFor="actualPf">
                    EPS Contribution
                    <Input type="number" placeholder="00" className="mx-sm-2" />
                    <span className="percentage_input">%</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <h6 className="my-sm-4 my-3">Additional Charges</h6>
          <div className="contribution_percentage">
            <ul>
              <li>
                <div className="pf_radio_wrap">
                  <label className="m-0" htmlFor="actualPf">
                    Employer EDLI contribution
                    <Input type="number" placeholder="00" className="mx-sm-2" />
                    <span className="percentage_input">%</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pf_radio_wrap">
                  <label className="m-0" htmlFor="actualPf">
                    Admin charges
                    <Input type="number" placeholder="00" className="mx-sm-2" />
                    <span className="percentage_input">%</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="contribution_ctc_wrap">
            <ul>
              <li>
                <div className="main_check_wrap d-flex">
                  <Checkbox
                    inputId="ctc"
                    className="me-2"
                    onChange={e => {
                      setIncludeEmployer({
                        ...includeEmployer,
                        includeEmployerMain:
                          !includeEmployer.includeEmployerMain,
                      });
                    }}
                    checked={includeEmployer.includeEmployerMain}
                  />
                  <label>Include employer contribution in the CTC</label>
                </div>
                {includeEmployer.includeEmployerMain === true && (
                  <ul>
                    <li>
                      <div className="main_check_wrap d-flex">
                        <Checkbox
                          inputId="ctcFirst"
                          className="me-2"
                          onChange={e => {
                            setIncludeEmployer({
                              ...includeEmployer,
                              includeEmployerEdli:
                                !includeEmployer.includeEmployerEdli,
                            });
                          }}
                          checked={includeEmployer.includeEmployerEdli}
                        />
                        <label>
                          Include employer EDLI contribution in the CTC
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="main_check_wrap d-flex">
                        <Checkbox
                          inputId="ctcSnd"
                          className="me-2"
                          onChange={e => {
                            setIncludeEmployer({
                              ...includeEmployer,
                              includeAdmin: !includeEmployer.includeAdmin,
                            });
                          }}
                          checked={includeEmployer.includeAdmin}
                        />
                        <label>Include admin chages in the CTC</label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end mt-4">
          <Link to="/statutory/pfconfiguration" className="btn-secondary mx-3">
            Cancel
          </Link>
          <Link to="/statutory/pfconfiguration" className="btn-primary">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
