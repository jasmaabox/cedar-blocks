import Blockly from "blockly";

export const cedarGenerator = new Blockly.Generator("cedar");

cedarGenerator.forBlock["cedar_builtin"] = function (block, generator) {
  const value = block.getFieldValue("VALUE");
  return [`${value}`, 0];
};

cedarGenerator.forBlock["cedar_policy"] = function (block, generator) {
  const effect = block.getFieldValue("EFFECT");
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  return (
    effect +
    "(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n);"
  );
};

cedarGenerator.forBlock["cedar_policy_when"] = function (block, generator) {
  const effect = block.getFieldValue("EFFECT");
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  const condition = generator.valueToCode(block, "CONDITION", 0);
  return (
    effect +
    "(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n)\nwhen {\n" +
    generator.prefixLines(condition, generator.INDENT) +
    "\n};"
  );
};

cedarGenerator.forBlock["cedar_permit"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  return (
    "permit(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n);"
  );
};

cedarGenerator.forBlock["cedar_permit_when"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  const condition = generator.valueToCode(block, "CONDITION", 0);
  return (
    "permit(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n)\nwhen {\n" +
    generator.prefixLines(condition, generator.INDENT) +
    "\n};"
  );
};

cedarGenerator.forBlock["cedar_forbid"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  return (
    "forbid(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n);"
  );
};

cedarGenerator.forBlock["cedar_forbid_when"] = function (block, generator) {
  const principal = generator.valueToCode(block, "PRINCIPAL", 0);
  const action = generator.valueToCode(block, "ACTION", 0);
  const resource = generator.valueToCode(block, "RESOURCE", 0);
  const condition = generator.valueToCode(block, "CONDITION", 0);
  return (
    "forbid(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n)\nwhen {\n" +
    generator.prefixLines(condition, generator.INDENT) +
    "\n};"
  );
};

cedarGenerator.forBlock["text"] = function (block, generator) {
  const value = block.getFieldValue("TEXT");
  return [`"${value}"`, 0];
};

cedarGenerator.forBlock["cedar_scope"] = function (block, generator) {
  const arg1 = block.getFieldValue("ARG1");
  const arg2 = generator.valueToCode(block, "ARG2", 0);
  return [`${arg1}::${arg2}`, 0];
};

cedarGenerator.forBlock["cedar_binary_operator"] = function (block, generator) {
  const arg1 = generator.valueToCode(block, "ARG1", 0);
  const arg2 = generator.valueToCode(block, "ARG2", 0);
  const operator = block.getFieldValue("OPERATOR");
  return [`${arg1} ${operator} ${arg2}`, 0];
};

cedarGenerator.forBlock["lists_create_with"] = function (block, generator) {
  const values = [];
  // @ts-ignore
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, `ADD${i}`, 0);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(",\n");
  const code =
    valueString.length === 0
      ? "[]"
      : "[\n" + generator.prefixLines(valueString, generator.INDENT) + "\n]";
  return [code, 0];
};
