/*question text, answers text*/
/*Structure:
    [mbti: ei or sn or tf or jp or "" (transition page),
    --------note: //If negative value, take the left result, if positive take the right
    question: text of question,
    answers: [{answer 1, answer 2}],   
            each answer has "text", "value" in int, and 
            "fork" (the theme to change to) which can be null
    foregroundSprite: { <--can be null
    isActive: boolean that tells whether or not the foreground 
            sprite is present, <--can be null
    position: array [top%, left%]}] <--can be null */

//FOREST
window.forestQuestions = [
    {
        "mbti": "ei",
        "question": "What does your domain look like?",
        "answers": [
            {"text": "Beams of moonlight shine through the brick windows.", "value": 1, "fork": "dungeon"},
            {"text": "A shroud of darkness envelopes the trees.", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    },
    {
        "mbti": "ei",
        "question": "You notice a glowing mushroom you've never seen before...",
        "answers": [
            {"text": "Let's not touch it for now...", "value": 1},
            {"text": "Ooh it's so shiny...", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    },
    {
        "mbti": "", //transition page
        "question": "A lone human, trembling in fear, stumbles into your field of vision.",
        "answers": [
            {"text": "hidden", "value": 0},
            {"text": "Fresh meat...", "value": 0}
        ],
        "foregroundSprite": {"position": ["50%", "10%"]}
    },
    {
        "mbti": "jp",
        "question": "The human cries out for help.",
        "answers": [
            {"text": "Can't let anyone interfere!", "value": -1},
            {"text": "Let's see if more humans take the bait.", "value": 1}
        ]
    },
    {
        "mbti": "sn",
        "question": "What is the first thing people notice within your domain?",
        "answers": [
            {"text": "The scent of rot and scattered shards of bone.", "value": -1},
            {"text": "The feeling of being watched and followed.", "value": 1}
        ]
    },
    {
        "mbti": "jp",
        "question": "How do you pursue your prey?",
        "answers": [
            {"text": "I've been meaning to try a new trap...", "value": 1},
            {"text": "With my most efficient strategy.", "value": -1}
        ]
    },
    {
        "mbti": "sn",
        "question": "What do you rely on to pursue your prey?",
        "answers": [
            {"text": "Footprints and the scent of sweat in the air.", "value": -1},
            {"text": "My instincts have never been wrong.", "value": 1}
        ]
    },
    {
        "mbti": "jp",
        "question": "Rain pours from the sky...",
        "answers": [
            {"text": "What a pain, I have to readjust all my traps", "value": -1},
            {"text": "This will hide my footprints!", "value": 1}
        ]
    },
    {
        "mbti": "tf",
        "question": "Your prey attempts to fight back!",
        "answers": [
            {"text": "Yawn -- nothing I haven't seen before.", "value": -1},
            {"text": "Respect their courage, however futile.", "value": 1}
        ]
    },
    {
        "mbti": "sn",
        "question": "You lay a trap for your prey. How do you set it up?",
        "answers": [
            {"text": "Everything is in its place -- no room for error.", "value": -1},
            {"text": "Put it where I'm sure they'll run.", "value": 1}
        ]
    },
    {
        "mbti": "tf",
        "question": "Your prey pleads for their life.",
        "answers": [
            {"text": "They say they’re a single father? Wait...", "value": 1},
            {"text": "It's just a job, nothing personal.", "value": -1}
        ]
    },
    {
        "mbti": "tf",
        "question": "Finally, there's nowhere to run.",
        "answers": [
            {"text": "It was all planned--this was inevitable.", "value": -1},
            {"text": "You've run enough--it's time to face your fate.", "value": 1}
        ]
    },
    {
        "mbti": "ei",
        "question": "In the reflection of a still lake, you see...",
        "answers": [
            {"text": "A disfigured monstrosity.", "value": 1},
            {"text": "The epitome of beauty.", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    }
];

//DUNGEON
window.dungeonQuestions = [
    {
        "mbti": "",
        "question": "SHOULD NEVER ENCOUNTER THIS QUESTION",
        "answers": [
            {"text": "", "value": 0},
            {"text": "answer 2", "value": 0}
        ]
    },
    {
        "mbti": "ei",
        "question": "You notice a ruby amulet you've never seen before...",
        "answers": [
            {"text": "Let's not touch it for now...", "value": 1},
            {"text": "Ooh it's so shiny...", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    },
    {
        "mbti": "", //transition page
        "question": "You turn the corner and see a lone human, trembling in fear.",
        "answers": [
            {"text": "hidden", "value": 0},
            {"text": "Fresh meat...", "value": 0}
        ],
        "foregroundSprite": {"position": ["50%", "10%"]}
    },
    {
        "mbti": "jp",
        "question": "The human cries out for help.",
        "answers": [
            {"text": "Can't let anyone interfere!", "value": -1},
            {"text": "Let's see if more humans take the bait.", "value": 1}
        ]
    },
    {
        "mbti": "sn",
        "question": "What is the first thing people notice within your domain?",
        "answers": [
            {"text": "The scent of blood and scattered shards of bone.", "value": -1},
            {"text": "The feeling of being watched and followed.", "value": 1}
        ]
    },
    {
        "mbti": "jp",
        "question": "How do you pursue your prey?",
        "answers": [
            {"text": "I've been meaning to try a new trap...", "value": 1},
            {"text": "With my most efficient strategy.", "value": -1}
        ]
    },
    {
        "mbti": "sn",
        "question": "What do you rely on to pursue your prey?",
        "answers": [
            {"text": "Footprints and the scent of sweat in the air.", "value": -1},
            {"text": "My instincts have never been wrong.", "value": 1}
        ]
    },
    {
        "mbti": "jp",
        "question": "A gust of wind sweepts the halls, extinguishing all the torches.",
        "answers": [
            {"text": "What a pain, I have to relight them all.", "value": -1},
            {"text": "Perfect, they won't see me coming!", "value": 1}
        ]
    },
    {
        "mbti": "tf",
        "question": "Your prey attempts to fight back!",
        "answers": [
            {"text": "Yawn -- nothing I haven't seen before.", "value": -1},
            {"text": "Respect their courage, however futile.", "value": 1}
        ]
    },
    {
        "mbti": "sn",
        "question": "You lay a trap for your prey. How do you set it up?",
        "answers": [
            {"text": "Everything is in its place -- no room for error.", "value": -1},
            {"text": "Put it where I'm sure they'll run.", "value": 1}
        ]
    },
    {
        "mbti": "tf",
        "question": "Your prey pleads for their life.",
        "answers": [
            {"text": "They say they’re a single father? Wait...", "value": 1},
            {"text": "It's just a job, nothing personal.", "value": -1}
        ]
    },
    {
        "mbti": "tf",
        "question": "Finally, there's nowhere to run.",
        "answers": [
            {"text": "It was all planned--this was inevitable.", "value": -1},
            {"text": "You've run enough--it's time to face your fate.", "value": 1}
        ]
    },
    {
        "mbti": "ei",
        "question": "In the reflection of a dusty mirror, you see...",
        "answers": [
            {"text": "The epitome of beauty.", "value": 1},
            {"text": "A disfigured monstrosity.", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    }
];