import styles from "../styles/Codeblock.module.css";
import { CopyBlock, atomOneDark } from "react-code-blocks";
  
export default function CodeBlock(code) {
  return (
    <div className = {styles.codeblock}>
      <CopyBlock
      text= {code}
      language='python'
      wrapLines
      theme={atomOneDark}
    />
    </div>
  );
}