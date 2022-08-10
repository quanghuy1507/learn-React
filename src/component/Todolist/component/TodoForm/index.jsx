import React, { useState } from "react";
import PropTypes from "prop-types";

const Todoform = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      title: value,
    };

    onSubmit(formValue);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChangeValue} />
    </form>
  );
};

Todoform.propTypes = {
  onSubmit: PropTypes.func,
};

Todoform.defaultProps = {
  onSubmit: null,
};
export default Todoform;
