import { AppState } from "../AppState";
import { SteamProfile } from "../models/SteamProfile";
import { XblProfile } from "../models/XblProfile";


export function saveState() {
  localStorage.setItem('Profiles', JSON.stringify({
    xblProfile: AppState.xblProfile,
    steamProfile: AppState.steamProfile
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Profiles'))
  if (data != null) {
    AppState.xblProfile = new XblProfile(data.xblProfile)
    AppState.steamProfile = new SteamProfile(data.steamProfile)
  }
}
