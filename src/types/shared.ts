export const SUPPORTED_CODE_LANGUAGES = ["tsx", "bash"] as const;

export type SupportedCodeLanguage = (typeof SUPPORTED_CODE_LANGUAGES)[number];

export type TailwindSnippets = {
  code: string;
  usage: string;
  tailwindConfig: string;
};

export type MotionSnippets = {
  code: string;
  usage: string;
};
