import * as PXBThemes from '@pxblue/react-themes';
import * as Colors from '@pxblue/colors';
import StPatricksDay from '../../app/assets/themes/st-patricks-day/st-patricks-day-banner.png';
import stPatricksDayCursor from '../../app/assets/themes/st-patricks-day/st-patricks-day-cursor.png';
import AppBarTile from '../../app/assets/themes/st-patricks-day/st-patricks-day-appbar-tile.png';
import { Schedule } from './types';

export const StPatricksDaySchedule: Schedule = {
    start: new Date(0, 2, 16), // Mar 16
    end: new Date(0, 2, 19), // Mar 18
    config: {
        theme: {
            ...PXBThemes.blue,
            palette: {
                ...PXBThemes.blue.palette,
                type: 'light',
                primary: {
                    light: Colors.green[300],
                    main: Colors.green[700],
                    dark: Colors.green[900],
                },
                secondary: {
                    light: Colors.gold[300],
                    main: Colors.gold[500],
                    dark: Colors.gold[900],
                },
            },
            overrides: {
                ...PXBThemes.blue.overrides,
                MuiAppBar: {
                    ...PXBThemes.blue.overrides?.MuiAppBar,
                    colorSecondary: {
                        color: Colors.white[50],
                        backgroundColor: Colors.green[700],
                        '& .MuiInputBase-root': {
                            color: Colors.white[50],
                        },
                        '& .MuiSelect-icon': {
                            color: Colors.white[50],
                        },
                    },
                },
                MuiButton: {
                    ...PXBThemes.blue.overrides?.MuiButton,
                    outlined: {},
                    outlinedPrimary: {},
                },
            },
        },
        drawerActiveBackgroundFade: 0.85,
        landingPageBanner: {
            backgroundImage: `url(${StPatricksDay})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 65%',
            backgroundColor: Colors.green[900],
            cursor: `url("${stPatricksDayCursor}") 5 5, auto`,
        },
        className: 'st-patricks-day',
        appBarBackground: {
            backgroundImage: `url(${AppBarTile})`,
            backgroundSize: '300px',
            backgroundPosition: 'left 75%',
        },
        landingPageTagline: "Top o' the mornin' to ya!",
    },
};
