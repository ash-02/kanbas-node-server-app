export default [
    {
        "_id": "Q101",
        "title": "Quiz 1",
        "course": "RS101",
        "points": 10,
        "due": "2023-09-18",
        "available": "2024-04-05T01:50:25Z",
        "publishStatus": 1,
        "numQuestions": 3,
        "questions": [
            {
                "questionType": "multipleChoice",
                "question": "What is the capital of France?",
                "choices": ["Paris", "London", "Berlin", "Madrid"],
                "correctAnswer": "Paris",
                "points": 2
            },
            {
                "questionType": "trueFalse",
                "question": "Is the Earth flat?",
                "correctAnswer": false,
                "points": 2
            },
            {
                "questionType": "fillInBlank",
                "question": "The capital of Italy is __________.",
                "correctAnswer": "Rome",
                "points": 2
            }
        ]
    }
]