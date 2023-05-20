import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import CollectibleItem from "./CollectibleItem";
import CollectionItem from "./CollectionItem";

type Props = {};

const NewMeesageDialog: React.FC<Props> = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="flex flex-row items-center align-middle justify-center p-2 mb-3 w-full border-2 border-solid border-gray-900 rounded-xl font-extrabold">
        <PlusIcon
          className="mr-2 font-extrabold"
          stroke="#000"
          strokeWidth="2"
        />
        Start Chat
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black opacity-40 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vh] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-extrabold">
          Start a new chat
        </Dialog.Title>
        {/* <Dialog.Description className="text-mauve11 font-extrabold mt-[10px] mb-5 text-[15px] leading-normal">
          Collectibles owned
        </Dialog.Description> */}
        <fieldset className="mb-[15px] flex flex-col mt-5 gap-5">
          <label className="font-semibold">
            Paste and address of the holder
          </label>
          <input
            type="text"
            placeholder="0xAAA..."
            className="w-full p-2 rounded-xl mr-4 border-2 border-solid border-gray-900"
          />
        </fieldset>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="font-extrabold bg-green4 rounded-xl text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center px-[15px] leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Create chat
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default NewMeesageDialog;
