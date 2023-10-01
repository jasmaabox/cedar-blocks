import Blockly from "blockly";
import { flyoutToolbox } from "./toolbox";
import { cedarGenerator } from "./generator";
import { defineCedarBlocks } from "./blocks";

defineCedarBlocks();

const workspace = Blockly.inject("app", { toolbox: flyoutToolbox });
workspace.addChangeListener(() => {
  const code = cedarGenerator.workspaceToCode(workspace);
  console.log(code);
});
