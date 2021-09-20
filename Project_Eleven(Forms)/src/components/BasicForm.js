import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const isNotEmpty = value => value.trim !== '';
   const isEmail = value => value.includes('@');
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  let formIsValid = false;
  if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }
  const submitHandler = event => {
    event.preventDefault();
    
    if(!formIsValid){
      return;
    }
    console.log("Submitted");
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameInputHasError? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={firstNameInputClasses}>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' 
           onChange={firstNameChangedHandler} 
           onBlur={firstNameBlurHandler} 
           value={enteredFirstName}
          />
        </div>
        {firstNameInputHasError && <p className="error-text">Please Enter a First Name.</p>}
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' 
          onChange={lastNameChangedHandler} 
          onBlur={lastNameBlurHandler} 
          value={enteredLastName}
          />
        </div>
        {lastNameInputHasError && <p className="error-text">Please Enter a Last Name.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' 
         onChange={emailChangedHandler} 
         onBlur={emailBlurHandler} 
         value={enteredEmail}
        />
      </div>
      {emailInputHasError && <p className="error-text">Please Enter a valid email address.</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
