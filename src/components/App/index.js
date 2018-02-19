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
import { inject, observer} from 'mobx-react';
import ReactHighcharts from 'react-highcharts';

// Components
import LocationPicker from '../../components/LocationPicker';
import InterestDatePicker from '../../components/InterestDatePicker';
import GrapeRadioSelect from '../../components/GrapeRadioSelect';
import DisplayButtonGroup from '../../components/DisplayButtonGroup';
import DisplayTrend from '../../components/DisplayTrend';
import DisplaySeason from '../../components/DisplaySeason';
import DisplayClimateChange from '../../components/DisplayClimateChange';
import InfoWindow from '../../components/InfoWindow';
import PastYearMessage from '../../components/PastYearMessage';

// Styles
import '../../styles/App.css';

var HighchartsExporting = require('highcharts-exporting');
HighchartsExporting(ReactHighcharts.Highcharts);

@inject('store') @observer
class App extends Component {

    constructor(props) {
        super(props);
        this.props.store.app.initInterestDate()
    }

    render() {

        return (
            <div className="App">
                <div className="csftool-input">
                    <LocationPicker
                      namespace='CSF-GRAPEHARD'
                    />
                    <InterestDatePicker />
                    <GrapeRadioSelect />
                    <PastYearMessage />
                    <DisplayButtonGroup />
                </div>
                <div className="csftool-display">
                    <DisplayTrend />
                    <DisplaySeason />
                    <DisplayClimateChange
                      content={this.props.store.app.cc_placeholder_content}
                    />
                    <InfoWindow
                      content={this.props.store.app.info_content}
                      button_label="Back to tool"
                    />
                </div>
                <div className="csftool-location-dialog">
                </div>
            </div>
        );
    }
}

export default App;
