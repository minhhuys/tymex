import { getAssetPath } from "@/core/helpers/assets";

interface INft {
    id: number;
    name: string;
    tier: string;
    price: number;
    theme: string;
    image: string;
    author: {
        name: string;
        avatar: string;
        verified: boolean;
    };
}

const nfts: Array<INft> = [
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "The DJ",
        tier: 'epic',
        price: 2.75,
        theme: 'halloween',
        image: getAssetPath("media/user/nft-1.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Assasin",
        tier: 'common',
        price: 2.75,
        theme: 'halloween',
        image: getAssetPath("media/user/nft-2.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neon Guy",
        tier: 'rare',
        price: 2.75,
        theme: 'halloween',
        image: getAssetPath("media/user/nft-3.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mafia England",
        tier: 'legendary',
        price: 2.75,
        theme: 'halloween',
        image: getAssetPath("media/user/nft-4.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Basketball Girl",
        tier: 'mythic',
        theme: 'xmas',
        price: 2.75,
        image: getAssetPath("media/user/nft-5.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: false
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "The DJ",
        tier: 'epic',
        theme: 'halloween',
        price: 2.75,
        image: getAssetPath("media/user/nft-1.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: false
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Assasin",
        tier: 'common',
        price: 2.75,
        theme: 'newyear',
        image: getAssetPath("media/user/nft-2.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neon Guy",
        tier: 'rare',
        theme: 'xmas',
        price: 2.75,
        image: getAssetPath("media/user/nft-3.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mafia England",
        tier: 'legendary',
        theme: 'halloween',
        price: 2.75,
        image: getAssetPath("media/user/nft-4.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Basketball Girl",
        tier: 'mythic',
        theme: 'xmas',
        price: 2.75,
        image: getAssetPath("media/user/nft-5.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "The DJ",
        tier: 'epic',
        theme: 'newyear',
        price: 2.75,
        image: getAssetPath("media/user/nft-1.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Assasin",
        tier: 'common',
        price: 2.75,
        theme: 'newyear',
        image: getAssetPath("media/user/nft-2.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: false
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neon Guy",
        tier: 'rare',
        price: 2.75,
        theme: 'newyear',
        image: getAssetPath("media/user/nft-3.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mafia England",
        tier: 'legendary',
        theme: 'halloween',
        price: 2.75,
        image: getAssetPath("media/user/nft-4.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Basketball Girl",
        tier: 'mythic',
        theme: 'xmas',
        price: 2.75,
        image: getAssetPath("media/user/nft-5.png"),
        author: {
            name: 'Ghozali_Ghozalu',
            avatar: getAssetPath("media/user/user-avt.png"),
            verified: true
        },
    },

];

export type { INft };

export default nfts;
