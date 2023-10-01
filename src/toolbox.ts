const entitiesCategory = {
  kind: "category",
  name: "Entities",
  contents: [
    {
      kind: "block",
      type: "cedar_builtin",
    },
    {
      kind: "block",
      type: "cedar_identifier",
      fields: {
        "VALUE": "User"
      }
    },
    {
      kind: "block",
      type: "cedar_boolean",
    },
    {
      kind: "block",
      type: "cedar_number",
      fields: {
        "VALUE": 0,
      }
    },
    {
      kind: "block",
      type: "text",
      fields: {
        "TEXT": "Alice",
      }
    },
    {
      kind: "block",
      type: "cedar_scope",
      inputs: {
        "ARG1": {
          "shadow": {
            "type": "cedar_identifier",
            "fields": {
              "VALUE": "User"
            },
          },
        },
        "ARG2": {
          "shadow": {
            "type": "text",
            "fields": {
              "TEXT": "Alice"
            },
          },
        },
      }
    },
  ],
};

const operatorsCategory = {
  kind: "category",
  name: "Operators",
  contents: [
    {
      kind: "block",
      type: "cedar_boolean_binary_operator",
      inputs: {
        "ARG1": {
          "shadow": {
            "type": "cedar_number",
            "fields": {
              "VALUE": 0
            },
          },
        },
        "ARG2": {
          "shadow": {
            "type": "cedar_number",
            "fields": {
              "VALUE": 0
            },
          },
        },
      }
    },
    {
      kind: "block",
      type: "cedar_math_binary_operator",
      inputs: {
        "ARG1": {
          "shadow": {
            "type": "cedar_number",
            "fields": {
              "VALUE": 0
            },
          },
        },
        "ARG2": {
          "shadow": {
            "type": "cedar_number",
            "fields": {
              "VALUE": 0
            },
          },
        },
      }
    },
    {
      kind: "block",
      type: "cedar_property",
      inputs: {
        "ARG1": {
          "shadow": {
            "type": "cedar_builtin",
            "fields": {
              "VALUE": "context"
            },
          },
        },
        "ARG2": {
          "shadow": {
            "type": "cedar_identifier",
            "fields": {
              "VALUE": "mfa_authenticated"
            },
          },
        },
      }
    },
    {
      kind: "block",
      type: "lists_create_with",
    },
  ],
};

const policiesCategory = {
  kind: "category",
  name: "Policies",
  contents: [
    {
      kind: "block",
      type: "cedar_policy",
      inputs: {
        "PRINCIPAL": {
          "shadow": {
            "type": "cedar_builtin",
            "fields": {
              "VALUE": "principal"
            },
          },
        },
        "ACTION": {
          "shadow": {
            "type": "cedar_builtin",
            "fields": {
              "VALUE": "action"
            },
          },
        },
        "RESOURCE": {
          "shadow": {
            "type": "cedar_builtin",
            "fields": {
              "VALUE": "resource"
            },
          },
        },
      }
    },
    {
      kind: "block",
      type: "cedar_conditional",
      inputs: {
        "CONDITION_BODY": {
          "shadow": {
            "type": "cedar_builtin",
            "fields": {
              "VALUE": "context"
            },
          },
        },
      }
    },
  ],
};

export const categoryToolbox = {
  kind: "categoryToolbox",
  contents: [policiesCategory, entitiesCategory, operatorsCategory],
};

export const flyoutToolbox = {
  kind: "flyoutToolbox",
  contents: [
    ...policiesCategory.contents,
    ...entitiesCategory.contents,
    ...operatorsCategory.contents,
  ],
}