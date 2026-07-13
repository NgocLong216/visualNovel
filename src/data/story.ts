import classic from "../assets/backgrounds/CoDienJames.png";

import James from "../assets/characters/James.png";
import Alexei from "../assets/characters/Alexei.png";

export const story = [
    {
        id: 1,

        speaker: "James",

        nextId: 2,

        text: "Xin chào!",

        background: classic,

        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
        ],
    },

    {
        id: 2,

        speaker: "Alexei",

        nextId: 3,

        text: "Chào James.",

        background: classic,

        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
            {
                id: "Alexei",
                image: Alexei,
                position: "left",
            },
        ],
    },

    {
        id: 3,

        speaker: "James",

        nextId: 4,

        text: "Chào cc.",

        background: classic,

        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
            {
                id: "Alexei",
                image: Alexei,
                position: "left",
            },
        ],
    },

    {
        id: 4,
        speaker: "James",
        text: "Nếu một người lạ rủ bạn thử ma túy, bạn sẽ làm gì?",
        background: classic,
        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
        ],

        choices: [
            {
                text: "Từ chối ngay",
                nextId: 5,
                score: 10,
            },

            {
                text: "Im lặng bỏ đi",
                nextId: 6,
                score: 5,
            },

            {
                text: "Thử một lần",
                nextId: 7,
                score: 0,
            },
        ],
    },

    {
        id: 5,
        speaker: "James",
        nextId: 8,
        text: "Đúng rồi! Đây là lựa chọn an toàn.",
        background: classic,
        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
        ],
    },

    {
        id: 6,
        speaker: "James",
        nextId: 8,
        text: "Ít nhất bạn cũng đã tránh được nguy hiểm.",
        background: classic,
        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
        ],
    },

    {
        id: 7,
        speaker: "James",
        nextId: 8,
        text: "Đó là một quyết định rất nguy hiểm.",
        background: classic,
        characters: [
            {
                id: "James",
                image: James,
                position: "right",
            },
        ],
    },

    {
        id: 8,
        speaker: "Alexei",
        text: "nahh",
        background: classic,
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "left",
            },
        ],
    },
];