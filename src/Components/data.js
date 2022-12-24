import { v4 as uuidv4 } from 'uuid';
/*Movies data details since no data base*/
const data = [
    { id:uuidv4(), title:'Emancipation', trailer: "https://www.youtube.com/embed/wafyhTpWpUs", description:"A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.", 
    posterURL:'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230282/emancipation-posterart.jpg', 
    rating: 6 },
    { id:uuidv4(), title:'Avatar: The Way of Water', trailer: "https://www.youtube.com/embed/d9MyW72ELq0", description:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.", 
    posterURL:'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg', 
    rating: 8 },
    { id:uuidv4(), title:'Bullet Train', trailer: "https://www.youtube.com/embed/0IOsk2Vlc4o", description:"Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.", 
    posterURL:'https://media-cache.cinematerial.com/p/500x/cps6tbui/bullet-train-movie-poster.jpg?v=1654096192', 
    rating: 7 }, 
];

export default data;