export const SUPPORTED_CODE_LANGUAGES = ["tsx", "bash"] as const;

export type SupportedCodeLanguage = (typeof SUPPORTED_CODE_LANGUAGES)[number];

export type TailwindSnippets = {
  code: string;
  usage: string;
  v3Config: string;
  v4Config: string;
};

export type HookSnippet = {
  id: number;
  name: string;
  code: string;
};

export type MotionSnippets = {
  code: string;
  usage: string;
};

export interface CSSPositionOffsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
