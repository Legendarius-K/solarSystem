function Planet (name, order, distanceFromSun, size, composition, maxTemperature, minTemperature, gravity, info, image) {
    this.name = name;
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

export let mercury = new Planet (
    "mercury",
    "Closest to the sun",
    "57.9 million kilometers (average)",
    "4,880 kilometers",
    "Mercury is primarily composed of rocky material, similar to Earth's composition. Its surface consists mainly of silicate minerals like olivine, pyroxene, and feldspar. Additionally, Mercury has a metallic core, which is believed to make up a significant portion of its mass. This core is composed primarily of iron and nickel. Overall, Mercury is a dense and rocky planet with a large metallic core.",
    "430 degrees Celsius",
    "-180 degrees Celsius",
    "38% of Earth's surface gravity",
    "Mercury, the closest planet to the Sun, is a scorched world with extreme temperatures ranging from blistering hot to freezing cold. Its surface is heavily cratered, resembling the Moon, and it has a thin atmosphere unable to retain heat. Despite its small size, Mercury boasts surprising geological features, including cliffs and ridges formed by tectonic activity. Its slow rotation leads to long, scorching days and frigid nights. Despite challenges, Mercury's proximity to the Sun makes it an enticing target for exploration, offering insights into the early solar system and potential resources for future space missions.",
    "mercury.jpg"
)

export let venus = new Planet (
    "venus",
    "Second planet from the Sun",
    "108.2 million kilometers (average)",
    "12,104 kilometers",
    "Venus is primarily composed of rocky material, similar to Earth, but with a dense atmosphere mainly of carbon dioxide, with clouds of sulfuric acid. The surface is covered in volcanoes, vast plains, and highlands, with temperatures hot enough to melt lead.",
    "462 degrees Celsius",
    "462 degrees Celsius",
    "90% of Earth's surface gravity",
    "Often called Earth's sister planet due to their similar size and composition, Venus is shrouded in mystery beneath its thick, toxic atmosphere. Its surface is marked by volcanoes, vast plains, and highlands, with temperatures soaring high enough to melt lead. Venus's dense atmosphere traps heat, leading to a runaway greenhouse effect and making it the hottest planet in our solar system. Despite its inhospitable conditions, Venus remains an object of fascination and exploration, with missions uncovering more about its complex geology and atmosphere, providing clues to understanding Earth's climate history.",
    "venus.jpg"
)

export let earth = new Planet (
    "earth",
    "Third planet from the Sun",
    "149.6 million kilometers (average)",
    "12,742 kilometers",
    "Earth is a rocky planet with a diverse range of landscapes, including oceans, mountains, and forests. It has a nitrogen-oxygen atmosphere that supports life as we know it. The surface is composed of continental and oceanic crusts, with tectonic activity shaping the planet's features.",
    "58 degrees Celsius",
    "-89 degrees Celsius",
    "100% of Earth's surface gravity",
    "Earth, the only known planet to support life, is a vibrant oasis in the vastness of space. Its diverse ecosystems, ranging from lush forests to barren deserts, sustain a rich tapestry of biodiversity. With vast oceans covering over 70% of its surface, Earth is a dynamic world shaped by geological forces and teeming with life. Its atmosphere, composed mainly of nitrogen and oxygen, provides the essential conditions for life to thrive. From towering mountains to deep ocean trenches, Earth's varied landscapes offer endless opportunities for exploration and discovery, making it a precious gem in the cosmos.",
    "earth.jpg"
)

export let mars = new Planet (
    "mars",
    "Fourth planet from the Sun",
    "227.9 million kilometers (average)",
    "6,779 kilometers",
    "Mars is a rocky planet with a thin atmosphere composed mainly of carbon dioxide. Its surface features include volcanoes, valleys, and polar ice caps. The reddish color of Mars is due to iron oxide (rust) present on its surface.",
    "20 degrees Celsius",
    "-153 degrees Celsius",
    "38% of Earth's surface gravity",
    "Mars, often called the Red Planet, has long captivated the human imagination with its rusty hue and potential for harboring life. Its surface is marked by ancient river valleys, towering volcanoes, and vast deserts dusted with iron oxide. Evidence suggests Mars once had liquid water, raising questions about its past habitability. Today, Mars is a cold, barren world with a thin atmosphere, posing challenges for future exploration and colonization. Despite its harsh conditions, Mars remains a focal point for scientific research and exploration, with ongoing missions uncovering its secrets and paving the way for human exploration.",
    "mars.jpg"
)

export let jupiter = new Planet (
    "jupiter",
    "Fifth planet from the Sun",
    "778.6 million kilometers (average)",
    "139,822 kilometers",
    "Jupiter is a gas giant composed mainly of hydrogen and helium. It has a thick atmosphere with colorful bands of clouds and a Great Red Spot, a massive storm. Jupiter also has a strong magnetic field and a large number of moons, including the four largest: Io, Europa, Ganymede, and Callisto.",
    "-145 degrees Celsius",
    "-145 degrees Celsius",
    "254% of Earth's surface gravity",
    "Jupiter, the largest planet in our solar system, reigns as a gas giant with swirling clouds of hydrogen and helium. Its immense size and mass dominate the solar system, shaping the orbits of nearby planets and asteroids. Jupiter's iconic Great Red Spot, a massive storm larger than Earth, is a testament to its turbulent atmosphere. Beyond its clouds lie layers of metallic hydrogen, creating a magnetic field thousands of times stronger than Earth's. Jupiter's moons, including Europa and Io, offer tantalizing targets for exploration, with potential for hidden oceans and volcanic activity, sparking curiosity about this majestic giant.",
    "jupiter.jpg"
)

export let saturn = new Planet (
    "saturn",
    "Sixth planet from the Sun",
    "1.4 billion kilometers (average)",
    "116,464 kilometers",
    "Saturn is a gas giant known for its stunning ring system, composed mainly of ice and dust particles. Its atmosphere is primarily hydrogen and helium. Saturn's rings are made up of countless individual ringlets, and it has a large number of moons, with Titan being the largest.",
    "-178 degrees Celsius",
    "-178 degrees Celsius",
    "107% of Earth's surface gravity",
    "Saturn, adorned with majestic rings, is a jewel of the solar system, captivating observers with its beauty and mystery. Its rings, composed of ice and rock particles, stretch thousands of kilometers into space, creating a stunning celestial display. Beneath its rings lies a world of swirling clouds and storms, with a distinctive hexagonal pattern at its north pole. Saturn's moons, such as Titan and Enceladus, hold secrets of their own, with potential for liquid oceans and organic molecules, raising questions about the origins of life. Saturn's allure continues to inspire exploration and discovery, unlocking the secrets of our cosmic neighborhood.",
    "saturn.jpg"
)

export let uranus = new Planet (
    "uranus",
    "Seventh planet from the Sun",
    "2.9 billion kilometers (average)",
    "50,724 kilometers",
    "Uranus is an ice giant composed mainly of water, ammonia, and methane. It has a thick atmosphere of hydrogen and helium. Uranus is unique among the planets for its extreme axial tilt, which causes it to rotate on its side. It has a system of rings and a retinue of moons.",
    "-224 degrees Celsius",
    "-224 degrees Celsius",
    "89% of Earth's surface gravity",
    "Uranus, the icy giant, spins on its side, presenting a unique and enigmatic profile in the solar system. Its pale blue coloration comes from methane in its atmosphere, masking the swirling storms below. Uranus's extreme axial tilt results in dramatic seasonal changes, with each pole experiencing decades-long periods of sunlight and darkness. Despite its distant location, Uranus has a system of rings and moons, including Miranda and Ariel, which offer insights into the planet's turbulent history. Uranus remains a mysterious world, beckoning further exploration to unravel its secrets and shed light on the formation of our solar system.",
    "uranus.jpg"
)

export let neptune = new Planet (
    "neptune",
    "Eighth planet from the Sun",
    "4.5 billion kilometers (average)",
    "49,244 kilometers",
    "Neptune is an ice giant composed mainly of water, ammonia, and methane. It has a thick atmosphere of hydrogen, helium, and methane, giving it a blue hue. Neptune has strong winds and a large storm system known as the Great Dark Spot. It also has a system of rings and a retinue of moons.",
    "-201 degrees Celsius",
    "-201 degrees Celsius",
    "112% of Earth's surface gravity",
    "Neptune, the blue giant, is a distant and frigid world shrouded in methane clouds. Its vivid azure hue comes from methane absorbing red light, creating a striking contrast in the solar system. Neptune's atmosphere is marked by fierce winds, with storms raging across its surface, including the infamous Great Dark Spot. Despite its remote location, Neptune has a system of rings and moons, such as Triton, which exhibits geysers of nitrogen gas and hints at a dynamic and evolving world. Neptune's mysteries continue to intrigue scientists, prompting further exploration to uncover the secrets of this distant ice giant.",
    "neptune.jpg"
)

export let pluto = new Planet (
    "pluto",
    "Dwarf planet in the Kuiper Belt",
    "5.9 billion kilometers (average)",
    "2,377 kilometers",
    "Pluto is a dwarf planet located in the Kuiper Belt, a region of icy bodies beyond Neptune's orbit. It is composed mainly of rock and ice, with a thin atmosphere of nitrogen, methane, and carbon monoxide. Pluto has a highly eccentric orbit that takes it closer to the Sun than Neptune for a portion of its 248-year orbit.",
    "-240 degrees Celsius",
    "-240 degrees Celsius",
    "0.06 times Earth's surface gravity",
    "Pluto, once considered the ninth planet, now resides in the Kuiper Belt as a dwarf planet, offering insights into the outer reaches of the solar system. Its surface is covered in nitrogen ice, with hints of complex terrain, including mountains and plains. Pluto's moon, Charon, is unusually large compared to its parent body, forming a binary system with shared gravitational influence. Beyond Charon, Pluto has a system of smaller moons, such as Nix and Hydra, adding to its intriguing characteristics. Despite its reclassification, Pluto continues to fascinate scientists and astronomers, prompting missions to explore its distant and icy realm.",
    "pluto.jpg"
)

export const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];