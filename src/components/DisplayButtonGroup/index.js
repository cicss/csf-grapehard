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
import TrendButton from '../../components/TrendButton';
import SeasonButton from '../../components/SeasonButton';
import ClimateChangeButton from '../../components/ClimateChangeButton';
import InfoButton from '../../components/InfoButton';

import '../../styles/DisplayButtonGroup.css';

class DisplayButtonGroup extends Component {

  render() {
        return (
            <div className="display-button-group">
                    <table><tbody>
                    <tr>
                    <td>
                      <TrendButton button_label="30-Day Results" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                      <SeasonButton button_label="Season To Date" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                      <ClimateChangeButton button_label="Climate Change" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                      <InfoButton button_label="Info" />
                    </td>
                    </tr>
                    </tbody></table>
            </div>
        )
  }

};

export default DisplayButtonGroup;
