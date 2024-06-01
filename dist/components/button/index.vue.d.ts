import { CaptchaConfig } from "./meta/config";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    config?: CaptchaConfig | undefined;
    clickEvent?: (() => void) | undefined;
    disabled?: boolean | undefined;
    type?: "default" | "warn" | "error" | "success" | undefined;
    title?: string | undefined;
}>, {
    config: () => CaptchaConfig;
    disabled: boolean;
    type: string;
    title: string;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click-event": (...args: any[]) => void;
}, string, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    config?: CaptchaConfig | undefined;
    clickEvent?: (() => void) | undefined;
    disabled?: boolean | undefined;
    type?: "default" | "warn" | "error" | "success" | undefined;
    title?: string | undefined;
}>, {
    config: () => CaptchaConfig;
    disabled: boolean;
    type: string;
    title: string;
}>>>, {
    title: string;
    config: CaptchaConfig;
    type: "default" | "warn" | "error" | "success";
    disabled: boolean;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
