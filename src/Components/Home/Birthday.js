import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import UserPro from '../../Assets/images/user9.png';
import LikeThumb from '../../Assets/images/like-thumb.svg';
import SmileIcon from '../../Assets/images/smile.svg';
import LikeFill from '../../Assets/images/like.gif';
import Comment from '../../Assets/images/comment.svg';
import BirthDetail from './BirthdayDetail';
import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Input from './../Common/Input';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
export default function Birthday({
  birthdayLike,
  setBirthdayLike,
  showBirthDayToggle,
  birthDayComment,
}) {
  const { t } = useTranslation();
  const [inputMessage, setInputMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const BirthdayDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 2,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 3,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 4,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 5,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 6,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 7,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 8,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 9,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 10,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 11,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
    {
      id: 12,
      firstName: t('userDetail.firstName'),
      birthDate: t('event.birthdate'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      likeThumb: LikeThumb,
      comment: Comment,
    },
  ];

  const handleEmojiPickup = e => {
    const emoji = e.native;
    setInputMessage(prevInput => prevInput + emoji);
  };
  return (
    <div className="col-12">
      <div className="bg_white_box p-2 mb-3">
        <div className="nav_tab_bar">
          <TabView>
            <TabPanel header="Todays Birthdays">
              <div className="profile_inner d-flex justify-content-between p-2 align-items-center">
                <div className="profile_img_name d-flex align-items-center">
                  <div className="profile_img">
                    <img src={UserPro} alt="userpro" />
                  </div>
                  <div className="profile-name">
                    <h6 className="m-0 fw-400">{t('userDetail.firstName')}</h6>
                    <p className="m-0">{t('userDetail.designation')}</p>
                  </div>
                </div>
                <div className="comment_like">
                  <span
                    onClick={() => {
                      setBirthdayLike(!birthdayLike);
                    }}
                  >
                    <img
                      src={
                        birthdayLike === true ? `${LikeFill}` : `${LikeThumb}`
                      }
                      className={birthdayLike === true ? 'like' : `unlike`}
                      alt="likefill"
                    />
                  </span>
                  <span className="ms-3">
                    <img
                      src={Comment}
                      alt="comment"
                      onClick={() => {
                        showBirthDayToggle();
                      }}
                    />
                  </span>
                </div>
              </div>
              {birthDayComment && (
                <div className="input-box my-2 ps-3 pe-2 d-flex align-items-center position-relative flex-wrap">
                  <div className="reply_emoji d-flex align-items-center w-100">
                    <div className="messageInput w-100">
                      <Input
                        type="text"
                        placeholder={t('commentPlaceHolder')}
                        value={inputMessage}
                        onChange={e => setInputMessage(e.target.value)}
                      />
                      <img
                        src={SmileIcon}
                        alt="SmileIcon"
                        onClick={() => setShowPicker(!showPicker)}
                      />
                    </div>
                    <button className="btn-primary ms-2 py-2">
                      <i className="pi pi-send"></i>
                    </button>
                  </div>
                  {showPicker && (
                    <Picker
                      onEmojiSelect={e => {
                        handleEmojiPickup(e);
                      }}
                      title="Pick your emoji"
                      data={data}
                      emojiTooltip={true}
                      theme="light"
                    />
                  )}
                </div>
              )}
              {BirthdayDetail.map(employee => (
                <BirthDetail employee={employee} status="Today" />
              ))}
            </TabPanel>
            <TabPanel header="Upcoming Birthdays">
              {BirthdayDetail.map(employee => (
                <BirthDetail employee={employee} status="Upcoming" />
              ))}
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
