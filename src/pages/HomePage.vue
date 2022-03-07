<template>
  <div class=""></div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { profileService } from "../services/ProfileService";
import { loadState } from "../utils/LocalStorage";
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
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
