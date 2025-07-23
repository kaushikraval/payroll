import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import Input from '../../Common/Input';
import TextArea from '../../Common/TextArea';
import userImage from '../../../Assets/images/user8.png';

export default function CreateGeoFancing() {
  const [locationSelect, setLocationSelect] = useState([]);

  const locationSelectOption = [
    {
      label: 'Oozee Technology, 406, Dhara Arcade, Mahadev......',
      value: 'Oozee',
    },
    {
      label: 'Oozee Technology, 406, Dhara Arcade, Mahadev......',
      value: 'Oozee',
    },

    {
      label: 'Oozee Technology, 406, Dhara Arcade, Mahadev......',
      value: 'Oozee',
    },

    {
      label: 'Oozee Technology, 406, Dhara Arcade, Mahadev......',
      value: 'Oozee',
    },
  ];

  const locationSelectHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={userImage}
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
            <b>Scheme</b>
          </li>
          <li>
            <b>Attendance</b>
          </li>
          <li>
            <b>
              <Link to="/scheme/attendance/geo-fancing">Geo Fancing</Link>
            </b>
          </li>
          <li>Add Geo Fancing</li>
        </ul>
      </div>
      <div className="create_geo_fen_wrap bg_white_box p-3">
        <div className="create_geo_fen_inner">
          <div className="row">
            <div className="col-md-4">
              <div className="form_group">
                <label>Search Geo Location</label>
                <ReactSelectSingle
                  value={locationSelect}
                  options={locationSelectOption}
                  onChange={e => {
                    setLocationSelect(e.value);
                  }}
                  optionLabel="name"
                  filter={true}
                  placeholder="Search Geo Location"
                  cclassName="multiselect-custom"
                  itemTemplate={locationSelectHandleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Latitude</label>
                <Input type="text" placeholder="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Description</label>
                <TextArea placeholder="Write Description" rows={1} cols={10} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Longitude</label>
                <Input type="number" placeholder="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>Radius</label>
                <Input type="number" placeholder="Enter Radius" />
              </div>
            </div>
            <div className="col-12">
              <div className="form_group"></div>
            </div>
          </div>
          <div className="google_map_wrap">
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.864111781899!2d72.8833740153344!3d21.237236486003525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef154f3a105%3A0x836faf5465bda1b2!2sOOZEE%20Technologies!5e0!3m2!1sen!2sin!4v1675942285954!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
        <div className="btn_group d-flex justify-content-end mt-4">
          <Link
            to="/scheme/attendance/geo-fancing"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link className="btn-primary" to="/scheme/attendance/geo-fancing">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
