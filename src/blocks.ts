import Blockly from "blockly";

const BUILTIN_COLOR = 270;
const IDENTIFIER_COLOR = 20;
const OPERATOR_COLOR = 90;
const PERMIT_COLOR = 120;
const FORBID_COLOR = 0;
const POLICY_COLOR = 50;

export function defineCedarBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      type: "cedar_scope",
      message0: "%1::%2",
      args0: [
        {
          type: "field_input",
          name: "ARG1",
        },
        {
          type: "input_value",
          name: "ARG2",
        },
      ],
      inputsInline: true,
      output: null,
      colour: IDENTIFIER_COLOR,
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
      type: "cedar_binary_operator",
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
    {
      type: "cedar_permit",
      message0: "permit %1 to do %2 on %3",
      args0: [
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
      colour: PERMIT_COLOR,
    },
    {
      type: "cedar_permit_when",
      message0: "permit %1 to do %2 on %3 when %4",
      args0: [
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
      colour: PERMIT_COLOR,
    },
    {
      type: "cedar_forbid",
      message0: "forbid %1 to do %2 on %3",
      args0: [
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
      colour: FORBID_COLOR,
    },
    {
      type: "cedar_forbid_when",
      message0: "forbid %1 to do %2 on %3 when %4",
      args0: [
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
      colour: FORBID_COLOR,
    },
  ]);
}
