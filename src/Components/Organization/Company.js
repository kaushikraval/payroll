import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import HomeIcon from '../../Assets/images/home-blue.svg';
import OfficeVector from '../../Assets/images/office-vector.svg';
import CompanyProfile from '../../Assets/images/company-profile.png';
import EditIcon from '../../Assets/images/EditIcon.svg';
import EditIconBlue from '../../Assets/images/edit-blue.svg';
import { TabView, TabPanel } from 'primereact/tabview';

export default function Company() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [editProfile, setEditProfile] = useState(false);
  const [basicDetail, setBasicDetail] = useState(false);
  const [statutoryDetail, setStatutoryDetail] = useState(false);
  const [localeDetail, setLocaleDetail] = useState(false);
  const [citySelect, setCitySelect] = useState([]);
  const [stateSelect, setStateSelect] = useState([]);
  const [industrySelect, setIndustrySelect] = useState([]);
  const [countrySelect, setCountrySelect] = useState([]);
  const [timeZoneSelect, setTimeZoneSelect] = useState([]);
  const [currencySelect, setCurrencySelect] = useState([]);
  const dialogFuncMap = {
    editProfile: setEditProfile,
    basicDetail: setBasicDetail,
    statutoryDetail: setStatutoryDetail,
    localeDetail: setLocaleDetail,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const countrySelectOption = [
    { label: 'India', value: 'India' },
    { label: 'Israel', value: 'Israel' },
    { label: 'Switzerland', value: 'Switzerland' },
    { label: 'Turkey', value: 'Turkey' },
    { label: 'Iran', value: 'Iran' },
    { label: 'Germany', value: 'Germany' },
    { label: 'Togo', value: 'Togo' },
    { label: 'Holy See', value: 'Holy See' },
  ];
  const stateSelectOption = [
    { label: 'Gujrat', value: 'Gujrat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Maharashtra', value: 'Maharashtra' },
  ];
  const citySelectOption = [
    { label: 'Surat', value: 'Surat' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Hyderabad', value: 'Hyderabad' },
    { label: 'Ahmedabad', value: 'Ahmedabad' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Kolkata', value: 'Kolkata' },
  ];
  const industrySelectOption = [
    { label: 'Manufacturing', value: 'Manufacturing' },
    { label: 'Confirmed', value: 'Confirmed' },
    { label: 'Probation', value: 'Probation' },
    { label: 'Trainee', value: 'Trainee' },
  ];
  const currencySelectOption = [
    { label: 'Rupee', value: 'Rupee' },
    { label: 'Doller', value: 'Doller' },
    { label: 'Pound', value: 'Pound' },
    { label: 'Dinar', value: 'Dinar' },
  ];
  const timeZoneSelectOption = [
    {
      label: 'Kolkata',
      value: 'Kolkata',
    },
    {
      label: 'Russia',
      value: 'Russia',
    },
    {
      label: 'Peris',
      value: 'Peris',
    },
  ];
  const items = [
    {
      label: 'Upload Image',
      icon: 'pi pi-camera',
    },
    {
      label: 'Remove Image',
      icon: 'pi pi-trash',
    },
  ];
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
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
  const editProfileFooter = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
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
            <b>Organization</b>
          </li>
          <li>Company</li>
        </ul>
      </div>
      <div className="company_main_wrap">
        <div className="office_vector_wrap bg-white text-end">
          <img src={OfficeVector} alt="officevector" />
        </div>
        <div className="company_profile_wrap">
          <div className="d-sm-flex align-items-center">
            <div className="company_title_left_wrap me-3">
              <div className="company_image_wrap">
                <img src={CompanyProfile} alt="companyprofile" />
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between flex-grow-1">
              <div className="company_title_wrap">
                <h5 className="my-3">CMCREATION PVT LTD</h5>
              </div>
              <div className="edit_profile_wrap text-end">
                <button
                  type="button"
                  className="btn-border"
                  onClick={() => onClick('editProfile')}
                >
                  <img src={EditIconBlue} className="me-2" alt="EditImage" />
                  Edit Profile
                </button>
                <Dialog
                  header="Edit Profile"
                  visible={editProfile}
                  draggable={false}
                  resizable={false}
                  className="small_popup"
                  footer={editProfileFooter('editProfile')}
                  onHide={() => onHide('editProfile')}
                >
                  <div className="company_iamge_popup">
                    <div className="company_image_wrap">
                      <img src={CompanyProfile} alt="companyprofile" />
                      <SplitButton className="p-button-primary" model={items} />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form_group m-0">
                          <label>About Company</label>
                          <TextArea placeholder="Placeholder Text" rows={4} />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group m-0">
                          <label>Vision & Mission</label>
                          <TextArea placeholder="Placeholder Text" rows={4} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="company_detail_tab_wrap">
          <TabView
            activeIndex={activeIndex}
            onTabChange={e => setActiveIndex(e.index)}
          >
            <TabPanel header="Basic Details">
              <div className="basic_title_wrap">
                <h6 className="m-0">Basic Details</h6>
                <button
                  type="button"
                  className="btn-trans ms-5"
                  onClick={() => onClick('basicDetail')}
                >
                  <img src={EditIcon} alt="HomeIcon" />
                </button>
                <Dialog
                  header="Basic Details"
                  visible={basicDetail}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('basicDetail')}
                  onHide={() => onHide('basicDetail')}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Compnay Name</label>
                        <Input type="text" placeholder="CMCREATION PVT LTD" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Address Line 1</label>
                        <Input
                          type="text"
                          placeholder="PLOT 2-3, KUBER PARK SOCIETY,"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Phone No</label>
                        <Input type="number" placeholder="0261 22446688" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Address Line 2</label>
                        <Input type="text" placeholder="VEDROAD" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Mobile No</label>
                        <Input type="number" placeholder="9173317359" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>City</label>
                        <ReactSelectSingle
                          value={citySelect}
                          options={citySelectOption}
                          onChange={e => {
                            setCitySelect(e.value);
                          }}
                          filter={true}
                          placeholder="SURAT"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Website</label>
                        <Input type="text" placeholder="www.cmcreation.in" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>State/Province</label>
                        <ReactSelectSingle
                          value={stateSelect}
                          options={stateSelectOption}
                          onChange={e => {
                            setStateSelect(e.value);
                          }}
                          filter={true}
                          placeholder="GUJARAT"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Director Name</label>
                        <Input type="text" placeholder="Akshay Gondaliya" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Pincode</label>
                        <Input type="text" placeholder="395004" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Industry</label>
                        <ReactSelectSingle
                          value={industrySelect}
                          options={industrySelectOption}
                          onChange={e => {
                            setIndustrySelect(e.value);
                          }}
                          filter={true}
                          placeholder="Manufacturing"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Start Date</label>
                        <ReactCelender value="date" placeholder="22 Nov 2022" />
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
              <div className="basic_detail_wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="basic_detail_left">
                      <ul>
                        <li>
                          <b>Company Name :</b>
                          <span>CMCREATION PVT LTD</span>
                        </li>
                        <li>
                          <b>Address Line 1 :</b>
                          <span>PLOT 2-3, KUBER PARK SOCIETY,</span>
                        </li>
                        <li>
                          <b>Address Line 1 :</b>
                          <span>VEDROAD</span>
                        </li>
                        <li>
                          <b>City :</b>
                          <span>SURAT</span>
                        </li>
                        <li>
                          <b>State/Province :</b>
                          <span>GUJARAT</span>
                        </li>
                        <li>
                          <b>Pincode :</b>
                          <span>395004</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="basic_detail_right">
                      <ul>
                        <li>
                          <b>Phone No :</b>
                          <span>0261 22446688</span>
                        </li>
                        <li>
                          <b>Mobile No :</b>
                          <span>9173317359</span>
                        </li>
                        <li>
                          <b>Website :</b>
                          <span>www.cmcreation.in</span>
                        </li>
                        <li>
                          <b>Director Name :</b>
                          <span>Akshay Gondaliya</span>
                        </li>
                        <li>
                          <b>Industry :</b>
                          <span>Manufacturing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Statutory Details">
              <div className="basic_title_wrap Statutory_title_wrap">
                <h6 className="m-0">Statutory Details</h6>
                <button
                  type="button"
                  className="btn-trans ms-5"
                  onClick={() => onClick('statutoryDetail')}
                >
                  <img src={EditIcon} alt="HomeIcon" />
                </button>
                <Dialog
                  header="Statutory Details"
                  visible={statutoryDetail}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('statutoryDetail')}
                  onHide={() => onHide('statutoryDetail')}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>Compnay Register No</label>
                        <Input
                          type="text"
                          placeholder="L21091KA2019OPC141331"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>TAN No</label>
                        <Input type="text" placeholder="PDES03028F" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>PAN No</label>
                        <Input type="text" placeholder="ALWPG5809L" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>PF No</label>
                        <Input
                          type="text"
                          placeholder="XX/XXX/1234567/7654321"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>ESI No</label>
                        <Input
                          type="number"
                          placeholder="31-00-123456-000-0001"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>GST No</label>
                        <Input type="text" placeholder="18AABCU9603R1ZM" />
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
              <div className="basic_detail_wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="basic_detail_left">
                      <ul>
                        <li>
                          <b>Company Register No :</b>
                          <span>L21091KA2019OPC141331</span>
                        </li>
                        <li>
                          <b>TAN No :</b>
                          <span>PDES03028F</span>
                        </li>
                        <li>
                          <b>GST No :</b>
                          <span>18AABCU9603R1ZM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="basic_detail_right">
                      <ul>
                        <li>
                          <b>PAN No :</b>
                          <span>ALWPG5809L</span>
                        </li>
                        <li>
                          <b>PF No :</b>
                          <span>XX/XXX/1234567/7654321</span>
                        </li>
                        <li>
                          <b>ESI No :</b>
                          <span>31-00-123456-000-0001</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Locale Details">
              <div className="basic_title_wrap Statutory_title_wrap">
                <h6 className="m-0">Locale Details</h6>
                <button
                  type="button"
                  className="btn-trans ms-5"
                  onClick={() => onClick('localeDetail')}
                >
                  <img src={EditIcon} alt="HomeIcon" />
                </button>
                <Dialog
                  header="Locale Details"
                  visible={localeDetail}
                  draggable={false}
                  resizable={false}
                  className="small_popup"
                  footer={renderFooter('localeDetail')}
                  onHide={() => onHide('localeDetail')}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form_group">
                        <label>Country</label>
                        <ReactSelectSingle
                          value={countrySelect}
                          options={countrySelectOption}
                          onChange={e => {
                            setCountrySelect(e.value);
                          }}
                          filter={true}
                          placeholder="India"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <label>Time Zone</label>
                        <ReactSelectSingle
                          value={timeZoneSelect}
                          options={timeZoneSelectOption}
                          onChange={e => {
                            setTimeZoneSelect(e.value);
                          }}
                          filter={true}
                          placeholder="(UTC +05:30)India Time(Asia/Kolkata)"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <label>Currency</label>
                        <ReactSelectSingle
                          value={currencySelect}
                          options={currencySelectOption}
                          onChange={e => {
                            setCurrencySelect(e.value);
                          }}
                          filter={true}
                          placeholder="India Rupee(INR)"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
              <div className="basic_detail_wrap">
                <div className="row">
                  <div className="col-md-5">
                    <ul>
                      <li>
                        <b>Country :</b>
                        <span>INDIA</span>
                      </li>
                      <li>
                        <b>Time Zone :</b>
                        <span>(UTC +05:30)India Time(Asia/Kolkata)</span>
                      </li>
                      <li>
                        <b>Currency :</b>
                        <span>India Rupee(INR)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
