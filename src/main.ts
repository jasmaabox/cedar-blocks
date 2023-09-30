import Blockly from "blockly";
import { toolbox } from "./toolbox";
import { cedarGenerator } from "./generator";
import { defineCedarBlocks } from "./blocks";

defineCedarBlocks();

const workspace = Blockly.inject("app", { toolbox: toolbox });
workspace.addChangeListener(() => {
  const code = cedarGenerator.workspaceToCode(workspace);
  console.log(code);
});
