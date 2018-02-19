///////////////////////////////////////////////////////////////////////////////
//
// Climate Smart Farming Grape Hardiness and Freeze Risk Tool
// Copyright (c) 2018 Cornell Institute for Climate Smart Solutions
// All Rights Reserved
//
// This software is published under the provisions of the GNU General Public
// License <http://www.gnu.org/licenses/>. A text copy of the license can be
// found in the file 'LICENSE' included with this software.
//
// A text copy of the copyright notice, licensing conditions and disclaimers
// is available in the file 'COPYRIGHT' included with this software.
//
///////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import DatePicker from 'react-datepicker';
//import Icon from 'react-icons-kit';
import { withBaseIcon } from 'react-icons-kit';
import { calendar } from 'react-icons-kit/fa/calendar';       
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/InterestDatePicker.css';

class DatePickerButton extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        value: PropTypes.string
    };
    render() {
        const {value, onClick} = this.props;
        //const IconGreen14 = withBaseIcon({ size: 14, style: {color:'#4ca20b'}});
        const IconGreen14 = withBaseIcon({ size: 14, style: {color:'#006600'}});

        return (
            <div className="date-picker-button-group">
                <button
                  className="date-picker-button"
                  onClick={onClick}>
                  {value}
                  <IconGreen14 icon={calendar} className="cal-icon" onClick={onClick} />
                </button>
            </div>
        );
    }
}

@inject("store") @observer
class InterestDatePicker extends Component {

  isDayInGrowingSeason = (d) => {
    let month = moment(d).month() + 1
    let day = moment(d).date()
    if (month !== 9) {
        let validMonths = [1,2,3,4,5,6,9,10,11,12]
        return validMonths.includes(month)
    } else {
        let validDaysInSept = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        return validDaysInSept.includes(day)
    }
  }

  render() {
        return (
            <div className='datepicker-input-div'>
            <div className='datepicker-input-label'>
              <label><b>Date of Interest:</b></label>
            </div>
            <div className='datepicker-div'>
              <DatePicker
                  customInput={<DatePickerButton />}
                  className='input-date'
                  calendarClassName='calendar-pdate'
                  readOnly={true}
                  fixedHeight={true}
                  //selected={moment(this.props.store.app.getInterestDate,"MM-DD-YYYY")}
                  selected={this.props.store.app.getInterestDate}
                  onChange={this.props.store.app.updateInterestDate}
                  minDate={moment("2015-09-15")}
                  maxDate={moment()}
                  showMonthDropdown
                  showYearDropdown
                  scrollableMonthDropdown
                  scrollableYearDropdown
                  dropdownMode="select"
                  filterDate={this.isDayInGrowingSeason}
                  popperPlacement="right"
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: '40px, 5px'
                    },
                  }}
                  placeholderText="NONE"
              >
                <div className="calendar-message">
                </div>
              </DatePicker>
            </div>
            </div>
        )
  }

};

export default InterestDatePicker;
