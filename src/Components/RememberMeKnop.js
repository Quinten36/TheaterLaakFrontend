import { Checkbox } from 'react-bootstrap';
import useState from 'react'
export default function RememberMeKnop() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Checkbox id="remember-me" checked={isChecked} onChange={handleChange}>
      Remember Me
    </Checkbox>
  );
}
