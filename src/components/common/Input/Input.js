import React, { useRef, useEffect } from "react";
import "./index.css";

const Input = (props) => {
  const labelRef = useRef();
  const helperText = useRef();
  const inputRef = useRef();
  const iconRef = useRef();

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
    if (props.startIcon) inputRef.current.style.paddingLeft = "40px";
    if (props.endIcon) inputRef.current.style.paddingRight = "40px";
    if (props.fullWidth) inputRef.current.style.width = "550%";

    if (props.size) {
      if (props.size === "sm") {
        inputRef.current.classList.add("change-size");
        if (props.startIcon || props.endIcon)
          iconRef.current.style.top = "28px";
      }
    }
  });

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
          placeholder={props.placeholder || "Placeholder"}
          defaultValue={props.defaultValue || null}
          readOnly={props.readonly || null}
          disabled={props.disabled || null}
          maxLength={props.maxlength || null}
          min={props.min || null}
          max={props.max || null}
          multiple={props.multiple || null}
          pattern={props.pattern || null}
          required={props.required || null}
          step={props.step || null}
          autoFocus={props.autofocus || null}
        />
      ) : (
        <input
          className="input"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleRemoveFocus}
          onChange={handleChange}
          placeholder={props.placeholder || "Placeholder"}
          defaultValue={props.defaultValue || null}
          type={props.type}
          readOnly={props.readonly || null}
          disabled={props.disabled || null}
          maxLength={props.maxlength || null}
          min={props.min || null}
          max={props.max || null}
          multiple={props.multiple || null}
          pattern={props.pattern || null}
          required={props.required || null}
          step={props.step || null}
          autoFocus={props.autofocus || null}
          list={props.list || null}
          autoComplete={props.autocomplete || null}
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
