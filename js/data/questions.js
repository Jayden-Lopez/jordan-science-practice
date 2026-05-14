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
        // === STATIC VS CURRENT ELECTRICITY ===
        {
            type: "multiple",
            question: "What is the main difference between static electricity and current electricity?",
            options: [
                "Static is stronger than current",
                "Static stays in place; current flows continuously",
                "Current only works with magnets",
                "There is no difference"
            ],
            correct: 1,
            hint: "Think about what 'static' means - not moving. Current means flowing."
        },
        {
            type: "fillin",
            question: "The buildup of electric charges on an object is called _______ electricity.",
            correct: "static",
            hint: "This type of electricity stays in place rather than flowing."
        },
        {
            type: "truefalse",
            question: "Current electricity flows continuously through a conductor.",
            correct: true,
            hint: "Current means flow - electricity moves through wires continuously."
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
        // === CONDUCTORS AND INSULATORS ===
        {
            type: "fillin",
            question: "A material that allows electricity to flow easily is called a _______.",
            correct: "conductor",
            hint: "Copper wire is an example. It 'conducts' electricity."
        },
        {
            type: "fillin",
            question: "A material that resists or blocks the flow of electricity is called an _______.",
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
            hint: "This metal is used in most electrical wires."
        },
        {
            type: "multiple",
            question: "Which of these is an insulator?",
            options: [
                "Copper wire",
                "Aluminum foil",
                "Silver",
                "Rubber"
            ],
            correct: 3,
            hint: "This material is used to coat electrical wires to keep us safe."
        },
        // === CIRCUITS ===
        {
            type: "fillin",
            question: "A complete, closed path through which electricity flows is called a _______.",
            correct: "circuit",
            hint: "This word comes from Latin meaning 'to go around.'"
        },
        {
            type: "multiple",
            question: "What does a switch do in a circuit?",
            options: [
                "Increases the voltage",
                "Opens or closes the circuit to control electricity flow",
                "Creates more electricity",
                "Stores electricity"
            ],
            correct: 1,
            hint: "A switch controls whether electricity can flow or not."
        },
        {
            type: "fillin",
            question: "A device that opens or closes a circuit is called a _______.",
            correct: "switch",
            hint: "You use one of these to turn lights on and off."
        },
        // === SERIES AND PARALLEL CIRCUITS ===
        {
            type: "multiple",
            question: "In a series circuit, components are connected:",
            options: [
                "In separate branches",
                "In a single path, one after another",
                "Without any wires",
                "Only to batteries"
            ],
            correct: 1,
            hint: "Series means one after another, like a TV series."
        },
        {
            type: "multiple",
            question: "In a parallel circuit, components are connected:",
            options: [
                "In a single path",
                "One after another",
                "In separate branches",
                "Without a power source"
            ],
            correct: 2,
            hint: "Parallel circuits have multiple paths for electricity to flow."
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
            hint: "In a series circuit, there's only ONE path. If it breaks, no electricity flows."
        },
        {
            type: "truefalse",
            question: "In a parallel circuit, if one component fails, the others keep working.",
            correct: true,
            hint: "Parallel circuits have multiple paths - electricity can take other routes."
        },
        {
            type: "multiple",
            question: "Why are the wires in your house arranged in parallel circuits?",
            options: [
                "Parallel circuits use less electricity",
                "If one device breaks, the others still work",
                "Parallel circuits are cheaper",
                "Series circuits are illegal"
            ],
            correct: 1,
            hint: "What would happen if all your lights were in series and one bulb burned out?"
        },
        // === SHORT CIRCUITS AND RESISTORS ===
        {
            type: "multiple",
            question: "What is a short circuit?",
            options: [
                "A circuit that is very small",
                "An unintended path that allows too much current to flow",
                "A circuit with no battery",
                "A circuit that uses less electricity"
            ],
            correct: 1,
            hint: "A short circuit bypasses the normal path and can cause overheating or fires."
        },
        {
            type: "fillin",
            question: "An unintended path in a circuit that allows too much current to flow is called a _______ circuit.",
            correct: "short",
            hint: "This dangerous situation can cause wires to overheat."
        },
        {
            type: "multiple",
            question: "What does a resistor do in a circuit?",
            options: [
                "Increases electricity flow",
                "Limits or controls the flow of electricity",
                "Stores electricity",
                "Creates magnetism"
            ],
            correct: 1,
            hint: "A resistor 'resists' the flow of current."
        },
        {
            type: "fillin",
            question: "A component that limits or controls the flow of current in a circuit is called a _______.",
            correct: "resistor",
            hint: "This component 'resists' electricity flow."
        },
        // === ELECTRICAL MEASUREMENTS: VOLTS, WATTS, AMPERES ===
        {
            type: "multiple",
            question: "What unit measures voltage (electrical pressure)?",
            options: [
                "Watts",
                "Amperes",
                "Volts",
                "Ohms"
            ],
            correct: 2,
            hint: "This unit is named after Alessandro Volta."
        },
        {
            type: "fillin",
            question: "The unit that measures electrical pressure or force is called a _______.",
            correct: "volt",
            hint: "A typical wall outlet in the US provides 120 of these."
        },
        {
            type: "multiple",
            question: "What unit measures electric current (the flow of electrons)?",
            options: [
                "Volts",
                "Watts",
                "Amperes (amps)",
                "Ohms"
            ],
            correct: 2,
            hint: "This unit is named after André-Marie Ampère."
        },
        {
            type: "fillin",
            question: "The unit that measures the flow of electric current is called an _______.",
            correct: "ampere",
            hint: "This is often shortened to 'amp.'"
        },
        {
            type: "multiple",
            question: "What unit measures electrical power (how much energy is used)?",
            options: [
                "Volts",
                "Amperes",
                "Watts",
                "Ohms"
            ],
            correct: 2,
            hint: "Light bulbs are rated in this unit - like a 60-____ bulb."
        },
        {
            type: "fillin",
            question: "The unit that measures how much electrical power a device uses is called a _______.",
            correct: "watt",
            hint: "A 100-____ light bulb uses more power than a 60-____ bulb."
        },
        {
            type: "multiple",
            question: "A 1500-watt blow dryer uses more power than a 750-watt blow dryer. What might happen if too many high-wattage devices are on the same circuit?",
            options: [
                "Nothing happens",
                "The circuit could overload and trip a breaker",
                "The devices work better",
                "The electricity becomes free"
            ],
            correct: 1,
            hint: "Circuits have limits. Too much power draw can overload them."
        },
        // === BATTERIES AND ELECTRIC CELLS ===
        {
            type: "multiple",
            question: "What is an electric cell?",
            options: [
                "A type of light bulb",
                "A device that converts chemical energy to electrical energy",
                "A type of wire",
                "A measurement of electricity"
            ],
            correct: 1,
            hint: "A battery is made of one or more of these."
        },
        {
            type: "fillin",
            question: "A device that converts chemical energy into electrical energy is called an electric _______.",
            correct: "cell",
            hint: "A battery contains one or more of these."
        },
        {
            type: "multiple",
            question: "What is an electrolyte?",
            options: [
                "A type of magnet",
                "A chemical substance that conducts electricity in a battery",
                "A unit of measurement",
                "A type of circuit"
            ],
            correct: 1,
            hint: "This substance inside a battery allows ions to move between electrodes."
        },
        {
            type: "fillin",
            question: "The chemical substance inside a battery that allows electricity to flow is called an _______.",
            correct: "electrolyte",
            hint: "This conducts electricity through chemical reactions."
        },
        {
            type: "truefalse",
            question: "A battery converts chemical energy into electrical energy.",
            correct: true,
            hint: "Chemical reactions inside the battery produce electricity."
        },
        // === MAGNETS AND MAGNETIC FIELDS ===
        {
            type: "multiple",
            question: "What are the two ends of a magnet called?",
            options: [
                "Positive and negative",
                "North and south poles",
                "Top and bottom",
                "Strong and weak"
            ],
            correct: 1,
            hint: "These are named after directions, like on a compass."
        },
        {
            type: "fillin",
            question: "The invisible area around a magnet where magnetic force acts is called a _______.",
            correct: "magnetic field",
            hint: "Two words: magnetic _______."
        },
        {
            type: "multiple",
            question: "What happens when you bring two north poles together?",
            options: [
                "They attract each other",
                "They repel each other",
                "Nothing happens",
                "They become south poles"
            ],
            correct: 1,
            hint: "Like poles repel, opposite poles attract."
        },
        {
            type: "truefalse",
            question: "Opposite magnetic poles attract each other.",
            correct: true,
            hint: "North and south poles are attracted to each other."
        },
        // === RELATIONSHIP BETWEEN ELECTRICITY AND MAGNETISM ===
        {
            type: "multiple",
            question: "What did Hans Christian Oersted discover?",
            options: [
                "How to make batteries",
                "That electric current creates a magnetic field",
                "How to make light bulbs",
                "How computers work"
            ],
            correct: 1,
            hint: "He noticed a compass needle moved when near a wire carrying electric current."
        },
        {
            type: "truefalse",
            question: "Hans Christian Oersted discovered that electricity and magnetism are related.",
            correct: true,
            hint: "His discovery showed that electric current produces magnetism."
        },
        {
            type: "multiple",
            question: "What did Joseph Henry and Michael Faraday discover?",
            options: [
                "How to make permanent magnets",
                "That a changing magnetic field can create electricity",
                "How batteries work",
                "How to make insulators"
            ],
            correct: 1,
            hint: "Their discovery led to the invention of generators and transformers."
        },
        {
            type: "truefalse",
            question: "Joseph Henry and Michael Faraday discovered that a changing magnetic field can produce electricity.",
            correct: true,
            hint: "This principle is used in generators to produce electricity."
        },
        // === ELECTROMAGNETS ===
        {
            type: "multiple",
            question: "Who invented the first practical electromagnet?",
            options: [
                "Hans Christian Oersted",
                "William Sturgeon",
                "Benjamin Franklin",
                "Thomas Edison"
            ],
            correct: 1,
            hint: "This English inventor created the first electromagnet that could lift heavy objects."
        },
        {
            type: "fillin",
            question: "A magnet created by electric current flowing through a coil of wire is called an _______.",
            correct: "electromagnet",
            hint: "Combine 'electric' and 'magnet.'"
        },
        {
            type: "multiple",
            question: "How does an electromagnet work?",
            options: [
                "It uses permanent magnets only",
                "Electric current flows through a coil, creating a magnetic field",
                "It runs on batteries alone without wire",
                "It uses only static electricity"
            ],
            correct: 1,
            hint: "When electricity flows through a coiled wire, it creates magnetism."
        },
        {
            type: "multiple",
            question: "What happens when you turn off the electricity to an electromagnet?",
            options: [
                "It stays magnetic forever",
                "It loses its magnetism",
                "It becomes stronger",
                "It explodes"
            ],
            correct: 1,
            hint: "Unlike permanent magnets, electromagnets need electricity to work."
        },
        {
            type: "multiple",
            question: "Which of these will make an electromagnet stronger?",
            options: [
                "Using fewer coils of wire",
                "Adding an iron core and more coils",
                "Decreasing the current",
                "Using plastic instead of iron"
            ],
            correct: 1,
            hint: "More coils, more current, and an iron core all increase strength."
        },
        // === MAGLEV ===
        {
            type: "multiple",
            question: "What does 'maglev' stand for?",
            options: [
                "Magnetic lever",
                "Magnetic levitation",
                "Magnet level",
                "Magnetic elevation"
            ],
            correct: 1,
            hint: "These trains float above the track using magnets."
        },
        {
            type: "fillin",
            question: "Trains that float above the track using powerful electromagnets use _______ technology.",
            correct: "maglev",
            hint: "Short for 'magnetic levitation.'"
        },
        {
            type: "truefalse",
            question: "Maglev trains use electromagnets to float above the track.",
            correct: true,
            hint: "Magnetic levitation lifts the train so there's no friction with the track."
        },
        // === GENERATORS ===
        {
            type: "multiple",
            question: "How does a generator work?",
            options: [
                "It stores electricity in batteries",
                "It uses a changing magnetic field to produce electricity",
                "It converts electricity into magnetism only",
                "It uses static electricity"
            ],
            correct: 1,
            hint: "Generators use the principle discovered by Faraday and Henry."
        },
        {
            type: "truefalse",
            question: "A generator converts mechanical energy into electrical energy using magnetism.",
            correct: true,
            hint: "Spinning magnets or coils create a changing magnetic field that produces electricity."
        },
        {
            type: "multiple",
            question: "What principle do generators use to produce electricity?",
            options: [
                "Static electricity buildup",
                "A changing magnetic field creates electric current",
                "Chemical reactions in batteries",
                "Heat from burning fuel directly"
            ],
            correct: 1,
            hint: "This was discovered by Faraday and Henry."
        },
        // === ELECTRICAL VS ELECTRONIC DEVICES ===
        {
            type: "multiple",
            question: "What is the main difference between electrical devices and electronic devices?",
            options: [
                "Electrical devices are bigger",
                "Electronic devices use semiconductors to control electrical signals",
                "Electrical devices don't use electricity",
                "There is no difference"
            ],
            correct: 1,
            hint: "Electronic devices use special components to process information."
        },
        {
            type: "multiple",
            question: "Which is an example of an electrical device (not electronic)?",
            options: [
                "Computer",
                "Smartphone",
                "Toaster",
                "Video game console"
            ],
            correct: 2,
            hint: "Electrical devices simply use electricity for power, like heating or motors."
        },
        {
            type: "multiple",
            question: "Which is an example of an electronic device?",
            options: [
                "Light bulb",
                "Electric heater",
                "Computer",
                "Electric stove"
            ],
            correct: 2,
            hint: "Electronic devices process information using semiconductors."
        },
        // === SEMICONDUCTORS AND INTEGRATED CIRCUITS ===
        {
            type: "multiple",
            question: "What is a semiconductor?",
            options: [
                "A material that always conducts electricity",
                "A material that never conducts electricity",
                "A material that can conduct electricity under certain conditions",
                "A type of battery"
            ],
            correct: 2,
            hint: "Semi means 'half' or 'partial' - it's between a conductor and insulator."
        },
        {
            type: "fillin",
            question: "A material that can act as both a conductor and an insulator depending on conditions is called a _______.",
            correct: "semiconductor",
            hint: "Silicon is the most common example, used in computer chips."
        },
        {
            type: "multiple",
            question: "What is an integrated circuit?",
            options: [
                "A very large circuit board",
                "A tiny chip containing thousands or millions of electronic components",
                "A circuit with only one component",
                "A type of battery"
            ],
            correct: 1,
            hint: "Also called a microchip, it packs many components onto a tiny chip."
        },
        {
            type: "fillin",
            question: "A tiny chip containing many electronic components is called an _______ circuit.",
            correct: "integrated",
            hint: "Also known as a microchip or chip."
        },
        // === ELECTRICAL SIGNALS AND BINARY ===
        {
            type: "multiple",
            question: "What is an electrical signal?",
            options: [
                "A type of magnet",
                "Electricity that carries information",
                "A measurement of voltage",
                "A type of battery"
            ],
            correct: 1,
            hint: "Electronic devices use these to communicate and process data."
        },
        {
            type: "fillin",
            question: "Electricity that carries information in electronic devices is called an electrical _______.",
            correct: "signal",
            hint: "These can represent data like sounds, images, or numbers."
        },
        {
            type: "multiple",
            question: "What number system do computers use?",
            options: [
                "Decimal (base 10)",
                "Binary (base 2)",
                "Hexadecimal (base 16)",
                "Roman numerals"
            ],
            correct: 1,
            hint: "Computers use only two digits: 0 and 1."
        },
        {
            type: "fillin",
            question: "The number system using only 0s and 1s that computers use is called the _______ number system.",
            correct: "binary",
            hint: "Binary means 'two' - only two digits are used."
        },
        {
            type: "truefalse",
            question: "In the binary number system, data is represented using only 0s and 1s.",
            correct: true,
            hint: "Computers process information as patterns of on (1) and off (0) signals."
        },
        // === PARTS OF A COMPUTER ===
        {
            type: "multiple",
            question: "Which part of a computer processes information and runs programs?",
            options: [
                "Monitor",
                "Keyboard",
                "CPU (Central Processing Unit)",
                "Mouse"
            ],
            correct: 2,
            hint: "This is often called the 'brain' of the computer."
        },
        {
            type: "multiple",
            question: "Which part of a computer stores data and programs even when the power is off?",
            options: [
                "RAM",
                "Hard drive or SSD",
                "CPU",
                "Monitor"
            ],
            correct: 1,
            hint: "This is where your files, photos, and programs are saved permanently."
        },
        {
            type: "multiple",
            question: "Which part of a computer temporarily stores data while programs are running?",
            options: [
                "Hard drive",
                "RAM (Random Access Memory)",
                "Monitor",
                "Keyboard"
            ],
            correct: 1,
            hint: "This memory is fast but loses data when the computer is turned off."
        },
        {
            type: "multiple",
            question: "Which of these is an input device?",
            options: [
                "Monitor",
                "Printer",
                "Keyboard",
                "Speakers"
            ],
            correct: 2,
            hint: "Input devices send information INTO the computer."
        },
        {
            type: "multiple",
            question: "Which of these is an output device?",
            options: [
                "Mouse",
                "Keyboard",
                "Scanner",
                "Monitor"
            ],
            correct: 3,
            hint: "Output devices display or send information OUT from the computer."
        },
        // === REVIEW QUESTIONS ===
        {
            type: "truefalse",
            question: "William Sturgeon invented the first practical electromagnet.",
            correct: true,
            hint: "This English inventor's electromagnet could lift heavy objects."
        },
        {
            type: "multiple",
            question: "What converts mechanical energy into electrical energy?",
            options: [
                "Battery",
                "Generator",
                "Light bulb",
                "Resistor"
            ],
            correct: 1,
            hint: "Power plants use these to produce electricity."
        },
        {
            type: "multiple",
            question: "What converts chemical energy into electrical energy?",
            options: [
                "Generator",
                "Motor",
                "Battery (electric cell)",
                "Transformer"
            ],
            correct: 2,
            hint: "Chemical reactions inside produce electricity."
        },
        {
            type: "truefalse",
            question: "A circuit must be closed (complete) for electricity to flow.",
            correct: true,
            hint: "An open circuit has a break, so electricity cannot flow."
        },
        {
            type: "multiple",
            question: "If a 750-watt blow dryer is replaced with a 1500-watt blow dryer and the circuit trips, what likely happened?",
            options: [
                "The blow dryer is broken",
                "The circuit was overloaded with too much power",
                "The battery died",
                "The magnets failed"
            ],
            correct: 1,
            hint: "Higher wattage means more power draw, which can overload a circuit."
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
        // === VOCABULARY: BRIGHTNESS ===
        {
            type: "multiple",
            question: "What term describes the overall brightness of stars?",
            options: [
                "Luminosity",
                "Magnitude",
                "Parallax",
                "Nova"
            ],
            correct: 1,
            hint: "This word means the brightness of a star — it comes in two types: apparent and absolute."
        },
        {
            type: "fillin",
            question: "The true brightness of a star, regardless of how far away it is, is called _______ magnitude.",
            correct: "absolute",
            hint: "This tells us how bright the star actually is, not just how bright it looks."
        },
        {
            type: "fillin",
            question: "How bright a star appears to us from Earth is called _______ magnitude.",
            correct: "apparent",
            hint: "A nearby dim star can appear brighter than a very distant brilliant star."
        },
        {
            type: "multiple",
            question: "A star that is very far away will have a lower _______ magnitude but its _______ magnitude tells its true brightness.",
            options: [
                "absolute; apparent",
                "apparent; absolute",
                "nova; pulsar",
                "parallax; magnitude"
            ],
            correct: 1,
            hint: "Apparent = how it looks from Earth; Absolute = how bright it really is."
        },
        // === VOCABULARY: STAR EVENTS ===
        {
            type: "fillin",
            question: "A cloud of dust, gases, and debris in space is called a _______.",
            correct: "nebula",
            hint: "Stars are born inside these clouds of gas and dust."
        },
        {
            type: "fillin",
            question: "When an existing star suddenly flares up and becomes much brighter, this event is called a _______.",
            correct: "nova",
            hint: "This is a sudden, dramatic increase in a star's brightness."
        },
        {
            type: "fillin",
            question: "The death explosion of a star is called a _______.",
            correct: "supernova",
            hint: "This is one of the most powerful explosions in the universe — 'super' means it's even bigger than a nova."
        },
        {
            type: "multiple",
            question: "What is a supernova?",
            options: [
                "A star that flares up temporarily",
                "A cloud of gas and dust",
                "The death explosion of a star",
                "A neutron star"
            ],
            correct: 2,
            hint: "This is the catastrophic explosion that occurs when a massive star dies."
        },
        // === VOCABULARY: NEUTRON STARS AND PULSARS ===
        {
            type: "fillin",
            question: "An extremely dense star made mostly of neutrons is called a _______ star.",
            correct: "neutron",
            hint: "These incredibly dense objects form when a massive star's core collapses."
        },
        {
            type: "fillin",
            question: "A neutron star that spins rapidly on its axis and emits beams of energy is called a _______.",
            correct: "pulsar",
            hint: "The spinning makes it seem to 'pulse' — like a lighthouse beacon in space."
        },
        {
            type: "multiple",
            question: "What is a pulsar?",
            options: [
                "A cloud of gas and dust",
                "A star that explodes",
                "A neutron star that spins rapidly on its axis",
                "A variable star"
            ],
            correct: 2,
            hint: "As it spins, its beam of energy sweeps past Earth regularly, like a lighthouse."
        },
        {
            type: "multiple",
            question: "A supergiant star may collapse into a very dense core, which can result in:",
            options: [
                "A nova",
                "A nebula",
                "A neutron star or black hole",
                "A pulsar turning into a planet"
            ],
            correct: 2,
            hint: "When a supergiant collapses, the result can be incredibly dense — sometimes not even light can escape."
        },
        // === BLACK HOLES ===
        {
            type: "truefalse",
            question: "A supergiant star that collapses and disappears from space is called a black hole.",
            correct: true,
            hint: "A black hole's gravity is so strong that nothing, not even light, can escape."
        },
        {
            type: "multiple",
            question: "What is a black hole?",
            options: [
                "A dark nebula",
                "A region of space with gravity so strong that nothing can escape it",
                "A type of pulsar",
                "An area with no stars"
            ],
            correct: 1,
            hint: "Even light cannot escape a black hole's gravity — that's why we can't see it directly."
        },
        // === STAR SIZES ===
        {
            type: "multiple",
            question: "Which lists the sizes of stars from SMALLEST to LARGEST?",
            options: [
                "Giant, dwarf, supergiant",
                "Supergiant, giant, dwarf",
                "Dwarf, giant, supergiant",
                "Dwarf, supergiant, giant"
            ],
            correct: 2,
            hint: "Think of the prefix 'super' as meaning biggest, and 'dwarf' as smallest."
        },
        {
            type: "truefalse",
            question: "Supergiants are the largest category of stars.",
            correct: true,
            hint: "From smallest to largest: dwarf stars → giant stars → supergiants."
        },
        {
            type: "fillin",
            question: "Our Sun is classified as a _______ star — the smallest category.",
            correct: "dwarf",
            hint: "Despite being enormous compared to Earth, our Sun is small compared to giant and supergiant stars."
        },
        // === LIGHT-YEAR ===
        {
            type: "truefalse",
            question: "A light-year is the distance that light travels in one year.",
            correct: true,
            hint: "Light travels about 186,000 miles per second — a light-year is that speed times one year."
        },
        {
            type: "fillin",
            question: "The distance that light travels in one year is called a _______.",
            correct: "light-year",
            hint: "This unit is used to measure huge distances between stars."
        },
        {
            type: "multiple",
            question: "Why do scientists use light-years to measure distances in space?",
            options: [
                "Because space has no miles",
                "Because stars are so far apart that miles and kilometers are impractical",
                "Because light travels slowly",
                "Because planets use light-years too"
            ],
            correct: 1,
            hint: "Even the nearest star beyond our Sun is about 4 light-years away — that's about 25 trillion miles!"
        },
        // === PARALLAX ===
        {
            type: "fillin",
            question: "The apparent shift in the position of a nearby star compared to distant stars as Earth orbits the Sun is called _______.",
            correct: "parallax",
            hint: "Hold your finger up and blink each eye — the finger appears to 'shift.' Stars do this too."
        },
        {
            type: "multiple",
            question: "What is parallax?",
            options: [
                "The brightness of a star",
                "The apparent movement or change in position of one star in relation to other stars",
                "The spinning of a neutron star",
                "The explosion of a supergiant"
            ],
            correct: 1,
            hint: "Scientists use this shift to calculate how far away nearby stars are."
        },
        {
            type: "truefalse",
            question: "The apparent movement or change in position of one star in relationship to other stars is known as pulsating.",
            correct: false,
            hint: "This is called PARALLAX, not pulsating. Pulsating refers to variable stars that change in brightness."
        },
        // === WHAT STARS ARE ===
        {
            type: "truefalse",
            question: "Stars are glowing balls of gases that reflect light.",
            correct: false,
            hint: "Stars PRODUCE (give off) their own light through nuclear fusion — they do not reflect it."
        },
        {
            type: "multiple",
            question: "What causes a star to shine?",
            options: [
                "Reflection of sunlight",
                "Nuclear fusion",
                "Burning of coal or gas",
                "Chemical reactions with oxygen"
            ],
            correct: 1,
            hint: "Stars produce energy by fusing hydrogen atoms into helium at extreme temperatures."
        },
        // === CLOSEST STAR ===
        {
            type: "multiple",
            question: "What is the closest star to Earth?",
            options: [
                "Proxima Centauri",
                "Polaris",
                "The Sun",
                "Sirius"
            ],
            correct: 2,
            hint: "This star is right in our solar system — it gives us light and warmth every day."
        },
        {
            type: "truefalse",
            question: "Proxima Centauri is the closest star to Earth.",
            correct: false,
            hint: "The SUN is the closest star to Earth. Proxima Centauri is the closest star BEYOND our solar system."
        },
        // === STAR COLOR AND TEMPERATURE ===
        {
            type: "multiple",
            question: "What color are the hottest stars?",
            options: [
                "Red",
                "Yellow",
                "Orange",
                "Blue"
            ],
            correct: 3,
            hint: "Think about the hottest part of a flame — it glows blue-white."
        },
        {
            type: "multiple",
            question: "What color are the coolest stars?",
            options: [
                "Blue",
                "White",
                "Yellow",
                "Red"
            ],
            correct: 3,
            hint: "Red stars are the coolest; blue stars are the hottest."
        },
        {
            type: "multiple",
            question: "What does a star's color tell us?",
            options: [
                "Its size",
                "Its age",
                "Its surface temperature",
                "Its distance from Earth"
            ],
            correct: 2,
            hint: "Blue = hottest, yellow = medium, red = coolest."
        },
        {
            type: "truefalse",
            question: "A star's color depends on its surface temperature.",
            correct: true,
            hint: "Blue stars are hottest, yellow stars are medium temperature, and red stars are the coolest."
        },
        // === VARIABLE STARS ===
        {
            type: "truefalse",
            question: "Variable stars regularly or repeatedly change in magnitude.",
            correct: true,
            hint: "Variable stars change in brightness — either because they physically pulsate or because one star eclipses another."
        },
        {
            type: "multiple",
            question: "What is a pulsating variable star?",
            options: [
                "A star that explodes",
                "A star that grows bigger and smaller, getting brighter and dimmer",
                "A star blocked by another star",
                "A neutron star"
            ],
            correct: 1,
            hint: "These stars physically expand and contract, which changes their brightness."
        },
        {
            type: "multiple",
            question: "What is an eclipsing variable star?",
            options: [
                "A star that pulsates in size",
                "A star that explodes periodically",
                "A star system where one star passes in front of another, blocking its light",
                "A star near a black hole"
            ],
            correct: 2,
            hint: "The brightness changes because one star 'eclipses' (blocks) the other from our view."
        },
        {
            type: "multiple",
            question: "What is the main difference between pulsating and eclipsing variable stars?",
            options: [
                "Pulsating stars are hotter",
                "Pulsating stars grow bigger and smaller; eclipsing stars change brightness when one star blocks another",
                "Eclipsing stars are larger",
                "There is no difference"
            ],
            correct: 1,
            hint: "Pulsating = the star itself changes size; eclipsing = a second star blocks the light."
        },
        // === CONSTELLATIONS ===
        {
            type: "fillin",
            question: "A pattern of stars that form a recognizable shape is called a _______.",
            correct: "constellation",
            hint: "Examples include the Big Dipper, Orion, and Cassiopeia."
        },
        {
            type: "multiple",
            question: "Which of these is a famous constellation?",
            options: [
                "Pulsar",
                "Orion",
                "Nebula",
                "Nova"
            ],
            correct: 1,
            hint: "This constellation is named after a hunter from Greek mythology and is visible in winter."
        }
    ],
    11: [ // Solar System
        // === THE SUN ===
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
            type: "truefalse",
            question: "The Sun is a star.",
            correct: true,
            hint: "The Sun is the closest star to Earth - it's a giant ball of hot gas."
        },
        {
            type: "multiple",
            question: "What process produces the Sun's energy?",
            options: [
                "Burning of coal",
                "Chemical reactions",
                "Nuclear fusion",
                "Electricity"
            ],
            correct: 2,
            hint: "Hydrogen atoms are combined to form helium, releasing enormous energy."
        },
        {
            type: "fillin",
            question: "The outer atmosphere of the Sun that is visible during a solar eclipse is called the _______.",
            correct: "corona",
            hint: "This glowing outer layer extends millions of miles into space."
        },
        {
            type: "multiple",
            question: "Dark areas on the Sun's surface caused by cooler temperatures are called:",
            options: [
                "Solar flares",
                "Sunspots",
                "Prominences",
                "Coronas"
            ],
            correct: 1,
            hint: "These appear darker because they are slightly cooler than the surrounding surface."
        },
        // === PLANETS - ORDER AND OVERVIEW ===
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
            type: "multiple",
            question: "Which planet is closest to the Sun?",
            options: [
                "Venus",
                "Earth",
                "Mercury",
                "Mars"
            ],
            correct: 2,
            hint: "This tiny, cratered planet has extreme temperature swings."
        },
        {
            type: "multiple",
            question: "Which planet is farthest from the Sun?",
            options: [
                "Saturn",
                "Uranus",
                "Pluto",
                "Neptune"
            ],
            correct: 3,
            hint: "This icy blue planet is the outermost of the eight planets."
        },
        {
            type: "fillin",
            question: "The correct order of the first four planets from the Sun is Mercury, Venus, Earth, _______.",
            correct: "Mars",
            hint: "This red planet comes right after Earth."
        },
        {
            type: "fillin",
            question: "A helpful way to remember the planet order is 'My Very Educated Mother Just Served Us _______.'",
            correct: "Nachos",
            hint: "The last word starts with N, for Neptune."
        },
        // === INNER PLANETS (TERRESTRIAL) ===
        {
            type: "multiple",
            question: "What do the inner planets (Mercury, Venus, Earth, Mars) have in common?",
            options: [
                "They all have rings",
                "They are all gas giants",
                "They are all rocky and dense",
                "They all have many moons"
            ],
            correct: 2,
            hint: "The inner planets are called terrestrial planets because they have solid rocky surfaces."
        },
        {
            type: "truefalse",
            question: "The inner planets are called terrestrial planets.",
            correct: true,
            hint: "'Terrestrial' means 'earth-like' - these planets have rocky surfaces like Earth."
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
        },
        {
            type: "multiple",
            question: "Which planet has the hottest surface temperature in our solar system?",
            options: [
                "Mercury",
                "Venus",
                "Earth",
                "Mars"
            ],
            correct: 1,
            hint: "This planet's thick atmosphere traps heat - its surface is hotter than Mercury even though it's farther from the Sun."
        },
        {
            type: "truefalse",
            question: "Venus rotates in the opposite direction from most planets.",
            correct: true,
            hint: "On Venus, the Sun rises in the west and sets in the east."
        },
        {
            type: "multiple",
            question: "Which planet has conditions most similar to Earth?",
            options: [
                "Mercury",
                "Venus",
                "Mars",
                "Jupiter"
            ],
            correct: 2,
            hint: "This planet has polar ice caps, seasons, and scientists have found evidence of ancient water."
        },
        {
            type: "multiple",
            question: "How many moons does Mars have?",
            options: [
                "0",
                "1",
                "2",
                "4"
            ],
            correct: 2,
            hint: "Mars has two small, potato-shaped moons named Phobos and Deimos."
        },
        // === OUTER PLANETS (GAS GIANTS) ===
        {
            type: "multiple",
            question: "What are Jupiter, Saturn, Uranus, and Neptune called?",
            options: [
                "Terrestrial planets",
                "Dwarf planets",
                "Gas giants",
                "Rocky planets"
            ],
            correct: 2,
            hint: "These outer planets are mostly made of gases and are much larger than the inner planets."
        },
        {
            type: "truefalse",
            question: "Jupiter is the largest planet in our solar system.",
            correct: true,
            hint: "This gas giant is bigger than all other planets combined."
        },
        {
            type: "multiple",
            question: "What is the Great Red Spot on Jupiter?",
            options: [
                "A volcano",
                "A giant storm that has lasted hundreds of years",
                "A desert region",
                "A large crater"
            ],
            correct: 1,
            hint: "This enormous storm system is larger than Earth and has raged for centuries."
        },
        {
            type: "multiple",
            question: "Which planet is famous for its beautiful ring system?",
            options: [
                "Jupiter",
                "Uranus",
                "Saturn",
                "Neptune"
            ],
            correct: 2,
            hint: "This planet's rings are made of ice and rock and are visible from Earth with a telescope."
        },
        {
            type: "truefalse",
            question: "Saturn is the only planet with rings.",
            correct: false,
            hint: "Jupiter, Uranus, and Neptune also have rings, but Saturn's are the most visible."
        },
        {
            type: "multiple",
            question: "Which planet rotates on its side (tilted almost 98 degrees)?",
            options: [
                "Jupiter",
                "Saturn",
                "Uranus",
                "Neptune"
            ],
            correct: 2,
            hint: "This planet essentially rolls around the Sun like a bowling ball."
        },
        {
            type: "multiple",
            question: "Which planet appears blue-green because of methane gas in its atmosphere?",
            options: [
                "Jupiter",
                "Saturn",
                "Uranus",
                "Neptune"
            ],
            correct: 2,
            hint: "Both Uranus and Neptune look bluish, but this one has a more blue-green tint."
        },
        // === EARTH AND THE MOON ===
        {
            type: "fillin",
            question: "The path a planet takes around the Sun is called its _______.",
            correct: "orbit",
            hint: "This is the curved path that planets follow as they circle the Sun."
        },
        {
            type: "multiple",
            question: "What causes Earth to have day and night?",
            options: [
                "Earth's revolution around the Sun",
                "Earth's rotation on its axis",
                "The Moon blocking the Sun",
                "Clouds covering the Sun"
            ],
            correct: 1,
            hint: "Earth spins like a top, causing one side to face the Sun (day) while the other faces away (night)."
        },
        {
            type: "multiple",
            question: "What causes Earth to have seasons?",
            options: [
                "Earth getting closer and farther from the Sun",
                "Earth's tilted axis as it revolves around the Sun",
                "The Moon's gravity",
                "Changes in the Sun's brightness"
            ],
            correct: 1,
            hint: "Earth's axis is tilted, so different parts receive more direct sunlight at different times of year."
        },
        {
            type: "fillin",
            question: "One complete spin of Earth on its axis takes approximately 24 hours, which is one _______.",
            correct: "day",
            hint: "This is why we have morning and night on a regular schedule."
        },
        {
            type: "fillin",
            question: "One complete trip of Earth around the Sun takes approximately 365 days, which is one _______.",
            correct: "year",
            hint: "This is how long Earth's revolution takes."
        },
        {
            type: "multiple",
            question: "What is Earth's moon?",
            options: [
                "A star",
                "A planet",
                "A natural satellite",
                "An asteroid"
            ],
            correct: 2,
            hint: "The Moon orbits Earth, making it a natural satellite of our planet."
        },
        {
            type: "multiple",
            question: "What causes the phases of the Moon?",
            options: [
                "Earth's shadow on the Moon",
                "The Moon's rotation",
                "Our view of the lit side of the Moon as it orbits Earth",
                "Clouds on the Moon"
            ],
            correct: 2,
            hint: "The Sun always lights half the Moon; we see different amounts of the lit side as the Moon orbits Earth."
        },
        {
            type: "truefalse",
            question: "A solar eclipse occurs when the Moon passes between Earth and the Sun.",
            correct: true,
            hint: "The Moon blocks the Sun's light from reaching part of Earth."
        },
        {
            type: "truefalse",
            question: "A lunar eclipse occurs when the Moon passes between Earth and the Sun.",
            correct: false,
            hint: "A lunar eclipse occurs when Earth passes between the Sun and the Moon, casting Earth's shadow on the Moon."
        },
        // === OTHER SOLAR SYSTEM OBJECTS ===
        {
            type: "multiple",
            question: "The asteroid belt is located between which two planets?",
            options: [
                "Earth and Mars",
                "Mars and Jupiter",
                "Jupiter and Saturn",
                "Saturn and Uranus"
            ],
            correct: 1,
            hint: "This region of rocky debris lies between the inner and outer planets."
        },
        {
            type: "fillin",
            question: "Rocky objects that orbit the Sun, mostly found between Mars and Jupiter, are called _______.",
            correct: "asteroids",
            hint: "These range in size from tiny pebbles to hundreds of miles across."
        },
        {
            type: "multiple",
            question: "What is a comet?",
            options: [
                "A rocky planet with no atmosphere",
                "A ball of ice, rock, and dust that orbits the Sun",
                "A type of asteroid",
                "A small moon"
            ],
            correct: 1,
            hint: "As these objects near the Sun, heat causes them to release gases that form a glowing tail."
        },
        {
            type: "truefalse",
            question: "Comets have tails that always point away from the Sun.",
            correct: true,
            hint: "Solar wind pushes the comet's tail away from the Sun, so the tail always points away from it."
        },
        {
            type: "multiple",
            question: "What is a meteoroid?",
            options: [
                "A planet that lost its atmosphere",
                "A small rocky or metallic body in space",
                "A moon of Jupiter",
                "A type of star"
            ],
            correct: 1,
            hint: "These become meteors when they enter Earth's atmosphere and burn up."
        },
        {
            type: "multiple",
            question: "What do we call a meteor that survives and hits Earth's surface?",
            options: [
                "Asteroid",
                "Comet",
                "Meteorite",
                "Satellite"
            ],
            correct: 2,
            hint: "When a meteor makes it all the way to the ground, it gets this name."
        },
        {
            type: "fillin",
            question: "A small body that orbits another body in space (like a moon orbiting a planet) is called a _______.",
            correct: "satellite",
            hint: "The Moon is Earth's natural one; GPS uses artificial ones."
        },
        // === DWARF PLANETS AND PLUTO ===
        {
            type: "multiple",
            question: "Why was Pluto reclassified as a dwarf planet in 2006?",
            options: [
                "It disappeared",
                "It is too small and has not cleared its orbital neighborhood",
                "It melted",
                "Scientists made a mistake"
            ],
            correct: 1,
            hint: "A planet must orbit the Sun, be round, and have cleared its neighborhood. Pluto hasn't done the last one."
        },
        {
            type: "truefalse",
            question: "Pluto is now classified as a dwarf planet.",
            correct: true,
            hint: "In 2006 the International Astronomical Union reclassified Pluto."
        },
        // === GRAVITY AND DISTANCE ===
        {
            type: "multiple",
            question: "What force keeps the planets in orbit around the Sun?",
            options: [
                "Magnetism",
                "Friction",
                "Gravity",
                "Wind"
            ],
            correct: 2,
            hint: "This force acts between all objects with mass and holds the solar system together."
        },
        {
            type: "truefalse",
            question: "Planets closer to the Sun take less time to orbit the Sun than planets farther away.",
            correct: true,
            hint: "Mercury orbits in 88 days; Neptune takes about 165 Earth years."
        },
        {
            type: "multiple",
            question: "What unit do scientists use to measure distances in our solar system?",
            options: [
                "Miles",
                "Light-years",
                "Astronomical Units (AU)",
                "Kilometers"
            ],
            correct: 2,
            hint: "One AU equals the average distance between Earth and the Sun (about 93 million miles)."
        },
        {
            type: "fillin",
            question: "The average distance between Earth and the Sun is called one _______ Unit (AU).",
            correct: "Astronomical",
            hint: "This is the standard unit for measuring distances within our solar system."
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
