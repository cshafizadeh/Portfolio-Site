import Weather from '../../../../components/img/weather_logo.png';
import Dice from '../../../../components/img/dice-logo.png';
import Portfolio from '../../../../components/img/portfolio_logo.png';

export const projectData = [
    {
        title: 'WEATHER APP',
        link: '/weather',
        logo: Weather,
        description: [
            'Used open weather API to fetch weather data in provided location including city, temp, humidity, wind speed, and weather icon.',
            'Fetched users location at app launch and sent back weather at user location'
        ],
        code: 'wa'
    },
    {
        title: 'DICE SITE',
        link: '/dice',
        logo: Dice,
        description: [
            'Interactive site using JS DOM minipulation to add / remove dice',
            'Handlebars used to format site efficiently',
            'Worked and collaborated in team to make site'
        ],
        code: 'ds'
    },
    {
        title: 'PORTFOLIO SITE',
        link: '/portfolio',
        logo: Portfolio,
        description: [
            'Used React js to build reusable and optimized web pages',
            'css and js create stylish and interactive features for quality user experience',
            'Responsive design allows for site to be used on any device',
            'React router dom used for multiple pages and 404 handling'
        ],
        code: 'ps'
    }
]