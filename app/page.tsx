"use client";

import { useState } from "react";

export default function Home() {
  const [widgets, setWidgets] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, widgetType: string) {
    e.dataTransfer.setData("widgetType", widgetType);
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log("widgetType", widgetType);
    setWidgets([...widgets, widgetType]);
  }
}
