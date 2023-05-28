export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags?: any;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  abilities: Ability[];
  voiceLine: VoiceLine;
}

interface VoiceLine {
  minDuration: number;
  maxDuration: number;
  mediaList: MediaList[];
}

interface MediaList {
  id: number;
  wwise: string;
  wave: string;
}

interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}
