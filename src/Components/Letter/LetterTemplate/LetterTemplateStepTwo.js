import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from 'primereact/checkbox';
import { Editor } from 'primereact/editor';

export default function LetterTemplateStepTwo() {
  const [footerToggle, setFooterToggle] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  const [text, setText] = useState();
  const [text1, setText1] = useState();

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
      <div className="letter_temptwo_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="completed">
              <div className="icon"></div>
              <span>Letter Setup</span>
            </li>
            <li className="current">
              <div className="icon"></div>
              <span>Letter Style</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Letter Content</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Letter Preview</span>
            </li>
          </ul>
        </div>
        <div className="letter_temptwo_inner">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="letter_temptwo_left bg_white_box p-3">
                <h6 className="text-secondary mb-3">List of Dynamic Fields</h6>
                <input
                  type="search"
                  className="search_box mb-3"
                  placeholder="Search"
                ></input>
                <div className="letter_temptwo_acc">
                  <Accordion activeIndex={0}>
                    <AccordionTab header="Employee Basic Information">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                    <AccordionTab header="Employee Contact Information">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                    <AccordionTab header="Employee Job">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                    <AccordionTab header="Employee Personal">
                      <ul>
                        <li>Employee Code</li>
                        <li>Employee Name</li>
                        <li>Date of Issue</li>
                        <li>Date of Joining</li>
                        <li>Date of Birth</li>
                      </ul>
                    </AccordionTab>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 mt-4 mt-md-0">
              <div className="letter_temptwo_right bg_white_box p-3">
                <h6 className="mb-3">Step 2 : Letter Style</h6>
                <div className="header_editor_wrap">
                  <div className="form_group">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setHeaderToggle(e.checked)}
                      checked={headerToggle}
                    />
                    <label className="m-0">
                      Header (The header appears on every page of the documents)
                    </label>
                  </div>
                  {headerToggle === true && (
                    <Editor
                      value={text}
                      onTextChange={e => setText(e.htmlValue)}
                      style={{ height: '160px' }}
                    />
                  )}
                </div>
                <div className="footer_editor_wrap">
                  <div className="form_group">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setFooterToggle(e.checked)}
                      checked={footerToggle}
                    />
                    <label className="m-0">
                      Footer (The page footer appears on every page of the
                      documents)
                    </label>
                  </div>
                  {footerToggle === true && (
                    <Editor
                      value={text1}
                      onTextChange={e => setText1(e.htmlValue)}
                      style={{ height: '160px' }}
                    />
                  )}
                </div>
                <div className="btn_group d-flex justify-content-end">
                  <Link to="/letter/letter-template" className="btn-secondary">
                    Cancel
                  </Link>
                  <Link
                    to="/letter/letter-template/step-one"
                    className="btn-secondary mx-3"
                  >
                    Previous
                  </Link>

                  <Link
                    to="/letter/letter-template/step-three"
                    className="btn-primary"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
