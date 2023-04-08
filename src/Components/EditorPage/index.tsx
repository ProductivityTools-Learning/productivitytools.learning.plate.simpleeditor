import {
  PlateProvider,
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
  createAlignPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_PARAGRAPH,
  
} from "@udecode/plate";
import { MyParagraphElement, MyValue, MyPlatePlugin } from "./typescript/plateTypes";
import { useState } from "react";
import { basicElementsValue } from "./basic-elements/basicElementsValue";
import { basicMarksValue } from "./basic-marks/basicMarksValue";
import { plateUI } from "./common/plateUI.ts";
import { AlignToolbarButtons } from "./align/AlignToolbarButtons.tsx";

import { Toolbar } from "./toolbar/Toolbar.tsx";

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
      createAlignPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              ELEMENT_H1,
              ELEMENT_H2,
              ELEMENT_H3,
              ELEMENT_H4,
              ELEMENT_H5,
              ELEMENT_H6
            ]
          }
        }
      }),
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
      <PlateProvider<MyValue> initialValue={initialValue} plugins={plugins}  onChange={(x) => setValue(JSON.stringify(x))}>
        <Toolbar>
          <AlignToolbarButtons></AlignToolbarButtons>
        </Toolbar>
        <Plate
          // plugins={plugins}
          editableProps={editableProps}
         
        ></Plate>
      </PlateProvider>
      <span>Raw value:</span>
      <span>{value}</span>
    </div>
  );
}
