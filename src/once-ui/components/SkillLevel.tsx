"use client";

import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import styles from "./SkillLevel.module.scss";
import { Flex, Row } from ".";

interface SkillLevelProps {
  trigger: string;
  level?: number;
  scale?: number;
  color?: "onBackground" | "onSolid";
  style?: React.CSSProperties;
  className?: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({
  trigger,
  level = 0,
  scale = 0.8,
  color = "onBackground",
  style,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const levelStyles = [
    styles.levelOne,
    styles.levelTwo,
    styles.levelThree,
    styles.levelFour,
  ];

  useEffect(() => {
    const triggerElement = document.querySelector(trigger);

    if (triggerElement && ref.current) {
      const handleMouseOver = () => {
        ref.current?.classList.add(styles.active);
      };

      const handleMouseOut = () => {
        ref.current?.classList.remove(styles.active);
      };

      triggerElement.addEventListener("mouseenter", handleMouseOver);
      triggerElement.addEventListener("mouseleave", handleMouseOut);

      return () => {
        triggerElement.removeEventListener("mouseenter", handleMouseOver);
        triggerElement.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [trigger]);

  return (
    <Flex
      ref={ref}
      vertical="center"
      horizontal="center"
      className={classNames(styles.skillLevelContainer, className)}
      style={{
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      <Row>
        {[...Array(level)].map(() => (
          <Flex className={classNames(styles.skillBar, styles.levelOne)} />
        ))}
      </Row>
    </Flex>
  );
};

SkillLevel.displayName = "SkillLevel";
export { SkillLevel };
