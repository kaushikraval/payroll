import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactCheckbox from '../../Components/Common/ReactCheckbox';
import HomeIcon from '../../Assets/images/home-blue.svg';
import InboxImage from '../../Assets/images/inbox.svg';
import User from '../../Assets/images/user1.png';
import Screen from '../../Assets/images/screen.svg';
import Location from '../../Assets/images/location-blue.svg';
import { useTranslation } from 'react-i18next';
export default function Inbox() {
  const { t } = useTranslation();
  const [cities, setCities] = useState([]);
  const onCityChange = e => {
    let selectedCities = [...cities];

    if (selectedCities.length <= 0 && e.checked) {
      selectedCities.push(e.value);
    } else {
      if (!cities.includes(e.value)) {
        selectedCities.push(e.value);
      } else {
        selectedCities.splice(selectedCities.indexOf(e.value), 1);
      }
    }
    setCities(selectedCities);
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
          <li>{t('inbox.title')}</li>
        </ul>
      </div>
      <div className="inbox_main_wrap">
        <div className="row">
          <div className="col-xxl-6 col-xl-12">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="inbox_request_wrap">
                  <div className="bg_white_box p-3">
                    <div className="inbox_request_top mb-4">
                      <ul className="d-flex align-items-center">
                        <li>
                          <h5 className="m-0">
                            <img
                              src={InboxImage}
                              data-inject-svg
                              className="me-2"
                              alt="inboximage"
                            />
                            {t('inbox.title')}
                          </h5>
                        </li>
                        <li className="ms-4">
                          <span className="badge bg-primary">8</span>
                        </li>
                      </ul>
                    </div>
                    <div className="inbox_request_inner">
                      <ul>
                        <li className="request_box active">
                          <h6 className="m-0">
                            {t('inbox.check_in_out_request')}
                          </h6>
                          <span className="badge bg-primary">3</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">
                            {t('inbox.attendance_request')}
                          </h6>
                          <span className="badge bg-primary">4</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">{t('inbox.leave_request')}</h6>
                          <span className="badge bg-primary">5</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">{t('inbox.overtime_request')}</h6>
                          <span className="badge bg-primary">2</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">{t('inbox.coff_request')}</h6>
                          <span className="badge bg-primary">0</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">
                            {t('inbox.profile_update_request')}
                          </h6>
                          <span className="badge bg-primary">0</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">
                            {t('inbox.loan_advance_request')}
                          </h6>
                          <span className="badge bg-primary">9</span>
                        </li>
                        <li className="request_box">
                          <h6 className="m-0">
                            {t('inbox.reimbursement_request')}
                          </h6>
                          <span className="badge bg-primary">9</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="inbox_select_wrap">
                  <div className="bg_white_box p-3">
                    <div className="inbox_select_top mb-4">
                      <div className="form_group checkbox_wrap">
                        <ReactCheckbox
                          inputId="PFApplicable"
                          name="Applicable"
                          value="PF Applicable"
                          onChange={onCityChange}
                          checked={cities.indexOf('PF Applicable') !== -1}
                          // setIsPfApplicable
                        />
                        <label htmlFor="PFApplicable">
                          {t('inbox.select_all')}
                        </label>
                      </div>
                      <input
                        type="search"
                        className="search_box w-100"
                        placeholder={t('inbox.search_employee')}
                      />
                    </div>
                    <div className="inbox_select_inner">
                      <ul>
                        <li className="request_box flex-column align-items-start active">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_in')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                        <li className="request_box flex-column align-items-start">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_out')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                        <li className="request_box flex-column align-items-start">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_in')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                        <li className="request_box flex-column align-items-start">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_in')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                        <li className="request_box flex-column align-items-start">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_out')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                        <li className="request_box flex-column align-items-start">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_in')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                        <li className="request_box flex-column align-items-start">
                          <div className="inbox_select_box d-flex align-items-center">
                            <div className="checkbox_wrap me-3">
                              <ReactCheckbox
                                inputId="PFApplicable"
                                name="Applicable"
                                value="PF Applicable"
                                onChange={onCityChange}
                                checked={cities.indexOf('PF Applicable') !== -1}
                              />
                            </div>
                            <div className="inbox_select_img d-flex align-items-center">
                              <div className="inbox_img">
                                <img
                                  src={User}
                                  data-inject-svg
                                  alt="inboximage"
                                />
                              </div>
                              <div className="inbox_text">
                                <h6 className="m-0">
                                  {t('userDetail.secondName')}
                                </h6>
                                <span>{t('inbox.check_out')}</span>
                              </div>
                            </div>
                          </div>
                          <span className="inbox_date_text">
                            {t('event.birthdate')}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-12">
            <div className="inbox_approve_wrap bg_white_box p-2">
              <div className="inbox_approve_top">
                <div className="inbox_approve_top_inner flex-wrap">
                  <div className="inbox_approve_left d-flex align-items-center">
                    <div className="inbox_img">
                      <img src={User} data-inject-svg alt="inboximage" />
                    </div>
                    <div className="inbox_text">
                      <h6 className="m-0">{t('userDetail.secondName')}</h6>
                      <span>
                        {t('inbox.requested_by_on')} {t('inbox.requseted_date')}
                      </span>
                    </div>
                  </div>
                  <div className="inbox_approve_right">
                    <ul className="d-flex">
                      <li className="me-3">
                        <button type="button" className="btn_success">
                          {t('inbox.approve')}
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn_danger_border">
                          {t('inbox.reject')}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="inbox_approve_inner">
                <div className="date_check_wrap d-flex mb-5">
                  <div className="inbox_date_wrap flex-shrink-0">
                    <div className="inbox_date_top">
                      <span>{t('month.dec')}</span>
                    </div>
                    <div className="inbox_date_bottom">
                      <p className="m-0">
                        13
                        <span>{t('day.tue')}</span>
                      </p>
                    </div>
                  </div>
                  <div className="check_wrap">
                    <ul>
                      <li className="mb-3">
                        <img
                          src={Screen}
                          data-inject-svg
                          className="me-2"
                          alt="screen"
                        />
                        <a href="/inbox" className="text-dark">
                          {t('inbox.check_in')}
                        </a>
                      </li>
                      <li className="location_map">
                        <img
                          src={Location}
                          data-inject-svg
                          className="me-2"
                          alt="location"
                        />
                        <a href="/inbox">{t('inbox.view_map')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="inbox_check_table_wrap">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>{t('inbox.check_in_type')}</th>
                          <th>{t('inbox.time')}</th>
                          <th>{t('inbox.comment')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('inbox.check_in_type_value')}</td>
                          <td>{t('inbox.time_value')}</td>
                          <td>{t('inbox.check_in_type_value')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="inbox_approve_inner_sec"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
