import { CaptchaData } from "../meta/data";
import { CaptchaEvent } from "../meta/event";
import { Ref } from "vue/types/v3-generated";
export declare function useHandler(data: CaptchaData, event: CaptchaEvent, containerRef: Ref, tileRef: Ref, dragBlockRef: Ref, dragBarRef: Ref): {
    state: {
        dragLeft: number;
        thumbLeft: number;
    };
    dragEvent: (e: Event | any) => void;
    closeEvent: (e: Event | any) => boolean;
    refreshEvent: (e: Event | any) => boolean;
};
