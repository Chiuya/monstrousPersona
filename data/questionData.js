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
    position: array [top, left]}] adds onto default position values in px <--can be null */

//FOREST
window.forestQuestions = [
    {
        "mbti": "ei",
        "question": "What do your hunting grounds look like?",
        "answers": [
            {"text": "Beams of moonlight illuminate my dungeon.", "value": 1, "fork": "dungeon"},
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
        ]
    },
    {
        "mbti": "sn",
        "question": "What is the first thing they notice within your domain?",
        "answers": [
            {"text": "The scent of rot and scattered shards of bone.", "value": -1},
            {"text": "The feeling of being watched and followed.", "value": 1}
        ],
        "foregroundSprite": {"position": [50, 20]}
    },
    {
        "mbti": "jp",
        "question": "The human cries out for help.",
        "answers": [
            {"text": "Can't let anyone interfere!", "value": -1},
            {"text": "Let's see if more humans take the bait.", "value": 1}
        ],
        "foregroundSprite": {"position": [20, 0]}
    },
    {
        "mbti": "jp",
        "question": "How do you pursue your prey?",
        "answers": [
            {"text": "I've been meaning to try a new method...", "value": 1},
            {"text": "With my most efficient strategy.", "value": -1}
        ],
        "foregroundSprite": {"position": [30, 20]}
    },
    {
        "mbti": "sn",
        "question": "What do you rely on to pursue your prey?",
        "answers": [
            {"text": "Footprints and the scent of sweat in the air.", "value": -1},
            {"text": "My instincts have never been wrong.", "value": 1}
        ],
        "foregroundSprite": {"position": [20, 10]}
    },
    {
        "mbti": "jp",
        "question": "Rain pours from the sky...",
        "answers": [
            {"text": "What a pain, I have to re-adjust all my traps", "value": -1},
            {"text": "This will hide my footprints!", "value": 1}
        ],
        "foregroundSprite": {"position": [20, 10]}
    },
    {
        "mbti": "tf",
        "question": "Your prey attempts to fight back!",
        "answers": [
            {"text": "Yawn -- nothing I haven't seen before.", "value": -1},
            {"text": "Their courage is admirable, however futile.", "value": 1}
        ],
        "foregroundSprite": {"position": [20, 10]}
    },
    {
        "mbti": "sn",
        "question": "You lay a trap for your prey. How do you set it up?",
        "answers": [
            {"text": "Everything is in its place -- no room for error.", "value": -1},
            {"text": "Put it where I'm sure they'll run.", "value": 1}
        ],
        "foregroundSprite": {"position": [40, 30]}
    },
    {
        "mbti": "tf",
        "question": "Your prey pleads for their life.",
        "answers": [
            {"text": "Oh, they’re REALLY scared...", "value": 1},
            {"text": "This is just who I am, nothing personal.", "value": -1}
        ],
        "foregroundSprite": {"position": [20, 10]}
    },
    {
        "mbti": "tf",
        "question": "Finally, there's nowhere to run.",
        "answers": [
            {"text": "It was all planned--this was inevitable.", "value": -1},
            {"text": "You've run enough--it's time to face your fate.", "value": 1}
        ],
        "foregroundSprite": {"position": [20, 10]}
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
        "question": "You notice an amulet you've never seen before...",
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
        "foregroundSprite": {"position": [20, -20]}
    },
    {
        "mbti": "sn",
        "question": "What is the first thing they notice within your domain?",
        "answers": [
            {"text": "The scent of blood and scattered shards of bone.", "value": -1},
            {"text": "The feeling of being watched and followed.", "value": 1}
        ],
        "foregroundSprite": {"position": [20, -40]}
    },
    {
        "mbti": "jp",
        "question": "The human cries out for help.",
        "answers": [
            {"text": "Can't let anyone interfere!", "value": -1},
            {"text": "Let's see if more humans take the bait.", "value": 1}
        ],
        "foregroundSprite": {"position": [80, -50]}
    },
    {
        "mbti": "jp",
        "question": "How do you pursue your prey?",
        "answers": [
            {"text": "I've been meaning to try a new method...", "value": 1},
            {"text": "With my most efficient strategy.", "value": -1}
        ],
        "foregroundSprite": {"position": [50, -20]}
    },
    {
        "mbti": "sn",
        "question": "What do you rely on to pursue your prey?",
        "answers": [
            {"text": "Footprints and the scent of sweat in the air.", "value": -1},
            {"text": "My instincts have never been wrong.", "value": 1}
        ],
        "foregroundSprite": {"position": [25, 0]}
    },
    {
        "mbti": "jp",
        "question": "A gust of wind sweeps the halls, extinguishing all the torches.",
        "answers": [
            {"text": "What a pain, I have to re-light them all.", "value": -1},
            {"text": "Perfect, they won't see me coming!", "value": 1}
        ],
        "foregroundSprite": {"position": [50, -40]}
    },
    {
        "mbti": "tf",
        "question": "Your prey attempts to fight back!",
        "answers": [
            {"text": "Yawn -- nothing I haven't seen before.", "value": -1},
            {"text": "Their courage is admirable, however futile.", "value": 1}
        ],
        "foregroundSprite": {"position": [-20, 20]}
    },
    {
        "mbti": "sn",
        "question": "You lay a trap for your prey. How do you set it up?",
        "answers": [
            {"text": "Everything is in its place -- no room for error.", "value": -1},
            {"text": "Put it where I'm sure they'll run.", "value": 1}
        ],
        "foregroundSprite": {"position": [-20, 20]}
    },
    {
        "mbti": "tf",
        "question": "Your prey pleads for their life.",
        "answers": [
            {"text": "Oh, they’re REALLY scared...", "value": 1},
            {"text": "This is just who I am, nothing personal.", "value": -1}
        ],
        "foregroundSprite": {"position": [20, 0]}
    },
    {
        "mbti": "tf",
        "question": "Finally, there's nowhere to run.",
        "answers": [
            {"text": "It was all planned--this was inevitable.", "value": -1},
            {"text": "You've run enough--it's time to face your fate.", "value": 1}
        ],
        "foregroundSprite": {"position": [-25, 0]}
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