"use client";

import styles from "./select.module.css";
import {useContext, useMemo, useState} from "react";
import { MdCheck } from "react-icons/md";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select, SelectStateContext,
  SelectValue
} from "react-aria-components";

/**
 *
 * @param {Object} args
 * @param {React.ReactNode} args.children
 * @returns {React.ReactNode}
 * @constructor
 */
export function SelectMenu({ children, ...props }) {
  return (
      <Select {...props}>
          {children}
      </Select>
  );
}

/**
 * @param {React.ReactNode} children
 * @return {JSX.Element}
 * @constructor
 */
export function SelectLabel({ children }) {
  return (
      <Label>{children}</Label>
  )
}

/**
 * @return {JSX.Element}
 * @constructor
 */
export function SelectButton() {
  return (
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>

  )
}

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {(args: (((prev: Set<string>) => Set<string>) | Set<string>)) => void} props.onSelected
 * @param {Set<string>} props.selected
 * @return {JSX.Element}
 * @constructor
 */
export function SelectItems({ children, onSelected, selected }) {
  const selectState = useContext(SelectStateContext) ?? {};
  if (selectState.selectedItem) {
    onSelected((prev) => {
      prev.add(selectState?.selectedItem.textValue);
    })
  }
  return (
      <Popover>
        <ListBox selectionMode={"single"} selectedKeys={selected}>
          {children}
        </ListBox>
      </Popover>
  )
}

/**
 *
 * @param {string} value
 * @param {React.ReactNode} children
 * @returns {React.ReactNode}
 * @constructor
 */
export function SelectItem({ value, children }) {
  return (
    <ListBoxItem textValue={value} key={value}>
      {children}
    </ListBoxItem>
  );
}
