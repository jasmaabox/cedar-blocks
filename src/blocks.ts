import Blockly from "blockly";

const BUILTIN_COLOR = 270;
const SCOPE_COLOR = 190;
const OPERATOR_COLOR = 90;
const POLICY_COLOR = 50;
const PROPERTY_COLOR = 170;
const IDENTIFIER_COLOR = 0;
const LITERAL_COLOR = 190;

export function defineCedarBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      type: "cedar_scope",
      message0: "%1::%2",
      args0: [
        {
          type: "input_value",
          name: "ARG1",
        },
        {
          type: "input_value",
          name: "ARG2",
        },
      ],
      inputsInline: true,
      output: null,
      colour: SCOPE_COLOR,
    },
    {
      type: "cedar_builtin",
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "VALUE",
          options: [
            ["principal", "principal"],
            ["action", "action"],
            ["resource", "resource"],
            ["context", "context"],
          ],
        },
      ],
      colour: BUILTIN_COLOR,
      output: null,
    },
    {
      type: "cedar_boolean",
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "VALUE",
          options: [
            ["true", "true"],
            ["false", "false"],
          ],
        },
      ],
      colour: LITERAL_COLOR,
      output: null,
    },
    {
      type: "cedar_boolean_binary_operator",
      message0: "%1 %2 %3",
      args0: [
        {
          type: "input_value",
          name: "ARG1",
        },
        {
          type: "field_dropdown",
          name: "OPERATOR",
          options: [
            ["==", "=="],
            ["!=", "!="],
            [">", ">"],
            ["<", "<"],
            [">=", ">="],
            ["<=", "<="],
            ["&&", "&&"],
            ["||", "||"],
            ["in", "in"],
          ],
        },
        {
          type: "input_value",
          name: "ARG2",
        },
      ],
      output: true,
      inputsInline: true,
      colour: OPERATOR_COLOR,
    },
    {
      type: "cedar_math_binary_operator",
      message0: "%1 %2 %3",
      args0: [
        {
          type: "input_value",
          name: "ARG1",
        },
        {
          type: "field_dropdown",
          name: "OPERATOR",
          options: [
            ["+", "+"],
            ["-", "-"],
            ["*", "*"],
            ["/", "/"],
          ],
        },
        {
          type: "input_value",
          name: "ARG2",
        },
      ],
      output: true,
      inputsInline: true,
      colour: OPERATOR_COLOR,
    },
    {
      type: "cedar_identifier",
      message0: "%1",
      args0: [
        {
          type: "field_input",
          name: "VALUE",
        },
      ],
      output: true,
      inputsInline: true,
      colour: IDENTIFIER_COLOR,
    },
    {
      type: "cedar_property",
      message0: "%1.%2",
      args0: [
        {
          type: "input_value",
          name: "ARG1",
        },
        {
          type: "input_value",
          name: "ARG2",
        },
      ],
      output: true,
      inputsInline: true,
      colour: PROPERTY_COLOR,
    },
    {
      type: "cedar_policy",
      message0: "%1 %2 to do %3 on %4",
      args0: [
        {
          type: "field_dropdown",
          name: "EFFECT",
          options: [
            ["permit", "permit"],
            ["forbid", "forbid"],
          ],
        },
        {
          type: "input_value",
          name: "PRINCIPAL",
        },
        {
          type: "input_value",
          name: "ACTION",
        },
        {
          type: "input_value",
          name: "RESOURCE",
        },
      ],
      nextStatement: null,
      colour: POLICY_COLOR,
    },
    {
      type: "cedar_conditional",
      message0: "%1 %2",
      args0: [
        {
          type: "field_dropdown",
          name: "CONDITION_KEYWORD",
          options: [
            ["when", "when"],
            ["unless", "unless"],
          ],
        },
        {
          type: "input_value",
          name: "CONDITION_BODY",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      colour: POLICY_COLOR,
    },
    {
      type: "cedar_policy_when",
      message0: "%1 %2 to do %3 on %4 when %5",
      args0: [
        {
          type: "field_dropdown",
          name: "EFFECT",
          options: [
            ["permit", "permit"],
            ["forbid", "forbid"],
          ],
        },
        {
          type: "input_value",
          name: "PRINCIPAL",
        },
        {
          type: "input_value",
          name: "ACTION",
        },
        {
          type: "input_value",
          name: "RESOURCE",
        },
        {
          type: "input_value",
          name: "CONDITION",
        },
      ],
      colour: POLICY_COLOR,
    },
  ]);
}
