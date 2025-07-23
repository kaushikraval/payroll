import React, { useState } from 'react';
import Profile from '../../Assets/images/profile.png';
import PlusIcon from '../../Assets/images/plus.svg';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import PollImage from '../../Assets/images/PollImg.svg';
import PostUpload from '../../Assets/images/PostUpload.svg';
import AnnouncementImg from '../../Assets/images/AnnouncementImg.svg';
import PraiseImage from '../../Assets/images/Praiseicon.svg';
import DeleteIcon from '../../Assets/images/trash.svg';
import TopPerfomer from '../../Assets/images/top-performer.svg';
import Leadership from '../../Assets/images/Leadership.svg';
import CustomerHero from '../../Assets/images/CustomerHero.svg';
import AboveBeyond from '../../Assets/images/AboveBeyond.svg';
import Rockstar from '../../Assets/images/Rockstar.svg';
import GoodEmployee from '../../Assets/images/GoodEmployee.svg';
import { Checkbox } from 'primereact/checkbox';
import ReactCelender from '../Common/ReactCelender';
import ReactRadioButton from 'Components/Common/ReactRadioButton';
import ReactSelectWithImage from '../Common/ReactSelectWithImage';
import Input from '../Common/Input';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill-emoji/dist/quill-emoji.css';
import quillEmoji from 'react-quill-emoji';
import { Link } from 'react-router-dom';

