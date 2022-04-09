import { BaseModifier, registerModifier } from "../lib/dota_ts_adapter";

// Base speed modifier -- Could be moved to a separate file
class ModifierSpeed extends BaseModifier {
    // Declare functions
    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.MOVESPEED_ABSOLUTE];
    }

    GetModifierMoveSpeed_Absolute(): number {
        return 300;
    }
}

@registerModifier()
export class modifier_panic extends ModifierSpeed {
    particle?: ParticleID;
    // Set state
    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.COMMAND_RESTRICTED]: true,
        };
    }

    // Override speed given by Modifier_Speed
    GetModifierMoveSpeed_Absolute(): number {
        return 340;
    }

    // Run when modifier instance is created
    OnCreated(): void {
        if (IsServer()) {
            // Think every 0.3 seconds
            const parent = this.GetParent();
            this.particle = ParticleManager.CreateParticle("particles/units/heroes/hero_viper/viper_nethertoxin_debuff.vpcf", ParticleAttachment.ABSORIGIN_FOLLOW, parent);

            this.StartIntervalThink(0.3);
        }
    }
    OnDestroy(): void {
        if (IsServer()) {
            if (this.particle)
                ParticleManager.DestroyParticle(this.particle, true);
        }
    }
    // Called when intervalThink is triggered
    OnIntervalThink(): void {
        const parent = this.GetParent();

        parent.MoveToPosition((parent.GetAbsOrigin() + RandomVector(400)) as Vector);
    }
}
