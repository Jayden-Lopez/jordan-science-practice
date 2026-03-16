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
        // Vascular vs Nonvascular Plants
        {
            type: "multiple",
            question: "What do vascular plants have that nonvascular plants do not?",
            options: [
                "Leaves",
                "Tubes to transport water and nutrients",
                "Green color",
                "The ability to reproduce"
            ],
            correct: 1,
            hint: "Vascular plants have a system of tubes (like xylem and phloem) to move materials."
        },
        {
            type: "truefalse",
            question: "Mosses are vascular plants.",
            correct: false,
            hint: "Mosses are small and grow close to the ground because they lack tubes to transport water."
        },
        {
            type: "multiple",
            question: "Which of these is a nonvascular plant?",
            options: [
                "Oak tree",
                "Fern",
                "Moss",
                "Pine tree"
            ],
            correct: 2,
            hint: "Nonvascular plants are small and usually grow in moist places close to the ground."
        },
        {
            type: "fillin",
            question: "The tissue that carries water UP from the roots to the leaves is called _______.",
            correct: "xylem",
            hint: "This tube system moves water and minerals upward through the plant."
        },
        {
            type: "fillin",
            question: "The tissue that carries sugar DOWN from the leaves to other parts of the plant is called _______.",
            correct: "phloem",
            hint: "This tube system moves food (sugar) made in the leaves to the rest of the plant."
        },
        // Seed Plants: Gymnosperms and Angiosperms
        {
            type: "multiple",
            question: "What are the two main groups of seed plants?",
            options: [
                "Mosses and ferns",
                "Gymnosperms and angiosperms",
                "Vascular and nonvascular",
                "Monocots and dicots"
            ],
            correct: 1,
            hint: "One group has naked seeds in cones, the other has seeds inside fruits."
        },
        {
            type: "multiple",
            question: "Which plant group produces seeds in cones?",
            options: [
                "Angiosperms",
                "Ferns",
                "Gymnosperms",
                "Mosses"
            ],
            correct: 2,
            hint: "Pine trees, spruces, and firs are examples. 'Gymnosperm' means 'naked seed.'"
        },
        {
            type: "truefalse",
            question: "Gymnosperms produce flowers.",
            correct: false,
            hint: "Gymnosperms produce cones, not flowers. Angiosperms are the flowering plants."
        },
        {
            type: "multiple",
            question: "What does the word 'angiosperm' mean?",
            options: [
                "Naked seed",
                "Covered seed",
                "No seed",
                "Cone seed"
            ],
            correct: 1,
            hint: "Angiosperms have seeds protected inside a fruit - they are 'covered.'"
        },
        {
            type: "fillin",
            question: "Plants that produce flowers and fruits are called _______.",
            correct: "angiosperms",
            hint: "This word means 'covered seed' - the seeds are protected inside fruits."
        },
        {
            type: "multiple",
            question: "Which is an example of a gymnosperm?",
            options: [
                "Apple tree",
                "Rose bush",
                "Pine tree",
                "Sunflower"
            ],
            correct: 2,
            hint: "Gymnosperms have cones instead of flowers. Think of evergreen trees."
        },
        // Monocots and Dicots
        {
            type: "multiple",
            question: "What are the two groups of angiosperms (flowering plants)?",
            options: [
                "Gymnosperms and ferns",
                "Monocots and dicots",
                "Vascular and nonvascular",
                "Mosses and liverworts"
            ],
            correct: 1,
            hint: "These groups are based on the number of seed leaves (cotyledons)."
        },
        {
            type: "multiple",
            question: "How many seed leaves (cotyledons) does a monocot have?",
            options: [
                "None",
                "One",
                "Two",
                "Three"
            ],
            correct: 1,
            hint: "'Mono' means one. Monocots have ONE seed leaf."
        },
        {
            type: "multiple",
            question: "How many seed leaves (cotyledons) does a dicot have?",
            options: [
                "None",
                "One",
                "Two",
                "Four"
            ],
            correct: 2,
            hint: "'Di' means two. Dicots have TWO seed leaves."
        },
        {
            type: "multiple",
            question: "Which is a characteristic of monocot leaves?",
            options: [
                "Branching veins",
                "Parallel veins",
                "No veins",
                "Circular veins"
            ],
            correct: 1,
            hint: "Monocot leaves have veins that run parallel to each other, like grass blades."
        },
        {
            type: "multiple",
            question: "Which is an example of a monocot?",
            options: [
                "Oak tree",
                "Rose",
                "Corn",
                "Bean plant"
            ],
            correct: 2,
            hint: "Grasses, corn, lilies, and tulips are monocots with parallel leaf veins."
        },
        {
            type: "multiple",
            question: "Which is an example of a dicot?",
            options: [
                "Grass",
                "Corn",
                "Lily",
                "Oak tree"
            ],
            correct: 3,
            hint: "Dicots include most trees, roses, beans, and plants with branching leaf veins."
        },
        {
            type: "truefalse",
            question: "Dicot leaves have branching veins that look like a net.",
            correct: true,
            hint: "Dicot leaf veins branch out in many directions, unlike parallel monocot veins."
        },
        // Photosynthesis
        {
            type: "multiple",
            question: "What do plants need to make their own food through photosynthesis?",
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
            type: "multiple",
            question: "The process by which plants make food is called:",
            options: [
                "Respiration",
                "Photosynthesis",
                "Digestion",
                "Germination"
            ],
            correct: 1,
            hint: "'Photo' means light and 'synthesis' means to make or put together."
        },
        {
            type: "fillin",
            question: "The green pigment in plants that captures sunlight is called _______.",
            correct: "chlorophyll",
            hint: "This green substance is found in chloroplasts and captures light energy."
        },
        {
            type: "multiple",
            question: "Where does photosynthesis mainly take place in a plant?",
            options: [
                "Roots",
                "Stem",
                "Leaves",
                "Flowers"
            ],
            correct: 2,
            hint: "This part of the plant is green and has the most chloroplasts."
        },
        {
            type: "multiple",
            question: "What gas do plants release during photosynthesis?",
            options: [
                "Carbon dioxide",
                "Nitrogen",
                "Oxygen",
                "Hydrogen"
            ],
            correct: 2,
            hint: "This is the gas that humans and animals need to breathe."
        },
        {
            type: "fillin",
            question: "The organelles where photosynthesis occurs are called _______.",
            correct: "chloroplasts",
            hint: "These contain chlorophyll and are found mainly in leaf cells."
        },
        // Plant Parts and Functions
        {
            type: "multiple",
            question: "What is the main function of roots?",
            options: [
                "Make food for the plant",
                "Absorb water and minerals from soil",
                "Produce seeds",
                "Attract pollinators"
            ],
            correct: 1,
            hint: "Roots grow underground and take in what the plant needs from the soil."
        },
        {
            type: "multiple",
            question: "What is the main function of the stem?",
            options: [
                "Absorb sunlight",
                "Produce seeds",
                "Support the plant and transport materials",
                "Store food only"
            ],
            correct: 2,
            hint: "The stem holds up the plant and moves water and food through it."
        },
        {
            type: "multiple",
            question: "What is the main function of leaves?",
            options: [
                "Absorb water from soil",
                "Produce seeds",
                "Make food through photosynthesis",
                "Anchor the plant"
            ],
            correct: 2,
            hint: "Leaves are green because they contain chlorophyll for making food."
        },
        {
            type: "fillin",
            question: "Tiny openings on the underside of leaves that allow gases to enter and exit are called _______.",
            correct: "stomata",
            hint: "These small pores let carbon dioxide in and oxygen out during photosynthesis."
        },
        // Seedless Plants
        {
            type: "multiple",
            question: "How do ferns reproduce without seeds?",
            options: [
                "By flowers",
                "By cones",
                "By spores",
                "By fruits"
            ],
            correct: 2,
            hint: "Ferns produce tiny dust-like particles on the underside of their fronds."
        },
        {
            type: "truefalse",
            question: "Ferns are vascular plants even though they don't produce seeds.",
            correct: true,
            hint: "Ferns have tubes (xylem and phloem) to transport water, but reproduce with spores."
        },
        {
            type: "multiple",
            question: "Which plants reproduce using spores instead of seeds?",
            options: [
                "Pine trees and oaks",
                "Roses and tulips",
                "Ferns and mosses",
                "Apple trees and corn"
            ],
            correct: 2,
            hint: "These plants don't have flowers or cones - they use tiny spores instead."
        },
        // Plant Reproduction
        {
            type: "multiple",
            question: "What is the female reproductive part of a flower?",
            options: [
                "Stamen",
                "Pistil",
                "Petal",
                "Sepal"
            ],
            correct: 1,
            hint: "This part contains the ovary where seeds develop after pollination."
        },
        {
            type: "multiple",
            question: "What is the male reproductive part of a flower?",
            options: [
                "Pistil",
                "Petal",
                "Stamen",
                "Sepal"
            ],
            correct: 2,
            hint: "This part produces pollen and includes the anther and filament."
        },
        {
            type: "fillin",
            question: "The transfer of pollen from the stamen to the pistil is called _______.",
            correct: "pollination",
            hint: "Bees, wind, and other animals help move pollen between flowers."
        },
        {
            type: "multiple",
            question: "What develops from a fertilized ovule?",
            options: [
                "Pollen",
                "A seed",
                "A spore",
                "A cone"
            ],
            correct: 1,
            hint: "After pollination and fertilization, this forms inside the ovary."
        },
        // Seed Dispersal
        {
            type: "multiple",
            question: "Why is seed dispersal important for plants?",
            options: [
                "To make seeds heavier",
                "To spread seeds away from the parent plant",
                "To make seeds smaller",
                "To change seed color"
            ],
            correct: 1,
            hint: "Seeds need to travel away so new plants don't compete with the parent for resources."
        },
        {
            type: "multiple",
            question: "Which is NOT a method of seed dispersal?",
            options: [
                "Wind",
                "Animals eating fruit",
                "Photosynthesis",
                "Water"
            ],
            correct: 2,
            hint: "Photosynthesis is how plants make food, not how seeds travel."
        },
        {
            type: "truefalse",
            question: "Dandelion seeds are dispersed by wind.",
            correct: true,
            hint: "Dandelion seeds have fluffy parachutes that help them float on the wind."
        },
        // Plant Tropisms
        {
            type: "multiple",
            question: "What is a tropism?",
            options: [
                "A type of plant",
                "A plant's response to a stimulus",
                "A part of a flower",
                "A type of seed"
            ],
            correct: 1,
            hint: "Tropisms are how plants grow or move in response to light, gravity, or water."
        },
        {
            type: "fillin",
            question: "A plant's growth response toward or away from light is called _______.",
            correct: "phototropism",
            hint: "'Photo' means light. Plants bend toward light sources."
        },
        {
            type: "multiple",
            question: "What is gravitropism?",
            options: [
                "Growth response to light",
                "Growth response to water",
                "Growth response to gravity",
                "Growth response to touch"
            ],
            correct: 2,
            hint: "This is why roots grow down and stems grow up."
        },
        // Classification Review
        {
            type: "truefalse",
            question: "All plants have flowers.",
            correct: false,
            hint: "Think about pine trees, ferns, and mosses - do they have flowers?"
        },
        {
            type: "multiple",
            question: "Which classification level is most specific?",
            options: [
                "Kingdom",
                "Phylum",
                "Genus",
                "Species"
            ],
            correct: 3,
            hint: "This is the most specific level - organisms in the same one can breed together."
        },
        {
            type: "multiple",
            question: "What kingdom do all plants belong to?",
            options: [
                "Animal Kingdom",
                "Plant Kingdom",
                "Fungi Kingdom",
                "Protist Kingdom"
            ],
            correct: 1,
            hint: "All plants, from mosses to oak trees, belong to this kingdom."
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
        // Static Electricity
        {
            type: "multiple",
            question: "What particle has a negative charge?",
            options: [
                "Proton",
                "Electron",
                "Neutron",
                "Nucleus"
            ],
            correct: 1,
            hint: "This tiny particle orbits around the nucleus and can move from one atom to another."
        },
        {
            type: "multiple",
            question: "What happens when two objects with the same charge are brought together?",
            options: [
                "They attract each other",
                "Nothing happens",
                "They repel each other",
                "They become neutral"
            ],
            correct: 2,
            hint: "Think about what 'like charges' do according to the Law of Electric Charges."
        },
        {
            type: "fillin",
            question: "The buildup of electric charges on an object is called _______ electricity.",
            correct: "static",
            hint: "This type of electricity stays in place rather than flowing."
        },
        {
            type: "truefalse",
            question: "When an object loses electrons, it becomes negatively charged.",
            correct: false,
            hint: "Electrons have a negative charge. If you LOSE something negative, what happens to the overall charge?"
        },
        {
            type: "multiple",
            question: "Which is an example of static electricity?",
            options: [
                "Getting a shock after walking on carpet",
                "A flashlight turning on",
                "A ceiling fan spinning",
                "A phone charging"
            ],
            correct: 0,
            hint: "Static electricity involves a sudden discharge of built-up charges."
        },
        {
            type: "multiple",
            question: "According to the Law of Electric Charges, what do opposite charges do?",
            options: [
                "Repel each other",
                "Attract each other",
                "Cancel each other out",
                "Nothing"
            ],
            correct: 1,
            hint: "Think about positive (+) and negative (-) charges coming near each other."
        },
        // Current Electricity
        {
            type: "multiple",
            question: "What is the continuous flow of electric charges called?",
            options: [
                "Static electricity",
                "Magnetic field",
                "Current electricity",
                "Resistance"
            ],
            correct: 2,
            hint: "This type of electricity flows continuously, unlike static electricity which stays in place."
        },
        {
            type: "fillin",
            question: "A material that allows electricity to flow easily is called a _______.",
            correct: "conductor",
            hint: "Copper wire is an example of this type of material. It 'conducts' electricity."
        },
        {
            type: "multiple",
            question: "Which of these is an insulator?",
            options: [
                "Copper wire",
                "Aluminum foil",
                "Salt water",
                "Rubber"
            ],
            correct: 3,
            hint: "This material is often used to coat electrical wires to keep us safe."
        },
        {
            type: "truefalse",
            question: "Voltage is the 'push' that moves electrons through a circuit.",
            correct: true,
            hint: "Think of voltage like water pressure in a hose - it pushes the water (electrons) through."
        },
        {
            type: "fillin",
            question: "A material that resists the flow of electricity is called an _______.",
            correct: "insulator",
            hint: "Rubber and plastic are examples. They 'insulate' against electricity."
        },
        {
            type: "multiple",
            question: "Which of these is a good conductor of electricity?",
            options: [
                "Rubber",
                "Plastic",
                "Copper",
                "Glass"
            ],
            correct: 2,
            hint: "This metal is used in most electrical wires because electricity flows through it easily."
        },
        {
            type: "multiple",
            question: "Current is measured in units called:",
            options: [
                "Volts",
                "Amperes (amps)",
                "Ohms",
                "Watts"
            ],
            correct: 1,
            hint: "This unit measures how much electric charge flows through a circuit."
        },
        // Circuits
        {
            type: "multiple",
            question: "In which type of circuit are all components connected in a single path?",
            options: [
                "Parallel circuit",
                "Series circuit",
                "Open circuit",
                "Closed circuit"
            ],
            correct: 1,
            hint: "Think of 'series' like a TV series - one episode follows another in a single sequence."
        },
        {
            type: "multiple",
            question: "What happens in a series circuit if one light bulb burns out?",
            options: [
                "All the lights go out",
                "Only that light goes out",
                "The other lights get brighter",
                "Nothing happens"
            ],
            correct: 0,
            hint: "In a series circuit, there's only ONE path for electricity. What happens if that path is broken?"
        },
        {
            type: "truefalse",
            question: "In a parallel circuit, if one component fails, the others keep working.",
            correct: true,
            hint: "Parallel circuits have multiple paths - electricity can take other routes."
        },
        {
            type: "fillin",
            question: "A complete, closed path through which electricity flows is called a _______.",
            correct: "circuit",
            hint: "This word comes from Latin meaning 'to go around.'"
        },
        {
            type: "multiple",
            question: "Which of these is NOT required for a basic electric circuit?",
            options: [
                "Power source (battery)",
                "Conductor (wire)",
                "Magnet",
                "Load (light bulb)"
            ],
            correct: 2,
            hint: "A basic circuit needs power, something to carry the electricity, and something to use the electricity."
        },
        {
            type: "multiple",
            question: "Why are the wires in your house arranged in parallel circuits instead of series?",
            options: [
                "Parallel circuits use less electricity",
                "If one device breaks, the others still work",
                "Parallel circuits are cheaper to install",
                "Series circuits are illegal"
            ],
            correct: 1,
            hint: "What would happen if all your lights were in series and one bulb burned out?"
        },
        {
            type: "truefalse",
            question: "An open circuit allows electricity to flow.",
            correct: false,
            hint: "An 'open' circuit has a break in it - like a switch turned off."
        },
        {
            type: "multiple",
            question: "What does a switch do in a circuit?",
            options: [
                "Increases the voltage",
                "Opens or closes the circuit",
                "Creates more electricity",
                "Stores electricity"
            ],
            correct: 1,
            hint: "A switch controls whether electricity can flow through the circuit or not."
        },
        // Magnets
        {
            type: "multiple",
            question: "What are the two ends of a magnet called?",
            options: [
                "Positive and negative",
                "North and south poles",
                "Top and bottom",
                "Strong and weak ends"
            ],
            correct: 1,
            hint: "These are named after directions on a compass."
        },
        {
            type: "multiple",
            question: "What happens when you bring two north poles together?",
            options: [
                "They repel each other",
                "They attract each other",
                "Nothing happens",
                "They become south poles"
            ],
            correct: 0,
            hint: "Like poles behave the same way as like electric charges."
        },
        {
            type: "fillin",
            question: "The invisible area around a magnet where magnetic force acts is called a _______.",
            correct: "magnetic field",
            hint: "It's two words: _______ field."
        },
        {
            type: "truefalse",
            question: "Opposite magnetic poles repel each other.",
            correct: false,
            hint: "Think about north and south poles - do they push apart or pull together?"
        },
        {
            type: "multiple",
            question: "Which metal is NOT attracted to magnets?",
            options: [
                "Iron",
                "Nickel",
                "Cobalt",
                "Aluminum"
            ],
            correct: 3,
            hint: "Only iron, nickel, and cobalt are magnetic. This metal is used in foil and cans."
        },
        {
            type: "multiple",
            question: "Which of these is attracted to a magnet?",
            options: [
                "Wood",
                "Plastic",
                "Iron",
                "Glass"
            ],
            correct: 2,
            hint: "Magnets attract certain metals, especially this one used to make steel."
        },
        {
            type: "truefalse",
            question: "A compass works because Earth acts like a giant magnet.",
            correct: true,
            hint: "Earth has a magnetic field with north and south magnetic poles."
        },
        // Electromagnets
        {
            type: "multiple",
            question: "What type of magnet is created by electric current flowing through a coil of wire?",
            options: [
                "Permanent magnet",
                "Temporary magnet",
                "Electromagnet",
                "Bar magnet"
            ],
            correct: 2,
            hint: "The name combines 'electric' and 'magnet.'"
        },
        {
            type: "multiple",
            question: "Which of these will make an electromagnet stronger?",
            options: [
                "Using fewer coils of wire",
                "Adding an iron core",
                "Decreasing the current",
                "Using plastic instead of iron"
            ],
            correct: 1,
            hint: "Iron is a magnetic material - putting it inside the coil concentrates the magnetic field."
        },
        {
            type: "truefalse",
            question: "When you turn off the electricity to an electromagnet, it loses its magnetism.",
            correct: true,
            hint: "Unlike permanent magnets, electromagnets depend on electric current to work."
        },
        {
            type: "fillin",
            question: "A magnet made by wrapping wire around an iron core and running electricity through it is an _______.",
            correct: "electromagnet",
            hint: "Combine the words 'electric' and 'magnet.'"
        },
        {
            type: "multiple",
            question: "Which device uses an electromagnet?",
            options: [
                "A compass",
                "A refrigerator magnet",
                "A bar magnet",
                "An electric motor"
            ],
            correct: 3,
            hint: "This device needs electricity to work and converts electrical energy to motion."
        },
        {
            type: "multiple",
            question: "Who discovered that electricity and magnetism are connected?",
            options: [
                "Hans Christian Oersted",
                "Isaac Newton",
                "Albert Einstein",
                "Benjamin Franklin"
            ],
            correct: 0,
            hint: "This Danish scientist noticed that a compass needle moved when placed near a wire carrying electric current."
        },
        {
            type: "multiple",
            question: "Which of these is a use for electromagnets?",
            options: [
                "Making permanent magnets",
                "Lifting heavy scrap metal at junkyards",
                "Replacing batteries",
                "Storing electricity"
            ],
            correct: 1,
            hint: "Electromagnets can be turned on and off, which is useful for picking up and dropping metal objects."
        },
        // Review/Mixed Questions
        {
            type: "multiple",
            question: "How are the Law of Electric Charges and the Law of Magnetic Poles similar?",
            options: [
                "Both only work with electricity",
                "Both only work with magnets",
                "Both say opposites attract and likes repel",
                "They are completely different"
            ],
            correct: 2,
            hint: "Think about what happens with + and - charges, and what happens with N and S poles."
        },
        {
            type: "fillin",
            question: "Electric current is the flow of _______ through a conductor.",
            correct: "electrons",
            hint: "These are the negatively charged particles that orbit the nucleus."
        },
        {
            type: "multiple",
            question: "What is the difference between a permanent magnet and an electromagnet?",
            options: [
                "Permanent magnets are stronger",
                "Electromagnets can be turned on and off",
                "Permanent magnets use electricity",
                "There is no difference"
            ],
            correct: 1,
            hint: "One type keeps its magnetism all the time, the other only when electricity flows."
        },
        {
            type: "truefalse",
            question: "Static electricity flows continuously through a wire.",
            correct: false,
            hint: "Static means 'not moving.' Current electricity is what flows through wires."
        },
        {
            type: "multiple",
            question: "What three things are needed to make an electromagnet?",
            options: [
                "Battery, magnet, and wood",
                "Wire coil, iron core, and electric current",
                "Copper, glass, and plastic",
                "North pole, south pole, and battery"
            ],
            correct: 1,
            hint: "You need something to carry electricity, something magnetic inside, and a power source."
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
