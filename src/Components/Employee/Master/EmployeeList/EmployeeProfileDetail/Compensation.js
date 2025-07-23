import React from 'react';
import { TabPanel, TabView } from 'primereact/tabview';
import Input from '../../../../Common/Input';
import EarningIcon from '../../../../../Assets/images/earning-icon.svg';
import DeductionIcon from '../../../../../Assets/images/deduction-icon.svg';
import UpGraphArrow from '../../../../../Assets/images/up-graph-arrow.svg';
import DownGraphArrow from '../../../../../Assets/images/down-graph-arrow.svg';
import EyeIcon from '../../../../../Assets/images/eyes.svg';
import { Link } from 'react-router-dom';
import ImportIcon from '../../../../../Assets/images/import_img.svg';
import { useTranslation } from 'react-i18next';

export default function Compensation() {
  const { t } = useTranslation();
  return (
    <div className="compansation_wrap">
      <div className="compansation_tab_Wrap">
        <TabView>
          <TabPanel header={t('compensation.title')}>
            <div className="compansation_detail_wrap">
              <div className="bg_white_box p-3 mb-3">
                <h6 className="mb-3">{t('compensation.title')}</h6>
                <div className="compansation_detail_table">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>{t('compensation.joining_date')}</th>
                          <th>{t('compensation.payment_type_label')}</th>
                          <th>{t('compensation.pan_no_label')}</th>
                          <th>{t('compensation.current_ctc')}</th>
                          <th>{t('compensation.pf_applicable')}</th>
                          <th>{t('compensation.esi_applicable')}</th>
                          <th>{t('compensation.pt_applicable')}</th>
                          <th>{t('compensation.monthly_ctc_label')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>{t('compensation.payment_type')}</td>
                          <td>{t('compensation.pan_no')}</td>
                          <td>{t('insuarance_detail.sum_insured_value')}</td>
                          <td>{t('title.no')}</td>
                          <td>{t('title.no')}</td>
                          <td>{t('title.yes')}</td>
                          <td>{t('compensation.monthly_ctc_salary')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="salary_component_wrap mb-3">
                <div className="bg_white_box p-3">
                  <div className="salary_template_wrap mb-3">
                    <div className="row">
                      <div className="col-xxl-3 col-xl-4">
                        <div className="form_group">
                          <label>{t('compensation.salary_template')}</label>
                          <Input
                            type="text"
                            value={t(
                              'employee_profile_detail.place_of_birth_value',
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="d-flex align-items-center right_padding">
                          <div className="form_group">
                            <label>{t('compensation.annual_ctc_amount')}</label>
                            <Input
                              type="text"
                              value={t('insuarance_detail.sum_insured_value')}
                            />
                          </div>
                          <div className="right_label">
                            <p className="m-0">{t('compensation.per_year')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="d-flex align-items-center right_padding">
                          <div className="form_group">
                            <label>{t('compensation.monthly_salary')}</label>
                            <Input
                              type="text"
                              value={t('compensation.monthly_ctc_salary')}
                            />
                          </div>
                          <div className="right_label">
                            <p className="m-0">{t('compensation.per_month')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="salary_component_table">
                    <div className="table-responsive">
                      <table className="text-nowrap">
                        <thead>
                          <tr>
                            <th style={{ width: '30%' }}>
                              {t('compensation.salary_component')}
                            </th>
                            <th style={{ width: '20%' }}>
                              {t('compensation.monthly')}
                            </th>
                            <th style={{ width: '50%' }}>
                              {t('compensation.annually')}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="earning_first_Wrap">
                            <td colSpan="3">
                              <div className="earning_tag">
                                <h6>
                                  <img src={EarningIcon} alt="EarningIcon" />
                                  {t('compensation.earnings')}
                                </h6>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.basic')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="16,000.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="192,000.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.house_rent_allowance')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="5,500.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="66,000.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.conveyance_allowance')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="6,000.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="72,000.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.transport_allowance')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="2,655.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="31,860.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.special_allowance')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="1,845.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="22,140.00" />
                              </div>
                            </td>
                          </tr>
                          <tr className="salary_total_wrap">
                            <td>{t('compensation.gross_earning')}</td>
                            <td>{t('compensation.monthly_ctc_salary')}</td>
                            <td>{t('insuarance_detail.sum_insured_value')}</td>
                          </tr>
                          <tr className="earning_first_Wrap">
                            <td colSpan="3">
                              <div className="earning_tag">
                                <h6>
                                  <img
                                    src={DeductionIcon}
                                    alt="DeductionIcon"
                                  />
                                  {t('compensation.deduction')}
                                </h6>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.employer_pf')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.employer_esi')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.bonus')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('compensation.gratuity')}</td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input type="text" value="0.00" />
                              </div>
                            </td>
                          </tr>
                          <tr className="salary_total_wrap">
                            <td>{t('compensation.cost_to_company')}</td>
                            <td>{t('compensation.monthly_ctc_salary')}</td>
                            <td>{t('insuarance_detail.sum_insured_value')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="salary_revesion_history bg_white_box">
                <div className="p-3 salary_revesion_history_head">
                  <h6 className="m-0">
                    {t('compensation.salary_revision_history')}
                  </h6>
                </div>
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>{t('compensation.previous_ctc')}</th>
                          <th>{t('compensation.revised_ctc')}</th>
                          <th>{t('workposttype.effective_from')}</th>
                          <th>{t('title.action')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('insuarance_detail.sum_insured_value')}</td>
                          <td>
                            {t('insuarance_detail.sum_insured_value')}
                            <span className="badge bedge_success ms-2">
                              <img src={UpGraphArrow} alt="UpGraphArrow" /> 20%
                            </span>
                          </td>
                          <td>
                            {' '}
                            {t('month.apr')} - {t('holiday.currentYear')}
                          </td>
                          <td>
                            <img src={EyeIcon} alt="EyeIcon" />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('insuarance_detail.sum_insured_value')}</td>
                          <td>
                            {t('insuarance_detail.sum_insured_value')}
                            <span className="badge bedge_danger ms-2">
                              <img src={DownGraphArrow} alt="DownGraphArrow" />{' '}
                              8%
                            </span>
                          </td>
                          <td>
                            {' '}
                            {t('month.may')} - {t('holiday.currentYear')}
                          </td>
                          <td>
                            <img src={EyeIcon} alt="EyeIcon" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header={t('compensation.payout_summary')}>
            <div className="playout_summary_wrapper">
              <div className="row align-items-center ">
                <div className="col-md-8 mb-3">
                  <ul>
                    <li className="status status_orange">
                      {t('compensation.previous_employment_salary')}
                    </li>
                    <li className="status status_green">
                      {t('compensation.completed_salary')}
                    </li>
                    <li className="status status_blue">
                      {t('compensation.projected_salary')}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="export_excel_wrap text-md-end">
                    <Link to="#" className="btn-border">
                      <img src={ImportIcon} className="me-1" alt="ImportIcon" />
                      {t('compensation.export_excel')}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="data_table_one">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th colSpan="14">
                          <h6>{t('compensation.payout_summary')}</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>{t('compensation.days_summary_mont_year')}</b>
                        </td>
                        <td>
                          <b>{t('compensation.total_label')}</b>
                        </td>
                        <td>
                          <span className="badge bedge_warning">
                            {t('month.apr')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_success">
                            {t('month.may')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_success">
                            {t('month.jun')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_success">
                            {t('month.jul')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_success">
                            {t('month.aug')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_success">
                            {t('month.sep')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_primary">
                            {t('month.oct')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_primary">
                            {t('month.nov')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_primary">
                            {t('month.dec')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_primary">
                            {t('month.jan')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_primary">
                            {t('month.feb')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                        <td>
                          <span className="badge bedge_primary">
                            {t('month.mar')} - {t('holiday.currentYear')}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>{t('compensation.actual_working_days')}</td>
                        <td>{t('compensation.total_day_of_year')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.pay_days')}</td>
                        <td>{t('compensation.total_day_of_year')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('compensation.total_day_of_month')}</td>
                        <td>{t('attendance.days_value')}</td>
                        <td>{t('attendance.days_value')}</td>
                        <td>{t('attendance.days_value')}</td>
                        <td>{t('attendance.days_value')}</td>
                        <td>{t('attendance.days_value')}</td>
                        <td>{t('attendance.days_value')}</td>
                        <td>{t('attendance.days_value')}</td>
                      </tr>
                      <tr>
                        <td colSpan="14">
                          <div className="earning_tag mb-3">
                            <h6>
                              <img src={EarningIcon} alt="EarningIcon" />{' '}
                              {t('compensation.earnings')}
                            </h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>{t('compensation.basic')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                        <td>{t('compensation.basic_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.house_rent_allowance')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                        <td>{t('compensation.house_rent_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.conveyance_allowance')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                        <td>{t('compensation.conveyance_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.transport_allowance')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.transport_allowance')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                        <td>{t('compensation.transport_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.overtime')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                      </tr>
                      <tr className="total_row">
                        <td>{t('compensation.total_earnings_a')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                      </tr>
                      <tr>
                        <td colSpan="14">
                          <div className="earning_tag mb-3">
                            <h6>
                              <img src={DeductionIcon} alt="DeductionIcon" />
                              {t('compensation.deduction')}
                            </h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>{t('compensation.pf')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.esic')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.pt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                      </tr>
                      <tr>
                        <td>{t('compensation.tds')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                        <td>{t('compensation.overtime_amt')}</td>
                      </tr>
                      <tr className="total_row">
                        <td>{t('compensation.total_deduction_b')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                        <td>{t('compensation.pt_amt')}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>{t('compensation.net_pay_ab')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                        <td>{t('compensation.total_amt')}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
