import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  by: string;
  imageUrl: string;
};

const CollectionItem: React.FC<Props> = ({ name, by, imageUrl }) => {
  return (
    <div className="flex items-center justify-center  rounded-xl border-2 border-solid border-gray-900 p-2">
      <Image
        src={imageUrl}
        alt="NFT Image"
        className="rounded-xl "
        width={150}
        height={150}
      />
      <div className="flex flex-col ml-2">
        <p className="font-bold py-2 text-sm">{name}</p>
        <p className="text-xs font-bold">By: {by}</p>
      </div>
    </div>
  );
};

export default CollectionItem;
