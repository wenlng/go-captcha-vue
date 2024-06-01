import { CaptchaData } from "../meta/data";
import { CaptchaEvent } from "../meta/event";
export declare function useHandler(_data: CaptchaData, event: CaptchaEvent): {
    dots: {
        list: {
            key: number;
            index: number;
            x: number;
            y: number;
        }[];
    };
    clickEvent: (e: Event | any) => boolean;
    confirmEvent: (e: Event | any) => boolean;
    closeEvent: (e: Event | any) => boolean;
    refreshEvent: (e: Event | any) => boolean;
};
