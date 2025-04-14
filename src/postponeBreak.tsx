import { CommandArguments, runLookAwayCommand } from "./utils";

interface PostponeBreakProps {
  arguments: CommandArguments;
}

export default async function Command(props: PostponeBreakProps) {
  await runLookAwayCommand("postpone break", "pstpnbrk", "⏳ Postponed break", props.arguments);
} 