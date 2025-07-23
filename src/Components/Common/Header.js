import React, { useState } from 'react';
import Toggle from '../../Assets/images/toggle.svg';
import Globe from '../../Assets/images/globe.svg';
import Chat from '../../Assets/images/chat.svg';
import Notification from '../../Assets/images/notification.svg';
import UserIcon1 from '../../Assets/images/kaushik-raval.jpg';
import DoubleTick from '../../Assets/images/double-tick.svg';
import Inbox from '../../Assets/images/inbox.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { TabView, TabPanel } from 'primereact/tabview';
import { useTranslation } from 'react-i18next';
import { removeSessionDatavalue } from 'utils/common';
import { Button } from 'primereact/button';

export default function Header({ handleToggle, pageHeading }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleRight, setVisibleRight] = useState(false);
  const handleLogout = () => {
    removeSessionDatavalue('isLogin');
    navigate('/login');
  };
  return (
    <header>
      <div className="row align-items-center">
        <div className="col-6">
          <div className="left_header">
            <div className="toggle_btn">
              <span onClick={handleToggle}>
                <img src={Toggle} alt="Toggle" />
              </span>
            </div>
            <div className="page_title d-none d-md-block">
              <h1>{pageHeading}</h1>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="right_header">
            <ul>
              <li>
                <input
                  type="search"
                  className="form-control rounded-pill"
                  placeholder={t('title.searchAnyKeyword')}
                />
              </li>
              {/* <li>
                <div className="language_dropdown">
                  <div className="language_dropdown_inner d-flex align-items-center">
                    <div className="globe_icon">
                      <img src={Globe} alt="Globe" />
                    </div>
                    <select id="language" className="form-select">
                      <option value="1">English</option>
                      <option value="2">French</option>
                    </select>
                  </div>
                </div>
              </li> */}
              <li>
                <Button
                  tooltip="Inbox"
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                  onClick={() => navigate('/inbox')}
                >
                  <img src={Inbox} alt="Inbox" />
                  <span className="bedge_number">1</span>
                </Button>
              </li>
              <li>
                <Button
                  tooltip="Message"
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                  onClick={() => navigate('/Chat')}
                >
                  <img src={Chat} alt="Chat" />
                  <span className="bedge_number">3</span>
                </Button>
              </li>
              <li>
                <Button
                  tooltip="Notification"
                  tooltipOptions={{
                    position: 'bottom',
                  }}
                  className="tooltip_button"
                  onClick={() => setVisibleRight(true)}
                >
                  <img src={Notification} alt="Notification" />
                  <span className="bedge_number">3</span>
                </Button>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="dropdownMenuLink"
                  >
                    <img src={UserIcon1} alt="UserIcon1" />
                    {t('userDetail.firstName')}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item">
                        {t('title.changePassword')}
                      </Link>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleLogout()}
                      >
                        {t('title.logout')}
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className="sidebar_popup_wrapper">
          <div className="sidebar_title_wrap">
            <h3>{t('title.notification')}</h3>
          </div>
          <div className="Sidebar_tab_wrap">
            <div className="all_read_Wrap">
              <span>
                <img src={DoubleTick} alt="DoubleTick" />
                {t('title.markAllAsRead')}
              </span>
            </div>
            <TabView>
              <TabPanel header={t('title.all')}>
                <div className="notification_content_wrap">
                  <div className="view_all_Wrap">
                    <div className="row">
                      <div className="col-6">
                        <h6>{t('title.new')}</h6>
                      </div>
                      <div className="col-6">
                        <div className="text-end">
                          <Link
                            to="/notification"
                            onClick={() => setVisibleRight(false)}
                          >
                            {t('title.viewAll')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText2')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText3')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText2')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText3')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText2')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel header={t('title.unread')}>
                <div className="notification_content_wrap">
                  <div className="view_all_Wrap">
                    <div className="row">
                      <div className="col-6">
                        <h6>{t('title.new')}</h6>
                      </div>
                      <div className="col-6">
                        <div className="text-end">
                          <Link to="#">{t('title.viewAll')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText2')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText3')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText2')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="unread">
                        <div className="notification_profile_pic">
                          <img src={UserIcon1} alt="UserIcon1" />
                        </div>
                        <div className="notification_text">
                          <h6>{t('title.notificationText')}</h6>
                          <p>{t('title.notificationDate')}</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </Sidebar>
    </header>
  );
}
