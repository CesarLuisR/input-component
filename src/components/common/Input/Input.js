import React, { useRef, useEffect } from "react";
import "./index.css";

const Input = (props) => {
  const labelRef = useRef(null);
  const helperText = useRef(null);
  const inputRef = useRef(null);
  const iconRef = useRef(null);

  const handleFocus = () => {
    labelRef.current.classList.add("label-focus-state");
    helperText?.current?.classList?.add("label-focus-state");
  };

  const handleRemoveFocus = () => {
    labelRef.current.classList.remove("label-focus-state");
    helperText?.current?.classList?.remove("label-focus-state");
  };

  const handleChange = (e) => {
    if (!e.target.validity.valid) {
      labelRef.current.classList.add("label-invalid");
      helperText?.current?.classList?.add("label-invalid");
    } else {
      labelRef.current.classList.remove("label-invalid");
      helperText?.current?.classList?.remove("label-invalid");
    }
  };

  useEffect(() => {
    if (props.startIcon) {
      inputRef.current.style.paddingLeft = "40px";
    }

    if (props.endIcon) {
      inputRef.current.style.paddingRight = "40px";
    }

    if (props.size) {
      if (props.size === "sm") {
        inputRef.current.classList.add("change-size");
        if (props.startIcon || props.endIcon)
          iconRef.current.style.top = "28px";
      }
    }

    if (props.fullWidth) {
      inputRef.current.style.width = "550%";
    }
  }, []);

  return (
    <label className="label">
      <div ref={labelRef} className="label-text">
        {props.label || "Label"}
      </div>
      {props.startIcon && (
        <span className="icon-start material-icons" ref={iconRef}>
          {props.startIcon}
        </span>
      )}
      {props.endIcon && (
        <span className="icon-end material-icons" ref={iconRef}>
          {props.endIcon}
        </span>
      )}
      {props.multiline ? (
        <textarea
          className="input"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleRemoveFocus}
          onChange={handleChange}
          placeholder="Placeholder"
          {...props}
        />
      ) : (
        <input
          className="input"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleRemoveFocus}
          onChange={handleChange}
          placeholder="Placeholder"
          {...props}
        />
      )}
      {props.helperText && (
        <div className="helper-text" ref={helperText}>
          {props.helperText}
        </div>
      )}
    </label>
  );
};

export default Input;
