import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRadioButton from '../../Common/ReactRadioButton';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import Info from '../../../Assets/images/info_grey.svg';
import HomeIcon from '../../../Assets/images/home-blue.svg';

export default function LeaveApprovalScheme() {
  const [Approval, setApproval] = useState('NoApproval');
  const [ApprovalLeval, setApprovalLeval] = useState([]);
  const ApprovalLevalOption = [
    { label: 'Vivek Pandey', value: 'VivekPandey' },
    { label: 'Dhaval Radadiya', value: 'DhavalRadadiya' },
    { label: 'Rahul Shah', value: 'RahulShah' },
    { label: 'Punam Rathod', value: 'PunamRathod' },
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
            <b>Scheme</b>
          </li>
          <li>
            <b>
              <Link to="/scheme/leave">Leave</Link>
            </b>
          </li>
          <li>Configure Leave Type</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Entitle Setup</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Entitle Prorate</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Application Rule</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Restriction Setting</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Holiday & Weekend</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Year end</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Leave Approval</span>
          </li>
        </ul>
      </div>
      <div className="leave_tab_height leave_approval_wrap bg_white_box p-4">
        <h6 className="mb-3">Does this leave request require an approval?</h6>
        <div className="radio_button_wrapper">
          <div className="radio_button pf_radio_wrap">
            <ReactRadioButton
              inputId="NoApproval"
              name="NoApproval"
              value="NoApproval"
              onChange={e => setApproval(e.value)}
              checked={Approval === 'NoApproval'}
            />
            <label className="m-0" htmlFor="NoApproval">
              No
              <img src={Info} alt="HomeIcon" className="ms-3" />
            </label>
          </div>
          <div className="radio_button pf_radio_wrap">
            <ReactRadioButton
              inputId="Approval"
              name="Approval"
              value="Approval"
              onChange={e => setApproval(e.value)}
              checked={Approval === 'Approval'}
            />
            <label className="m-0" htmlFor="Approval">
              Yes
              <img src={Info} alt="HomeIcon" className="ms-3" />
            </label>
          </div>
        </div>
        {Approval === 'Approval' && (
          <div className="approval_leval">
            <div className="form_group form_multiselect">
              <label>Approval Leval</label>
              <ReactSelectMultiple
                value={ApprovalLeval}
                options={ApprovalLevalOption}
                onChange={e => setApprovalLeval(e.value)}
                optionLabel="name"
                placeholder=""
                filter
                className="multiselect-custom"
                display="chip"
                maxSelectedLabels={3}
              />
            </div>
          </div>
        )}
      </div>
      <div className="btn_group d-flex justify-content-end pt-3">
        <Link to="/scheme/leave" className="btn-secondary">
          Cancel
        </Link>
        <Link
          to="/scheme/leavepages/leave-yearend"
          className="btn-primary mx-3"
        >
          Previous
        </Link>
        <Link className="btn-primary">Save</Link>
      </div>
    </div>
  );
}
