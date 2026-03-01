/**
 * Telemetry — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { TelemetryCollectorOrchestrator } from "@webwaka/organelle-telemetry-collector";
import { AuditEmitterOrchestrator } from "@webwaka/organelle-audit-emitter";

export { TelemetryCollectorOrchestrator } from '@webwaka/organelle-telemetry-collector';
export { AuditEmitterOrchestrator } from '@webwaka/organelle-audit-emitter';

/**
 * Telemetry Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class TelemetryComposition {
  private telemetryCollectorOrchestrator: TelemetryCollectorOrchestrator;
  private auditEmitterOrchestrator: AuditEmitterOrchestrator;

  constructor() {
    this.telemetryCollectorOrchestrator = new TelemetryCollectorOrchestrator();
    this.auditEmitterOrchestrator = new AuditEmitterOrchestrator();
  }
}

export * from "./types";
