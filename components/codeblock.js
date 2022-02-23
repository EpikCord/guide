import React from "react";
import { CopyBlock, railscast } from "react-code-blocks";
  
export default function CodeBlock(code) {
  return (
    <div>
      <CopyBlock
      text= {code}
      language='python'
      wrapLines
      theme={railscast}
    />
    </div>
  );
}