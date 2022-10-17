import {
    Input,
    InputGroup,
    InputRightElement,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";

export const EmailInput = ({isValid, value, onChange}) => {
    return (
        <FormControl isInvalid={!isValid} isRequired>
          <fieldset>
            <FormLabel as="legend">E-mail</FormLabel>
            <Input
              size="sm"
              height="20px"
              variant="unstyled"
              name="email"
              value={value}
              onChange={onChange}
            />
            {!isValid ? (
              <FormErrorMessage as="p">Email inválido.</FormErrorMessage>
            ) : undefined}
          </fieldset>
        </FormControl>
    )
}