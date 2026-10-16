interface succeeded {
  status: "succeeded";
  response: string;
}

interface failed {
  status: "failed";
  errMsg: string;
}

interface running {
  status: "running";
  runtime: number;
}

interface cancelled {
  status: "cancelled";
}

type FlowStatus = succeeded | failed | running | cancelled;

function describeRun(run: FlowStatus): string {
  switch (run.status) {
    case "succeeded":
      return run.response;
    case "failed":
      return run.errMsg;
    case "running":
      return `flow has been running for ${run.runtime} minutes`;
    case "cancelled":
      return "flow was cancelled";
    default:
      const checkedAllCases: never = run;
      return checkedAllCases;
  }
}
