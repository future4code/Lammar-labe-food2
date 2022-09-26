import {
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export const NameInput = ({ value, onChange }) => {
  return (
    <FormControl mt="20px" isRequired>
      <fieldset>
        <FormLabel as="legend">Nome</FormLabel>
        <Input
          size="sm"
          height="20px"
          variant="unstyled"
          name="name"
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </FormControl>
  );
};
