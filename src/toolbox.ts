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
    },
    {
      kind: "block",
      type: "cedar_boolean",
    },
    {
      kind: "block",
      type: "text",
    },
    {
      kind: "block",
      type: "cedar_scope",
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
    },
    {
      kind: "block",
      type: "cedar_math_binary_operator",
    },
    {
      kind: "block",
      type: "cedar_property",
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