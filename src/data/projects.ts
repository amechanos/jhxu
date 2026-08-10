export type ProjectItem = {
  id: string;
  title: string;    
  description: string;
  tech: string[];
  url: Record<string, string>;
}

export const projects: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Spaceslinger',
    description: 'Spaceslinger was a project I made for my Media Units 3/4 Subject in highschool. This project was selected for Top Designs 2026 and is one of the earliest games I developed. Spaceslinger is an action-packed 2D puzzle-adventure game employing a unique drawing mechanic to navigate through a series of challenging levels, following Elias Novem\'s journey to defeat the evil Magha.',
    tech: ['Godot ', 'Photoshop', 'Illustrator', 'Bandlab'],
    url: {"Game Link":'https://jhxu.itch.io/spaceslinger', "Development Process": 'https://drive.google.com/file/d/1kCO8PJJCBTlliC-gzucdr72rxamUPOYF/view?usp=sharing'},
  },
  {
    id: 'project-2',
    title: 'Treed',
    description: 'Treed was a project I made for my Visual Communication Design Units 3/4 Subject in highschool. Treed is a simple experience inspired by Pokemon Go, allowing users to grow a tree while they actively walk or exercise, immersing themselves with nature. The app was build around Japanese technique Shinrin-yoku, or forest bathing, which is the practice of immersing oneself in nature to improve mental health and wellbeing. The app was designed to encourage users to explore their surroundings and discover new places while also promoting mindfulness and relaxation.',
    tech: ["Figma", "Illustrator", "Photoshop"],
    url: {"Live Prototype": 'https://www.figma.com/proto/7kheuXFQpp6AzW9ne5x6zd/Treed?node-id=201-8&starting-point-node-id=201%3A8&t=3WvApkWBOazM6RyF-1', "Design Process": 'https://drive.google.com/file/d/1q5ZhNQZw8FAMxsghNpJ3bakaq8X6NDP0/view?usp=sharing'},
  },
  {
    id: 'project-3',
    title: 'Tombmarker',
    description: 'Tombmarker was a First-Year University Project for my Game Design Unit. Created by a group of 4, this project taught me the importance of collaborative development and iterative design. It is a top down dungeon crawler with a unique fold-out room mechanic and environmental combat. Having to balance the game\'s difficulty and pacing, as well as ensuring that the mechanics were intuitive and engaging, it made for a challenging but rewarding experience, ultimately earning a HD.',
    tech: ["Team Project", "Paper Prototype", "Affinity"],
    url: {"Printable": 'https://drive.google.com/file/d/1hM8aMOVE3bqSz_kN1rfzMSsXDbfj8FG5/view?usp=sharing', "Design Document": 'https://docs.google.com/document/d/1mn4AGFgUHrBSKMaLbQtY7QzjdiXu0JRU/edit?usp=sharing&ouid=108981163000914019498&rtpof=true&sd=true'},
  },
  {
    id: 'project-4',
    title: 'bong',
    description: 'Bong was my first solo game that wasn\'t tied to any educational projects. It allowed me to create a narrativeless game that resonated with me. Bong as a casual game merges mechanics of a block breaker and endless runner into one, creating for a low-pressure experience that is easy to pick up and play.',
    tech: ['Godot', 'Photoshop', 'Illustrator', 'Bandlab'],
    url: {"Game Link": 'https://jhxu.itch.io/bingbong'},
  },
  {
    id: 'project-5',
    title: 'Splashgrounds',
    description: 'Splashgrounds was another solo project of mine. Being rather ambitious to create a 2D Basketball Platformer that merges aspects of Flappy Bird, Geometry Dash and Basketball, I wanted to create a game that was both challenging and fun. The game, though not polished, proved to be a great learning experience for me, as I had to learn how to implement a physics system and make a custom level builder that was both challenging and fun.',
    tech: ['Godot', 'Illustrator', 'Photoshop'],
    url: {"Game Link": 'https://jhxu.itch.io/splashgrounds'},
  },
  {
    id: 'project-6',
    title: '24',
    description: '24 was a simple card game that I made over a vacation period. When I played 24, the physical version with my family, the nostalgic value of it inspired me to digitalise the game and turn it into an experience for others to try as well. The game is based on the mathematical card game of the same name, where players must use the numbers on the cards to create an equation that equals 24.',
    tech: ['Godot', 'Affinity'],
    url: {"Game Link": 'https://jhxu.itch.io/twentyfour'},
  },
  {
    id: 'project-7',
    title: 'Slugterra: Wrath of the Outback',
    description: 'Slugterra has been a childhood keepsake for me that I often find myself unable to let go. It is a piece of media that resonates with me deeply and thus inspired me to begin writing my own fanfiction for the series. While there are websites that host fanfiction, I wanted to create my own website that would allow me to share my work with others as well as a build-in and embedded wiki. This project was a great learning experience for me, as I had to learn how to create a website from scratch using HTML, CSS, TypeScript and React.',
    tech: ['HTML', 'CSS', 'TypeScript', 'React'],
    url: {"Website": 'https://slugterra-ruddy.vercel.app'},
  },
  {
    id: 'project-8',
    title: 'Chill Out!',
    description: 'Chill Out! is a Mini Jame Gam #52 submission, my first ever game jam that I participated in. The game is a winter themed bullet hell, stemming from the Game Jam\'s theme of Freeze and the object of whistle. With mechanics like a whistle freezing enemies, this simple game taught me how to work with a tight time constraint of 48 hours alongside a teammate that lived in a different timezone.',
    tech: ['Godot', 'GDScript', 'Aesprite'],
    url: {"Game Link": 'https://jhxu.itch.io/chill-out'},
  },
  {
    id: 'project-9',
    title: 'StarForge',
    description: 'StarForge was a submission for the Monash Association of Coding (MAC) Game Jam 2026. The game is a 2D space shooter reminiscent of classic arcade games with low-res pixel graphics, designed into a rogue-like experience where players can upgrade their ship by fitting tetromino-shaped modules into a grid to form a ship, fitting the Game Jam\'s theme of Space two ways. This was a great learning experience for me as it was my first Game Jam in University, collaborating with a team of 4 including international students as well as those in different disciplines to make a game in 48 hours.',
    tech: ['Godot', 'Notion', 'Bandlab', 'Affinity'],
    url: {"Game Link": 'https://lucyprime.itch.io/starforge'},
  }
]
