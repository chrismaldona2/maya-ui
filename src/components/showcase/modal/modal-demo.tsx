"use client";
import Button from "@/components/button";
import React, { ReactNode, useState } from "react";
import Modal from "./modal";
import PopUpImage from "@/components/popup-image";

export const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal} className="bg-blue-600 dark:text-white">
        Open modal
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal} overlayOpacity="light">
        <TermsForm
          onSubmit={handleSubmit}
          header={
            <PopUpImage
              src="/images/face-with-monocle.gif"
              alt="Animated face with monocle emoji"
              aria-label="Face with monocle emoji"
              width={80}
              height={80}
              className="drop-shadow-lg animate-popup"
              unoptimized
            />
          }
        />
      </Modal>
    </div>
  );
};

interface Form {
  header: ReactNode;
  onSubmit: () => void;
}

export const TermsForm = ({ onSubmit, header }: Form) => {
  return (
    <div className="pt-7 pb-2 flex flex-col items-center gap-6">
      {header}
      <div>
        <h2 className="font-semibold text-2xl text-center mb-2">
          Temporibus sequi minus mollitia?
        </h2>
        <p className="text-center mx-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          dolorem eveniet omnis sequi praesentium vel officiis iure explicabo
          ipsam doloribus, sed quae nostrum odio mollitia aliquam.
        </p>
      </div>

      <Button
        onClick={onSubmit}
        className="min-w-[30%] bg-blue-600 dark:text-white shadow-md shadow-black/25"
      >
        Accept
      </Button>
    </div>
  );
};

const variantsDemo = {
  default: {
    modalProps: {},
    formHeader: (
      <PopUpImage
        src="/images/face-in-clouds.gif"
        alt="Face with monocle emoji"
        aria-label="Face with monocle emoji"
        width={80}
        height={80}
        className="drop-shadow-lg animate-popup"
        unoptimized
      />
    ),
  },
  noBlur: {
    modalProps: {
      blur: "none",
    },
    formHeader: (
      <PopUpImage
        src="/images/partying-face.gif"
        alt="Partying face emoji"
        aria-label="Partying face emoji"
        width={80}
        height={80}
        className="drop-shadow-lg animate-popup"
        unoptimized
      />
    ),
  },
  blurOnly: {
    modalProps: {
      overlayOpacity: "none",
    },
    formHeader: (
      <PopUpImage
        src="/images/dog.gif"
        alt="Dog emoji"
        aria-label="Dog emoji"
        width={80}
        height={80}
        className="drop-shadow-lg animate-popup"
        unoptimized
      />
    ),
  },
  noOverlay: {
    modalProps: {
      blur: "none",
      overlayOpacity: "none",
    },
    formHeader: (
      <PopUpImage
        src="/images/robot.gif"
        alt="Robot emoji"
        aria-label="Robot emoji"
        width={80}
        height={80}
        className="drop-shadow-lg animate-popup"
        unoptimized
      />
    ),
  },
  custom: {
    modalProps: {
      contentTheme: "dark",
      className: "bg-linear-to-br from-blue-950 to-blue-900",
      overlayClassName: "bg-linear-to-tr from-blue-950/80 to-blue-900/30",
      closeButtonClassName:
        "hover:bg-blue-800 dark:hover:bg-blue-800 text-neutral-100 dark:text-neutral-100",
    },
    formHeader: (
      <PopUpImage
        src="/images/skull.gif"
        alt="Skull emoji"
        aria-label="Skull emoji"
        width={80}
        height={80}
        className="drop-shadow-lg animate-popup"
        unoptimized
      />
    ),
  },
};

export const ModalVariantsDemo = () => {
  const [currentVariant, setCurrentVariant] = useState(variantsDemo.default);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className="flex gap-3 items-center justify-center flex-wrap px-2">
      <Button
        onClick={() => {
          setCurrentVariant(variantsDemo.default);
          open();
        }}
        className="flex-1"
      >
        Default
      </Button>

      <Button
        onClick={() => {
          setCurrentVariant(variantsDemo.noBlur);
          open();
        }}
        className="flex-1"
      >
        No blur
      </Button>

      <Button
        onClick={() => {
          setCurrentVariant(variantsDemo.blurOnly);
          open();
        }}
        className="flex-1"
      >
        Blur only
      </Button>

      <Button
        onClick={() => {
          setCurrentVariant(variantsDemo.noOverlay);
          open();
        }}
        className="flex-1"
      >
        No overlay
      </Button>

      <Button
        onClick={() => {
          setCurrentVariant(variantsDemo.custom);
          open();
        }}
        className="flex-1"
      >
        Custom
      </Button>

      <Modal isOpen={isOpen} onClose={close} {...currentVariant.modalProps}>
        <TermsForm onSubmit={close} header={currentVariant.formHeader} />
      </Modal>
    </div>
  );
};
