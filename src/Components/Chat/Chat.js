import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { TabView, TabPanel } from 'primereact/tabview';
import Search from '../../Assets/images/chat_search.svg';
// import User from '../../Assets/images/user1.png';
import Star from '../../Assets/images/star_blue.svg';
import BlueTick from '../../Assets/images/blue_tick.png';
import GrayTick from '../../Assets/images/gray_tick.png';
import OneGrayTick from '../../Assets/images/onegraytick.png';
import NoChatImg from '../../Assets/images/no_chat_img.png';
import HelpUser from '../../Assets/images/helpuser.png';
import StarBlueLine from '../../Assets/images/star_blue_line.svg';
import Doat from '../../Assets/images/three_doat.svg';
import Smiley from '../../Assets/images/Smiley.svg';
import SendIcon from '../../Assets/images/send_icon.svg';
import PaperclipIcon from '../../Assets/images/Paperclip_icon.svg';
import WelcomeChat from '../../Assets/images/welcome-chat.png';
import User from '../../Assets/images/user10.png';
import Input from '../Common/Input';
import { Button } from 'primereact/button';
export default function Chat() {
  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Chat</b>
          </li>
        </ul>
      </div>
      <div className="chat_content">
        <div className="row">
          <div className="col-lg-4">
            <div className="chat_list">
              <TabView>
                <TabPanel header="Chats">
                  <div className="search_bar">
                    <div className=" position-relative">
                      <input
                        className="form-control"
                        placeholder="Search people or message"
                      />
                      <img
                        className="position-absolute"
                        src={Search}
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div className="chat_scroll">
                    <div className="favorites_list">
                      <h5 className="sub_title d-flex align-items-center">
                        Favorites <img src={Star} alt="start" />
                      </h5>
                      <div className="user_box active">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat_list">
                      <h5 className="sub_title d-flex align-items-center">
                        Chat
                      </h5>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Contacts">
                  <div className="search_bar">
                    <div className=" position-relative">
                      <input
                        className="form-control"
                        placeholder="Search people or message"
                      />
                      <img
                        className="position-absolute"
                        src={Search}
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div className="chat_scroll">
                    <div className="chat_group_list">
                      <h5 className="sub_title d-flex align-items-center">
                        My Contacts
                      </h5>

                      <h5 className="group_letter">A</h5>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="group_letter">B</h5>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="group_letter">C</h5>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user_box">
                        <div className="d-flex">
                          <img
                            className="flex-shrink-0"
                            src={User}
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="user_info flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <div className="left_side">
                                <h6>Suzana Colin</h6>
                                <p>Chris Martin reacted with </p>
                              </div>
                              <div className="right_side">
                                <span>Dec 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="chat_body">
              {/* <div className="no_chat_img">
                <div className="welcome_chat text-center">
                  <div className="img_box rounded-circle mx-auto">
                    <img
                      className="rounded-circle position-relative"
                      src={User}
                      alt="user"
                      width={110}
                      height={110}
                    />
                  </div>
                  <h6>Suzana Colin</h6>
                  <h4>Welcome to Chat</h4>
                  <p>
                    A place where the people come together, channelize the team,
                    and communicate efficiently.Let's get the conversation
                    started.
                  </p>
                  <button type="button" className="btn btn-primary">
                    New Message
                  </button>
                </div>
              </div> */}
              <div className="chat_header">
                <div className="d-flex align-items-center">
                  <img
                    className="user_img"
                    src={User}
                    alt="user"
                    width={75}
                    height={75}
                  />
                  <h5 className="mb-0">Kathryn Murphy</h5>

                  <div className="icon_group ms-auto d-flex align-items-center">
                    <img
                      className="mx-3"
                      src={StarBlueLine}
                      alt="StarBlueLine"
                    />
                    <img className="ms-2" src={Doat} alt="Doat" />
                  </div>
                </div>
              </div>
              <div className="chat_screen">
                <ul>
                  <li>
                    <div className="resive_msg">
                      <img src={HelpUser} alt="" />
                      <div className="chat_msg">
                        <span>Hi there, How are you?</span>
                        <p className="text-extraLight-chat">Today, 2:01pm</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="send_msg">
                      <div className="chat_msg">
                        <span>
                          Hi, I am coming there in few minutes. Please wait!! I
                          am in taxi right now.
                        </span>
                        <p className="text-extraLight-chat">
                          Today, 2:01pm <img src={BlueTick} alt="BlueTick" />
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="resive_msg">
                      <img src={HelpUser} alt="" />
                      <div className="chat_msg">
                        <span>Hi there, How are you?</span>
                        <p className="text-extraLight-chat">Today, 2:01pm</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="send_msg">
                      <div className="chat_msg">
                        <span>
                          Hi, I am coming there in few minutes. Please wait!! I
                          am in taxi right now.
                        </span>
                        <p className="text-extraLight-chat">
                          Today, 2:01pm <img src={GrayTick} alt="BlueTick" />
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="resive_msg">
                      <img src={HelpUser} alt="" />
                      <div className="chat_msg">
                        <span>Hi there, How are you?</span>
                        <p className="text-extraLight-chat">Today, 2:01pm</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="send_msg">
                      <div className="chat_msg">
                        <span>
                          Hi, I am coming there in few minutes. Please wait!! I
                          am in taxi right now.
                        </span>
                        <p className="text-extraLight-chat">
                          Today, 2:01pm <img src={OneGrayTick} alt="BlueTick" />
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat_bottom d-flex align-items-center">
                <div className="chat_inner flex-grow-1 me-3 ">
                  <div className="smiley_button">
                    <img src={Smiley} alt="" />
                  </div>
                  <Input
                    type="text"
                    className="rounded-pill"
                    placeholder="Type a message"
                  />
                  <div className="Paperclip_button">
                    <img src={PaperclipIcon} alt="" />
                  </div>
                </div>
                <div className="send_button">
                  <Button className="send_icon">
                    <img src={SendIcon} alt="" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
