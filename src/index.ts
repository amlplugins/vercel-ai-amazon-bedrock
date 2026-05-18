/**
 * @amlplugins/vercel-ai-amazon-bedrock
 *
 * Thin namespaced re-export of the native @ai-sdk/amazon-bedrock SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK Amazon Bedrock provider — Anthropic/Llama/Mistral/Titan on AWS Bedrock Converse and Runtime.
 */

import * as _sdk from "@ai-sdk/amazon-bedrock";
export * from "@ai-sdk/amazon-bedrock";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
