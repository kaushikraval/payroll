import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RightArrow from '../../Assets/images/chevron-right.svg';
import LeftArrow from '../../Assets/images/chevron-left.svg';
import { Dialog } from 'primereact/dialog';
import Festival from '../../Assets/images/FestivaImg.svg';

export default function HolidayDetail() {
  const { t } = useTranslation();
  const [holiday, setHoliday] = useState(false);

  return (
    <div className="model_box">
      <button
        type="button"
        className="holiday_btn bg_white_box p-3 w-100 border-0"
        onClick={() => setHoliday(!holiday)}
      >
        <div className="profile_img_name d-flex align-items-center">
          <div className="festival_img me-4">
            <img src={Festival} alt="festival" />
          </div>
          <div className="festival-name text-start">
            <h6 className="m-0">{t('holiday.upcomingHoliday')}</h6>
            <p className="m-0">{t('holiday.rakshaBandhan')}</p>
            <span className="fw-500">{t('holiday.rakshaBandhanDate')}</span>
          </div>
        </div>
      </button>

      <Dialog
        header=""
        visible={holiday}
        draggable={false}
        resizable={false}
        className="small_popup holiday_popup"
        onHide={() => setHoliday(!holiday)}
      >
        <div className="holiday_popup_wrap">
          <div className="holiday_popup_head d-flex align-items-center justify-content-between mb-4">
            <h4 className="m-0">{t('holiday.title')}</h4>
            <div className="top_date_wrap">
              <h6>
                <button type="button">
                  <img src={LeftArrow} alt="LeftArrow" />
                </button>
                {t('holiday.currentYear')}
                <button type="button">
                  <img src={RightArrow} alt="RightArrow" />
                </button>
              </h6>
            </div>
          </div>
          <div className="holiday_list">
            <ul>
              <li className="previous">
                <div className="holiday_wrap">
                  <div className="month_name">
                    <h6>{t('month.jan')}</h6>
                  </div>
                  <div className="holiday_box">
                    <div className="holiday_date">
                      <p>
                        <span>{t('day.friday')}</span>
                        {t('holiday.makarSankrantiDate')}
                      </p>
                    </div>
                    <div className="holiday_name">
                      <h4>{t('holiday.makarSankranti')}</h4>
                    </div>
                  </div>
                </div>
              </li>
              <li className="previous">
                <div className="holiday_wrap">
                  <div className="month_name">
                    <h6>{t('month.mar')}</h6>
                  </div>
                  <div className="holiday_box">
                    <div className="holiday_date">
                      <p>
                        <span>{t('day.friday')}</span>
                        {t('holiday.dhuletiDate')}
                      </p>
                    </div>
                    <div className="holiday_name">
                      <h4>{t('holiday.dhuleti')}</h4>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="holiday_wrap">
                  <div className="month_name">
                    <h6>{t('month.aug')}</h6>
                  </div>
                  <div className="holiday_box">
                    <div className="holiday_date">
                      <p>
                        <span>{t('day.thursday')}</span>
                        {t('holiday.rakshaBandhanDate2')}
                      </p>
                    </div>
                    <div className="holiday_name">
                      <h4>{t('holiday.rakshaBandhan')}</h4>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="holiday_wrap">
                      <div className="holiday_box">
                        <div className="holiday_date">
                          <p>
                            <span>{t('day.friday')}</span>
                            {t('holiday.janmastamiDate')}
                          </p>
                        </div>
                        <div className="holiday_name">
                          <h4>{t('holiday.janmastami')}</h4>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="holiday_wrap">
                  <div className="month_name">
                    <h6>{t('month.sep')}</h6>
                  </div>
                  <div className="holiday_box">
                    <div className="holiday_date">
                      <p>
                        <span>{t('day.friday')}</span>
                        {t('holiday.ganeshVisharjanDate')}
                      </p>
                    </div>
                    <div className="holiday_name">
                      <h4>{t('holiday.ganeshVisharjan')}</h4>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="holiday_wrap">
                  <div className="month_name">
                    <h6>{t('month.oct')}</h6>
                  </div>
                  <div className="holiday_box">
                    <div className="holiday_date">
                      <p>
                        <span>{t('day.monday')}</span>
                        {t('holiday.diwaliDate')}
                      </p>
                    </div>
                    <div className="holiday_name">
                      <h4>{t('holiday.diwali')}</h4>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="holiday_wrap">
                      <div className="holiday_box">
                        <div className="holiday_date">
                          <p>
                            <span>{t('day.tuesday')}</span>
                            {t('holiday.newYearDate')}
                          </p>
                        </div>
                        <div className="holiday_name">
                          <h4>{t('holiday.newYear')}</h4>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="holiday_wrap">
                      <div className="holiday_box">
                        <div className="holiday_date">
                          <p>
                            <span>{t('day.wednesday')}</span>
                            {t('holiday.bhaiDoojDate')}
                          </p>
                        </div>
                        <div className="holiday_name">
                          <h4>{t('holiday.bhaiDooj')}</h4>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
