
/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

export interface RotateData {
  angle?: number;
  image: string;
  thumb: string;
  thumbSize: number;
}

export const defaultRotateData = ():RotateData => ({
  angle: 0,
  image: '',
  thumb: '',
  thumbSize: 0
})
