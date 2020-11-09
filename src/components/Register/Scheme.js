import * as yup from "yup"; 
const sginupScheme = ( fieldName) => 
{
    if (fieldName) {
        const validationObj = {
          email: yup.string().email().matches("@3w/&%5%^"),
          password: yup.string().min(8, "min char is 8").matches().max(20),
          rePassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
          isChecked: yup.boolean().typeError("You must agree").oneOf([true]),
        };
    
        const errMsgs = {
          email: "Enter e-mail ",
          password: "Where is your password ",
          rePassword: "test",
        };
    
        validationObj[fieldName] = validationObj[fieldName].required(
          errMsgs[fieldName]
        );
    
        return yup.object().shape(validationObj);
      } else {
        return yup.object().shape({
          email: yup.string().email().required("Enter e-mail "),
          password: yup
            .string()
            .min(8, "should be at least  8 chars")
            .matches()
            .max(20)
            .required("Where is your password "),
          rePassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Did you really forget me "),
          isChecked: yup
            .boolean()
            .typeError("You must agree")
            .oneOf([true], " ")
            .required(),
        });
      }
    };
    
    export default sginupScheme;
 



