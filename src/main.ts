import Blockly from 'blockly';

const BUILTIN_COLOR = 270;
const IDENTIFIER_COLOR = 20;
const OPERATOR_COLOR = 90;
const PERMIT_COLOR = 120;
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
    "type": "cedar_builtin",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["principal", "principal"],
          ["action", "action"],
          ["resource", "resource"],
          ["context", "context"],
        ],
      },
    ],
    "colour": BUILTIN_COLOR,
    "output": null,
  },
  {
    "type": "cedar_binary_operator",
    "message0": '%1 %2 %3',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
      },
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["==", "equals"],
          ["!=", "notequals"],
          [">", "greaterthan"],
          ["<", "lessthan"],
          [">=", "greaterthanorequals"],
          ["<=", "lessthanorequals"],
          ["in", "in"],
        ],
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

const entitiesCategory = {
  "kind": "category",
  "name": "Entities",
  "contents": [
    {
      "kind": "block",
      "type": "cedar_builtin"
    },
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "cedar_scope"
    },
  ]
};

const operatorsCategory = {
  "kind": "category",
  "name": "Operators",
  "contents": [
    {
      "kind": "block",
      "type": "cedar_binary_operator"
    },
    {
      "kind": "block",
      "type": "lists_create_with"
    },
  ]
};

const policiesCategory = {
  "kind": "category",
  "name": "Policies",
  "contents": [
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

const toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    policiesCategory,
    entitiesCategory,
    operatorsCategory,
  ]
};

const workspace = Blockly.inject('app', { toolbox: toolbox });
