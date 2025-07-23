import Input from 'Components/Common/Input';
import ReactCheckbox from 'Components/Common/ReactCheckbox';
import TextArea from 'Components/Common/TextArea';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactCelender from '../../Common/ReactCelender';
import ReactRadioButton from 'Components/Common/ReactRadioButton';

export default function CreateShift() {
  const [isFlexible, setIsFlexible] = useState([]);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);
  const [hoursCalculation, setHoursCalculation] = useState(
    'Every Valid Clock-In & Clock-Out',
  );
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
  function handlekeyDown(e) {
    if (e.keyCode === 8) {
      e.preventDefault();
    }
  }
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
            <b>
              <Link to="/time-and-attendance/shift-and-day">Shift & Days</Link>
            </b>
          </li>
          <li>Create Shift</li>
        </ul>
      </div>
      <div className="create_shift_wrap">
        <div className="bg_white_box p-3 mb-3">
          <div className="row">
            <div className="col-md-4">
              <div className="form_group">
                <label>Shift Code</label>
                <Input type="text" placeholder="Enter Shift Code" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Shift Name</label>
                <Input type="text" placeholder="Enter Shift Name" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Description*</label>
                <TextArea placeholder="Write Description" rows={1} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group checkbox_wrap mb-0">
                <ReactCheckbox
                  inputId="IsFlexible"
                  name="IsFlexible"
                  value="Is Flexible"
                  onChange={isFlexibleChange}
                  checked={isFlexible.indexOf('Is Flexible') !== -1}
                />
                <label htmlFor="IsFlexible">Is Flexible</label>
              </div>
            </div>
          </div>
        </div>
        <h6>Shift Timings</h6>
        <div className="bg_white_box p-3 mb-3">
          <div className="shift_timing_table">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Select Working Day</th>
                    <th style={{ width: '150px' }}>From Time</th>
                    <th></th>
                    <th>
                      <div className="d-flex justify-content-between align-items-center">
                        To Time <i className="pi pi-copy"></i>
                      </div>
                    </th>
                    <th></th>
                    <th style={{ width: '150px' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        Break (Minutes) <i className="pi pi-copy"></i>
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className={isFlexible.includes('Monday') ? '' : 'disable'}
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                  <tr
                    className={isFlexible.includes('Tuesday') ? '' : 'disable'}
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                  <tr
                    className={
                      isFlexible.includes('Wednesday') ? '' : 'disable'
                    }
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                  <tr
                    className={isFlexible.includes('Thursday') ? '' : 'disable'}
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                  <tr
                    className={isFlexible.includes('Friday') ? '' : 'disable'}
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                  <tr
                    className={isFlexible.includes('Saturday') ? '' : 'disable'}
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                  <tr
                    className={isFlexible.includes('Sunday') ? '' : 'disable'}
                  >
                    <td>
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
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          value={fromTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onChange={e => setFromTime(e.value)}
                        />
                      </div>
                    </td>
                    <td className="text-center">-</td>
                    <td>
                      <div className="form_group mb-0">
                        <ReactCelender
                          id="calendar-timeonly"
                          value={toTime}
                          placeholder="HH:MM AM"
                          timeOnly
                          hourFormat="12"
                          onKeyDown={e => {
                            handlekeyDown();
                          }}
                          onChange={e => {
                            setToTime(e.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Hrs 00 Mins
                      </span>
                    </td>
                    <td>
                      <div className="form_group mb-0">
                        <Input type="text" placeholder="" />
                      </div>
                    </td>
                    <td>
                      <span className="badge bedge_primary text-secondary">
                        00 Mins
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg_white_box p-3">
          <div className="grace_wrapper">
            <div className="row align-items-end">
              <div className="col-xxl col-xl-3 col-md-4 col-sm-6">
                <div className="form_group">
                  <label>Grace In (Minutes)</label>
                  <Input type="text" placeholder="" />
                </div>
              </div>
              <div className="col-xxl col-xl-3 col-md-4 col-sm-6">
                <div className="form_group">
                  <label>Grace Out (Minutes)</label>
                  <Input type="text" placeholder="" />
                </div>
              </div>
              <div className="col-xxl col-xl-3 col-md-4 col-sm-6">
                <div className="form_group">
                  <label>Half Day (Minimum Hours)</label>
                  <Input type="text" placeholder="" />
                </div>
              </div>
              <div className="col-xxl col-xl-3 col-md-4 col-sm-6">
                <div className="form_group">
                  <label>Full Day (Minimum Hours)</label>
                  <Input type="text" placeholder="" />
                </div>
              </div>
              <div className="col-xxl col-xl-3 col-md-4 col-sm-6">
                <div className="form_group">
                  <label>Maximum Working Hours For Day</label>
                  <Input type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>
          <h6>Total hours Calculation :</h6>
          <div className="radio_button_wrapper">
            <div className="radio_button d-flex mb-3">
              <ReactRadioButton
                inputId="internationalEmp"
                name="internationalEmp"
                value="Every Valid Clock-In & Clock-Out"
                onChange={e => setHoursCalculation(e.value)}
                checked={
                  hoursCalculation === 'Every Valid Clock-In & Clock-Out'
                }
              />
              <label className="m-0" htmlFor="internationalEmp">
                Every Valid Clock-In & Clock-Out
              </label>
            </div>
            <div className="radio_button d-flex">
              <ReactRadioButton
                inputId="internationalEmp1"
                name="internationalEmp1"
                value="First Clock-in & Last Clock-Out"
                onChange={e => setHoursCalculation(e.value)}
                checked={hoursCalculation === 'First Clock-in & Last Clock-Out'}
              />
              <label className="m-0" htmlFor="internationalEmp1">
                First Clock-in & Last Clock-Out
              </label>
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
    </div>
  );
}
