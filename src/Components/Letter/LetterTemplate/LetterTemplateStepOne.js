import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import TextArea from '../../Common/TextArea';
import Input from '../../Common/Input';
import ReactRadioButton from '../../Common/ReactRadioButton';
import { Checkbox } from 'primereact/checkbox';

export default function LetterTemplateStepOne() {
  const [addPageNumberToggle, setAddPageNumberToggle] = useState(false);
  const [addPageMarginToggle, setAddPageMarginToggle] = useState(false);
  const [Orientation, setOrientation] = useState('No');
  const [PageSize, setPageSize] = useState([]);
  const [PositionSelect, setPositionSelect] = useState([]);
  const [AlignmentSelect, setAlignmentSelect] = useState([]);
  const AlignmentSelectOption = [
    { label: 'Left', value: 'Left' },
    { label: 'Center', value: 'Center' },
    { label: 'Right', value: 'Right' },
  ];
  const PositionSelectOption = [
    { label: 'Header', value: 'Header' },
    { label: 'Footer', value: 'Footer' },
  ];
  const PageSizeOption = [
    { label: 'Letter (21.59 x 27.94 cm)', value: 'Letter' },
    { label: 'Legal (21.59 x 35.56 cm)', value: 'Legal' },
    { label: 'A3 (29.7 x 42 cm)', value: 'A3' },
    { label: 'A4 (21 x 29.7 cm)', value: 'A4' },
    { label: 'A5 (14.8 x 21 cm)', value: 'A5' },
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
            <Link to="/letter/letter-template">
              <b>Letter Template</b>
            </Link>
          </li>
          <li>Design Letter Template</li>
        </ul>
      </div>
      <div className="letter_tempone_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="current">
              <div className="icon"></div>
              <span>Letter Setup</span>
            </li>
            <li>
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
        <div className="letter_tempone_inner bg_white_box p-3">
          <div className="row">
            <div className="col-md-4">
              <div className="letter_setup_wrap">
                <h6 className="mb-3">Step 1 : Letter Setup</h6>
                <div className="form_group">
                  <label>Name of The Letter</label>
                  <Input type="text" placeholder="Letter Name" />
                </div>
                <div className="form_group">
                  <label>Remark</label>
                  <TextArea
                    placeholder="Write Discription"
                    rows={5}
                    cols={10}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="page_setup_wrap">
                <p className="mb-3">
                  <b>Page Setup</b>
                </p>
                <div className="form_group">
                  <label className="mb-3">Orientation</label>
                  <div className="radio_button_wrapper d-flex">
                    <div className="radio_button">
                      <ReactRadioButton
                        inputId="editcode"
                        name="editcode"
                        value="Yes"
                        onChange={e => setOrientation(e.value)}
                        checked={Orientation === 'Yes'}
                      />
                      <label className="m-0" htmlFor="internationalEmp">
                        Portrait
                      </label>
                    </div>
                    <div className="radio_button">
                      <ReactRadioButton
                        inputId="editcode1"
                        name="editcode1"
                        value="No"
                        onChange={e => setOrientation(e.value)}
                        checked={Orientation === 'No'}
                      />
                      <label className="m-0" htmlFor="internationalEmp1">
                        Landscape
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form_group">
                  <label>Page Size</label>
                  <ReactSelectSingle
                    value={PageSize}
                    options={PageSizeOption}
                    onChange={e => {
                      setPageSize(e.value);
                    }}
                    placeholder="Select Page Size"
                  />
                </div>
                <div className="form_group">
                  <div className="d-flex align-items-center page_check">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setAddPageNumberToggle(e.checked)}
                      checked={addPageNumberToggle}
                    />
                    <label className="m-0">Add Page Number</label>
                  </div>
                </div>
                {addPageNumberToggle === true && (
                  <>
                    <div className="form_group">
                      <label>Position</label>
                      <ReactSelectSingle
                        value={PositionSelect}
                        options={PositionSelectOption}
                        onChange={e => {
                          setPositionSelect(e.value);
                        }}
                        placeholder="Page Number Position"
                      />
                    </div>
                    <div className="form_group">
                      <label>Alignment</label>
                      <ReactSelectSingle
                        value={AlignmentSelect}
                        options={AlignmentSelectOption}
                        onChange={e => {
                          setAlignmentSelect(e.value);
                        }}
                        placeholder="Page Number Position"
                      />
                    </div>
                  </>
                )}
                <div className="form_group">
                  <div className="d-flex align-items-center page_check">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setAddPageMarginToggle(e.checked)}
                      checked={addPageMarginToggle}
                    />
                    <label className="m-0">Add Page Margin</label>
                  </div>
                </div>
                {addPageMarginToggle === true && (
                  <div className="pagesize_box">
                    <div className="pagesize_inner_box">
                      <span>A4</span>
                      <span className="m-0">(21 x 29.7 cm)</span>
                    </div>
                    <div className="top_margin">
                      <span>Top Margin</span>
                      <div className="pf_radio_wrap">
                        <label className="m-0" htmlFor="actualPf">
                          <Input
                            type="number"
                            placeholder=""
                            className="me-2"
                          />
                          px
                        </label>
                      </div>
                    </div>
                    <div className="right_margin">
                      <span>Right Margin</span>
                      <div className="pf_radio_wrap">
                        <label className="m-0" htmlFor="actualPf">
                          <Input
                            type="number"
                            placeholder=""
                            className="me-2"
                          />
                          px
                        </label>
                      </div>
                    </div>
                    <div className="bottom_margin">
                      <span>Bottom Margin</span>
                      <div className="pf_radio_wrap">
                        <label className="m-0" htmlFor="actualPf">
                          <Input
                            type="number"
                            placeholder=""
                            className="me-2"
                          />
                          px
                        </label>
                      </div>
                    </div>
                    <div className="left_margin">
                      <span>Left Margin</span>
                      <div className="pf_radio_wrap">
                        <label className="m-0" htmlFor="actualPf">
                          <Input
                            type="number"
                            placeholder=""
                            className="me-2"
                          />
                          px
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="btn_group d-flex justify-content-end mt-4">
            <Link to="/letter/letter-template" className="btn-secondary mx-3">
              Cancel
            </Link>
            <Link to="/letter/letter-template/step-two" className="btn-primary">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
