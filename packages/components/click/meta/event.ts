/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

import {CaptchaDot} from "./data";

export interface CaptchaEvent {
  click?: (x: number, y: number) => void;
  callback?: () => void;
  refresh?: () => void;
  close?: () => void;
  confirm?:(dots: Array<CaptchaDot>, clear:(fn: Function) => void) => void;
}