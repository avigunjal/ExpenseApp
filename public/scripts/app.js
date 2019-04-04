"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleSingleDeleteOptions = _this.handleSingleDeleteOptions.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePic = _this.handlePic.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }

  //Life cycles componentDidMount: When component first time render


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Fetching the data");
    }

    //Life cycles componentDidUpdate: When component state change this lifecycle method gets called

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("Saving the data");
    }
  }, {
    key: "handleSingleDeleteOptions",
    value: function handleSingleDeleteOptions(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      }); //new syntax for removing individual options
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Already Exists..";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handlePic",
    value: function handlePic() {
      //  alert("action pic");
      var pic = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[pic]);
      console.log(pic);
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Let's make decision with Indecision App";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePic: this.handlePic
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleSingleDeleteOptions: this.handleSingleDeleteOptions,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOptions, { handleAddOptionAll: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

//This are stateless functional components


var Header = function Header(props) {
  var title = props.title;
  var subTitle = props.subtitle;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      " ",
      title,
      " "
    ),
    React.createElement(
      "p",
      null,
      " ",
      subTitle,
      " "
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePic, disabled: !props.hasOptions },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleSingleDeleteOptions: props.handleSingleDeleteOptions
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    "\xA0\xA0",
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleSingleDeleteOptions(props.optionText);
        }
      },
      "Remove"
    )
  );
};

var AddOptions = function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOptions, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      e.target.elements.option.value = "";
      var error = this.props.handleAddOptionAll(option);
      this.setState(function () {
        return {
          error: error //same as error:error i.e shorthand property
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option", placeholder: "add option here.." }),
          React.createElement(
            "button",
            null,
            "Submit"
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

var rootElement = document.getElementById("app");
ReactDOM.render(React.createElement(IndecisionApp, null), rootElement);
