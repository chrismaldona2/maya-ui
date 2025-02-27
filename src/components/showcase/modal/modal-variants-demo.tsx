"use client";
import { Button } from "@/components/button";
import { TermsForm } from "./modal-demo";
import { useState } from "react";
import Modal from "./modal";
import Image from "next/image";

const variantsDemo = {
  default: {
    modalProps: {},
    formHeader: (
      <Image
        src="/images/face-with-monocle.gif"
        alt="Face with monocle emoji"
        aria-label="Face with monocle emoji"
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
    ),
  },
  noBlur: {
    modalProps: {
      overlayEffect: "none",
    },
    formHeader: (
      <Image
        src="/images/partying-face.gif"
        alt="Partying face emoji"
        aria-label="Partying face emoji"
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
    ),
  },
  blurOnly: {
    modalProps: {
      overlayOpacity: "none",
    },
    formHeader: (
      <Image
        src="/images/dog.gif"
        alt="Dog emoji"
        aria-label="Dog emoji"
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
    ),
  },
  noOverlay: {
    modalProps: {
      overlayEffect: "none",
      overlayOpacity: "none",
    },
    formHeader: (
      <Image
        src="/images/robot.gif"
        alt="Robot emoji"
        aria-label="Robot emoji"
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
    ),
  },
  custom: {
    modalProps: {
      contentTheme: "dark",
      className: "bg-gradient-to-br from-blue-950 to-blue-900",
      overlayClassName: "bg-gradient-to-tr from-blue-950/80 to-blue-900/30",
      closeButtonClassName:
        "hover:bg-blue-800 dark:hover:bg-blue-800 text-neutral-100 dark:text-neutral-100",
    },
    formHeader: (
      <Image
        src="/images/skull.gif"
        alt="Skull emoji"
        aria-label="Skull emoji"
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
    ),
  },
};

const ModalVariantsDemo = () => {
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

export default ModalVariantsDemo;
