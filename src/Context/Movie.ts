export class Movie {
    id: number;
    title: string;
    description: string;
    duration: number;
    director: string;
    actors: string[];
    rating: number;
    image: string;
    trailer: string;

    constructor(id: number, title: string, description: string, duration: number, director: string, actors: string[], rating: number, image: string, trailer: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.director = director;
        this.actors = actors;
        this.rating = rating;
        this.image = image;
        this.trailer = trailer;
    }
}

export const movies = [
    new Movie(1, "Shang-Chi and the Legend of the Ten Rings", "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organisation.", 132, "Destin Daniel Cretton", ["Simu Liu", "Awkwafina", "Tony Chiu-Wai Leung"], 7.9, require('../assets/shang-chi.jpg'), "https://www.youtube.com/embed/8YjFbMbfXaQ"),
    new Movie(2, "Eternals", "The Eternals are a race of near-immortal synthetic beings created by the Celestials. They were sent to multiple planets to protect and help evolve sentient lifeforms to power a Celestial seed inside the planet, which would absorb the energy made from the sentient lifeforms.", 156, "Chloé Zhao", ["Angelina Jolie", "Richard Madden", "Salma Hayek"], 7.4, require('../assets/eternals.jpg'), "https://www.youtube.com/embed/x_me3xsv7vY"),
    new Movie(3, "Spider-man No way Home", "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world. The Multiverse Unleashed.", 148, "Jon Watts", ["Tom Holland", "Zendaya", "Benedict Cumberbatch"], 8.0, require('../assets/spiderman.jpg'), "https://www.youtube.com/embed/rt-2cxAiPJk"),
    new Movie(4, "Avengers Endgame", "AVENGERS: ENDGAME is set after Thanos' catastrophic use of the Infinity Stones randomly wiped out half of Earth's population in Avengers: Infinity War. Those left behind are desperate to do something -- anything -- to bring back their lost loved ones.", 181, "Anthony Russo", ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"], 8.4, require('../assets/endgame.jpg'), "https://www.youtube.com/embed/TcMBFSGVi1c")
];