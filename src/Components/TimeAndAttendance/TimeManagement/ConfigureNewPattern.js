import Input from 'Components/Common/Input';
import TextArea from 'Components/Common/TextArea';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { PickList } from 'primereact/picklist';
import { ShiftData } from './ShiftData';
import ReactTreeSelect from '../../Common/ReactTreeSelect';
import { TabView, TabPanel } from 'primereact/tabview';
import ReactCelender from '../../Common/ReactCelender';
import { Button } from 'primereact/button';

export default function ConfigureNewPattern() {
  const [selectCategory, setSelectedCategory] = useState(null);
  const categories = [
    {
      cname: 'Bank Docs',
      code: 'CA',
    },
    {
      cname: 'Previous Experience',
      code: 'US',
    },
    {
      cname: 'Address',
      code: 'US',
    },
    {
      cname: 'Degree & Certificate',
      code: 'US',
    },
  ];

  const categoryTemplate = option => {
    return (
      <div className="country-item">
        <span>{option.cname || option.name}</span>
      </div>
    );
  };
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState([]);

  useEffect(() => {
    ShiftData.getProductsSmall().then(data => setSource(data));
  }, []);

  const onChange = event => {
    setSource(event.source);
    setTarget(event.target);
  };

  const itemTemplate = item => {
    return <h6 className="mb-0">{item.name}</h6>;
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
            <b>Time Management</b>
          </li>
          <li>
            <b>
              <Link to="/time-and-attendance/shift-schedule-and-pattern">
                Shift Schedual & Pattern
              </Link>
            </b>
          </li>
          <li> Configure Pattern</li>
        </ul>
      </div>
      <div className="bg_white_box configure_pattern_wrap p-3">
        <div className="row">
          <div className="col-md-6">
            <div className="create_shift_schedule_left">
              <div className="form_group">
                <label>Shift Code</label>
                <Input type="text" placeholder="Enter Shift Code" />
              </div>
              <div className="form_group">
                <label>Description*</label>
                <TextArea placeholder="Write Description" rows={4} />
              </div>
              <div className="form_group">
                <label>Shift Selection</label>
                <p>Minimum 2 Shift & Maximum 4 Shift (Shift Per Day)</p>
                <PickList
                  className="shift_selection"
                  source={source}
                  target={target}
                  onChange={onChange}
                  itemTemplate={itemTemplate}
                  breakpoint="1400px"
                  sourceHeader="Available Shifts"
                  targetHeader="Selected Shifts"
                />
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form_group">
                    <label>Scheduler Start Day</label>
                    <ReactTreeSelect
                      value={selectCategory}
                      options={categories}
                      optionLabel={'cname'}
                      optionGroupLabel={'name'}
                      optionGroupChildren={['states', 'cities']}
                      placeholder={'Placeholder Text'}
                      onChange={event => setSelectedCategory(event.value)}
                      itemTemplate={categoryTemplate}
                    />
                  </div>
                </div>
              </div>
              <div className="shift_selection_wrap"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group custom_datepicker">
              <label>Start Schedule From</label>
              <ReactCelender value="date" placeholder="Select Date" />
            </div>
            <div className="form_group">
              <label>Schedual Frequency</label>
              <TabView>
                <TabPanel header="Week">
                  <div className="form_group add_minus_count ">
                    <label>Select Weeks</label>
                    <div className="d-flex align-items-center">
                      <button type="button" className="btn minus">
                        -
                      </button>
                      <input
                        type="number"
                        className="p-inputtext p-component text-center"
                      />
                      <button type="button" className="btn plus">
                        +
                      </button>
                    </div>
                    <p>
                      Select no. of weeks each shift is going to last before
                      rotating
                    </p>
                  </div>
                  <div className="data_table_one schedual_table">
                    <div className="table-responsive">
                      <table id="example" className="display border_table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <span>Team Projection</span>
                            </th>
                            <th scope="col" colSpan={4} className="text-center">
                              Weeks
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Team 1</td>
                            <td className="text-center">
                              W1
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W2
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W3
                              <br />
                              MRN
                            </td>
                          </tr>
                          <tr>
                            <td>Team 1</td>
                            <td className="text-center">
                              W1
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W2
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W3
                              <br />
                              MRN
                            </td>
                          </tr>
                          <tr>
                            <td>Team 1</td>
                            <td className="text-center">
                              W1
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W2
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W3
                              <br />
                              MRN
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Custom">
                  <div className="form_group add_minus_count ">
                    <label>Enter Days Period</label>
                    <div className="d-flex align-items-center">
                      <button type="button" className="btn minus">
                        -
                      </button>
                      <input
                        type="number"
                        className="p-inputtext p-component text-center"
                      />
                      <button type="button" className="btn plus">
                        +
                      </button>
                    </div>
                    <p>
                      Select no. of days each shift is going to last before
                      rotating
                    </p>
                  </div>
                  <div className="data_table_one schedual_table">
                    <div className="table-responsive">
                      <table id="example" className="display border_table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <span>Team Projection</span>
                            </th>
                            <th
                              scope="col"
                              colSpan={12}
                              className="text-center"
                            >
                              Days
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Team 1</td>
                            <td className="text-center">
                              W1
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W2
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W3
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W4
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W5
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W6
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W7
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W8
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W9
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W10
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W11
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W12
                              <br />
                              MRN
                            </td>
                          </tr>
                          <tr>
                            <td>Team 1</td>
                            <td className="text-center">
                              W1
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W2
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W3
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W4
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W5
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W6
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W7
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W8
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W9
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W10
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W11
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W12
                              <br />
                              MRN
                            </td>
                          </tr>
                          <tr>
                            <td>Team 1</td>
                            <td className="text-center">
                              W1
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W2
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W3
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W4
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W5
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W6
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W7
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W8
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W9
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W10
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W11
                              <br />
                              MRN
                            </td>
                            <td className="text-center">
                              W12
                              <br />
                              MRN
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>

        <div className="btn_group d-flex justify-content-end pt-3">
          <Link
            to="/time-and-attendance/shift-schedule-and-pattern"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link
            to="/time-and-attendance/shift-schedule-and-pattern"
            className="btn-primary"
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
