import React from "react";
import { CopyBlock, railscast } from "react-code-blocks";
  
export default function CodeBlock(code) {
  return (
    <div>
      <CopyBlock
      text= {code}
      language='python'
      showLineNumbers='true'
      wrapLines
      theme={railscast}
    />
    </div>
  );
}