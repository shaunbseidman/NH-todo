import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

export const APP_COLORS = {
    white: '#ffffff',
    black: '#000000',
    orchid20: '#e7e5f5',
    coral: '#ef7473',
    orchid40: '#454257',
};

export const APP_FONTS = {
    headerFont: 'Avenir Next, Roboto, Helvetica, Arial, sans-serif',
};

export const BREAKPOINTS = createBreakpoints({
    values: {
        xs: 0,
        sm: 620,
        md: 768,
        lg: 1024,
        xl: 1280,
    },
});