/*question text, answers text*/
/*Structure:
    [mbti: ei or sn or tf or jp,
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
            {"text": "Beams of moonlight shine through the brick windows.", "value": -1, "fork": "dungeon"},
            {"text": "A shroud of darkness envelopes the trees.", "value": 1}
        ],
        "foregroundSprite": {"isActive": false}
    },
    {
        "mbti": "", //transition page
        "question": "A lone human, trembling in fear, stumbles into your field of vision",
        "answers": [
            {"text": "hidden", "value": 0},
            {"text": "Fresh meat...", "value": 0}
        ],
        "foregroundSprite": {"position": ["10%", "10%"]}
    },
    {
        "mbti": "ei",
        "question": "The human cries out for help.",
        "answers": [
            {"text": "Let them... the more victims the better", "value": 1},
            {"text": "Silence them before anyone hears", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "How do you pursue your prey?",
        "answers": [
            {"text": "Stalking them slowly... their fate is inevitable", "value": 1},
            {"text": "Break into a dead sprint... they won't escape", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "The sounds in your domain are like music to your ears... you feel joy as you hear...",
        "answers": [
            {"text": "A cacaphony of screams, the cries of your helpless victims", "value": 1},
            {"text": "The soft rustling of leaves and peaceful flow of water", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "You chase your prey through your domain, which is...",
        "answers": [
            {"text": "Bare and organized, nothing to get in your way", "value": 1},
            {"text": "Scattered with remains", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "You turn the corner to find your victim nowhere in sight! How do you track them down?",
        "answers": [
            {"text": "Humans are always so predictable... search where you know they will hide", "value": 1},
            {"text": "Track them by scent... they can’t have gone far", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "As you hunt you notice a familiar smell hanging in the air...",
        "answers": [
            {"text": "The comforting stench of rotting bodies", "value": 1},
            {"text": "The calming scent of fresh rain on soil", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "Your victim attempts to fight back!",
        "answers": [
            {"text": "Amputate their arm... and relish the sounds of their screams", "value": 1},
            {"text": "Let them try... they will learn the futility of their actions", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "Your victim stumbles and falls. What do you do?",
        "answers": [
            {"text": "q10a1", "value": 1},
            {"text": "q10a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "Your victim cries, begging you for mercy...",
        "answers": [
            {"text": "q11a1", "value": 1},
            {"text": "q11a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "Finally, your victim hits a dead end",
        "answers": [
            {"text": "q12a1", "value": 1},
            {"text": "q12a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "You find yourself looking into a still lake. In your reflection you see...",
        "answers": [
            {"text": "The epitome of beauty.", "value": 1},
            {"text": "A disfigured monstrosity.", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    }
];

//DUNGEON
window.dungeonQuestions = [
    {
        "mbti": "ei",
        "question": "SHOULD NEVER ENCOUNTER THIS QUESTION",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 2",
        "answers": [
            {"text": "q2a1", "value": 1},
            {"text": "q2a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 3",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 4",
        "answers": [
            {"text": "q4a1", "value": 1},
            {"text": "q4a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 5",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 6",
        "answers": [
            {"text": "q6a1", "value": 1},
            {"text": "q6a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 7",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 8",
        "answers": [
            {"text": "q8a1", "value": 1},
            {"text": "q8a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 9",
        "answers": [
            {"text": "q9a1", "value": 1},
            {"text": "q9a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 10",
        "answers": [
            {"text": "q10a1", "value": 1},
            {"text": "q10a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 11",
        "answers": [
            {"text": "q11a1", "value": 1},
            {"text": "q11a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "dQuestion 12",
        "answers": [
            {"text": "q12a1", "value": 1},
            {"text": "q12a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "You find yourself looking into a dusty mirror. In your reflection you see...",
        "answers": [
            {"text": "The epitome of beauty.", "value": 1},
            {"text": "A disfigured monstrosity.", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    }
];