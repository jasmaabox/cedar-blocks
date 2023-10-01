import Blockly from "blockly";

export const cedarGenerator = new Blockly.Generator("cedar");

// TODO: modify this for cedar
// https://github.com/google/blockly/blob/04fa7996503d74ece151d9b19f62c7776621f82f/generators/javascript/javascript_generator.js
export const Order = {
  ATOMIC: 0,            // 0 "" ...
  NEW: 1.1,             // new
  MEMBER: 1.2,          // . []
  FUNCTION_CALL: 2,     // ()
  INCREMENT: 3,         // ++
  DECREMENT: 3,         // --
  BITWISE_NOT: 4.1,     // ~
  UNARY_PLUS: 4.2,      // +
  UNARY_NEGATION: 4.3,  // -
  LOGICAL_NOT: 4.4,     // !
  TYPEOF: 4.5,          // typeof
  VOID: 4.6,            // void
  DELETE: 4.7,          // delete
  AWAIT: 4.8,           // await
  EXPONENTIATION: 5.0,  // **
  MULTIPLICATION: 5.1,  // *
  DIVISION: 5.2,        // /
  MODULUS: 5.3,         // %
  SUBTRACTION: 6.1,     // -
  ADDITION: 6.2,        // +
  BITWISE_SHIFT: 7,     // << >> >>>
  RELATIONAL: 8,        // < <= > >=
  IN: 8,                // in
  INSTANCEOF: 8,        // instanceof
  EQUALITY: 9,          // == != === !==
  BITWISE_AND: 10,      // &
  BITWISE_XOR: 11,      // ^
  BITWISE_OR: 12,       // |
  LOGICAL_AND: 13,      // &&
  LOGICAL_OR: 14,       // ||
  CONDITIONAL: 15,      // ?:
  ASSIGNMENT: 16,       //: += -= **= *= /= %= <<= >>= ...
  YIELD: 17,            // yield
  COMMA: 18,            // ,
  NONE: 99,             // (...)
};

cedarGenerator.forBlock["cedar_builtin"] = function (block, generator) {
  const value = block.getFieldValue("VALUE");
  return [`${value}`, Order.ATOMIC];
};

cedarGenerator.forBlock["cedar_policy"] = function (block, generator) {
  const effect = block.getFieldValue("EFFECT");
  const principal = generator.valueToCode(block, "PRINCIPAL", Order.NONE);
  const action = generator.valueToCode(block, "ACTION", Order.NONE);
  const resource = generator.valueToCode(block, "RESOURCE", Order.NONE);
  const nextBlock = block.getNextBlock();
  return (
    effect +
    "(\n" +
    [principal, action, resource]
      .map((v) => generator.prefixLines(v, generator.INDENT))
      .join(",\n") +
    "\n)" +
    (nextBlock ? ` ${generator.blockToCode(nextBlock)}` : ";")
  );
};

cedarGenerator.forBlock["cedar_conditional"] = function (block, generator) {
  const conditionKeyword = block.getFieldValue("CONDITION_KEYWORD");
  const conditionBody = generator.valueToCode(block, "CONDITION_BODY", Order.NONE);
  const nextBlock = block.getNextBlock();
  return (
    conditionKeyword + " {\n" +
    generator.prefixLines(conditionBody, generator.INDENT) +
    "\n}" +
    (nextBlock ? ` ${generator.blockToCode(nextBlock)}` : ";")
  );
};

cedarGenerator.forBlock["text"] = function (block, generator) {
  const value = block.getFieldValue("TEXT");
  return [`"${value}"`, Order.ATOMIC];
};

cedarGenerator.forBlock["cedar_scope"] = function (block, generator) {
  const arg1 = generator.valueToCode(block, "ARG1", Order.MEMBER);
  const arg2 = generator.valueToCode(block, "ARG2", Order.MEMBER);
  return [`${arg1}::${arg2}`, Order.MEMBER];
};

cedarGenerator.forBlock["cedar_boolean_binary_operator"] = function (block, generator) {
  const operator = block.getFieldValue("OPERATOR");

  let order = Order.NONE;
  switch (operator) {
    case "==":
    case "!=":
      order = Order.EQUALITY;
      break;
    case ">":
    case "<":
    case ">=":
    case "<=":
      order = Order.RELATIONAL;
      break;
    case "&&":
      order = Order.LOGICAL_AND;
      break;
    case "||":
      order = Order.LOGICAL_OR;
      break;
    case "in":
      order = Order.IN;
      break;
    default:
      order = Order.NONE;
      break;
  }

  const arg1 = generator.valueToCode(block, "ARG1", order);
  const arg2 = generator.valueToCode(block, "ARG2", order);

  return [`${arg1} ${operator} ${arg2}`, order];
};

cedarGenerator.forBlock["cedar_math_binary_operator"] = function (block, generator) {
  const operator = block.getFieldValue("OPERATOR");

  let order = Order.NONE;
  switch (operator) {
    case "*":
      order = Order.MULTIPLICATION;
      break;
    case "/":
      order = Order.DIVISION;
      break;
    case "-":
      order = Order.SUBTRACTION;
      break;
    case "+":
      order = Order.ADDITION;
      break;
    default:
      order = Order.NONE;
      break;
  }

  const arg1 = generator.valueToCode(block, "ARG1", order);
  const arg2 = generator.valueToCode(block, "ARG2", order);

  return [`${arg1} ${operator} ${arg2}`, order];
};

cedarGenerator.forBlock["cedar_property"] = function (block, generator) {
  const arg1 = generator.valueToCode(block, "ARG1", Order.MEMBER);
  const arg2 = generator.valueToCode(block, "ARG2", Order.MEMBER);
  return [`${arg1}.${arg2}`, Order.MEMBER];
};

cedarGenerator.forBlock["cedar_identifier"] = function (block, generator) {
  const value = block.getFieldValue("VALUE");
  return [`${value}`, Order.ATOMIC];
};

cedarGenerator.forBlock["cedar_boolean"] = function (block, generator) {
  const value = block.getFieldValue("VALUE");
  return [`${value}`, Order.ATOMIC];
};

cedarGenerator.forBlock["lists_create_with"] = function (block, generator) {
  const values = [];
  // @ts-ignore
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, `ADD${i}`, Order.NONE);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(",\n");
  const code =
    valueString.length === 0
      ? "[]"
      : "[\n" + generator.prefixLines(valueString, generator.INDENT) + "\n]";
  return [code, Order.ATOMIC];
};
