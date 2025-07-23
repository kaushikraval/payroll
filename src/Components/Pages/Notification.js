import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import DoubleTick from '../../Assets/images/double-tick.svg';
import { TabPanel, TabView } from 'primereact/tabview';
import UserIcon1 from '../../Assets/images/kaushik-raval.jpg';
import ReactCelender from '../../Components/Common/ReactCelender';

export default function Notification() {
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>Notification</li>
        </ul>
      </div>
      <div className="notification_page_wrapper bg_white_box">
        <div className="p-3 notofication_page_header">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h6 className="m-0">All Notification</h6>
            </div>
            <div className="col-sm-6">
              <div className="notification_filter">
                <div className="date_picker">
                  <div className="form_group m-0">
                    <ReactCelender value="date" placeholder="DD/MM/YYYY" />
                  </div>
                </div>
                <div className="all_read_Wrap m-0 ms-3">
                  <span>
                    <img src={DoubleTick} alt="DoubleTick" /> Mark all as read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="notification_tab_wrap">
          <TabView>
            <TabPanel header="All">
              <div className="notification_content_wrap">
                <ul>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="read">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>Farzana Tavadia has approved your Address.</h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="read">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Rohan Gondaliya has approved your attendance request
                          OUT Time for Wed 16 Nov, 2022, 06:30 PM
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="read">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>Farzana Tavadia has approved your Address.</h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="read">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Rohan Gondaliya has approved your attendance request
                          Clock IN/OUT Time for Wed, 16 Nov 2022 06:30 AM to
                          06:41 PM.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="read">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed 16 Nov, 2022 to Wed 16 Nov, 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>Farzana Tavadia has approved your Address.</h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel header="Unread">
              <div className="notification_content_wrap">
                <ul>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>Farzana Tavadia has approved your Address.</h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Rohan Gondaliya has approved your attendance request
                          OUT Time for Wed 16 Nov, 2022, 06:30 PM
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>Farzana Tavadia has approved your Address.</h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="unread">
                      <div className="notification_profile_pic">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="notification_text">
                        <h6>
                          Farzana Tavadia has approved your leave request from
                          Wed, 16 Nov 2022 to Wed, 16 Nov 2022 for 1 Day.
                        </h6>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
