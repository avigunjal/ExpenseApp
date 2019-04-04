//JSX : JavaScript XML
const app = {
  title: "Indicision App",
  subtitle: "Put your life in hands of Computer...okay",
  options: []
};
const { title, subtitle } = app;

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  const predicted = app.options[rand];
  alert(predicted);
  console.log(rand);
};

const render = () => {
  const template = (
    <div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options.."}</p>

      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I Do?
      </button>

      <button onClick={onRemoveAll}>Remove All</button>

      <ul>
        {app.options.map(options => {
          return <li key={options}> {options} </li>;
        })}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add Options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
