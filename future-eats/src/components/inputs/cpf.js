import {
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export const CpfInput = ({ value, onChange, isValid }) => {
  return (
    <FormControl isRequired>
      <fieldset>
        <FormLabel as="legend">CPF</FormLabel>
        <input
          name="cpf"
          type="number"
          value={value}
          onChange={onChange}
          maxLength={11}
        />
      </fieldset>
      {!isValid ? (
                <FormErrorMessage as="p">
                   CPF deve conter 11 números
                </FormErrorMessage>
            ) : undefined}
    </FormControl>
  );
};
