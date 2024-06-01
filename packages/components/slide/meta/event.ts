/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import {CaptchaPoint} from "./data";

export interface CaptchaEvent {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: CaptchaPoint, clear:(fn: Function) => void) => void;
}