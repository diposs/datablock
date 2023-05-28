import { Image, AspectRatio } from '@mantine/core';

export function HeaderLogo() {
  return (
    <AspectRatio ratio={78 / 45}>
    <Image src="/HeadLogo.svg" alt="HeaderLogo" height={45} width={78} withPlaceholder/>
    </AspectRatio>
  );
}
