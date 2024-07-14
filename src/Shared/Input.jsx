const Input = (props) => {
  const className = "input input-bordered w-full max-w-xs" + props.className;
  return (
    <>
      <div className="form-control w-full max-w-xs">
        {props.label && (
          <label className="label">
            <span className="label-text">{props.label}: </span>
          </label>
        )}

        <input
          type={props.type}
          placeholder={props.placeholder}
          className={className}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};
export default Input;
