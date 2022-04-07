import { AbilityLocalization } from "~generator/localizationInterfaces";

export const items : Array<AbilityLocalization> = [
    {
        ability_classname: "bounty_hunter_jinada",
        name: "Где мои деньги?",
        description: "Алексей забирает долг"
    },
    {
        ability_classname: "sysko_run",
        name: "3 километра",
        description: "!Алексей достигает невероятной скорости",
        ability_specials:
        [
            {
                ability_special: "bonus_speed",
                text: "Разгон"
            },
        ]
    },
]


