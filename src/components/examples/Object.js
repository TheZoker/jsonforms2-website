import React from 'react';
import { Demo } from '../common';

const data = {
  check: true
};

const uischema = {
  type: 'Control',
  scope: '#',
  rule: {
    effect: "ENABLE",
    condition: {
      scope: '#/properties/check',
      schema: {
        const: true
      }
    }
  }
};

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    },
    check: {
      type: 'boolean'
    }
  }
};

export const Object = () => (
  <Demo
    data={data}
    schema={schema}
    uischema={uischema}
  />
);

export default Object
