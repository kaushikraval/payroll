import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Plus from '../../../Assets/images/plus.svg';
import DownloadButtonIcon from '../../../Assets/images/download.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import EditButtonIcon from '../../../Assets/images/edit.svg';
import Eyes from '../../../Assets/images/eyes.svg';

export default function LetterTemplate() {
  const [letterShow, setLetterShow] = useState(false);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    letterShow: setLetterShow,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
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
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const templateDetail = [
    {
      letterTemplate: 'Address Proof Letter',
      defaultTag: 'Default',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Appointment letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Joining Letter',
      defaultTag: 'Default',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Experience Letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Confirmation Letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Relieving Letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Address Proof Letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Address Proof Letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
    {
      letterTemplate: 'Address Proof Letter',
      defaultTag: '',
      viewActionLogo: Eyes,
      editActionLogo: EditButtonIcon,
      deleteActionLogo: DeleteButtonIcon,
      downloadActionLogo: DownloadButtonIcon,
    },
  ];
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
            <b>Letter</b>
          </li>
          <li>Letter Template</li>
        </ul>
      </div>
      <div className="letter_temp_wrap">
        <div className="letter_temp_top mb-3">
          <div className="row align-items-center">
            <div className="col-sm-6 order-2 order-sm-1">
              <div className="show_entries">
                Show
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                entiries
              </div>
            </div>
            <div className="col-sm-6 order-1 order-sm-2">
              <div className="text-sm-end">
                <Link
                  to="/letter/letter-template/step-one"
                  className="btn-border"
                >
                  <img src={Plus} className="me-2" alt="FilterImage" />
                  Letter Template Design
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one letter_temp_table">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Letter Template</span>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {templateDetail.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {user.letterTemplate}
                        {user.defaultTag === 'Default' && (
                          <span className="badge bedge_primary ms-3">
                            {user.defaultTag}
                          </span>
                        )}
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => setLetterShow(true)}>
                            <Button
                              tooltip="View Letter Template"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={user.viewActionLogo}
                                data-inject-svg
                                alt="EyeImage"
                              />
                            </Button>
                          </li>
                          <li>
                            <Link to="/letter/letter-template/step-one">
                              <Button
                                tooltip="Edit Letter Template"
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button"
                              >
                                <img
                                  src={user.editActionLogo}
                                  data-inject-svg
                                  alt="EditImage"
                                />
                              </Button>
                            </Link>
                          </li>
                          <li>
                            <Button
                              tooltip="Download Letter Template"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={user.downloadActionLogo}
                                data-inject-svg
                                alt="DowanloadImage"
                              />
                            </Button>
                          </li>
                          <li onClick={() => setDeleteDetail(true)}>
                            <Button
                              tooltip="Remove Letter Template"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={user.deleteActionLogo}
                                alt="DeleteImage"
                              />
                            </Button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="table_bottom_wrap">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <p className="m-0 text-center text-sm-start">
                  Showing <span>10</span> to <span>20</span> of
                  <span>20</span> entries
                </p>
              </div>
              <div className="col-sm-6">
                <div className="table_pagination">
                  <ul className="d-flex justify-content-center justify-content-sm-end">
                    <li className="prev">
                      <Link className="w-auto d-block">Previous</Link>
                    </li>
                    <li>
                      <Link className="d-block">1</Link>
                    </li>
                    <li className="active">
                      <Link className="d-block">2</Link>
                    </li>
                    <li className="next">
                      <Link className="w-auto d-block">Next</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Address Proof Letter"
        visible={letterShow}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setLetterShow(false)}
      >
        <div className="lettershow_popup">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="lettershow_inner">
            <h6 className="mb-3">Address Proof Letter</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              nunc in duis turpis ut sit. Commodo libero ut est at. Dolor nulla
              faucibus facilisis purus tincidunt euismod turpis vitae nullam.
              Proin ultrices gravida nisl eleifend ipsum mauris. Aliquet tortor,
              tristique amet platea convallis laoreet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              nunc in duis turpis ut sit. Commodo libero ut est at. Dolor nulla
              faucibus facilisis purus tincidunt euismod turpis vitae nullam.
              Proin ultrices gravida nisl eleifend ipsum mauris. Aliquet tortor,
              tristique amet platea convallis laoreet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              nunc in duis turpis ut sit. Commodo libero ut est at. Dolor nulla
              faucibus facilisis purus tincidunt euismod turpis vitae nullam.
              Proin ultrices gravida nisl eleifend ipsum mauris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              nunc in duis turpis ut sit. Commodo libero ut est at. Dolor nulla
              faucibus facilisis purus tincidunt euismod turpis vitae nullam.
            </p>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Confirm"
        visible={deleteDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setDeleteDetail(false)}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
