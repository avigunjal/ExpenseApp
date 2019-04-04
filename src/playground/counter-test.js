//***** conditional rendering *****/
function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "Unknown";
  }
}

const templateTwo = (
  <div>
    <p>{name}</p>
    <p>Address: {getLocation(address)}</p>
  </div>
);

//***** Events and Attributes *****//
/*
let count = 0;
const templateThree = (
  <div>
    <h1>Count: {count}</h1>
    <button id="my-id" className="button">
      +1
    </button>
  </div>
);
*/

let count = 0;
const addOne = () => {
  count++;
  renderApp();
  console.log("addOne", count);
};
const minusOne = () => {
  count--;
  renderApp();
  console.log("minusOne", count);
};

const reset = () => {
  count = 0;
  renderApp();
  console.log("reset", count);
};

const renderApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateThree, document.getElementById("app"));
};

renderApp();
