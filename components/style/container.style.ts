import { createStyles } from '@mantine/core';

export default createStyles ((theme) => ({
      inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      burgerCss: {
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
      },
})
)