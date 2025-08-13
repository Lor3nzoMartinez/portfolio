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

  return (
    <Flex
      vertical="center"
      horizontal="center"
      className={classNames(styles.skillLevelContainer, className)}
    />
  );
};

SkillLevel.displayName = "SkillLevel";
export { SkillLevel };
