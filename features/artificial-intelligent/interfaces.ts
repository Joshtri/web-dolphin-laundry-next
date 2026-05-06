export interface Recommendation {
    icon: string;
    label: string;
    detail: string;
    message: string;
    color: string;
}

export interface ChipItem {
    label: string;
    msg: string;
    cls: string;
}

export interface SendMessageData {
    text: string;
    metadata?: { recaptchaToken: string };
}