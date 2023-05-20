import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import CollectibleItem from "./CollectibleItem";
import CollectionItem from "./CollectionItem";

type Props = {
  wallet?: string | null;
};

const Modal: React.FC<Props> = ({ wallet }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="p-2 mb-3 border-2 border-solid border-gray-900 rounded-xl font-extrabold">
        {wallet ?? ""}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black opacity-40 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vh] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-extrabold">
          {wallet ?? ""}
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 font-extrabold mt-[10px] mb-5 text-[15px] leading-normal">
          Collectibles owned
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <CollectibleItem
            name="Nakamigos #1715"
            imageUrl="https://i.seadn.io/gcs/files/a4e51d4a3c04e37b8ed0ed5a78785e7b.png?auto=format&dpr=1&w=1000"
          />
          <CollectibleItem
            name="Nakamigos #1171"
            imageUrl="https://i.seadn.io/gcs/files/a46582ef222979e95c434d956ee4a9c3.png?auto=format&dpr=1&w=1000"
          />
          <CollectibleItem
            name="Nakamigos #1235"
            imageUrl="https://i.seadn.io/gcs/files/709028dcc2ce85955cce4e3a13adf3aa.png?auto=format&dpr=1&w=1000"
          />
          <CollectibleItem
            name="Nakamigos #1235"
            imageUrl="https://i.seadn.io/gcs/files/a4e51d4a3c04e37b8ed0ed5a78785e7b.png?auto=format&dpr=1&w=1000"
          />
        </fieldset>
        <Dialog.Description className="font-extrabold text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Mutual collections
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <CollectionItem
            name="Nakamigos"
            by="Nakamigos-Deployer"
            imageUrl="https://i.seadn.io/gcs/files/1619b033c453fe36c5d9e2ac451379a7.png?auto=format&dpr=1&w=384"
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-green4 rounded-xl text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Nice!
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

export default Modal;
