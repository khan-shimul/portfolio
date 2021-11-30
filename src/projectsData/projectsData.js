import proj1 from '../image/projects/mock12.png';
import proj2 from '../image/projects/mock22.png';
import proj3 from '../image/projects/mock32.png';
import proj4 from '../image/projects/mock42.png';
import proj5 from '../image/projects/mock52.png';

export const projectsData = [
    {
        id: 1,
        name: 'Car Sale Web Application',
        img: proj1,
        shortDescription: 'This is CarToday. CarToday is a Car Sale Web Application. In this application user could be able to buy car, cancel their order and many features available... ',
        description: 'This is Car Sale Web Application. On my orders page, the logged-in user will see only his/her orders and orders status. If the user wants, he/she will be able to cancel any order.Users will be able to give reviews and the reviews will be displayed on the home page. Admin could be able to make another user an admin.',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, MongoDB',
        liveSite: 'https://car-today.web.app/',
        clientSideCode: 'https://github.com/khan-shimul/car-today-client-sideP', serverSideCode: 'https://github.com/khan-shimul/car-today-server-sideP'
    },
    {
        id: 2,
        name: 'Travel Web Application',
        img: proj2,
        shortDescription: 'This is TravelBea. TravelBea is a tourism related Web Application. In this application user could be able to book package, cancel their booking and many features available... ',
        description: 'This is Travel Related Web Application. The details of the product that the user has clicked will be displayed on the booking page. The admin will be able to delete anyones order on the Manage Booking page. Also will be able to add a brand new service. After adding that service, this service will appear on the home page',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, MongoDB, Express js, Node js',
        liveSite: 'https://travel-bea.web.app/', clientSideCode: 'https://github.com/khan-shimul/travel-bea-client-sideP', serverSideCode: 'https://github.com/khan-shimul/travel-bea-server-sideP'
    },
    {
        id: 3,
        name: 'Medical Web Application',
        img: proj3,
        shortDescription: 'This is MediSolve. Medical Solve is a medical instrument and medicine sale related Web Application. Users will be able to sign in and signup using email-password and google account... ',
        description: 'This is Medical Instrument and Medicine Sale Web Application. Users will be able to sign in and signup using email-password and google account. If the user is not logged in, the details page redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to.',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, React-Router',
        liveSite: 'https://medical-solve.web.app/', clientSideCode: 'https://github.com/khan-shimul/medical-solveP'
    },
    {
        id: 4,
        name: 'Course Sale Web Application',
        img: proj4,
        shortDescription: 'This is LangSpace. LangSpace is a language learning related Web Application. This is a static web site... ',
        description: 'Language Space is a online laguage learning platform. Included worldwide Language ex: English, Spanish, French and more. Language Space for those people who want to learn new language. Available navigation. Student can enroll the course. This is the React Js Project. Also i used bootstrap font-awesome, react router and CSS.',
        technology: 'HTML, CSS, Bootstrap, React js, React-Router',
        liveSite: 'https://lang-space.netlify.app/', clientSideCode: 'https://github.com/khan-shimul/lang-spaceP'
    },
    {
        id: 5,
        name: 'Honda CBR Web Application',
        img: proj5,
        shortDescription: 'This is Honda CBR. Honda CBR is a one niche (CBR) sale related Web Application. And This is a static web site... ',
        description: 'Honda CBR is a one niche (CBR) sale related Web Application. And this the static web site. Available navigation.',
        technology: 'HTML, CSS, Bootstrap',
        liveSite: 'https://hondaa-cbr.netlify.app/', clientSideCode: 'https://github.com/khan-shimul/honda-cbr'
    },

]