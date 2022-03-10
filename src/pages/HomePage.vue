<template>
  <XboxProfile :xblProfile="xblProfile" />
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { profileService } from "../services/ProfileService";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await profileService.getXblProfile();
        await profileService.getSteamProfile();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.log(error);
      }
    });
    return {
      xblProfile: computed(() => AppState.xblProfile),
      steamProfile: computed(() => AppState.steamProfile),
    };
  },
};
</script>

<style scoped lang="scss">
</style>
