export interface TerminalExecutionResult {
  command: string;
  output?: string;
  exitCode: number;
}

export interface TerminalEngine {
  execute(
    command: string,
  ): TerminalExecutionResult;

  reset(): void;
}