import React from 'react';
import { useTranslation } from 'react-i18next';
import LineChart from './LineChart';

export default function AdditionandAttrition() {
  const { t } = useTranslation();

  return (
    <div className="addition_chart_wrap bg_white_box p-3">
      <div className="addition_chart_head">
        <div className="row">
          <div className="col-sm-6">
            <h6>{t('additionsAttriton.title')}</h6>
            <p>{t('additionsAttriton.lastUpdated')}</p>
          </div>
        </div>
      </div>
      <div className="addition_chart">
        <LineChart />
      </div>
    </div>
  );
}
