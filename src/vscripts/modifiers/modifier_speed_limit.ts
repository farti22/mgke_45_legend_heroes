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
export class modifier_speed_limit extends ModifierSpeed {
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
}