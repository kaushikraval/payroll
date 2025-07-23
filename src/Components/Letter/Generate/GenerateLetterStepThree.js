import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import GenerateSlider from './GenerateSlider';

export default function GenerateLetterStepThree() {
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
      <div className="letter_stepthree_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="completed">
              <div className="icon"></div>
              <span>General</span>
            </li>
            <li className="completed">
              <div className="icon"></div>
              <span>Select Employee</span>
            </li>
            <li className="current">
              <div className="icon"></div>
              <span>Preview Letter</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Summary</span>
            </li>
          </ul>
        </div>
        <div className="letter_stepthree_inner bg_white_box p-3">
          <h6 className="mb-3">Step 3 : Preview</h6>
          <div className="letter_img_wrap text-center">
            <GenerateSlider />
          </div>
          <div className="btn_group d-flex justify-content-end flex-wrap mt-4">
            <Link to="/letter/generate" className="btn-secondary">
              Cancel
            </Link>
            <Link to="/letter/generate/step-two" className="btn-secondary mx-3">
              Previous
            </Link>
            <Link to="/letter/generate/step-four" className="btn-primary">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
