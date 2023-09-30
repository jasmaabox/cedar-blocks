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
        "name": "ARG1"
      },
      {
        "type": "input_value",
        "name": "ARG2"
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
        "name": "ARG1",
      },
      {
        "type": "field_dropdown",
        "name": "OPERATOR",
        "options": [
          ["==", "=="],
          ["!=", "!="],
          [">", ">"],
          ["<", "<"],
          [">=", ">="],
          ["<=", "<="],
          ["in", "in"],
        ],
      },
      {
        "type": "input_value",
        "name": "ARG2",
      },
    ],
    "output": true,
    "inputsInline": true,
    "colour": OPERATOR_COLOR,
  },
  {
    "type": "cedar_permit",
    "message0": 'permit %1 to do %2 on %3',
    "args0": [
      {
        "type": "input_value",
        "name": "PRINCIPAL",
      },
      {
        "type": "input_value",
        "name": "ACTION",
      },
      {
        "type": "input_value",
        "name": "RESOURCE",
      },
    ],
    "colour": PERMIT_COLOR,
  },
  {
    "type": "cedar_permit_when",
    "message0": 'permit %1 to do %2 on %3 when %4',
    "args0": [
      {
        "type": "input_value",
        "name": "PRINCIPAL",
      },
      {
        "type": "input_value",
        "name": "ACTION",
      },
      {
        "type": "input_value",
        "name": "RESOURCE",
      },
      {
        "type": "input_value",
        "name": "CONDITION",
      },
    ],
    "colour": PERMIT_COLOR,
  },
  {
    "type": "cedar_forbid",
    "message0": 'forbid %1 to do %2 on %3',
    "args0": [
      {
        "type": "input_value",
        "name": "PRINCIPAL",
      },
      {
        "type": "input_value",
        "name": "ACTION",
      },
      {
        "type": "input_value",
        "name": "RESOURCE",
      },
    ],
    "colour": FORBID_COLOR,
  },
  {
    "type": "cedar_forbid_when",
    "message0": 'forbid %1 to do %2 on %3 when %4',
    "args0": [
      {
        "type": "input_value",
        "name": "PRINCIPAL",
      },
      {
        "type": "input_value",
        "name": "ACTION",
      },
      {
        "type": "input_value",
        "name": "RESOURCE",
      },
      {
        "type": "input_value",
        "name": "CONDITION",
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


const cedarGenerator = new Blockly.Generator("cedar");

cedarGenerator.forBlock["cedar_builtin"] = function (block, generator) {
  const value = block.getFieldValue("VALUE");
  return [`${value}`, 0];
}

cedarGenerator.forBlock["cedar_permit"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  return 'permit(\n' +
    [principal, action, resource]
      .map(v => generator.prefixLines(v, generator.INDENT)).join(',\n') +
    '\n);';
}

cedarGenerator.forBlock["cedar_permit_when"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  const condition = generator.valueToCode(block, "CONDITION", 0);
  return 'permit(\n' +
    [principal, action, resource]
      .map(v => generator.prefixLines(v, generator.INDENT)).join(',\n') +
    '\n)\nwhen {\n' +
    generator.prefixLines(condition, generator.INDENT) +
    '\n};';
}

cedarGenerator.forBlock["cedar_forbid"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  return 'forbid(\n' +
    [principal, action, resource]
      .map(v => generator.prefixLines(v, generator.INDENT)).join(',\n') +
    '\n);';
}

cedarGenerator.forBlock["cedar_forbid_when"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  const condition = generator.valueToCode(block, "CONDITION", 0);
  return 'forbid(\n' +
    [principal, action, resource]
      .map(v => generator.prefixLines(v, generator.INDENT)).join(',\n') +
    '\n)\nwhen {\n' +
    generator.prefixLines(condition, generator.INDENT) +
    '\n};';
}

cedarGenerator.forBlock["text"] = function (block, generator) {
  const value = block.getFieldValue("TEXT");
  return [`"${value}"`, 0];
}

cedarGenerator.forBlock["cedar_scope"] = function (block, generator) {
  const arg1 = block.getFieldValue("ARG1");
  const arg2 = generator.valueToCode(block, "ARG2", 0);
  return [`${arg1}::${arg2}`, 0];
}

cedarGenerator.forBlock["cedar_binary_operator"] = function (block, generator) {
  const arg1 = generator.valueToCode(block, "ARG1", 0);
  const arg2 = generator.valueToCode(block, "ARG2", 0);
  const operator = block.getFieldValue("OPERATOR");
  return [`${arg1} ${operator} ${arg2}`, 0];
}

cedarGenerator.forBlock["lists_create_with"] = function (block, generator) {
  const values = [];
  // @ts-ignore
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, `ADD${i}`, 0);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(',\n');
  const code = valueString.length === 0
    ? '[]'
    : '[\n' + generator.prefixLines(valueString, generator.INDENT) + '\n]';
  return [code, 0];
}

workspace.addChangeListener(() => {
  const code = cedarGenerator.workspaceToCode(workspace);
  console.log(code);
});