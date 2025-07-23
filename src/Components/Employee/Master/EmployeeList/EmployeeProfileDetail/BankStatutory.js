import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';
import Input from '../../../../Common/Input';
import PlusIcon from '../../../../../Assets/images/plus.svg';
import ReactSelectSingle from '../../../../Common/ReactSelectSingle';
import { Button } from 'primereact/button';
import EditIcon from '../../../../../Assets/images/edit.svg';
import { useTranslation } from 'react-i18next';
import ReactCheckbox from 'Components/Common/ReactCheckbox';

export default function BankStatutory() {
  const { t } = useTranslation();
  const [educationDetails, setEducationDetails] = useState(false);
  const [bankName, setBankName] = useState([]);
  const [accountType, setAccountType] = useState([]);
  const [esiCheckBox, setEsiCheckBox] = useState([]);
  const [employeeType, setEmployeeType] = useState([]);
  const esiCheckBoxChange = e => {
    let selectedEsiCheckBox = [...esiCheckBox];

    if (selectedEsiCheckBox.length <= 0 && e.checked) {
      selectedEsiCheckBox.push(e.value);
    } else {
      if (!esiCheckBox.includes(e.value)) {
        selectedEsiCheckBox.push(e.value);
      } else {
        selectedEsiCheckBox.splice(selectedEsiCheckBox.indexOf(e.value), 1);
      }
    }
    setEsiCheckBox(selectedEsiCheckBox);
  };
  const dialogFuncMap = {
    educationDetails: setEducationDetails,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const employeeTypeOption = [
    { label: 'Full Time', value: 'FullTime' },
    { label: 'Part Time', value: 'PartTime' },
    { label: 'Contract', value: 'Contract' },
  ];

  const bankNameOptions = [
    { label: 'SBI Bank', value: 'SBI Bank' },
    { label: 'Bank of Baroda', value: 'Bank of Baroda' },
    { label: 'ICICI Bank', value: 'ICICI Bank' },
    { label: 'HDFC Bank', value: 'HDFC Bank' },
    { label: 'IDFC Bank', value: 'IDFC Bank' },
    { label: 'IDBI Bank', value: 'IDBI Bank' },
    { label: 'Kotak Mahindra Bank', value: 'Kotak Mahindra Bank' },
  ];
  const accountTypeOptions = [
    { label: 'Saving Account', value: 'Saving Account' },
    { label: 'Current Account', value: 'Current Account' },
    { label: 'Salary Account', value: 'Salary Account' },
  ];
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end">
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
  return (
    <div className="bank_statutory_wrapper">
      <div className="bg_white_box mb-3">
        <div className="employee_education_header p-3">
          <div className="row">
            <div className="col-6">
              <h6 className="m-0">{t('bank_statutory.bank_details')}</h6>
            </div>
            <div className="col-6 text-end">
              <Link
                className="btn-border small"
                onClick={() => onClick('educationDetails')}
              >
                <img src={PlusIcon} alt="PlusIcon" className="me-1" />{' '}
                {t('title.add')}
              </Link>
              <Dialog
                header="Edit Bank Details"
                visible={educationDetails}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('educationDetails')}
                onHide={() => onHide('educationDetails')}
              >
                <div className="emergency_contact_wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('bank_statutory.bank_name')}</label>
                        <ReactSelectSingle
                          value={bankName}
                          options={bankNameOptions}
                          filter
                          onChange={e => {
                            setBankName(e.value);
                          }}
                          placeholder={t(
                            'bank_statutory.bank_name_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('bank_statutory.branch_name')} </label>
                        <Input
                          type="text"
                          placeholder={t(
                            'bank_statutory.branch_name_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('bank_statutory.bank_account_no')} </label>
                        <Input
                          type="text"
                          placeholder={t(
                            'bank_statutory.bank_account_no_placeholder',
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('bank_statutory.ifsc_code')} </label>
                        <Input
                          type="text"
                          placeholder={t('bank_statutory.ifsc_code')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('bank_statutory.account_type')}</label>
                        <ReactSelectSingle
                          value={accountType}
                          options={accountTypeOptions}
                          filter
                          onChange={e => {
                            setAccountType(e.value);
                          }}
                          placeholder={t('bank_statutory.account_type')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('bank_statutory.name_as_per_bank')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'bank_statutory.name_as_per_bank_placeholder',
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="data_table_one">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>
                    <span>{t('bank_statutory.bank_name')}</span>
                  </th>
                  <th>
                    <span>{t('bank_statutory.branch_name')}</span>
                  </th>
                  <th>
                    <span>{t('bank_statutory.bank_account_no')}</span>
                  </th>
                  <th>
                    <span>{t('bank_statutory.ifsc_code')}</span>
                  </th>
                  <th>
                    <span>{t('bank_statutory.account_type')}</span>
                  </th>
                  <th>
                    <span>{t('bank_statutory.name_as_per_bank')}</span>
                  </th>
                  <th>{t('title.action')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('bank_statutory.bank_name_value')}</td>
                  <td>{t('employee_profile_detail.place_of_birth_value')}</td>
                  <td>{t('bank_statutory.bank_account_no_value')}</td>
                  <td>{t('bank_statutory.ifsc_code_value')}</td>
                  <td>{t('bank_statutory.account_type_value')}</td>
                  <td>{t('userDetail.firstName')}</td>
                  <td>
                    <img
                      src={EditIcon}
                      alt="edit icon"
                      onClick={() => onClick('educationDetails')}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg_white_box mb-3 p-3">
        <div className="form_group checkbox_wrap mb-0">
          <ReactCheckbox
            inputId="esiCheckBox"
            name="esiCheckBox"
            value="esiCheckBox"
            onChange={esiCheckBoxChange}
            checked={esiCheckBox.indexOf('esiCheckBox') !== -1}
          />
          <label htmlFor="esiCheckBox">ESI</label>
        </div>
        {esiCheckBox.includes('esiCheckBox') && (
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form_group">
                <label>ESIC Group</label>
                <ReactSelectSingle
                  value={employeeType}
                  options={employeeTypeOption}
                  filter
                  onChange={e => {
                    setEmployeeType(e.value);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>ESIC Number</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg_white_box mb-3 p-3">
        <div className="form_group checkbox_wrap mb-0">
          <ReactCheckbox
            inputId="pfCheckBox"
            name="pfCheckBox"
            value="pfCheckBox"
            onChange={esiCheckBoxChange}
            checked={esiCheckBox.indexOf('pfCheckBox') !== -1}
          />
          <label htmlFor="pfCheckBox">PF</label>
        </div>
        {esiCheckBox.includes('pfCheckBox') && (
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form_group">
                <label>PF Group</label>
                <ReactSelectSingle
                  value={employeeType}
                  options={employeeTypeOption}
                  filter
                  onChange={e => {
                    setEmployeeType(e.value);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>PF Number</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form_group">
                <label>UAN Number</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg_white_box mb-3 p-3">
        <div className="form_group checkbox_wrap mb-0">
          <ReactCheckbox
            inputId="lwfCheckBox"
            name="lwfCheckBox"
            value="lwfCheckBox"
            onChange={esiCheckBoxChange}
            checked={esiCheckBox.indexOf('lwfCheckBox') !== -1}
          />
          <label htmlFor="lwfCheckBox">LWF</label>
        </div>
      </div>
      <div className="bg_white_box mb-3 p-3">
        <div className="form_group checkbox_wrap mb-0">
          <ReactCheckbox
            inputId="ptCheckBox"
            name="ptCheckBox"
            value="ptCheckBox"
            onChange={esiCheckBoxChange}
            checked={esiCheckBox.indexOf('ptCheckBox') !== -1}
          />
          <label htmlFor="ptCheckBox">PT</label>
        </div>
      </div>
    </div>
  );
}
