type InstallationDoc = {
  npm?: string;
  yarn?: string;
};

export const installationSnippets: InstallationDoc = {
  npm: `#core
npm install tailwind-merge clsx

#animation
npm install motion

#3d
npm install three @types/three @react-three/fiber
`,
  yarn: `#core
yarn add tailwind-merge clsx

#animation
yarn add motion

#3d
yarn add three @types/three @react-three/fiber
`,
};
