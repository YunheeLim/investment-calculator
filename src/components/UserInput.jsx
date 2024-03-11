export default function UserInput(props) {

  function handleInitialInvestment(e) {
    props.onSetInitial_investment(e.target.value);
    if(Number(e.target.value) < 1){
      alert('Please enter a number bigger than 0')
    }
  }

  function handleAnnualInvestment(e) {
    props.onSetAnnual_investment(e.target.value);
    if(Number(e.target.value) < 1){
      alert('Please enter a number bigger than 0')
    }
  }

  function handleExpected_return(e) {
    props.onSetExpected_return(e.target.value);
    if(Number(e.target.value) < 1){
      alert('Please enter a number bigger than 0')
    }
  }

  function handleDuration(e) {
    props.onSetDuration(e.target.value);
    if(Number(e.target.value) < 1){
      alert('Please enter a number bigger than 0')
    }
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> INITIAL INVESTMENT</label>
          <input type="number" onChange={handleInitialInvestment}/>
        </p>
        <p>
          <label> ANNUAL INVESTMENT</label>
          <input type="number" onChange={handleAnnualInvestment}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" onChange={handleExpected_return}/>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" onChange={handleDuration}/>
        </p>
      </div>
    </section>
  );
}