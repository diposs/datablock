import { Title } from '@mantine/core';

export function Texto() {
  return (
    <Title
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      fz="xl"
      fw={700}
    >
      DataBlock
    </Title>
  );
}