import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import UserImage from '../../Assets/images/user8.png';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactQuill, { Quill } from 'react-quill';
import { FileUpload } from 'primereact/fileupload';
import quillEmoji from 'react-quill-emoji';
import TextArea from '../Common/TextArea';
import HelpUser from '../../Assets/images/helpuser.png';
import UserImagesFive from '../../Assets/images/user5.png';
import UserImagesSix from '../../Assets/images/user6.png';
import BlueTick from '../../Assets/images/blue_tick.png';
import GrayTick from '../../Assets/images/gray_tick.png';
import OneGrayTick from '../../Assets/images/onegraytick.png';
import NoChatImg from '../../Assets/images/no_chat_img.png';
import Smiley from '../../Assets/images/Smiley.svg';
import SendIcon from '../../Assets/images/send_icon.svg';
import PaperclipIcon from '../../Assets/images/Paperclip_icon.svg';
import Input from '../Common/Input';
import UserImagesSeven from '../../Assets/images/user7.png';
import { Button } from 'primereact/button';

export default function TicketsChat() {
  const [value, setValue] = useState('');
  Quill.register(
    {
      'formats/emoji': quillEmoji.EmojiBlot,
      'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
      'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
      'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
    },
    true,
  );
  const [selectReason, setSelectReason] = useState([]);
  const [searchEmp, setSearchEmp] = useState([]);
  const StatusOptions = [
    { label: 'Open', value: 'Open' },
    { label: 'Due', value: 'Due' },
    { label: 'Completed', value: 'Completed' },
  ];
  const departmentOptions = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
  ];
  const searchempOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];

  const uploadOptions = { label: 'Uplaod', icon: 'pi pi-paperclip' };
  const toast = useRef(null);
  const onBasicUpload = () => {
    toast.current.show({
      icon: 'pi pi-upload',
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  };
  const searchempHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={UserImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Helpdesk</b>
          </li>
          <li>
            <b>
              <Link to="/helpdesk/ticket">Tickets</Link>
            </b>
          </li>
          <li>Ticket Detail</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="ticket_details bg_white_box">
            <div className="ticket_details_header p-3">
              <p className="mb-0">Ticket ID : (48)</p>
            </div>
            <div className="ticket_details_body ticket_details_body_common p-3">
              <div className="task_text ms-0 mb-3">
                <p>Category : System & IT Netwoks</p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form_group">
                    <label>Ticket Details</label>
                    <TextArea
                      placeholder="Write Description"
                      rows={3}
                      cols={10}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Status</label>
                    <ReactSelectSingle
                      value={selectReason}
                      options={StatusOptions}
                      filter
                      onChange={e => {
                        setSelectReason(e.value);
                      }}
                      placeholder="XYZ"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Assignee</label>
                    <ReactSelectMultiple
                      value={searchEmp}
                      options={searchempOption}
                      onChange={e => setSearchEmp(e.value)}
                      optionLabel="name"
                      placeholder="Select"
                      filter
                      className="multiselect-custom"
                      itemTemplate={searchempHandleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Priority</label>
                    <ReactSelectSingle
                      value={selectReason}
                      options={departmentOptions}
                      filter
                      onChange={e => {
                        setSelectReason(e.value);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>Created By</label>
                    <div className="name_wrap">
                      <img src={HelpUser} alt="UserImage" />
                      <span> Chintan Raval</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form_group">
                    <label>Ticket Followers</label>
                    <ReactSelectMultiple
                      value={searchEmp}
                      options={searchempOption}
                      onChange={e => setSearchEmp(e.value)}
                      optionLabel="name"
                      placeholder="Select"
                      filter
                      className="multiselect-custom"
                      itemTemplate={searchempHandleChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form_group">
                    <label>Created Date</label>
                    <div className="ticket_color ms-0">
                      <p>16 Feb 2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form_group">
                    <label>Due Date</label>
                    <div className="ticket_color ms-0">
                      <p>20 Feb 2023</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form_group edit_task_popup ">
                    <label>Description</label>
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
                </div>
                <div className="col-md-6">
                  <div className="form_group custom_attach">
                    <label>Attachment</label>
                    <FileUpload
                      mode="basic"
                      name="demo[]"
                      url="https://primefaces.org/primereact/showcase/upload.php"
                      accept="image/*"
                      maxFileSize={1000000}
                      chooseOptions={uploadOptions}
                      onUpload={onBasicUpload}
                      chooseLabel="No Attachment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="ticket_details bg_white_box">
            <div className="ticket_details_header p-3">
              <p className="mb-0">My Mouse not working. (48)</p>
              <div className="ticket_followers">
                <span className="me-3">Followers :</span>
                <span className="group_member">
                  <Button
                    tooltip="Chintan Raval"
                    tooltipOptions={{
                      position: 'bottom',
                    }}
                    className="tooltip_button"
                  >
                    <img src={UserImagesFive} alt="Reporting" />
                  </Button>
                  <Button
                    tooltip="Chintan Raval"
                    tooltipOptions={{
                      position: 'bottom',
                    }}
                    className="tooltip_button"
                  >
                    <img src={UserImagesSix} alt="Reporting" />
                  </Button>
                  <Button
                    tooltip="Chintan Raval"
                    tooltipOptions={{
                      position: 'bottom',
                    }}
                    className="tooltip_button"
                  >
                    <img src={UserImagesSeven} alt="Reporting" />
                  </Button>
                  <Button
                    tooltip="Chintan Raval"
                    tooltipOptions={{
                      position: 'bottom',
                    }}
                    className="tooltip_button"
                  >
                    <img src={UserImagesFive} alt="Reporting" />
                  </Button>
                </span>
              </div>
            </div>
            <div className="ticket_chat_body ticket_details_body_common p-3">
              <div className="no_chat_img d-none">
                <img src={NoChatImg} alt="" />
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
            </div>
            <div className="ticket_chat_bottom d-flex align-items-center mb-3">
              <div className="ticket_chat_inner flex-grow-1 me-3 ">
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
  );
}
