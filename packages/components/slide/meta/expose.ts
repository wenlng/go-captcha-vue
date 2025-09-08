/**
 * @Author Awen
 * @Date 2024/011/16
 * @Email wengaolng@gmail.com
 **/

export interface SlideExpose {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
  setTips: (show: boolean, content: string, type: string) => void,
}