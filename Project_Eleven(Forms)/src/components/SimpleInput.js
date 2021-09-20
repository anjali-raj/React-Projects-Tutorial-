import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes('@') && enteredEmail.trim() !== '';
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  // const nameInputChangeHandler = event => {
  //    setEnteredName(event.target.value); 
  // }
  //   const emailInputChangeHandler = event => {
  //     setEnteredEmail(event.target.value); 
  //  }
  //   const nameInputBlurHandler = event => {
  //     setEnteredNameTouched(true);
  //  }
  //  const emailInputBlurHandler = event => {
  //   setEnteredEmailTouched(true);
  // }
  const formSubmissionHandler = event => {
    event.preventDefault();
    //setEnteredNameTouched(true);
    //setEnteredEmailTouched(true);

    if(!formIsValid){
      return;
    }
    //console.log(enteredName);
    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetNameInput();
    resetEmailInput();

    // setEnteredEmail('');
    // setEnteredEmailTouched(false)
  };
  
  const nameInputClasses = nameInputHasError? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
         onChange={nameChangedHandler} 
         onBlur={nameBlurHandler} 
         value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='email' 
         onChange={emailChangedHandler} 
         onBlur={emailBlurHandler} 
         value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Please Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
