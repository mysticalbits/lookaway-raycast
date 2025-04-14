/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `startNextBreak` command */
  export type StartNextBreak = ExtensionPreferences & {}
  /** Preferences accessible in the `startLongBreak` command */
  export type StartLongBreak = ExtensionPreferences & {}
  /** Preferences accessible in the `pauseTimer` command */
  export type PauseTimer = ExtensionPreferences & {}
  /** Preferences accessible in the `pauseTimerTemporarily` command */
  export type PauseTimerTemporarily = ExtensionPreferences & {}
  /** Preferences accessible in the `postponeBreak` command */
  export type PostponeBreak = ExtensionPreferences & {}
  /** Preferences accessible in the `resumeTimer` command */
  export type ResumeTimer = ExtensionPreferences & {}
  /** Preferences accessible in the `openSettings` command */
  export type OpenSettings = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `startNextBreak` command */
  export type StartNextBreak = {}
  /** Arguments passed to the `startLongBreak` command */
  export type StartLongBreak = {}
  /** Arguments passed to the `pauseTimer` command */
  export type PauseTimer = {}
  /** Arguments passed to the `pauseTimerTemporarily` command */
  export type PauseTimerTemporarily = {
  /** Duration (seconds) */
  "duration": string
}
  /** Arguments passed to the `postponeBreak` command */
  export type PostponeBreak = {
  /** Duration (seconds) */
  "duration": string
}
  /** Arguments passed to the `resumeTimer` command */
  export type ResumeTimer = {}
  /** Arguments passed to the `openSettings` command */
  export type OpenSettings = {}
}

