const Mazes = [
    [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [8, 12, 16],
        [0, 1, 2, 3, 4, 6, 8, 10, 12, 13, 14, 16],
        [0, 4, 6, 8, 10, 14, 16],
        [0, 2, 6, 8, 10, 11, 12, 14, 16],
        [0, 2, 3, 4, 5, 6, 8, 12, 14, 16],
        [0, 2, 8, 9, 10, 12, 14, 16],
        [0, 2, 3, 4, 5, 6, 10, 12, 14, 16],
        [0, 6, 7, 8, 9, 10, 12, 14, 16],
        [0, 1, 2, 3, 4, 6, 8, 12, 16],
        [0, 6, 8, 10, 11, 12, 13, 14, 16],
        [0, 2, 3, 4, 5, 6, 8, 10, 16],
        [0, 2, 8, 10, 12, 13, 14, 15, 16],
        [0, 2, 4, 5, 6, 8, 10, 12, 16],
        [0, 2, 6, 7, 8, 10, 12, 14, 16],
        [0, 4, 10, 14],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    ],
    [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [2, 10, 14, 16],
        [0, 2, 4, 5, 6, 7, 8, 10, 12, 14, 16],
        [0, 2, 4, 8, 10, 12, 14, 16],
        [0, 4, 6, 10, 12, 14, 16],
        [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 14, 16],
        [0, 12, 14, 16],
        [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16],
        [0, 2, 12, 16],
        [0, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16],
        [0, 4, 10, 16],
        [0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16],
        [0, 4, 6, 8, 14, 16],
        [0, 2, 4, 6, 8, 9, 10, 11, 12, 16],
        [0, 2, 3, 4, 6, 8, 12, 13, 14, 15, 16],
        [0, 10],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    ],
    [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [2, 6, 16],
        [0, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 16],
        [0, 2, 4, 6, 8, 14, 16],
        [0, 4, 6, 8, 10, 11, 12, 14, 16],
        [0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16],
        [0, 6, 8, 12, 14, 16],
        [0, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 16],
        [0, 2, 14, 16],
        [0, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16],
        [0, 2, 4, 8, 10, 16],
        [0, 2, 4, 6, 8, 10, 12, 13, 14, 15, 16],
        [0, 2, 4, 5, 6, 8, 10, 12, 16],
        [0, 2, 8, 10, 12, 14, 16],
        [0, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16],
        [0, 10, 14],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    ],
    [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [2, 16],
        [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16],
        [0, 2, 6, 8, 14, 16],
        [0, 2, 3, 4, 6, 8, 10, 11, 12, 14, 16],
        [0, 2, 6, 8, 10, 12, 14, 16],
        [0, 2, 4, 6, 8, 10, 12, 14, 16],
        [0, 4, 8, 10, 12, 14, 16],
        [0, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 15, 16],
        [0, 4, 6, 10, 16],
        [0, 2, 4, 6, 8, 10, 11, 12, 13, 14, 16],
        [0, 2, 6, 8, 10, 16],
        [0, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16],
        [0, 2, 4, 8, 10, 12, 16],
        [0, 2, 4, 6, 8, 10, 12, 14, 16],
        [0, 2, 6, 10, 14],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    ]
]

const Numbers = [
    [
        [],
        [],
        [],
        [2, 3, 4, 5, 6],
        [1, 7],
        [1, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [2, 3, 4, 5, 6]
    ],
    [
        [],
        [],
        [],
        [],
        [3],
        [2],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7]
    ],
    [
        [],
        [],
        [],
        [2, 3, 7],
        [1, 6, 7],
        [1, 5, 7],
        [1, 2, 3, 4, 7],
        [2, 3, 6, 7]
    ],
    [
        [],
        [],
        [],
        [2, 6],
        [1, 7],
        [1, 2, 4, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [2, 3, 5, 6]
    ],
    [
        [],
        [],
        [],
        [4, 5],
        [3, 5],
        [2, 5],
        [1, 2, 3, 4, 5, 6, 7],
        [2, 3, 4, 5, 6, 7]
    ],
    [
        [],
        [],
        [],
        [1, 2, 3, 7],
        [1, 4, 7],
        [1, 4, 7],
        [1, 2, 4, 5, 6, 7],
        [1, 2, 5, 6]
    ],
    [
        [],
        [],
        [],
        [1, 2, 3, 4, 5, 6],
        [1, 4, 7],
        [1, 4, 7],
        [1, 2, 4, 5, 6, 7],
        [1, 2, 5, 6]
    ],
    [
        [],
        [],
        [],
        [1, 2],
        [1, 2, 5, 6, 7],
        [1, 4, 5, 6, 7],
        [1, 3],
        [1, 2]
    ],
    [
        [],
        [],
        [],
        [2, 3, 5, 6],
        [1, 4, 7],
        [1, 4, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [2, 3, 5, 6]
    ],
    [
        [],
        [],
        [],
        [2, 3, 6],
        [1, 4, 7],
        [1, 4, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [2, 3, 4, 5, 6]
    ]
]

const Prize = [
    [1, 2],
    [0, 3],
    [0, 1, 2, 3, 4, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 7],
    [0, 3],
    [1, 2]
];