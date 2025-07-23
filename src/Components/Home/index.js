import React, { useState } from 'react';
import Bday from '../../Assets/images/BdayIcon.svg';
import Anniversaries from '../../Assets/images/AnniversariesIcon.svg';
import Joiners from '../../Assets/images/JoinersIcon.svg';
import Leave from '../../Assets/images/LeaveIcon.svg';
import AdditionandAttrition from './AdditionandAttrition';
import Anniversary from './Anniversary';
import Joiner from './Joiners';
import EmployeeLeave from './Leave';
// const Input = React.lazy(() => import('../Common/Input'));

import { useTranslation } from 'react-i18next';
import Post from './Post';
import TaskDetail from './TaskDetail';
import TeamSummary from './TeamSummary';
import TodayTiming from './TodayTiming';
import HolidayDetail from './HolidayDetail';
import CreatePost from './CreatePost';
import Birthday from './Birthday';

export default function HomeDashboard() {
  const { t } = useTranslation();
  const [birthDayComment, setBirthDayComment] = useState(false);
  const [anniversaryComment, setAnniversaryComment] = useState(false);
  const [newJoinerComment, setNewJoinerComment] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('birthday');
  const [birthdayLike, setBirthdayLike] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showComment2, setShowComment2] = useState(false);

  function showBirthDayToggle() {
    setBirthDayComment(!birthDayComment);
  }
  function showAnniversaryToggle() {
    setAnniversaryComment(!anniversaryComment);
  }
  function showNewJoinerToggle() {
    setNewJoinerComment(!newJoinerComment);
  }

  return (
    <div className="inner_wrapper">
      <div className="row align-items-start">
        <div className="col-xl-7 sticky-xl-top order-2 order-xl-1">
          <div className="row count_group">
            <div className="col-sm-3">
              <div
                className="bg_white_box p-2 p-sm-3 h-100 text-center main-select"
                onClick={() => setSelectedEvent('birthday')}
              >
                <img src={Bday} alt="bday" />
                <div className="box_txt mt-3">
                  <h6 className="m-0">{t('event.no_of_birthday')}</h6>
                  <p className="m-0">{t('event.birthday')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div
                className="bg_white_box p-2 p-sm-3 h-100 text-center main-select"
                onClick={() => setSelectedEvent('anniversary')}
              >
                <img src={Anniversaries} alt="anniversaries" />
                <div className="box_txt mt-3">
                  <h6 className="m-0">{t('event.no_of_anniversary')}</h6>
                  <p className="m-0">{t('event.anniversary')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div
                className="bg_white_box p-2 p-sm-3 h-100 text-center main-select"
                onClick={() => setSelectedEvent('newJoiners')}
              >
                <img src={Joiners} alt="joiners" />
                <div className="box_txt mt-3">
                  <h6 className="m-0">{t('event.no_of_new_joiner')}</h6>
                  <p className="m-0">{t('event.new_joiner')}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div
                className="bg_white_box p-2 p-sm-3 h-100 text-center main-select"
                onClick={() => setSelectedEvent('onLeave')}
              >
                <img src={Leave} alt="leave" />
                <div className="box_txt mt-3">
                  <h6 className="m-0">{t('event.no_of_on_leave')}</h6>
                  <p className="m-0">{t('event.on_leave')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hom-second-bx mt-sm-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  {selectedEvent === 'birthday' && (
                    <Birthday
                      birthdayLike={birthdayLike}
                      setBirthdayLike={setBirthdayLike}
                      showBirthDayToggle={showBirthDayToggle}
                      birthDayComment={birthDayComment}
                    />
                  )}
                  {selectedEvent === 'anniversary' && (
                    <Anniversary
                      anniversaryComment={anniversaryComment}
                      showAnniversaryToggle={showAnniversaryToggle}
                    />
                  )}
                  {selectedEvent === 'newJoiners' && (
                    <Joiner
                      newJoinerComment={newJoinerComment}
                      showNewJoinerToggle={showNewJoinerToggle}
                    />
                  )}
                  {selectedEvent === 'onLeave' && <EmployeeLeave />}
                  <div className="col-12">
                    <TaskDetail />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <HolidayDetail />
                  </div>
                  <div className="col-12">
                    <TodayTiming />
                    <TeamSummary />
                  </div>
                </div>
              </div>
            </div>
            <AdditionandAttrition />
          </div>
        </div>
        <div className="col-xl-5 order-1">
          <CreatePost />
          <Post
            showComment={showComment}
            setShowComment={setShowComment}
            showComment2={showComment2}
            setShowComment2={setShowComment2}
          />
        </div>
      </div>
    </div>
  );
}
