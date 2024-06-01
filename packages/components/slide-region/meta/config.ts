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
  showTheme?: boolean;
}

export const defaultConfig = ():CaptchaConfig => ({
  width: 300,
  height: 240,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true,
})