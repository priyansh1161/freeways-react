import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';

const PanelPrimary = (props) => (
  <Panel header={props.header} footer={props.footer} bsStyle="primary">
    { props.children }
  </Panel>
);

PanelPrimary.propTypes = {
  children: PropTypes.element,
  header: PropTypes.element,
  footer: PropTypes.element
};


export default PanelPrimary;