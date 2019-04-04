class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSingleDeleteOptions = this.handleSingleDeleteOptions.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePic = this.handlePic.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    };
  }

  //Life cycles componentDidMount: When component first time render
  componentDidMount() {
    console.log("Fetching the data");
  }

  //Life cycles componentDidUpdate: When component state change this lifecycle method gets called
  componentDidUpdate() {
    console.log("Saving the data");
  }

  handleSingleDeleteOptions(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
        })
      };
    });
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] })); //new syntax for removing individual options
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Already Exists..";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  handlePic() {
    //  alert("action pic");
    const pic = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[pic]);
    console.log(pic);
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Let's make decision with Indecision App";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePic={this.handlePic}
        />
        <Options
          options={this.state.options}
          handleSingleDeleteOptions={this.handleSingleDeleteOptions}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOptions handleAddOptionAll={this.handleAddOption} />
      </div>
    );
  }
}

//This are stateless functional components
const Header = props => {
  const title = props.title;
  const subTitle = props.subtitle;
  return (
    <div>
      <h2> {title} </h2>
      <p> {subTitle} </p>
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePic} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleSingleDeleteOptions={props.handleSingleDeleteOptions}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      &nbsp;&nbsp;
      <button
        onClick={e => {
          props.handleSingleDeleteOptions(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";
    const error = this.props.handleAddOptionAll(option);
    this.setState(() => {
      return {
        error //same as error:error i.e shorthand property
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="add option here.." />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, rootElement);
