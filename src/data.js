import {
  supportDesk,
  SocialMediaApp,
  FeedbackApp,
  adminDashboard,
  catalog,
  ecommerceSanity,
  githubFinder,
  facturare,
  facebook,
  screen,
} from './assets/index'
export const data = [
  {
    img: `${SocialMediaApp}`,
    title: 'Social Media App',
    desc: 'Fullstack social media App where the client can create an account, post pictures where other friends can see them. The user can add a profile picture, comment on the posts of other users add them as friends. The user can also visit the profile of other people where he can find more information about him. The application uses express and mongoose as a server to store the profile picture and user information',
    sub: 'MERN app',
    linkYt: 'https://www.youtube.com/watch?v=F6HTUQzfPFA&feature=youtu.be',
    linkGithub: 'https://github.com/EduardCirstea/Fullstack-SocialMediaApp',
  },
  {
    img: `${supportDesk}`,
    title: 'Support Desk',
    sub: 'MERN app',
    desc: `Support Ticket is a full stack application using React for client-side and express with mongoDb for server-side.
-User can login or register ,access his account which is stored in a cloud database using MongoDb Atlas for
storing
-User can create a ticket if he have a problem with one of the products
-User can interact with admin for more support in a notes system for every ticket
-Using react-redux for global data 
    `,

    linkYt: 'https://www.youtube.com/watch?v=nl7kFVGv6bY',
    linkGithub: 'https://github.com/EduardCirstea/support-ticket',
  },
  {
    img: `${adminDashboard}`,
    title: 'Admin Dashboard',
    sub: 'sub',
    desc: 'Fullstack MERN application displaying a nice looking admin dashboard with cool looking design where you can see all users ,different charts and other information.Using expressjs and mongoose to store the information and send it to the frontend ,where react can do he`s magic ',
    linkYt: 'https://www.youtube.com/watch?v=MDAsS329pFI',
    linkGithub: 'https://github.com/EduardCirstea/Admin-dashboard',
  },
  {
    img: `${facturare}`,
    title: 'Generate Invoice',
    sub: 'css/react/redux/express/mongoose',
    desc: 'Fullstack application using MERN stack ,where the user can generate invoice can add new clients, edit or deletethem . You can view all invoices generated, issued or collected and can sort them by date. Both the clients and the invoices are stored in a cloud database, using Mongodb Atlas, and the information reaches the server where it is verified.',
    linkYt: 'https://www.youtube.com/watch?v=EtM1kLm7MTM',
    linkGithub: 'https://github.com/EduardCirstea/App-facturare/',
  },
  {
    img: `${ecommerceSanity}`,
    title: 'E-commerce',
    sub: 'NextJs/Sanity/Stripe',
    desc: "E-commerce website using Nextjs and sanity for proccesing information and storage ,where you can edit the content for client side .I've used nextjs and tailwind css for frontend and for processing paymant Stripe . You can view diferrent products ,add them to cart and then to buy them with cool animation after .",
    linkYt: 'https://www.youtube.com/watch?v=WHAbMjBfA-c',
    linkGithub: 'https://github.com/EduardCirstea/Ecommerce_nextjs',
  },
  {
    img: `${catalog}`,
    title: 'Grade book - in progress',
    sub: 'MERN app-in progress',
    desc: 'Fullstack MERN application for students and teachers.Students can view their grades ,add files or request files. Teachers can add grades ,edit grades and can edit their profiles.',
    linkYt: '#',
    linkGithub: 'https://github.com/EduardCirstea/Catalog-studentesc',
  },
  {
    img: `${githubFinder}`,
    title: 'Github Finder',
    sub: 'react/github-api',
    desc: `
    I create an app that uses Github Api where you can find users profile where you can see his profile and repos ,if
he is up to work ,his site and followers.
-React app using context and reducers to manipulate global data and axios to fetch data from Github Api
-Easy to use and friendly user interface
    `,
    linkYt: 'https://www.youtube.com/watch?v=IEJJBuDIONQ',
    linkGithub: 'https://github.com/EduardCirstea/github-finder-app',
  },
  {
    img: `${FeedbackApp}`,
    title: 'Feedback App',
    sub: 'React',
    desc: "A simple feedback app where i'm using json server to store the data .Users can write ,edit or delete a feedback about company  ",
    linkYt: 'https://youtu.be/H1hHWz1xs3A ',
    linkGithub: 'https://github.com/EduardCirstea/github-finder-app',
  },
  {
    img: `${facebook}`,
    title: 'Facebook',
    sub: 'MERN app-in progress',
    desc: 'Fullstack MERN application for creating a Facebook clone ,as well all his features ,from posting to adding friends ,from creating and posting posts to commenting and likeing others ,this app is trying all of them ! ',
    linkYt: '#',
    linkGithub: 'https://github.com/EduardCirstea/Facebook-clone',
  },
]
