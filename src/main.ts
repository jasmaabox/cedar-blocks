import Blockly from 'blockly';

const VARIABLE_COLOR = 270;
const STRING_COLOR = 120;
const IDENTIFIER_COLOR = 20;
const OPERATOR_COLOR = 90;
const PERMIT_COLOR = 160;
const FORBID_COLOR = 0;

Blockly.defineBlocksWithJsonArray([
  {
    "type": "cedar_scope",
    "message0": '%1::%2',
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": IDENTIFIER_COLOR,
  },
  {
    "type": "cedar_principal",
    "message0": 'principal',
    "colour": VARIABLE_COLOR,
    "output": null,
  },
  {
    "type": "cedar_action",
    "message0": 'action',
    "colour": VARIABLE_COLOR,
    "output": null,
  },
  {
    "type": "cedar_resource",
    "message0": 'resource',
    "colour": VARIABLE_COLOR,
    "output": null,
  },
  {
    "type": "cedar_context",
    "message0": 'context',
    "colour": VARIABLE_COLOR,
    "output": null,
  },
  {
    "type": "cedar_string",
    "message0": "\"%1\"",
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE",
      },
    ],
    "colour": STRING_COLOR,
    "inputsInline": true,
    "output": null,
  },
  // TODO: fix in to take a list
  {
    "type": "cedar_in",
    "message0": '%1 in %2',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
    ],
    "output": true,
    "inputsInline": true,
    "colour": OPERATOR_COLOR,
  },
  {
    "type": "cedar_equals",
    "message0": '%1 == %2',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
    ],
    "output": true,
    "inputsInline": true,
    "colour": OPERATOR_COLOR,
  },
  {
    "type": "cedar_permit",
    "message0": 'permit %1 to %2 on %3',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
    ],
    "colour": PERMIT_COLOR,
  },
  {
    "type": "cedar_permit_when",
    "message0": 'permit %1 to %2 on %3 when %4',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
    ],
    "colour": PERMIT_COLOR,
  },
  {
    "type": "cedar_forbid",
    "message0": 'forbid %1 to %2 on %3',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
    ],
    "colour": FORBID_COLOR,
  },
  {
    "type": "cedar_forbid_when",
    "message0": 'forbid %1 to %2 on %3 when %4',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      },
    ],
    "colour": FORBID_COLOR,
  },
]);

const toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "cedar_scope"
    },
    {
      "kind": "block",
      "type": "cedar_principal"
    },
    {
      "kind": "block",
      "type": "cedar_action"
    },
    {
      "kind": "block",
      "type": "cedar_resource"
    },
    {
      "kind": "block",
      "type": "cedar_context"
    },
    {
      "kind": "block",
      "type": "cedar_string"
    },
    {
      "kind": "block",
      "type": "cedar_in"
    },
    {
      "kind": "block",
      "type": "cedar_equals"
    },
    {
      "kind": "block",
      "type": "cedar_permit"
    },
    {
      "kind": "block",
      "type": "cedar_permit_when"
    },
    {
      "kind": "block",
      "type": "cedar_forbid"
    },
    {
      "kind": "block",
      "type": "cedar_forbid_when"
    },
  ]
};

const workspace = Blockly.inject('app', { toolbox: toolbox });
