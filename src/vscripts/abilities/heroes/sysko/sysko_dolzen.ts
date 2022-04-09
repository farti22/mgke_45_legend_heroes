import { BaseAbility, registerAbility } from "../../../lib/dota_ts_adapter";

@registerAbility()
export class sysko_dolzen extends BaseAbility {
    particle?: ParticleID;
    //projectile_nethertoxin: string = "particles/units/heroes/hero_viper/viper_nethertoxin_debuff.vpcf";

    OnSpellStart() {
        const target = this.GetCursorTarget();
        const caster =  this.GetCaster();
        let duration = this.GetSpecialValueFor("duration");

        if (!target) return;
        target.AddNewModifier(caster, this, "modifier_panic", { duration });
        target.EmitSound("Hero_Dark_Seer.Ion_Shield_Start");
    }
}
