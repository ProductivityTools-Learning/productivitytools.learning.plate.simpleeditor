import { Plate, TEditableProps } from "@udecode/plate";
import { MyParagraphElement, MyValue } from "./typescript/plateTypes";
import { useState } from "react";

export default function EditorPage() {
  const initialValue = [
    {
      type: "p",
      children: [
        {
          text: "This is editable plain text with react and history plugins, just like a <textarea>!",
        },
      ],
    } as MyParagraphElement,
  ];

  const [value, setValue] = useState();

  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return (
    <div>
      editorPage
      <Plate editableProps={editableProps} onChange={(x) => setValue(JSON.stringify(x))} initialValue={initialValue} />
      <span>Raw value:</span>
      <span>{value}</span>
    </div>
  );
}
