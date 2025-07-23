import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ReactCelender from '../Common/ReactCelender';
import Input from 'Components/Common/Input';
import TextArea from 'Components/Common/TextArea';
import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import userImage from '../../Assets/images/user8.png';
const ReactSelectSingleWithoutFilter = React.lazy(() =>
  import('../Common/ReactSelectSingleWithoutFilter'),
);

export default function TodayTiming() {
  const { t } = useTranslation();
  const [code, setCode] = useState([]);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [cancelExitRequest, setCancelExitRequest] = useState(false);
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const codeHandleChange = e => {
    setCode(e.value);
  };
  const employeeCode = [
    { label: t('title.workFromHome'), value: 'NY' },
    { label: t('title.workFromOffice'), value: 'RM' },
  ];
  function refreshClock() {
    setTime(new Date());
  }
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const dialogFuncMap = {
    cancelExitRequest: setCancelExitRequest,
    // viewexitemp: setviewexitemp,
  };

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];

  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={userImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };

  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Request"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="bg_white_box p-3 mt-3">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="timing-left">
          <h4 className="fw-500">{t('todayTiming.title')}</h4>
          <h6 className="fw-400">{t('todayTiming.todayDate')}</h6>
        </div>
        <div className="right-check-box">
          <div className="form_group">
            <ReactSelectSingleWithoutFilter
              value={code}
              options={employeeCode}
              onChange={e => {
                codeHandleChange(e);
              }}
              placeholder={t('title.workFromOffice')}
            />
          </div>
        </div>
      </div>
      <div className="checkIn_Wrap">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="live_clock_wrap">
              <Clock value={date} />
            </div>
            <div className="live_time_wrap">
              <span>{time.toLocaleTimeString()}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="checkIn_btn_wrap">
              <ul>
                <li>
                  <button className="btn_green">
                    {t('todayTiming.checkIn')}
                  </button>
                </li>
                <li>
                  <button className="btn_rad">Check-Out</button>
                  <p className="mt-1 mb-0">
                    <span>3H : 16M </span>Since Last Login
                  </p>
                </li>
                <li>
                  <span
                    className="text-secondary"
                    onClick={() => onClick('cancelExitRequest')}
                  >
                    {t('todayTiming.applyWFH')}
                  </span>
                </li>
                <li>
                  <Link>{t('todayTiming.applyLeave')} </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Work From Home Request"
        visible={cancelExitRequest}
        draggable={false}
        resizable={false}
        className="small_popup"
        footer={renderFooter('cancelExitRequest')}
        onHide={() => onHide('cancelExitRequest')}
      >
        <div className="wrok_form_home_popup">
          <div className="row">
            <div className="col-sm-4">
              <div className="form_group">
                <label>Start Date</label>
                <ReactCelender value="date" placeholder="Select Date" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form_group">
                <label>End Date</label>
                <ReactCelender value="date" placeholder="Select Date" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form_group">
                <label>&nbsp;</label>
                <Input type="text" value="0 Days WFH" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form_group">
                <label>Reason</label>
                <TextArea placeholder="Write Description" rows={5} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form_group">
                <label>Notify</label>
                <ReactSelectMultiple
                  value={reportingAuthority}
                  options={reportingAuthorityOption}
                  onChange={e => setreportingAuthority(e.value)}
                  optionLabel="name"
                  placeholder="Select"
                  filter
                  className="multiselect-custom"
                  itemTemplate={reportingAuthorityHandleChange}
                />
                <small>
                  These Employee will be notified through email when your WFH
                  request is approved.
                </small>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
