import React from "react";
import Button from '../Btn/Button';
class Clickbtn extends React.Component {
    render() {
      return (
        <>
          <Button
            type="submit"
            name="submit"
            id="submit"
            className="submit"
            Button
            onsumbit = {this.props.onsumbit}
          >
            Register Account
          </Button>
          <div className="Eman">
    
            <div className="googleSs">
              <Button className="btn2" name="register_G" id="register_G">
               
                <span className="btn_box">Register with Google</span>
              </Button>
            </div>
          </div>
        </>
      );
    }
  }
  export default Clickbtn