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
export declare const defaultConfig: () => CaptchaConfig;
