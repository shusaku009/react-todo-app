import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyTextBox = forwardRef(({ label }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }), []);

  return (
    <label>
      {label}: <input type="text" ref={inputRef} />
    </label>
  );
});

export default MyTextBox;
