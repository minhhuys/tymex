<template>
<!--begin::Row-->
<div class="row g-8 g-xl-10 mb-5 mb-xl-10">
  <!--begin::Col-->
  <div class="col-xl-3">
    <MixedWidget5 widget-classes="mb-xl-8 h-md-100" chart-color="primary" chart-height="150">
    </MixedWidget5>
  </div>
  <!--end::Col-->

  <!--begin::Col-->
  <div class="col-xl-9">
    <ul class="nav nav-stretch fs-5 fw-semobold nav-line-tabs nav-line-tabs-2x border-transparent mb-5" role="tablist"
      id="nft_filter">
      <li class="me-5 rounded mb-5" :class="{ 'active': activeTab === tier.id }" role="presentation"
        v-for="tier in tiers" :key="tier.id">
        <a class="nav-link text-white fw-bold" data-bs-toggle="tab" role="tab" :href="`#tab_content_${tier.id}`"
          @click="setActiveTab(tier.id)">
          {{ tier.name }}
        </a>
      </li>
    </ul>
    <div class="tab-content pe-3" :class="{ 'scroll-y mh-1000px mh-lg-1000px': data.length }">
      <div id="nft_item_card">
        <div class="row gx-xl-8 mb-5 mb-xl-8" v-if="data.length">
          <div class="col-md-3 col-12 mb-8" v-for="nft in data" :key="nft.id">
            <div class="card card-borderless text-white hover-scale cursor-pointer">
              <!--begin::Body-->
              <div class="card-body pb-0 pt-5 px-5">
                <!--begin::Post-->
                <div class="mb-5">
                  <!--begin::Image-->
                  <div class="bgi-no-repeat bgi-size-cover rounded h-250px mb-2 position-relative"
                    :style="backgroundNft(nft.tier)">
                    <img :src="nft.image" class="img-fluid position-absolute bottom-0" alt="">

                    <div class="position-absolute top-0 nft-variant w-100 p-3">
                      <div class="d-flex justify-content-between">
                        <div class="nft-tier">
                          <p class="mb-0 text-white py-2 px-4 fw-bold">{{ nftTierName(nft.tier) }}</p>
                        </div>
                        <div class="nft-favorite cursor-pointer">
                          <KTIcon icon-name="heart" icon-class="fs-2 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--end::Image-->
                </div>
                <!--end::Post-->

                <!--begin::Description-->
                <div class="d-flex justify-content-between mb-5">
                  <p class="mb-0 fs-4 fw-bold">{{ nft.name }}</p>

                  <div class="fs-6">
                    <img :src="getAssetPath('media/svg/coins/logos_ethereum.svg')" alt="">
                    {{ nft.price }} ETH
                  </div>
                </div>
                <!--end::Description-->

                <!-- begin::author -->
                <div class="nft-author mb-5 d-flex align-items-center">
                  <div class="position-relative">
                    <img :src="nft.author.avatar" class="img-fluid" width="32" height="32" alt="">
                    <img class="position-absolute end-0 bottom-0" :src="nft.author.verified
                      ? getAssetPath('media/user/verify-green.png')
                      : getAssetPath('media/user/verify-red.png')" width="12" height="12" alt="">
                  </div>
                  <p class="mb-0 ms-3">{{ nft.author.name }}</p>
                </div>
                <!-- end::author -->
              </div>
              <!--end::Body-->
            </div>
          </div>
        </div>
        <div v-else>
          <KTModalCard title="Not found any items" description="Try to use another Tier to find the NFT"
            :image="getIllustrationsPath('8.png')" :isShowBtn="false" modal-id="kt_modal_upgrade_plan"></KTModalCard>
        </div>
      </div>
    </div>
  </div>
  <!--end::Col-->
</div>
<!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import { tiers } from "@/core/data/tiers";
import KTModalCard from "@/components/cards/Card.vue";
import { useNftStore } from "@/stores/nft";

export default defineComponent({
  name: "main-dashboard",
  components: {
    MixedWidget5,
    KTModalCard
  },

  setup() {
    const activeTab = ref<string>('all')
    const store = useNftStore()
    const data = ref(store.nftsList)

    // const initData = (payload: any) => {
    //   store.getListNFT(payload)
    //   data.value = store.nftsList
    // }

    const setActiveTab = (value: string) => {
      activeTab.value = value

      if (value === 'all') {
        return store.getListNFT({})
      }

      store.getListNFT({ tier: value })
      // nftsData.value = nftsData.value.filter(e => e.tier === value)
    }

    const nftTierName = (tierId: string) => {
      let foundTier = tiers.find(e => e.id === tierId)
      if (foundTier) {
        return foundTier.name
      }
      return ""
    }

    const backgroundNft = (tierId: string) => {
      switch (tierId) {
        case 'common': {
          return 'background-image: linear-gradient(to right, rgba(73, 221, 129, 1), rgba(34, 180, 198, 1));'
        }

        case 'rare': {
          return 'background-image: linear-gradient(to right, rgba(67, 166, 246, 1), rgba(88, 104, 243, 1));'
        }

        case 'epic': {
          return 'background-image: linear-gradient(to right, rgba(221, 90, 254, 1), rgba(99, 102, 241, 1))'
        }

        case 'legendary': {
          return 'background-image: linear-gradient(to right, rgba(254, 149, 90, 1), rgba(241, 218, 99, 1))'
        }

        case 'mythic': {
          return 'background-image: linear-gradient(to right, rgba(254, 90, 90, 1), rgba(241, 99, 210, 1))'
        }
      }
    }


    onMounted(() => {
      store.getListNFT({})
    })

    watch(() => store.nftsList, (newVal) => {
      data.value = newVal
    })


    return {
      tiers,
      data,
      activeTab,

      setActiveTab,
      getAssetPath,
      nftTierName,
      backgroundNft,
      // initData,
      getIllustrationsPath
    }
  }
});
</script>


<style lang="scss" scoped>
/* Track */

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #777777;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: #777777;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #ffcc21;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffcc21;
}

.tab-content {
  overflow-x: hidden;
}

#nft_filter {
  li {
    background: linear-gradient(91.47deg, rgba(218, 69, 143, 0.4) -6%, rgba(218, 52, 221, 0.4) 113.05%);

    &.active {
      background: linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%);
    }
  }
}

#nft_item_card {
  .card {
    background: rgba(58, 56, 65, 0.6);

    .nft-tier {
      background: rgba(49, 59, 69, 0.5);
      border-radius: 4px;
    }
  }

}
</style>
