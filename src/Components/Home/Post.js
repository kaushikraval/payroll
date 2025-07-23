import React, { useState } from 'react';
import PostProfile from '../../Assets/images/PostProfile.png';
import DotIcon from '../../Assets/images/dotIcon.svg';
import { Link } from 'react-router-dom';
import PostDescription from '../../Assets/images/PostDescrip.png';
import { useTranslation } from 'react-i18next';
import Input from '../Common/Input';
import PostSecond from '../../Assets/images/PostImg.png';
import SecondPost from '../../Assets/images/PostSecondImg.png';
import Comment from '../../Assets/images/comment.svg';
import UserPro from '../../Assets/images/user9.png';
import Like from '../../Assets/images/like.gif';
import Love from '../../Assets/images/love.gif';
import HaHa from '../../Assets/images/haha.gif';
import Shock from '../../Assets/images/shock.gif';
import Sad from '../../Assets/images/sad.gif';
import Angry from '../../Assets/images/angry.gif';
import { Sidebar } from 'primereact/sidebar';
import Reaction from '../Home/Reactions';
import SmileIcon from '../../Assets/images/smile.svg';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
export default function Post({
  showComment,
  setShowComment,
  showComment2,
  setShowComment2,
}) {
  const { t } = useTranslation();
  const [showPicker, setShowPicker] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  let initBtn = '';
  let reaction = '';
  function init(reactionClass, initButtonClass) {
    initBtn = document.querySelector(`#${initButtonClass}`);
    reaction = document.querySelectorAll(`.${reactionClass}`);
  }
  function handleInit() {
    reaction.forEach(function (elm, index) {
      elm.addEventListener('click', function (e) {
        e.preventDefault();
        initBtn.setAttribute('className', 'init-btn');
        initBtn.classList.add('bg');
        initBtn.classList.add('bg-' + (index + 1));
      });
    });
  }

  function handleResetReaction() {
    if (reaction) {
      reaction.forEach(function (elm, index) {
        if (initBtn.classList[2] === 'bg-' + (index + 1)) {
          initBtn.classList.remove('bg-' + (index + 1));
        }
      });
    }
  }
  const handleEmojiPickup = e => {
    const emoji = e.native;
    setInputMessage(prevInput => prevInput + emoji);
  };
  const postList = [
    {
      image: PostProfile,
      secondName: t('userDetail.secondName'),
      postTime: t('userDetail.postTime'),
      designation: t('userDetail.designation'),
      PostDescriptionImage: PostDescription,
      PostDescriptionImage1: '',
      PostDescriptionImage2: '',
      PostDescription: t('userDetail.postDesctiption'),
      hashTag: t('userDetail.hashTag'),
      initButtonClass: 'initButton_class',
      reactionClass: 'reaction_class',
      commentToggle: showComment,
      setCommentToggle: setShowComment,
      totalReaction: 'You and 10 others',
      totalComment: 3,
      userProfile: UserPro,
      comment: [
        {
          commenterProfile: UserPro,
          firstName: t('userDetail.firstName'),
          postTime: t('userDetail.postTime'),
          postDesctiption: t('userDetail.postDesctiption'),
          replyCount: ' You and 10 others',
          initButtonClass: 'initButton_class1',
          reactionClass: 'reaction_class1',
        },
        {
          commenterProfile: UserPro,
          firstName: t('userDetail.firstName'),
          postTime: t('userDetail.postTime'),
          postDesctiption: t('userDetail.postDesctiption'),
          replyCount: ' You and 10 others',
          initButtonClass: 'initButton_class2',
          reactionClass: 'reaction_class2',
        },
      ],
    },
    {
      image: PostProfile,
      secondName: t('userDetail.secondName'),
      postTime: t('userDetail.postTime'),
      designation: t('userDetail.designation'),
      PostDescriptionImage: '',
      PostDescriptionImage1: PostSecond,
      PostDescriptionImage2: SecondPost,
      PostDescription: t('userDetail.postDesctiption'),
      hashTag: t('userDetail.hashTag'),
      commentToggle: showComment2,
      setCommentToggle: setShowComment2,
      initButtonClass: 'initButton_class3',
      reactionClass: 'reaction_class3',
      totalReaction: 'You and 10 others',
      totalComment: 3,
      userProfile: UserPro,
      comment: [
        {
          commenterProfile: UserPro,
          firstName: t('userDetail.firstName'),
          postTime: t('userDetail.postTime'),
          postDesctiption: t('userDetail.postDesctiption'),
          replyCount: ' You and 10 others',
          initButtonClass: 'initButton_class4',
          reactionClass: 'reaction_class4',
        },
        {
          commenterProfile: UserPro,
          firstName: t('userDetail.firstName'),
          postTime: t('userDetail.postTime'),
          postDesctiption: t('userDetail.postDesctiption'),
          replyCount: ' You and 10 others',
          initButtonClass: 'initButton_class5',
          reactionClass: 'reaction_class5',
        },
      ],
    },
  ];

  const userReactionDetail = [
    {
      userImage: UserPro,
      ractionImage: Like,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Love,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Like,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Angry,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: HaHa,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Sad,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Like,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Shock,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Like,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
    {
      userImage: UserPro,
      ractionImage: Like,
      userName: 'Chintan Raval',
      userDesignation: 'UX/UI Designer',
    },
  ];

  return (
    <>
      <div className="post-main-box">
        <div className="row">
          {postList.map(post => (
            <div className="col-xl-12 col-lg-6 col-md-12">
              <div className="bg_white_box blog_main_wrap py-2 px-3 mb-3">
                <div className="post-main-inner">
                  <div className="post_box d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="post-profile">
                        <img src={post.image} alt="postprofile" />
                      </div>
                      <div className="post-user-name ms-3">
                        <h6 className="m-0">
                          {post.secondName}
                          <span className="ms-2">{post.postTime}</span>
                        </h6>
                        <p className="fw-500 m-0">{post.designation}</p>
                      </div>
                    </div>
                    <div className="delate_wrap dropdown-toggle">
                      <button
                        className="btn_delate"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="dropdownMenuLink"
                      >
                        <img src={DotIcon} alt="Delate Icon" />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item">Delete</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {post.PostDescriptionImage !== '' ? (
                    <div className="poat-description mt-3">
                      <div className="post-img">
                        <img
                          src={post.PostDescriptionImage}
                          className="w-100"
                          alt="postdescription"
                        />
                      </div>
                      <div className="description-text p-3">
                        <p className="m-0">{post.PostDescription}</p>
                        <div className="hastag-line mt-3">
                          <Link className="hastag-txt" to="#">
                            {post.hashTag}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="poat-description mt-4">
                      <div className="post-img d-sm-flex align-items-center w-100">
                        <div className="one-img me-sm-2 mb-sm-0 mb-2 w-sm-50">
                          <img
                            src={post.PostDescriptionImage1}
                            className="w-100"
                            alt="postsecond"
                          />
                        </div>
                        <div className="second-img ms-sm-2 w-sm-50">
                          <img
                            src={post.PostDescriptionImage2}
                            className="w-100"
                            alt="secondpost"
                          />
                          <h6 className="fw-400 m-0">
                            {t('buttonTitle.moreNoOfImage')}
                          </h6>
                        </div>
                      </div>
                      <div className="description-text p-3">
                        <p className="m-0">{post.PostDescription}</p>
                        <div className="hastag-line mt-4">
                          <Link className="hastag-txt" to="#">
                            {post.hashTag}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row mt-2 align-items-center">
                    <div className="col-sm-5">
                      <div className="like-comment d-flex align-items-center">
                        <Reaction
                          reactionClass={post.reactionClass}
                          initButtonClass={post.initButtonClass}
                          onMouseOver={() => {
                            init(post.reactionClass, post.initButtonClass);
                          }}
                          onClick={() => {
                            handleInit();
                          }}
                          handleResetReaction={() => {
                            handleResetReaction();
                          }}
                        />
                        <div
                          className="post-like d-flex align-items-center"
                          onClick={e => {
                            e.preventDefault();
                            post.setCommentToggle(!post.commentToggle);
                          }}
                        >
                          <div className="like-img">
                            <img src={Comment} alt="likefill" />
                          </div>
                          <div className="like-count ms-1">
                            <h5 className="m-0 fw-500">
                              {t('userDetail.comment')}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="comment_counter">
                        <ul>
                          <li onClick={() => setVisibleRight(true)}>
                            {post.totalReaction}
                          </li>
                          <li
                            onClick={() => {
                              post.setCommentToggle(!post.commentToggle);
                            }}
                          >
                            <span>{post.totalComment}</span> Comment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {post.commentToggle ? (
                    <div className="show_comment_wrap">
                      <div className="comment-typ">
                        <div className="comment-main-typ d-flex align-items-center mt-2">
                          <div className="comment-typ-profile">
                            <img src={UserPro} alt="userpro" />
                          </div>
                          <div className="messageInput comment-typ-input input-box">
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
                          <div className="comment-typ-btn">
                            <button
                              type="button"
                              className="btn-primary ms-4"
                              to="/employees/masters/create-employee-step-four"
                            >
                              {t('buttonTitle.send')}
                            </button>
                          </div>
                        </div>

                        {showPicker && (
                          <Picker
                            onEmojiSelect={e => {
                              handleEmojiPickup(e);
                            }}
                            data={data}
                            emojiTooltip={true}
                            theme="light"
                          />
                        )}
                      </div>
                      {post.comment?.map(comment => (
                        <div className="comment-reply mt-4">
                          <div className="post_box ">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="post-profile">
                                  <img
                                    src={comment.commenterProfile}
                                    alt="userpro"
                                  />
                                </div>
                                <div className="post-user-name ms-3">
                                  <h6 className="m-0">
                                    {comment.firstName}
                                    <span className="ms-2">
                                      {comment.postTime}
                                    </span>
                                  </h6>
                                </div>
                              </div>
                              <div className="delate_wrap dropdown-toggle">
                                <button
                                  className="btn_delate"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  id="dropdownMenuLink"
                                >
                                  <img src={DotIcon} alt="Delate Icon" />
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <li>
                                    <Link className="dropdown-item">Edit</Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item">
                                      Delete
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="replay-txt">
                              <p className="mt-2 m-0">
                                {comment.postDesctiption}
                              </p>
                            </div>
                            <div className="like-reply mt-3">
                              <div className="row align-items-center">
                                <div className="col-4">
                                  <div className="post-like me-3 d-flex align-items-center">
                                    <Reaction
                                      reactionClass={comment.reactionClass}
                                      initButtonClass={comment.initButtonClass}
                                      onMouseOver={() => {
                                        init(
                                          comment.reactionClass,
                                          comment.initButtonClass,
                                        );
                                      }}
                                      onClick={() => {
                                        handleInit();
                                      }}
                                      handleResetReaction={() => {
                                        handleResetReaction();
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="comment_counter">
                                    <ul>
                                      <li onClick={() => setVisibleRight(true)}>
                                        {comment.replyCount}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        className="reaction_sidebar"
      >
        <div className="sidebar_popup_wrapper">
          <div className="sidebar_title_wrap">
            <h3>{t('title.reactions')}</h3>
          </div>
          <div className="Sidebar_tab_wrap">
            {userReactionDetail?.map(user => (
              <div className="profile_inner px-4 py-2">
                <div className="profile_img_name d-flex align-items-center">
                  <div className="profile_img">
                    <img src={user.userImage} alt="User" />
                    <div className="reaction_img">
                      <img src={user.ractionImage} alt="Like" />
                    </div>
                  </div>
                  <div className="profile-name">
                    <h6 className="m-0 fw-400">{user.userName}</h6>
                    <p className="m-0">{user.userDesignation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sidebar>
    </>
  );
}
