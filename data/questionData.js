/*question text, answers text*/
/*Structure:
    [mbti: ei or sn or tf or jp,
    question: text of question,
    answers: [{answer 1, answer 2}],   each answer has "text", "value" in int, and "fork" (the theme to change to) which can be null
    foregroundSprite: { <--can be null
    isActive: boolean that tells whether or not the foreground sprite is present, <--can be null
    position: array [top%, left%]}] <--can be null */

//FOREST
window.forestQuestions = [
    {
        "mbti": "ei",
        "question": "fQuestion 1",
        "answers": [
            {"text": "click for dungeon", "value": 1, "fork": "dungeon"},
            {"text": "continue forest", "value": -1}
        ],
        "foregroundSprite": {"isActive": false}
    },
    {
        "mbti": "ei",
        "question": "fQuestion 2",
        "answers": [
            {"text": "q2a1", "value": 1},
            {"text": "q2a2", "value": -1}
        ],
        "foregroundSprite": {"position": ["10%", "10%"]}
    },
    {
        "mbti": "ei",
        "question": "fQuestion 3",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 4",
        "answers": [
            {"text": "q4a1", "value": 1},
            {"text": "q4a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 5",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 6",
        "answers": [
            {"text": "q6a1", "value": 1},
            {"text": "q6a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 7",
        "answers": [
            {"text": "answer 1", "value": 1},
            {"text": "answer 2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 8",
        "answers": [
            {"text": "q8a1", "value": 1},
            {"text": "q8a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 9",
        "answers": [
            {"text": "q9a1", "value": 1},
            {"text": "q9a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 10",
        "answers": [
            {"text": "q10a1", "value": 1},
            {"text": "q10a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 11",
        "answers": [
            {"text": "q11a1", "value": 1},
            {"text": "q11a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 12",
        "answers": [
            {"text": "q12a1", "value": 1},
            {"text": "q12a2", "value": -1}
        ]
    },
    {
        "mbti": "ei",
        "question": "fQuestion 13",
        "answers": [
            {"text": "q13a1", "value": 1},
            {"text": "q13a2", "value": -1}
        ]
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
        "question": "dQuestion 13",
        "answers": [
            {"text": "q13a1", "value": 1},
            {"text": "q13a2", "value": -1}
        ]
    }
];