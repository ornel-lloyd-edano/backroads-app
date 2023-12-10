const Title = (props) => {
  const [leading, trailing] = props.title.split(props.focusedOnTitle);

  if (leading !== "" && trailing === "") {
    return (
      <div className="section-title">
        <h2>
          {leading}
          <span>{props.focusedOnTitle}</span>
        </h2>
      </div>
    );
  } else if (leading === "" && trailing !== "") {
    return (
      <div className="section-title">
        <h2>
          {props.focusedOnTitle}
          <span>{trailing}</span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="section-title">
        <h2>
          {leading}
          <span>{props.focusedOnTitle} </span>
          {trailing}
        </h2>
      </div>
    );
  }
};

export default Title;
