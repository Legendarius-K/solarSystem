function Planet (order, distanceFromSun, size, composition, maxTemperature, minTemperature, gravity, info, image) {
    this.order = order;
    this.distanceFromSun = distanceFromSun;
    this.size = size;
    this.composition = composition;
    this.maxTemperature = maxTemperature;
    this.minTemperature = minTemperature;
    this.gravity = gravity;
    this.info = info;
    this.image = image
}

let mercury = new Planet (
    "Closest to the sun",
    "57.9 million kilometers (average)",
    "4,880 kilometers",
    "Mercury is primarily composed of rocky material, similar to Earth's composition. Its surface consists mainly of silicate minerals like olivine, pyroxene, and feldspar. Additionally, Mercury has a metallic core, which is believed to make up a significant portion of its mass. This core is composed primarily of iron and nickel. Overall, Mercury is a dense and rocky planet with a large metallic core.",
    "430 degrees Celsius",
    "-180 degrees Celsius",
    "38% of Earth's surface gravity",
    "Mercury, the closest planet to the Sun in our solar system, is a fascinating world of extremes. With a diameter of about 4,880 kilometers (3,032 miles), it is the smallest of the eight planets. Its surface is scarred with numerous impact craters, evidence of its turbulent history of collisions with asteroids and comets. Despite its diminutive size, Mercury boasts some remarkable features. One of the most striking characteristics of Mercury is its extreme temperature variations. Due to its lack of atmosphere and proximity to the Sun, temperatures on its sunlit side can soar to a blistering 430 degrees Celsius (800 degrees Fahrenheit), hot enough to melt lead. However, on its dark side, facing away from the Sun, temperatures plummet to around -180 degrees Celsius (-290 degrees Fahrenheit). Mercury's surface is predominantly rocky and heavily cratered, resembling Earth's Moon in many ways. It also has long, steep cliffs known as scarps, which are thought to have formed as the planet's interior cooled and contracted, causing the crust to shrink and fracture. Despite its proximity to the Sun, Mercury has a surprisingly thin atmosphere, composed mainly of oxygen, sodium, hydrogen, helium, and potassium. This thin atmosphere provides little protection from the Sun's intense radiation and solar winds. Mercury's surface gravity is about 38% of Earth's, meaning that objects weigh less on Mercury than they do on Earth. This low gravity, combined with its proximity to the Sun, makes Mercury a challenging destination for exploration. Nevertheless, missions like NASA's MESSENGER spacecraft have provided valuable insights into this enigmatic world, revealing a planet of extremes and mysteries waiting to be uncovered.",
    "mercury.jpg"
)

let venus = new Planet (
    "Second planet from the Sun",
    "108.2 million kilometers (average)",
    "12,104 kilometers",
    "Venus is primarily composed of rocky material, similar to Earth, but with a dense atmosphere mainly of carbon dioxide, with clouds of sulfuric acid. The surface is covered in volcanoes, vast plains, and highlands, with temperatures hot enough to melt lead.",
    "462 degrees Celsius",
    "462 degrees Celsius",
    "90% of Earth's surface gravity",
    "Venus, often called Earth's sister planet due to their similar size and composition, is shrouded in mystery beneath its thick, toxic atmosphere. Its surface is marked by volcanoes, vast plains, and highlands, with temperatures soaring high enough to melt lead. Venus's dense atmosphere traps heat, leading to a runaway greenhouse effect and making it the hottest planet in our solar system. Despite its inhospitable conditions, Venus remains an object of fascination and exploration.",
    "venus.jpg"
)

let earth = new Planet (
    "Third planet from the Sun",
    "149.6 million kilometers (average)",
    "12,742 kilometers",
    "Earth is a rocky planet with a diverse range of landscapes, including oceans, mountains, and forests. It has a nitrogen-oxygen atmosphere that supports life as we know it. The surface is composed of continental and oceanic crusts, with tectonic activity shaping the planet's features.",
    "58 degrees Celsius",
    "-89 degrees Celsius",
    "100% of Earth's surface gravity",
    "Earth, our home planet, is a vibrant and diverse world teeming with life. From the depths of the oceans to the heights of the mountains, Earth's landscapes are shaped by a combination of geological processes and the influence of living organisms. Its atmosphere provides a protective blanket, regulating temperature and shielding life from harmful cosmic radiation. With its unique blend of land, water, and atmosphere, Earth stands out as a precious oasis of life in the vastness of space.",
    "earth.jpg"
)

