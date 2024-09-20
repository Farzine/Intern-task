import CardExample from "@/components/cardExample";
import React from "react";
import PhotoComponent from "@/components/signUp";
import ColorBoxContainer from "@/components/colorBoxGrid";
import ResponsiveComponent from "@/components/explorNow";
import ColorChangingComponent from "@/components/collectionFeatured";
import Navbar from "@/components/navBar";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <div>
      <CardExample />
      </div>
      <div className="flex items-center justify-center">
      <ColorBoxContainer/>
      </div>
      <div className="flex items-center justify-center">
      <PhotoComponent/>
      </div>
      <div className="flex items-center justify-center">
        <ResponsiveComponent/>
      </div>
      <div className="flex items-center justify-center">
        <ColorChangingComponent/>
      </div>
    </div>
  );
}
