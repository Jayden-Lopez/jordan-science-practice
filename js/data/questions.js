// Question Bank - Sample questions for each chapter
const questionBank = {
    1: [ // Earthquakes and Volcanoes
        {
            type: "multiple",
            question: "What causes earthquakes?",
            options: [
                "Movement of tectonic plates",
                "Wind erosion",
                "Ocean currents",
                "Volcanic ash"
            ],
            correct: 0,
            hint: "Think about the large pieces of Earth's crust that slowly move and sometimes collide."
        },
        {
            type: "multiple",
            question: "Which type of volcano has steep sides and explosive eruptions?",
            options: [
                "Shield volcano",
                "Composite volcano",
                "Cinder cone",
                "Dormant volcano"
            ],
            correct: 1,
            hint: "This volcano is made of layers of lava and ash, creating a cone shape."
        },
        {
            type: "truefalse",
            question: "The Ring of Fire is an area with many earthquakes and volcanoes.",
            correct: true,
            hint: "This area circles the Pacific Ocean where tectonic plates meet."
        },
        {
            type: "fillin",
            question: "The point on Earth's surface directly above an earthquake's focus is called the _______.",
            correct: "epicenter",
            hint: "This word starts with 'epi-' which means 'above' or 'on top of'."
        },
        {
            type: "multiple",
            question: "What instrument measures the strength of earthquakes?",
            options: [
                "Thermometer",
                "Barometer",
                "Seismograph",
                "Anemometer"
            ],
            correct: 2,
            hint: "This device detects and records ground movements and vibrations."
        }
    ],
    2: [ // Weathering and Erosion
        {
            type: "multiple",
            question: "What is weathering?",
            options: [
                "The movement of rock and soil",
                "The breaking down of rocks",
                "The formation of mountains",
                "The creation of volcanoes"
            ],
            correct: 1,
            hint: "Weathering happens when rocks are broken into smaller pieces over time."
        },
        {
            type: "truefalse",
            question: "Chemical weathering occurs when water freezes in cracks in rocks.",
            correct: false,
            hint: "Freezing water in cracks is actually physical weathering, not chemical."
        },
        {
            type: "multiple",
            question: "Which is an agent of erosion?",
            options: [
                "Sunlight",
                "Oxygen",
                "Wind",
                "Temperature"
            ],
            correct: 2,
            hint: "Think about what can pick up and carry soil and rocks from one place to another."
        },
        {
            type: "fillin",
            question: "The process of moving weathered rock and soil from one place to another is called _______.",
            correct: "erosion",
            hint: "This word describes when weathered materials are transported away."
        },
        {
            type: "multiple",
            question: "What type of weathering occurs when rocks are broken down by chemicals?",
            options: [
                "Physical weathering",
                "Mechanical weathering",
                "Chemical weathering",
                "Thermal weathering"
            ],
            correct: 2,
            hint: "The answer is in the question - what type involves chemicals?"
        }
    ],
    3: [ // Natural Resources
        {
            type: "multiple",
            question: "Which of these is a renewable resource?",
            options: [
                "Coal",
                "Oil",
                "Solar energy",
                "Natural gas"
            ],
            correct: 2,
            hint: "Renewable means it can be replaced naturally and won't run out."
        },
        {
            type: "truefalse",
            question: "Fossil fuels are formed from ancient plants and animals.",
            correct: true,
            hint: "Fossil fuels took millions of years to form from organisms that lived long ago."
        },
        {
            type: "multiple",
            question: "What is conservation?",
            options: [
                "Using resources wastefully",
                "Protecting and preserving natural resources",
                "Creating new resources",
                "Destroying old resources"
            ],
            correct: 1,
            hint: "Conservation means to save and protect something for the future."
        },
        {
            type: "fillin",
            question: "Resources that cannot be replaced in a human lifetime are called _______ resources.",
            correct: "nonrenewable",
            hint: "The prefix 'non-' means 'not', so these resources are not renewable."
        },
        {
            type: "multiple",
            question: "Which is NOT a fossil fuel?",
            options: [
                "Coal",
                "Oil",
                "Wind",
                "Natural gas"
            ],
            correct: 2,
            hint: "Fossil fuels come from ancient organisms. Which one is just moving air?"
        }
    ],
    4: [ // Cells and Classification
        {
            type: "multiple",
            question: "What is the basic unit of life?",
            options: [
                "Organ",
                "Tissue",
                "Cell",
                "System"
            ],
            correct: 2,
            hint: "This is the smallest living part that makes up all living things."
        },
        {
            type: "truefalse",
            question: "All living things are made of cells.",
            correct: true,
            hint: "Every organism, from bacteria to humans, is made up of these tiny units."
        },
        {
            type: "multiple",
            question: "What part of the cell controls all activities?",
            options: [
                "Cell membrane",
                "Nucleus",
                "Cytoplasm",
                "Mitochondria"
            ],
            correct: 1,
            hint: "Think of this as the 'brain' of the cell that contains DNA."
        },
        {
            type: "fillin",
            question: "The jelly-like substance inside a cell is called _______.",
            correct: "cytoplasm",
            hint: "This gel-like material fills the cell and holds the organelles in place."
        },
        {
            type: "multiple",
            question: "What organelle produces energy for the cell?",
            options: [
                "Nucleus",
                "Cell wall",
                "Mitochondria",
                "Vacuole"
            ],
            correct: 2,
            hint: "These are often called the 'powerhouse' of the cell."
        }
    ],
    5: [ // Animal Classification
        {
            type: "multiple",
            question: "Animals with backbones are called:",
            options: [
                "Invertebrates",
                "Vertebrates",
                "Amphibians",
                "Mammals"
            ],
            correct: 1,
            hint: "The word 'vertebrae' refers to the bones in your spine or backbone."
        },
        {
            type: "truefalse",
            question: "Insects are vertebrates.",
            correct: false,
            hint: "Insects don't have backbones - they have exoskeletons on the outside."
        },
        {
            type: "multiple",
            question: "Which group of animals has feathers?",
            options: [
                "Mammals",
                "Reptiles",
                "Birds",
                "Fish"
            ],
            correct: 2,
            hint: "Only one group of animals has feathers for flying and staying warm."
        },
        {
            type: "fillin",
            question: "Animals that can live both on land and in water are called _______.",
            correct: "amphibians",
            hint: "Frogs and salamanders are examples of this animal group."
        },
        {
            type: "multiple",
            question: "Which characteristic do all mammals share?",
            options: [
                "Lay eggs",
                "Have scales",
                "Feed milk to young",
                "Live in water"
            ],
            correct: 2,
            hint: "Think about what baby mammals drink from their mothers."
        }
    ],
    6: [ // Plant Classification
        {
            type: "multiple",
            question: "What do plants need to make their own food?",
            options: [
                "Soil, air, and water",
                "Sunlight, water, and carbon dioxide",
                "Oxygen, nitrogen, and minerals",
                "Heat, shade, and wind"
            ],
            correct: 1,
            hint: "Plants use energy from the sun along with water and a gas from the air."
        },
        {
            type: "truefalse",
            question: "All plants have flowers.",
            correct: false,
            hint: "Think about pine trees and ferns - do they have flowers?"
        },
        {
            type: "multiple",
            question: "The process by which plants make food is called:",
            options: [
                "Respiration",
                "Photosynthesis",
                "Digestion",
                "Fermentation"
            ],
            correct: 1,
            hint: "'Photo' means light and 'synthesis' means to make or create."
        },
        {
            type: "fillin",
            question: "The green pigment in plants that captures sunlight is called _______.",
            correct: "chlorophyll",
            hint: "This green substance is what makes leaves green and helps capture sunlight."
        },
        {
            type: "multiple",
            question: "Which plant group produces seeds in cones?",
            options: [
                "Flowering plants",
                "Ferns",
                "Mosses",
                "Conifers"
            ],
            correct: 3,
            hint: "Pine trees and spruces are examples of this plant group."
        }
    ],
    7: [ // Atoms and Molecules
        {
            type: "multiple",
            question: "What is the smallest unit of matter?",
            options: [
                "Molecule",
                "Atom",
                "Compound",
                "Element"
            ],
            correct: 1,
            hint: "This is the tiniest particle that still has properties of an element."
        },
        {
            type: "truefalse",
            question: "A molecule is made up of two or more atoms bonded together.",
            correct: true,
            hint: "Molecules are formed when atoms join together chemically."
        },
        {
            type: "multiple",
            question: "The center of an atom is called the:",
            options: [
                "Electron",
                "Proton",
                "Nucleus",
                "Neutron"
            ],
            correct: 2,
            hint: "This is the dense core where protons and neutrons are found."
        },
        {
            type: "fillin",
            question: "Particles with a negative charge are called _______.",
            correct: "electrons",
            hint: "These particles orbit around the nucleus of an atom."
        },
        {
            type: "multiple",
            question: "What is H2O?",
            options: [
                "An atom",
                "An element",
                "A molecule",
                "A proton"
            ],
            correct: 2,
            hint: "H2O is water, which is made of multiple atoms bonded together."
        }
    ],
    8: [ // Electricity and Magnetism
        {
            type: "multiple",
            question: "What is electricity?",
            options: [
                "Movement of light",
                "Flow of electric charge",
                "Transfer of heat",
                "Form of sound"
            ],
            correct: 1,
            hint: "Electricity involves tiny charged particles moving through a material."
        },
        {
            type: "truefalse",
            question: "Magnets have two poles: north and south.",
            correct: true,
            hint: "Every magnet has two opposite ends or poles."
        },
        {
            type: "multiple",
            question: "Materials that allow electricity to flow through them easily are called:",
            options: [
                "Insulators",
                "Conductors",
                "Resistors",
                "Transformers"
            ],
            correct: 1,
            hint: "Metals like copper and aluminum are good examples of these materials."
        },
        {
            type: "fillin",
            question: "A path through which electric current can flow is called a _______.",
            correct: "circuit",
            hint: "This word describes a complete loop for electricity to travel through."
        },
        {
            type: "multiple",
            question: "What happens when like poles of two magnets are brought together?",
            options: [
                "They attract",
                "They repel",
                "They stick together",
                "Nothing happens"
            ],
            correct: 1,
            hint: "Like poles (north-north or south-south) push away from each other."
        }
    ],
    9: [ // Motion and Machines
        {
            type: "multiple",
            question: "What is motion?",
            options: [
                "Staying in one place",
                "Change in position",
                "Standing still",
                "Being at rest"
            ],
            correct: 1,
            hint: "Motion means something is moving or changing where it is located."
        },
        {
            type: "truefalse",
            question: "A simple machine makes work easier.",
            correct: true,
            hint: "Simple machines help us do tasks with less effort."
        },
        {
            type: "multiple",
            question: "Which is an example of a simple machine?",
            options: [
                "Computer",
                "Lever",
                "Airplane",
                "Television"
            ],
            correct: 1,
            hint: "Simple machines have few or no moving parts - think of a seesaw."
        },
        {
            type: "fillin",
            question: "The force that pulls objects toward Earth is called _______.",
            correct: "gravity",
            hint: "This force keeps us on the ground and makes things fall down."
        },
        {
            type: "multiple",
            question: "What does a pulley do?",
            options: [
                "Lifts or moves loads",
                "Creates electricity",
                "Produces heat",
                "Makes sound"
            ],
            correct: 0,
            hint: "A pulley uses a rope and wheel to help raise or lower heavy objects."
        }
    ],
    10: [ // Stars
        {
            type: "multiple",
            question: "What is the closest star to Earth?",
            options: [
                "Alpha Centauri",
                "Polaris",
                "The Sun",
                "Sirius"
            ],
            correct: 2,
            hint: "This star gives us light and warmth every day."
        },
        {
            type: "truefalse",
            question: "All stars are the same size and brightness.",
            correct: false,
            hint: "Stars come in many different sizes and brightnesses."
        },
        {
            type: "multiple",
            question: "What causes a star to shine?",
            options: [
                "Reflection of light",
                "Nuclear fusion",
                "Burning of fuel",
                "Chemical reactions"
            ],
            correct: 1,
            hint: "Stars produce energy by combining atoms in their core at extreme temperatures."
        },
        {
            type: "fillin",
            question: "A pattern of stars that form a recognizable shape is called a _______.",
            correct: "constellation",
            hint: "Examples include the Big Dipper and Orion."
        },
        {
            type: "multiple",
            question: "What color are the hottest stars?",
            options: [
                "Red",
                "Yellow",
                "Blue",
                "Orange"
            ],
            correct: 2,
            hint: "Think about the hottest part of a flame - it's this color."
        }
    ],
    11: [ // Solar System
        {
            type: "multiple",
            question: "How many planets are in our solar system?",
            options: [
                "7",
                "8",
                "9",
                "10"
            ],
            correct: 1,
            hint: "Pluto is no longer considered a planet, so count from Mercury to Neptune."
        },
        {
            type: "truefalse",
            question: "Jupiter is the largest planet in our solar system.",
            correct: true,
            hint: "This gas giant is bigger than all other planets combined."
        },
        {
            type: "multiple",
            question: "What is the center of our solar system?",
            options: [
                "Earth",
                "The Moon",
                "The Sun",
                "Jupiter"
            ],
            correct: 2,
            hint: "All the planets orbit around this massive star."
        },
        {
            type: "fillin",
            question: "The path a planet takes around the sun is called its _______.",
            correct: "orbit",
            hint: "This is the curved path that planets follow as they circle the sun."
        },
        {
            type: "multiple",
            question: "Which planet is known as the Red Planet?",
            options: [
                "Venus",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            correct: 1,
            hint: "This planet appears reddish because of iron oxide (rust) on its surface."
        }
    ],
    12: [ // Plant and Animal Reproduction
        {
            type: "multiple",
            question: "What is reproduction?",
            options: [
                "Growing larger",
                "Producing offspring",
                "Eating food",
                "Moving around"
            ],
            correct: 1,
            hint: "This is how living things make more of their own kind."
        },
        {
            type: "truefalse",
            question: "All animals lay eggs.",
            correct: false,
            hint: "Many mammals give birth to live babies instead of laying eggs."
        },
        {
            type: "multiple",
            question: "The male reproductive part of a flower is called the:",
            options: [
                "Pistil",
                "Petal",
                "Stamen",
                "Sepal"
            ],
            correct: 2,
            hint: "This part produces pollen in flowers."
        },
        {
            type: "fillin",
            question: "The process of transferring pollen from one flower to another is called _______.",
            correct: "pollination",
            hint: "Bees and other insects help with this process by carrying pollen."
        },
        {
            type: "multiple",
            question: "Which animal gives birth to live young?",
            options: [
                "Bird",
                "Fish",
                "Reptile",
                "Mammal"
            ],
            correct: 3,
            hint: "Think about animals like dogs, cats, and humans."
        }
    ],
    13: [ // Heredity and Genetics
        {
            type: "multiple",
            question: "What is heredity?",
            options: [
                "The passing of traits from parents to offspring",
                "Learning new behaviors",
                "Growing older",
                "Changing colors"
            ],
            correct: 0,
            hint: "This explains why you may look like your parents or grandparents."
        },
        {
            type: "truefalse",
            question: "Genes carry information about inherited traits.",
            correct: true,
            hint: "Genes are like instruction manuals for our characteristics."
        },
        {
            type: "multiple",
            question: "Where are genes located?",
            options: [
                "In the blood",
                "In chromosomes",
                "In the stomach",
                "In the lungs"
            ],
            correct: 1,
            hint: "These thread-like structures are found in the nucleus of cells."
        },
        {
            type: "fillin",
            question: "A characteristic that is passed from parent to offspring is called a _______.",
            correct: "trait",
            hint: "Eye color and hair color are examples of these characteristics."
        },
        {
            type: "multiple",
            question: "Who is known as the father of genetics?",
            options: [
                "Charles Darwin",
                "Gregor Mendel",
                "Louis Pasteur",
                "Isaac Newton"
            ],
            correct: 1,
            hint: "This monk studied pea plants to understand how traits are inherited."
        }
    ],
    14: [ // Nervous System
        {
            type: "multiple",
            question: "What is the control center of the nervous system?",
            options: [
                "Heart",
                "Lungs",
                "Brain",
                "Stomach"
            ],
            correct: 2,
            hint: "This organ processes information and sends signals to the rest of your body."
        },
        {
            type: "truefalse",
            question: "The spinal cord is part of the nervous system.",
            correct: true,
            hint: "The spinal cord is a bundle of nerves that connects the brain to the body."
        },
        {
            type: "multiple",
            question: "What carries messages throughout the body?",
            options: [
                "Blood vessels",
                "Muscles",
                "Nerves",
                "Bones"
            ],
            correct: 2,
            hint: "These are like wires that send signals from your brain to your body."
        },
        {
            type: "fillin",
            question: "The five senses are sight, hearing, touch, taste, and _______.",
            correct: "smell",
            hint: "This sense lets you detect odors with your nose."
        },
        {
            type: "multiple",
            question: "What protects the brain?",
            options: [
                "Skin",
                "Skull",
                "Muscles",
                "Hair"
            ],
            correct: 1,
            hint: "This hard bony structure surrounds and shields the brain."
        }
    ],
    15: [ // Immune System
        {
            type: "multiple",
            question: "What does the immune system do?",
            options: [
                "Pumps blood",
                "Fights disease",
                "Digests food",
                "Breathes air"
            ],
            correct: 1,
            hint: "This system protects your body from germs and illness."
        },
        {
            type: "truefalse",
            question: "White blood cells help fight infection.",
            correct: true,
            hint: "These cells are like soldiers that attack germs in your body."
        },
        {
            type: "multiple",
            question: "What are germs that cause disease called?",
            options: [
                "Antibodies",
                "Pathogens",
                "Antigens",
                "Vaccines"
            ],
            correct: 1,
            hint: "This scientific term describes harmful microorganisms that make us sick."
        },
        {
            type: "fillin",
            question: "A substance that helps the body develop immunity to a disease is called a _______.",
            correct: "vaccine",
            hint: "Doctors give these as shots to help prevent diseases like measles and flu."
        },
        {
            type: "multiple",
            question: "What organ filters blood and fights infection?",
            options: [
                "Heart",
                "Liver",
                "Spleen",
                "Stomach"
            ],
            correct: 2,
            hint: "This organ is located near your stomach and removes old blood cells."
        }
    ]
};

// Make questionBank available globally
window.questionBank = questionBank;
