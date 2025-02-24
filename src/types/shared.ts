export const SUPPORTED_CODE_LANGUAGES = [
  "javascript",
  "typescript",
  "tsx",
  "jsx",
  "bash",
  "json",
  "css",
] as const;

export type SupportedCodeLanguage = (typeof SUPPORTED_CODE_LANGUAGES)[number];
