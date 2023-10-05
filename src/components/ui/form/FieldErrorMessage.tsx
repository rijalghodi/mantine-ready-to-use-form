import { Icon } from "@iconify/react";
import { Box, Text } from "@mantine/core";
import * as React from "react";

interface FieldErrorMessageProps {
  children: React.ReactNode;
}

const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Icon
        icon="tabler:alert-circle"
        width={16}
        height={16}
        style={{ marginRight: 5 }}
      />
      <Text span fw={400} fz={12} tt="capitalize">
        {children}
      </Text>
    </Box>
  );
};

export default FieldErrorMessage;
