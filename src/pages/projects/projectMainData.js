import bartBackground from '../../components/img/bartImgBackground.png';
import databaseBackground from '../../components/img/databaseBackground.png';
import portfolioBackgound from '../../components/img/portfolioBackground.png';
import stockBackground from '../../components/img/stockBackground.png';
import gsceBackground from '../../components/img/gsceBackground.png';
import jsLogo from '../../components/img/jsLogo.png';
import cppLogo from '../../components/img/cppLogo.png';
import reactLogo from '../../components/img/reactLogo.png';
import javaLogo from '../../components/img/javaLogo.png';
import cLogo from '../../components/img/cLogo.png';
import mysqlLogo from '../../components/img/mysqlLogo.png';
import bootstrapLogo from '../../components/img/bootstrapLogo.png';
import nodejsLogo from '../../components/img/nodejsLogo.png';
import htmlLogo from '../../components/img/htmlLogo.png';
import cssLogo from '../../components/img/cssLogo.png';
import paypalLogo from '../../components/img/paypalLogo.png';



export const projectMainData = [
    {
        title: 'Portfolio Site',
        link: '',
        embed: '',
        background: portfolioBackgound,
        description: [
            'The very site you are looking at!',
            'Built using react framework',
            'Emailjs used to implement email functionality which can be sent from the contact page',
            'Bootstrap, react spring, threejs, tsparticles, and other libraries used for animations and functionality to provide an efficient, interactive, and enjoyable user experience',
            'React router used to handle different pages'
        ],
        languages: [
            htmlLogo,
            cssLogo,
            jsLogo,
            reactLogo,
            bootstrapLogo,
            nodejsLogo
        ],
        code: 'https://github.com/cshafizadeh/portfolio-site'
    },
    {
        title: 'E-Commerce Database',
        link: '',
        background: databaseBackground,
        embed: 'https://www.youtube.com/embed/pkvBJdnA0Kc',
        description: [
            'Displays E-Commerce Database, showing customers, orders, and items',
            'User can add, search, delete, and update database tables',
            'Error handling checks inputs and makes sure no bad requests are displayed or affect the site',
        ],
        languages: [
            htmlLogo,
            cssLogo,
            jsLogo,
            nodejsLogo,
            mysqlLogo,
        ],
        code: 'https://github.com/cshafizadeh/cs340_project'
    },
    {
        title: 'GSCE (Good Stewardship Community Endowment)',
        link: 'https://gscendowment.org/',
        background: gsceBackground,
        embed: '',
        description: [
            'Freelance project building the website for the Good Stewardship Community Endowment, a non-profit focused on combating climate change',
            'EmailJs used to handle contact and grant forms, sending the form data to the GSCE email',
            'PayPal API implemented, allowing users to donate to the endowment',
            'Error handling prevents incomplete forms from being submitted as well as invalid PayPal donations',
            'Bootstrap used to create a clean, interactive, and responsive user experience'
        ],
        languages: [
            htmlLogo,
            cssLogo,
            jsLogo,
            nodejsLogo,
            reactLogo,
            bootstrapLogo,
            paypalLogo,
        ],
        code: ''
    },
    {
        title: 'BART API',
        link: '/bart',
        background: bartBackground,
        embed: '',
        description: [
            'Uses BART (Bay Area Rapid Transit) API to fetch data about stations and routes',
            'Based on user selection, finds all trains passing through station, their final destination, and how long until each train arrives',
        ],
        languages: [
            htmlLogo,
            cssLogo,
            reactLogo,
            jsLogo
        ],
        code: 'https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/bartAPI'
    },
    {
        title: 'Stock API',
        link: '/stock',
        background: stockBackground,
        embed: '',
        description: [
            'Uses Polygon stock API to fetch stock data, finding the opening, closing, high, and low values of a stock of any pest date',
            'Error handling makes sure user input provides a valid stock symbol, and a valid date. Does not return data or re-render if there is an error',
            'Submission handling checks if user input is different that past input, and only makes fetch request if stock symbol or date have changed'
        ],
        languages: [
            htmlLogo,
            cssLogo,
            reactLogo,
            jsLogo
        ],
        code: 'https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/stocks'
    },
]