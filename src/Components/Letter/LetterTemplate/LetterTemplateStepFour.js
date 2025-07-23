import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import LetterPreview from '../../../Assets/images/letter-preview.png';

export default function LetterTemplateStepFour() {
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
            <Link to="/letter/letter-template">
              <b>Letter Template</b>
            </Link>
          </li>
          <li>Design Letter Template</li>
        </ul>
      </div>
      <div className="letter_tempfour_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="completed">
              <div className="icon"></div>
              <span>Letter Setup</span>
            </li>
            <li className="completed">
              <div className="icon"></div>
              <span>Letter Style</span>
            </li>
            <li className="completed">
              <div className="icon"></div>
              <span>Letter Content</span>
            </li>
            <li className="current">
              <div className="icon"></div>
              <span>Letter Preview</span>
            </li>
          </ul>
        </div>
        <div className="letter_tempfour_inner bg_white_box p-3">
          <h6 className="mb-3">Step 4 : Letter Preview</h6>
          <div className="letter_preview_img text-center">
            <img src={LetterPreview} alt="LetterPreview" />
          </div>
          <div className="btn_group d-flex justify-content-end mt-3">
            <Link to="/letter/letter-template" className="btn-secondary">
              Cancel
            </Link>
            <Link
              to="/letter/letter-template/step-three"
              className="btn-secondary mx-3"
            >
              Previous
            </Link>
            <Link to="/letter/letter-template" className="btn-primary">
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
