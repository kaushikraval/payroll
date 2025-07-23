import Input from 'Components/Common/Input';
import ReactCheckbox from 'Components/Common/ReactCheckbox';
import TextArea from 'Components/Common/TextArea';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';

export default function CreateWeeklyOff() {
  const [isFlexible, setIsFlexible] = useState([]);
  const [weeklyOffSelect, setWeeklyOffSelect] = useState([]);
  const weeklyOffSelectOption = [
    { label: 'Working Day', value: 'Working Day' },
    { label: 'Full Day Off', value: 'Full Day Off' },
    { label: '1st Half Off', value: '1st Half Off' },
    { label: '2nd Half Off', value: '2nd Half Off' },
  ];
  const weeklyOffSelectHandleChange = e => {
    setWeeklyOffSelect(e.value);
  };
  const isFlexibleChange = e => {
    let selectFlexible = [...isFlexible];

    if (selectFlexible.length <= 0 && e.checked) {
      selectFlexible.push(e.value);
    } else {
      if (!isFlexible.includes(e.value)) {
        selectFlexible.push(e.value);
      } else {
        selectFlexible.splice(selectFlexible.indexOf(e.value), 1);
      }
    }
    setIsFlexible(selectFlexible);
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
            <b>Time & Attendance</b>
          </li>
          <li>
            <b>Shift Management</b>
          </li>
          <li>
            <Link to="/time-and-attendance/shift-and-day" className="text-dark">
              <b>Shift & Days</b>
            </Link>
          </li>
          <li>Create Weekly Off</li>
        </ul>
      </div>
      <div className="create_shift_wrap">
        <div className="bg_white_box p-3 mb-3">
          <div className="row">
            <div className="col-md-4">
              <div className="form_group mb-0">
                <label>Weekly off Name</label>
                <Input type="text" placeholder="Enter Weekly Off Name" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group mb-0">
                <label>Description*</label>
                <TextArea placeholder="Extra Design Work" rows={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6>Weekly Off Configuration</h6>
      <div className="bg_white_box p-3">
        <div className="shift_timing_table weekly_off_table">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Select Weekly off Day</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                  <th>5th</th>
                  <th>Last</th>
                </tr>
              </thead>
              <tbody>
                <tr className={isFlexible.includes('Monday') ? '' : 'disable'}>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="monday"
                          name="monday"
                          value="Monday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Monday') !== -1}
                        />
                        <label htmlFor="monday">Monday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
                <tr className={isFlexible.includes('Tuesday') ? '' : 'disable'}>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="tuesday"
                          name="tuesday"
                          value="Tuesday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Tuesday') !== -1}
                        />
                        <label htmlFor="tuesday">Tuesday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
                <tr
                  className={isFlexible.includes('Wednesday') ? '' : 'disable'}
                >
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="wednesday"
                          name="wednesday"
                          value="Wednesday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Wednesday') !== -1}
                        />
                        <label htmlFor="wednesday">Wednesday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
                <tr
                  className={isFlexible.includes('Thursday') ? '' : 'disable'}
                >
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="thursday"
                          name="thursday"
                          value="Thursday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Thursday') !== -1}
                        />
                        <label htmlFor="thursday">Thursday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
                <tr className={isFlexible.includes('Friday') ? '' : 'disable'}>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="friday"
                          name="friday"
                          value="Friday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Friday') !== -1}
                        />
                        <label htmlFor="friday">Friday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
                <tr
                  className={isFlexible.includes('Saturday') ? '' : 'disable'}
                >
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="saturday"
                          name="saturday"
                          value="Saturday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Saturday') !== -1}
                        />
                        <label htmlFor="saturday">Saturday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
                <tr className={isFlexible.includes('Sunday') ? '' : 'disable'}>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form_group checkbox_wrap mb-0">
                        <ReactCheckbox
                          inputId="sunday"
                          name="sunday"
                          value="Sunday"
                          onChange={isFlexibleChange}
                          checked={isFlexible.indexOf('Sunday') !== -1}
                        />
                        <label htmlFor="sunday">Sunday</label>
                      </div>
                      <i className="pi pi-copy"></i>
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form_group">
                      <ReactSelectSingle
                        value={weeklyOffSelect}
                        options={weeklyOffSelectOption}
                        filter
                        onChange={e => {
                          weeklyOffSelectHandleChange(e);
                        }}
                        placeholder="Full Day Off"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end pt-3">
        <Link
          className="btn-secondary mx-3"
          to="/time-and-attendance/shift-and-day"
        >
          Cancel
        </Link>
        <Link className="btn-primary" to="/time-and-attendance/shift-and-day">
          Save
        </Link>
      </div>
    </div>
  );
}
