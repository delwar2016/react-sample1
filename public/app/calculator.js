/**
 * Created by delwar on 8/21/16.
 */

var CalculatorClass = React.createClass({
  getInitialState: function() {
    return { result: 0};
  },

  setNumber1 : function(e){
    this.number1 = e.target.value;
    this.setResult();
  },

  setNumber2 : function(e){
    this.number2 = e.target.value;
    this.setResult();
  },

  operators: ['+', '-','*', '/', '%'],

  setOperator : function(e){
    this.operator = e.target.value;
    this.setResult();
  },

  setResult : function(e){
    var me = this;
    var objValid = me.validation();
    var result = 'N/A';

    if(objValid.isValid){
      if(e){
        result = me.calculate();
      }
      else{
        result = objValid.message;
      }

    }
    else{
        result = objValid.message;
    }

    this.setState({result: result});
  },


  validation: function(){

    if(this.number1 ==='' || !this.number1){
      return {
        isValid: false,
        message: "Please enter number 1"
      };
    }

    if(isNaN(this.number1)){
      return {
        isValid: false,
        message: "Please enter valid number"
      };
    }
    if(this.number2 ==='' || !this.number2){
      return {
        isValid: false,
        message: "Please enter number 2"
      };
    }

    if(isNaN(this.number2)){
      return {
        isValid: false,
        message: "Please enter valid number"
      };
    }

    if(this.operators.indexOf(this.operator) === -1){
      return {
        isValid: false,
        message: "Please enter valid operator"
      };
    }

    return {
      isValid: true,
      message: "Click on calculate button"
    }
  },


  calculate: function(){
    var result = '';
    if(this.operator ==='+'){
      result = (Number(this.number1) + Number(this.number2));
    }
    if(this.operator ==='-'){
      result = (Number(this.number1) - Number(this.number2));
    }
    if(this.operator ==='*'){
      result = (Number(this.number1) * Number(this.number2));
    }
    if(this.operator ==='/'){
      result = (Number(this.number1) / Number(this.number2)).toFixed(2);
    }
    if(this.operator ==='%'){
      result = (Number(this.number1) % Number(this.number2));
    }
    return result;
  },
  render: function() {
    return  (<div>
    <p>Enter Number 1 <input onChange={this.setNumber1} /></p>
    <p>Enter Number 2 <input  onChange={this.setNumber2}  /></p>
    <p>Operator <input  onChange={this.setOperator}  /></p>
    <p><button onClick={this.setResult} >Calculate</button> <input value={this.state.result}   /></p>
    <p></p>

    </div>);
  }
});

ReactDOM.render(<CalculatorClass />,  document.getElementById('example'));


