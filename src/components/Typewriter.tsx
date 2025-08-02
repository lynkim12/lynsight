import React, { useEffect, useState } from "react";
import '../style.css';

interface TypewriterProps {
  text: React.ReactNode;
  speed?: number;
}

const flattenText = (node: React.ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return node.toString();
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (React.isValidElement(node)) return flattenText(node.props.children);
  return "";
};

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const fullText = flattenText(text);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTyped(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  return (
    <div className="typewriter-container">
      {/* 투명한 텍스트로 높이 확보 */}
      <div className="typewriter-placeholder">{text}</div>

      {/* 실제 타이핑 텍스트 */}
      <div className="typewriter-animated">
        {renderWithTypedText(text, typed)}
      </div>
    </div>
  );
};

const renderWithTypedText = (
  node: React.ReactNode,
  typedText: string
): React.ReactNode => {
  let currentIndex = 0;

  const traverse = (currentNode: React.ReactNode): React.ReactNode => {
    if (typeof currentNode === "string" || typeof currentNode === "number") {
      const nodeText = currentNode.toString();
      const availableText = typedText.slice(currentIndex, currentIndex + nodeText.length);
      currentIndex += nodeText.length;
      return availableText;
    }

    if (Array.isArray(currentNode)) {
      return currentNode.map((child, i) => (
        <React.Fragment key={i}>{traverse(child)}</React.Fragment>
      ));
    }

    if (React.isValidElement(currentNode)) {
      const processedChildren = traverse(currentNode.props.children);
      return React.cloneElement(currentNode, { 
        ...currentNode.props, 
        children: processedChildren 
      });
    }

    return null;
  };

  return traverse(node);
};

export default Typewriter;