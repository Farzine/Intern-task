import CardExample from "@/components/cardExample";
import Image from "next/image";
import React from "react";
import Photogrid from "@/components/signUp";
import ColorBoxContainer from "@/components/colorBoxGrid";

export default function Home() {
  return (
    <div >
      <CardExample />
      <div className="flex items-center justify-center">

      <ColorBoxContainer/>
      </div>
      <Photogrid/>
    </div>
  );
}
