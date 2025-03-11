type InstallationDoc = {
  npm?: string;
  yarn?: string;
};

export const installationSnippets: InstallationDoc = {
  npm: `#core
npm install tailwind-merge clsx class-variance-authority

#animation
npm install motion

#3d
npm install three @types/three @react-three/fiber
`,
  yarn: `#core
yarn add tailwind-merge clsx class-variance-authority

#animation
yarn add motion

#3d
yarn add three @types/three @react-three/fiber
`,
};

export const cnUtility: string = `
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
`;
