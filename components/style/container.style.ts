import { createStyles } from '@mantine/core';

export default createStyles ((theme) => ({
      inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      },
      burgerCss: {
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
      },
})
)
