import {useState} from 'react';
import viewPass from "../../images/password-view/senha-2.png";
import noViewPass from "../../images/password-no-view/senha.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
    Input,
    InputGroup,
    InputRightElement,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";


export const PasswordInput = ( { value, onChange, isValid }) => {
    const [showPassword, setShowPassword] = useState(false);
    const onClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
  return (
    <FormControl as="fieldset" 
    isInvalid={!isValid} isRequired>
      <FormLabel as="legend">Senha</FormLabel>
      <InputGroup size="md">
        <Input
          size="sm"
          height="20px"
          variant="unstyled"
          name="password"
          value={value}
          onChange={onChange}
          pr="5em"
          type={showPassword ? "text" : "password"}
        
        />
        <InputRightElement w="4em" h="1em">
          <Button variant="ghost" size="sm" onClick={onClickShowPassword}>
            {showPassword ? <img src={viewPass} /> : <img src={noViewPass} />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
                <FormErrorMessage as="p">
                   A senha deve conter 6 ou mais caracteres, pelo menos 1 letra minúscula, 1 maiúscula e 1 número.
                </FormErrorMessage>
            ) : undefined}
    </FormControl>
  );
};
