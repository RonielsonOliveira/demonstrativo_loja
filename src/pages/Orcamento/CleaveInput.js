import React, { useRef, useEffect } from "react";
import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.br";

export default function CleaveInput({ onChange, ...props }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const cleave = new Cleave(inputRef.current, props.options || {});
    return () => cleave.destroy();
  }, [props.options]);

  return <input ref={inputRef} {...props} onChange={onChange} />;
}
