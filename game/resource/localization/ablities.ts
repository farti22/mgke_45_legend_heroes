import { AbilityLocalization } from "~generator/localizationInterfaces";

export const items : Array<AbilityLocalization> = [
    {
        ability_classname: "sysko_dolzen",
        name: "Ты мне должен!",
        description: "Алексей сообщает противнику о долге, вызавая у него огромный спектр негативных эмоций, которые стимулируют мощную паническую атаку ",
        ability_specials:
        [
            {
                ability_special: "duration",
                text: "Длительность паники:"
            },
        ]
    },
    {
        ability_classname: "bounty_hunter_jinada",
        name: "Где мои деньги?",
        description: "Невераятный ум Алексея вспоминает о долге недруга, взыскивая с него долг."
    },
    {
        ability_classname: "sysko_run",
        name: "3 километра",
        description: "В свои лучшие годы Алексей мог пробежать 3км за 3 секунда, сейчас результаты ухудшились, но Алексей до сих пор достигает невероятных скоростей.",
        ability_specials:
        [
            {
                ability_special: "bonus_speed",
                text: "Разгон:"
            },
        ]
    },
]


