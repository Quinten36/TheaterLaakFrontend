
import {useState} from 'react'
import './LoginPagestyles.css';
export default function RememberMeKnop() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(!isChecked)
  };

  return (
      

      <div className = "RememberMeKnop">
        <label>
        <input type="checkbox"  checked={isChecked} onChange={handleChange} />
          Mijn inloggegevens onthouden
      </label>
    </div>

  );
}
