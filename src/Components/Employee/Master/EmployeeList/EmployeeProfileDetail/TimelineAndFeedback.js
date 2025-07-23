import React from 'react';
import TimelineCalender from '../../../../../Assets/images/timeline-calendar.svg';
import TimelineProbation from '../../../../../Assets/images/timeline-probation.svg';
import TimelineJoin from '../../../../../Assets/images/timeline-join.svg';
import UserImg from '../../../../../Assets/images/user1.png';
import BedgeIcon from '../../../../../Assets/images/bedge-blue.svg';
import NoFeedback from '../../../../../Assets/images/no-feedback.svg';
import { TabPanel, TabView } from 'primereact/tabview';

export default function TimelineAndFeedback() {
  return (
    <div className="timeline_feedback_wrapper">
      <div className="row">
        <div className="col-lg-5 mb-3">
          <div className="timeline_wrapper">
            <div className="timeline_heading">
              <h6>Timeline</h6>
            </div>
            <div className="timeline_content">
              <ul>
                <li>
                  <div className="timeline_icon">
                    <img src={TimelineCalender} alt="Timeline icon" />
                  </div>
                  <h6>2023</h6>
                </li>
                <li>
                  <div className="timeline_icon">
                    <img src={TimelineCalender} alt="Timeline icon" />
                  </div>
                  <h6>2022</h6>
                </li>
                <li>
                  <div className="timeline_icon">
                    <img src={TimelineProbation} alt="Timeline icon" />
                  </div>
                  <h6>
                    Probation Completed <span>06 Aug 2022</span>
                  </h6>
                </li>
                <li>
                  <div className="timeline_icon">
                    <img src={TimelineJoin} alt="Timeline icon" />
                  </div>
                  <h6>
                    Joined CODEZEE SOLUTIONS PVT LTD <span>06 May 2022</span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7 mb-3">
          <div className="timeline_wrapper feedback_wrapper">
            <TabView>
              <TabPanel header="Praise">
                <div className="feedback_body">
                  <div className="feedback_table">
                    <div className="feedback_table_head">
                      <div className="d-flex align-items-center">
                        <div className="employeee_img">
                          <img src={UserImg} alt="employeee img" />
                        </div>
                        <h6 className="ps-3 m-0">Chintan Raval</h6>
                      </div>
                      <p className="m-0">Fri,30 Dec 2022</p>
                    </div>
                    <div className="feedback_table_body">
                      <ul>
                        <li className="d-flex align-items-center">
                          <div className="bedge_icon">
                            <img src={BedgeIcon} alt="Bedge Icon" />
                          </div>
                          <div className="feedback_text ps-2">
                            <h6 className="mb-1">Good Employee</h6>
                            <p className="m-0">
                              “Failure is not the opposite of success; it's part
                              of success.”
                            </p>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="bedge_icon">
                            <img src={BedgeIcon} alt="Bedge Icon" />
                          </div>
                          <div className="feedback_text ps-2">
                            <h6 className="mb-1">Good Employee</h6>
                            <p className="m-0">
                              “Failure is not the opposite of success; it's part
                              of success.”
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Feedbacks Received">
                <div className="no_feedback_wrap">
                  <img src={NoFeedback} alt="NoFeedbackImage" />
                  <h6 className="mt-3">No Feedback received</h6>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  );
}
