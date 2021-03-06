'use strict';
import React from 'react/addons';

import BemMixin from '../utils/BemMixin';
import PureRenderMixin from '../utils/PureRenderMixin';


const CalendarSelection = React.createClass({
  mixins: [BemMixin, PureRenderMixin],

  render() {
    let {modifier, pending} = this.props;
    let modifiers = {[modifier]: true};
    let states = {
      pending
    };

    return (
      <div className={this.cx({states, modifiers})} />
    );
  }
});

export default CalendarSelection;
