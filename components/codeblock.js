import React from "react";
import { CopyBlock, railscast } from "react-code-blocks";
  
export default function CodeBlock(code) {
  return (
    <div>
      <h3>GeeksforGeeks Code</h3>
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