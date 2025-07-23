import React from 'react';
import { useTranslation } from 'react-i18next';
import PieChart from './PieChart';

export default function TeamSummary() {
  const { t } = useTranslation();
  return (
    <div className="bg_white_box team_summary p-3 my-3">
      <div className="team_summary_head">
        <h6 className="d-flex justify-content-between">
          {t('teamSummary.title')}
          <span>{t('teamSummary.todayDate')}</span>
        </h6>
      </div>
      <div className="team_chart">
        <PieChart />
        <div className="employee_count">
          <h6>
            {t('teamSummary.totalEmployee')}
            <span>{t('teamSummary.totalNoOfEmployee')}</span>
          </h6>
        </div>
      </div>
      {/* <ul>
        <li className="blue">
          {t('teamSummary.workAtOffice')}
          <span>{t('teamSummary.noOfWorkAtOffice')}</span>
        </li>
        <li className="dark_blue">
          {t('title.workFromHome')}
          <span>{t('teamSummary.noOfWorkFromHome')}</span>
        </li>
        <li className="yellow">
          {t('teamSummary.lateArrival')}
          <span>{t('teamSummary.noOfLateArrival')}</span>
        </li>
        <li className="green">
          {t('event.on_leave')}
          <span>{t('event.no_of_on_leave')}</span>
        </li>
        <li className="gray">
          {t('teamSummary.notCheckedIn')}
          <span>{t('teamSummary.noOfNotCheckedIn')}</span>
        </li>
      </ul> */}
    </div>
  );
}
