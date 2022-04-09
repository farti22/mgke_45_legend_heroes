import { BaseAbility, registerAbility } from "../../../lib/dota_ts_adapter";

@registerAbility()
export class sysko_3km extends BaseAbility {
    particle?: ParticleID;


    OnSpellStart() {
        const target = this.GetCursorTarget();
        const caster =  this.GetCaster();
        const slow = this.GetSpecialValueFor("slow");
        const radius = 300;
        let duration = this.GetSpecialValueFor("duration");

        if (!target) return;
        target.AddNewModifier(caster, this, "modifier_panic", { duration });
        target.EmitSound("Hero_Dark_Seer.Ion_Shield_Start");

    }
}
