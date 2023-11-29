import { ref } from "vue";
import { defineStore } from "pinia";
import type { INft } from "@/core/data/nfts";
import nfts from "@/core/data/nfts"

interface Payload {
    tier?: string;
    price?: string;
    time?: string;
    query?: string;
}

export const useNftStore = defineStore("nft", () => {
    const nftsData = ref<Array<INft>>(nfts);
    const nftsList = ref<any>([])

    const getListNFT = (payload: Payload) => {
        if (Object.keys(payload).length === 0) {
            return nftsList.value = nftsData.value
        }


        if (payload.time) delete payload.time
        if (payload.price) delete payload.price

        let foundData = nftsData.value.filter(item => {
            return Object.entries(payload).every(([key, value]) => {
                if (typeof value === 'function') {
                    return value(item[key]);
                } else {
                    return item[key] === value;
                }
            });
        });

        foundData.length ? nftsList.value = foundData : nftsList.value = []
    }

    const searchByName = (query: string) => {
        let foundData = nftsData.value.filter(e => e.name.toLowerCase().includes(query.toLocaleLowerCase()))
        foundData.length ? nftsList.value = foundData : nftsList.value = []
    }

    return {
        nftsData,
        nftsList,
        getListNFT,
        searchByName
    }

})