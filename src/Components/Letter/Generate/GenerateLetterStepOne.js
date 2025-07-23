import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import TextArea from '../../Common/TextArea';

export default function GenerateLetterStepOne() {
  const [letterSelect, setLetterSelect] = useState([]);
  const [signatorySelect, setSignatorySelect] = useState([]);
  const letterSelectOption = [
    { label: 'Address Proof Letter', value: 'addressproofletter' },
    { label: 'Joining Letter', value: 'Joiningletter' },
    { label: 'Experience Letter', value: 'Experienceletter' },
    { label: 'Relieving Letter', value: 'Relievingletter' },
    { label: 'Confirmation Letter', value: 'Confirmationletter' },
    { label: 'Appointment letter', value: 'Appointmentletter' },
  ];
  const signatorySelectOption = [
    { label: 'Akshay Gondaliya ', value: 'Akshay' },
    { label: 'Farzana Tavadiya ', value: 'Farzana' },
    { label: 'Rohan Gondaliya', value: 'Rohan' },
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
            <b>Letter</b>
          </li>
          <li>
            <Link to="/letter/generate">
              <b>Generate</b>
            </Link>
          </li>
          <li>Generate Letter</li>
        </ul>
      </div>
      <div className="letter_stepone_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="current">
              <div className="icon"></div>
              <span>General</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Select Employee</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Preview Letter</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Summary</span>
            </li>
          </ul>
        </div>
        <div className="letter_stepone_inner bg_white_box p-3">
          <h6 className="mb-3">Step 1 : General</h6>
          <div className="stepone_general_wrap">
            <div className="row">
              <div className="col-md-4">
                <div className="form_group">
                  <label>Letter Template</label>
                  <ReactSelectSingle
                    value={letterSelect}
                    options={letterSelectOption}
                    onChange={e => {
                      setLetterSelect(e.value);
                    }}
                    placeholder="Please Select Latter Template "
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>Authorized Signatory</label>
                  <ReactSelectSingle
                    value={signatorySelect}
                    options={signatorySelectOption}
                    onChange={e => {
                      setSignatorySelect(e.value);
                    }}
                    placeholder="Select Authorized Signatory"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group">
                  <label>Remark</label>
                  <TextArea placeholder="" rows={5} cols={10} />
                </div>
              </div>
            </div>
          </div>
          <div className="btn_group d-flex justify-content-end mt-4">
            <Link to="/letter/generate" className="btn-secondary mx-3">
              Cancel
            </Link>
            <Link to="/letter/generate/step-two" className="btn-primary">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
