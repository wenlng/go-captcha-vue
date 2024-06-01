/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

export interface CaptchaConfig {
  width?: number;
  height?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
}

export const defaultConfig = ():CaptchaConfig => ({
  width: 330,
  height: 44,
  verticalPadding: 12,
  horizontalPadding: 16,
})