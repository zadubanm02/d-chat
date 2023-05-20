import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  imageUrl: string;
};

// https://i.seadn.io/gcs/files/a4e51d4a3c04e37b8ed0ed5a78785e7b.png?auto=format&dpr=1&w=1000

const CollectibleItem: React.FC<Props> = ({ name, imageUrl }) => {
  return (
    <div className="w-[150px] flex flex-col items-center justify-center  rounded-xl">
      <Image
        src={imageUrl}
        alt="NFT Image"
        className="rounded-xl w-full h-full"
        width={150}
        height={150}
      />
      <p className="font-bold py-2 text-sm">{name}</p>
      <p className="font-bold ">Nakamigos</p>
    </div>
  );
};

export default CollectibleItem;
