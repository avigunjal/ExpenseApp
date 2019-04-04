let visibility = false;

const toggle = () => {
  visibility = !visibility;
  render();
  console.log("clicked");
};

const render = () => {
  const visible = (
    <div>
      <h1>Visibility</h1>
      <button onClick={toggle}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>

      {visibility && (
        <div>
          <p> Hey, Cool dude.... </p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(visible, document.getElementById("app"));
};

render();
