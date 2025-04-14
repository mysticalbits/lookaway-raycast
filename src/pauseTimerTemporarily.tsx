import { CommandArguments, runLookAwayCommand } from "./utils";

interface PauseTemporarilyProps {
  arguments: CommandArguments;
}

export default async function Command(props: PauseTemporarilyProps) {
  await runLookAwayCommand("pause temporarily", "paustemp", "⏸️ Paused timer temporarily", props.arguments);
} 