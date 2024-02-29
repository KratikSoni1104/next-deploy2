import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

export default async function DynamicBlur({ src }: { src: string }) {
    const buffer = await fetch(src).then( async res => Buffer.from(await res.arrayBuffer()))
    const {base64} = await getPlaiceholder(buffer)
  return (
    <div className="flex flex-col gap-2">
      <h2>Dynamic IMage</h2>
      <div className="rounded-lg overflow-hidden">
        <Image src={src} alt="image" height={500} width={400} placeholder="blur" blurDataURL={base64}/>
      </div>
    </div>
  );
}
