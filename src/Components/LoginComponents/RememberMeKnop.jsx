import {useEffect, useState} from 'react'

export default function RememberMeKnop(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    
    setIsChecked(event.target.checked);
    if(event.target.checked){
      localStorage.setItem("username", props.Username.usernameInput);
      localStorage.setItem("password", props.Password.PasswordInput);
      localStorage.setItem("Checkbox", true);
    }
    else { 
      localStorage.removeItem("username")
      localStorage.removeItem("password")
      localStorage.removeItem("Checkbox")
    }
  };

  useEffect(() => {
    setIsChecked (localStorage.getItem("Checkbox") === 'true')
  } ,[])


  return (
      <div className = "RememberMeKnop">
        <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
          Mijn inloggegevens onthouden
      </label>
    </div>
  );
}
