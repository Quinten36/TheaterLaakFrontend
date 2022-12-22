
import {useState} from 'react'
import './LoginStyles.css';
export default function RememberMeKnop() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(!isChecked)
  };

  return (
      

      <div id="RememberMeCheckBox">
        <label>
        <input type="checkbox"  checked={isChecked} onChange={handleChange} />
          Onthoud mijn gegevens
      
      </label>
    </div>

  );
}
