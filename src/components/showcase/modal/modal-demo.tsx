"use client";
import { Button } from "@/components/button";
import React, { ReactNode, useState } from "react";
import Modal from "./modal";
import Image from "next/image";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    console.log("form submitted");
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal} className="bg-blue-600 dark:text-white">
        Open modal
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <TermsForm
          onSubmit={handleSubmit}
          header={
            <Image
              src="/images/face-with-monocle.gif"
              alt="Animated face with monocle emoji"
              aria-label="Face with monocle emoji"
              width={80}
              height={80}
              className="drop-shadow-lg"
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
        className="min-w-[30%] bg-blue-600 dark:text-white"
      >
        Accept
      </Button>
    </div>
  );
};

export default ModalDemo;
