import React from 'react';

// Reference
// https://stackoverflow.com/questions/45089866/specifying-onclick-event-type-with-typescript-and-react-konva

interface parentElement extends EventTarget {
  parentElement: HTMLElement
}

interface MouseClick extends React.MouseEvent<HTMLElement> {
  target: parentElement
}

export default MouseClick;
