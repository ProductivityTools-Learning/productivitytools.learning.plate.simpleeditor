import { Plate, TEditableProps } from "@udecode/plate";
import { MyParagraphElement, MyValue } from "./typescript/plateTypes";

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

  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return (
    <div>
      editorPage
      <Plate editableProps={editableProps}  initialValue={initialValue}  />
    </div>
  );
}
