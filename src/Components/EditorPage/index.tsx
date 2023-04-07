import {
  Plate,
  createPlugins,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createItalicPlugin,
  createParagraphPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  TEditableProps,
} from "@udecode/plate";
import { MyParagraphElement, MyValue,MyPlatePlugin } from "./typescript/plateTypes";
import { useState } from "react";
import { basicElementsValue } from './basic-elements/basicElementsValue';
import { basicMarksValue } from './basic-marks/basicMarksValue';
import { plateUI } from './common/plateUI.ts';
export default function EditorPage() {


// try to remove a few plugins!
const plugins = createPlugins<MyValue>(
  [
    createParagraphPlugin(),
    createBlockquotePlugin(),
    // createCodeBlockPlugin({
    //   // You can either pass a component per plugin
    //   component: CodeBlockElement,
    // }),
    createHeadingPlugin(),

    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
  ],
  {
    // Or pass all components at once
    components: plateUI,
  }
);

  
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
      <Plate plugins={plugins} editableProps={editableProps} onChange={(x) => setValue(JSON.stringify(x))} initialValue={initialValue} />
      <span>Raw value:</span>
      <span>{value}</span>
    </div>
  );
}
