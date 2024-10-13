import type { KVNamespace } from "@cloudflare/workers-types/experimental/index.js";

/**
 * @module Worker
 *
 */
export default interface Interface {
	Token: string;
	Repository: KVNamespace;
}