let mars = new Planet (
    "Fourth planet from the Sun",
    "227.9 million kilometers (average)",
    "6,779 kilometers",
    "Mars is a rocky planet with a thin atmosphere composed mainly of carbon dioxide. Its surface features include volcanoes, valleys, and polar ice caps. The reddish color of Mars is due to iron oxide (rust) present on its surface.",
    "20 degrees Celsius",
    "-153 degrees Celsius",
    "38% of Earth's surface gravity",
    "Mars, often called the 'Red Planet' due to its reddish appearance, has long fascinated humanity with its potential for harboring life. Its surface bears the scars of ancient rivers and valleys, hinting at a warmer, wetter past. Today, Mars is a cold and barren world, with a thin atmosphere unable to support liquid water on its surface. Nevertheless, exploration missions continue to search for signs of past or present life on this enigmatic planet.",
    "mars.jpg"
)

let jupiter = new Planet (
    "Fifth planet from the Sun",
    "778.6 million kilometers (average)",
    "139,822 kilometers",
    "Jupiter is a gas giant composed mainly of hydrogen and helium. It has a thick atmosphere with colorful bands of clouds and a Great Red Spot, a massive storm. Jupiter also has a strong magnetic field and a large number of moons, including the four largest: Io, Europa, Ganymede, and Callisto.",
    "-145 degrees Celsius",
    "-145 degrees Celsius",
    "254% of Earth's surface gravity",
    "Jupiter, the largest planet in our solar system, is a gas giant with a mesmerizing array of swirling clouds and storms. Its colossal size and strong magnetic field make it a dominant force in the solar system. Jupiter's moons, particularly the Galilean moons, are of particular interest for exploration due to their potential for harboring life or revealing insights into the planet's formation and evolution.",
    "jupiter.jpg"
)

let saturn = new Planet (
    "Sixth planet from the Sun",
    "1.4 billion kilometers (average)",
    "116,464 kilometers",
    "Saturn is a gas giant known for its stunning ring system, composed mainly of ice and dust particles. Its atmosphere is primarily hydrogen and helium. Saturn's rings are made up of countless individual ringlets, and it has a large number of moons, with Titan being the largest.",
    "-178 degrees Celsius",
    "-178 degrees Celsius",
    "107% of Earth's surface gravity",
    "Saturn, famous for its majestic rings, is a gas giant that captivates observers with its beauty. Its ring system, composed of countless icy particles, is one of the most iconic features in our solar system. Saturn's moons, particularly Titan, hold valuable clues to understanding the conditions that existed in the early solar system and the potential for life beyond Earth.",
    "saturn.jpg"
)

let uranus = new Planet (
    "Seventh planet from the Sun",
    "2.9 billion kilometers (average)",
    "50,724 kilometers",
    "Uranus is an ice giant composed mainly of water, ammonia, and methane. It has a thick atmosphere of hydrogen and helium. Uranus is unique among the planets for its extreme axial tilt, which causes it to rotate on its side. It has a system of rings and a retinue of moons.",
    "-224 degrees Celsius",
    "-224 degrees Celsius",
    "89% of Earth's surface gravity",
    "Uranus, the seventh planet from the Sun, is an ice giant with a peculiar feature: it rotates on its side. Its axis of rotation is nearly parallel to its orbital plane, giving it extreme seasonal variations. Uranus has a system of faint rings and a retinue of moons, but its distant location makes it a challenging target for exploration.",
    "uranus.jpg"
)

let neptune = new Planet (
    "Eighth planet from the Sun",
    "4.5 billion kilometers (average)",
    "49,244 kilometers",
    "Neptune is an ice giant composed mainly of water, ammonia, and methane. It has a thick atmosphere of hydrogen, helium, and methane, giving it a blue hue. Neptune has strong winds and a large storm system known as the Great Dark Spot. It also has a system of rings and a retinue of moons.",
    "-201 degrees Celsius",
    "-201 degrees Celsius",
    "112% of Earth's surface gravity",
    "Neptune, the farthest planet from the Sun in our solar system, is a distant ice giant shrouded in mystery. Its deep blue color comes from methane in its atmosphere, and it is known for its strong winds and large storms. Despite its remote location, Neptune continues to intrigue scientists as they seek to unravel the secrets of this distant world.",
    "neptune.jpg"
)

let pluto = new Planet (
    "Dwarf planet in the Kuiper Belt",
    "5.9 billion kilometers (average)",
    "2,377 kilometers",
    "Pluto is a dwarf planet located in the Kuiper Belt, a region of icy bodies beyond Neptune's orbit. It is composed mainly of rock and ice, with a thin atmosphere of nitrogen, methane, and carbon monoxide. Pluto has a highly eccentric orbit that takes it closer to the Sun than Neptune for a portion of its 248-year orbit.",
    "-240 degrees Celsius",
    "-240 degrees Celsius",
    "0.06 times Earth's surface gravity",
    "Pluto, once considered the ninth planet in our solar system, is now classified as a dwarf planet located in the distant Kuiper Belt. This icy world is composed mainly of rock and ice, with a thin atmosphere that freezes and collapses as it moves farther from the Sun. Pluto's status as a dwarf planet has sparked debates among astronomers and enthusiasts, highlighting the dynamic nature of scientific discovery.",
    "pluto.jpg"
)

export const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];