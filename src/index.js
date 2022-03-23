/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import ConnectorsExtension from './ConnectorsExtension';
import ConnectorTaskRenderer from './ConnectorTaskRenderer';

import ChangeMenuModule from './change-menu';
import ElementTemplateChooserModule from './element-template-chooser';
import ReplaceMenuModule from './replace-menu';
import AppendMenuModule from './append-menu';


export default {
  __depends__: [
    ChangeMenuModule,
    ElementTemplateChooserModule,
    ReplaceMenuModule,
    AppendMenuModule
  ],
  __init__: [
    'connectorsExtension',
    'connectorTaskRenderer'
  ],
  connectorsExtension: ['type', ConnectorsExtension],
  connectorTaskRenderer: ['type', ConnectorTaskRenderer]
};
