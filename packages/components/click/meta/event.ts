/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

import type {ClickDot} from "./data";

export interface ClickEvent {
  click?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?:(dots: Array<ClickDot>, reset:() => void) => void;
}