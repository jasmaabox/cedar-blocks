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
      type: "cedar_binary_operator",
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
    },
    {
      kind: "block",
      type: "cedar_policy_when",
    },
    {
      kind: "block",
      type: "cedar_permit",
    },
    {
      kind: "block",
      type: "cedar_permit_when",
    },
    {
      kind: "block",
      type: "cedar_forbid",
    },
    {
      kind: "block",
      type: "cedar_forbid_when",
    },
  ],
};

export const toolbox = {
  kind: "categoryToolbox",
  contents: [policiesCategory, entitiesCategory, operatorsCategory],
};
