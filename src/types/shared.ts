export const SUPPORTED_CODE_LANGUAGES = [
  "javascript",
  "typescript",
  "bash",
  "json",
  "css",
] as const;

export type SupportedCodeLanguage = (typeof SUPPORTED_CODE_LANGUAGES)[number];
