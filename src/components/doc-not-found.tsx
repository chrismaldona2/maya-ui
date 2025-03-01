import PopUpImage from "./popup-image";

const DocNotFound = () => {
  return (
    <div className="flex flex-col gap-2 items-center mt-16">
      <PopUpImage
        src="/images/face-with-spirals-eyes.gif"
        alt="Animated face with spiral eyes emoji"
        aria-label="Face with spiral eyes emoji"
        width={80}
        height={80}
        className="drop-shadow-lg animate-popup mb-4"
        unoptimized
      />
      <h1 className="text-5xl text-neutral-800 dark:text-neutral-300 font-bold">
        404
      </h1>
      <span className="text-base text-neutral-700 dark:text-neutral-400">
        Doc not found
      </span>
    </div>
  );
};

export default DocNotFound;
