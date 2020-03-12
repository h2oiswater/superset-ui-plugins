/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable react/jsx-sort-default-props, react/sort-prop-types */
/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

import "./EchartsBarYCategoryStack.css";

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

const defaultProps = {
  width: 400,
  height: 400
};

class EchartsBarYCategoryStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height } = this.props;

    return (
     <div width={width} height={height}>你当我是ECharts吧</div>
    );
  }
}

EchartsBarYCategoryStack.propTypes = propTypes;
EchartsBarYCategoryStack.defaultProps = defaultProps;

export default EchartsBarYCategoryStack;
