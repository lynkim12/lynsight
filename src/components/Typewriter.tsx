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
      setTyped((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) {
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
  if (typeof node === "string" || typeof node === "number") {
    return typedText.slice(0, node.toString().length);
  }
  if (Array.isArray(node)) {
    let remaining = typedText;
    return node.map((child, i) => {
      const childText = flattenText(child);
      const subText = remaining.slice(0, childText.length);
      remaining = remaining.slice(childText.length);
      return renderWithTypedText(child, subText);
    });
  }
  if (React.isValidElement(node)) {
    const child = renderWithTypedText(node.props.children, typedText);
    return React.cloneElement(node, { ...node.props, children: child });
  }
  return null;
};

export default Typewriter;