export default function CreatePost() {
  const { t } = useTranslation();
  const postOptions = [
    { name: t('buttonTitle.post'), code: 'post', src: PostUpload },
    {
      name: t('title.announcement'),
      code: 'announcement',
      src: AnnouncementImg,
    },
    { name: t('title.poll'), code: 'poll', src: PollImage },
    { name: t('title.praise'), code: 'praise', src: PraiseImage },
  ];
  const bedgeOptions = [
    { name: t('title.top_perfomer'), code: 'topPerfomer', src: TopPerfomer },
    {
      name: t('title.leadership'),
      code: 'leadership',
      src: Leadership,
    },
    { name: t('title.customer_hero'), code: 'customerHero', src: CustomerHero },
    { name: t('title.above_beyond'), code: 'aboveBeyond', src: AboveBeyond },
    { name: t('title.rockstar'), code: 'rockstar', src: Rockstar },
    { name: t('title.good_employee'), code: 'goodEmployee', src: GoodEmployee },
  ];

  const [value, setValue] = useState('');
  const [postPopup, setPostPopup] = useState(false);
  const [postSelect, setPostSelect] = useState(postOptions[0]);
  const [selectBedge, setBedgeSelect] = useState(bedgeOptions[0]);
  const [checkedNotifyEmployees, setCheckedNotifyEmployees] = useState(false);
  const [hideAfter, setHideAfter] = useState(false);
  const [PostRadio, setPostRadio] = useState('Everyone');
  const selectedPostWrap = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={option.src}
            onError={e =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  Quill.register(
    {
      'formats/emoji': quillEmoji.EmojiBlot,
      'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
      'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
      'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
    },
    true,
  );
  const postOptionsTemplate = option => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src={option.src}
          onError={e =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  const selectedBedgeWrap = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={option.src}
            onError={e =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
  const bedgeOptionsTemplate = option => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src={option.src}
          onError={e =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  return (
    <>
      <div className="bg_white_box py-2 px-3 mb-3">
        <div className="post_box d-sm-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-sm-0 mb-1">
            <div className="post-profile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="post-user-name ms-3">
              <h6 className="m-0">{t('userDetail.secondName')}</h6>
              <p className="fw-500 m-0">{t('userDetail.designation')}</p>
            </div>
          </div>
          <Link
            href="#"
            className="text-decoration-underline"
            onClick={() => setPostPopup(!postPopup)}
          >
            {t('buttonTitle.whatsOnYourMind')}
          </Link>
          {/* <div className="model-btn">
            <button
              type="button"
              className="btn-primary"
              onClick={() => setPostPopup(!postPopup)}
            >
              <img src={PlusIcon} className="me-2" alt="addicon" />
              {t('buttonTitle.whatsOnYourMind')}
            </button>
          </div> */}
        </div>
      </div>
      <Dialog
        header={postSelect.name}
        visible={postPopup}
        draggable={false}
        resizable={false}
        className="medium_popup"
        onHide={() => setPostPopup(!postPopup)}
      >
        <div className="post-selact">
          <div className="select-post mb-4">
            <div className="d-flex align-items-center">
              <div className="post-to">
                <h4 className="m-0">{t('title.postTo')}:</h4>
              </div>
              <div className="post-sel-box ms-3">
                <div className="form_group m-0">
                  <ReactSelectWithImage
                    value={postSelect}
                    isShowClear={false}
                    options={postOptions}
                    onChange={e => setPostSelect(e.value)}
                    optionLabel="name"
                    filterBy="name"
                    placeholder={t('title.selectCountry')}
                    valueTemplate={selectedPostWrap}
                    itemTemplate={postOptionsTemplate}
                  />
                </div>
              </div>
            </div>
          </div>
          {postSelect.name === 'Post' && (
            <div className="post_wrapper">
              <ReactQuill
                theme="snow"
                modules={{
                  toolbar: {
                    container: [
                      ['bold', 'italic', 'underline'], // toggled buttons
                      ['link', 'image'],
                      ['emoji'],
                    ],
                  },
                  'emoji-toolbar': true,
                  'emoji-shortname': true,
                }}
                value={value}
                onChange={setValue}
              />
            </div>
          )}
          {postSelect.name === 'Announcement' && (
            <div className="announcement_wrapper">
              <div className="form_group">
                <Input type="text" placeholder="Title of the Announcement" />
              </div>
              <ReactQuill
                theme="snow"
                modules={{
                  toolbar: {
                    container: [
                      ['bold', 'italic', 'underline'], // toggled buttons
                      ['link', 'image'],
                      ['emoji'],
                    ],
                  },
                  'emoji-toolbar': true,
                  'emoji-shortname': true,
                }}
                value={value}
                onChange={setValue}
              />
            </div>
          )}
          {postSelect.name === 'Poll' && (
            <div className="poll_wrapper">
              <div className="form_group">
                <Input type="text" placeholder="What this poll is about" />
              </div>
              <div className="poll_option_wrap">
                <ul>
                  <li>
                    <div className="form_group">
                      <Input type="text" placeholder="Add option here" />
                    </div>
                    <button className="delate_btn">
                      <img src={DeleteIcon} alt="Delete Icon" />
                    </button>
                  </li>
                  <li>
                    <div className="form_group">
                      <Input type="text" placeholder="Add option here" />
                    </div>
                    <button className="delate_btn">
                      <img src={DeleteIcon} alt="Delete Icon" />
                    </button>
                  </li>
                  <li>
                    <div className="form_group">
                      <Input type="text" placeholder="Add option here" />
                    </div>
                    <button className="delate_btn">
                      <img src={DeleteIcon} alt="Delete Icon" />
                    </button>
                  </li>
                </ul>
                <div className="add_poll_option">
                  <span>
                    <img src={PlusIcon} className="me-2" alt="Plus Icon" /> Add
                    Option
                  </span>
                </div>
              </div>
            </div>
          )}
          {postSelect.name === 'Praise' && (
            <div className="praise_wrapper">
              <div className="form_group">
                <Input type="text" placeholder="Search Employee" />
              </div>
              <div className="form_group">
                <label>Select a Badge</label>
                <ReactSelectWithImage
                  value={selectBedge}
                  isShowClear={false}
                  options={bedgeOptions}
                  onChange={e => setBedgeSelect(e.value)}
                  optionLabel="name"
                  filterBy="name"
                  placeholder={t('title.selectCountry')}
                  valueTemplate={selectedBedgeWrap}
                  itemTemplate={bedgeOptionsTemplate}
                />
              </div>
              <ReactQuill
                theme="snow"
                modules={{
                  toolbar: {
                    container: [
                      ['bold', 'italic', 'underline'], // toggled buttons
                      ['link', 'image'],
                      ['emoji'],
                    ],
                  },
                  'emoji-toolbar': true,
                  'emoji-shortname': true,
                }}
                value={value}
                onChange={setValue}
              />
            </div>
          )}
          <div className="post_footer">
            {(postSelect.name === 'Announcement' ||
              postSelect.name === 'Poll') && (
              <div className="notify_wrapper d-flex mt-4">
                <div className="checkbox_wrapper me-3">
                  <Checkbox
                    inputId="NotifyEmployees"
                    onChange={e => setCheckedNotifyEmployees(e.checked)}
                    checked={checkedNotifyEmployees}
                  ></Checkbox>
                  <label htmlFor="NotifyEmployees" className="p-checkbox-label">
                    Notify Employees
                  </label>
                </div>
                <div className="checkbox_wrapper me-3">
                  <Checkbox
                    inputId="HideAfter"
                    onChange={e => setHideAfter(e.checked)}
                    checked={hideAfter}
                  ></Checkbox>
                  <label htmlFor="HideAfter" className="p-checkbox-label">
                    Hide After
                  </label>
                </div>
                <div className="form_group m-0">
                  <ReactCelender
                    disabled={!hideAfter}
                    value="date"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
            )}
            <div className="radio_button_wrapper d-flex mt-4">
              <div className="radio_button">
                <ReactRadioButton
                  inputId="Everyone"
                  name="Everyone"
                  value="Everyone"
                  onChange={e => setPostRadio(e.value)}
                  checked={PostRadio === 'Everyone'}
                />
                <label className="m-0" htmlFor="Everyone">
                  Everyone
                </label>
              </div>
              <div className="radio_button">
                <ReactRadioButton
                  inputId="Custom"
                  name="Custom"
                  value="Custom"
                  onChange={e => setPostRadio(e.value)}
                  checked={PostRadio === 'Custom'}
                />
                <label className="m-0" htmlFor="Custom">
                  Custom
                </label>
              </div>
            </div>
            {PostRadio === 'Custom' && (
              <div className="custom_share_input mt-3">
                <div className="form_group">
                  <label className="m-0" htmlFor="Custom">
                    Select
                  </label>
                  <Input
                    type="text"
                    placeholder="Search Employee, Department....."
                  />
                </div>
              </div>
            )}
            <div className="post-cancel mt-4">
              <div className="d-flex justify-content-end">
                <Button className="btn-secondary">
                  {t('buttonTitle.cancel')}
                </Button>
                <Button className="btn-primary ms-4">
                  {t('buttonTitle.post')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
