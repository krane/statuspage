import { Deployment, Job } from "@krane/common";

// filters deployments, returning internal deployments
export function getInternalDeployments(deployments: Deployment[]) {
  return deployments.filter((d) => d.config.internal);
}

// filters deployments, returning non-internal deployments
export function getNonInternalDeployments(deployments: Deployment[]) {
  return deployments.filter((d) => !d.config.internal);
}

// returns the latest triggered deployment
export function getMostRecentTriggeredDeployment(deployments: Deployment[]) {
  return deployments.sort(
    (dA, dB) =>
      getLastExecutedJob(dB).start_time_epoch -
      getLastExecutedJob(dA).start_time_epoch
  )[0];
}

// returns true if the latest deployment run for each deployment has succeeded
export function hasAllGreenDeployments(deployments: Deployment[]) {
  return (
    getLastSuccesfullDeploymentRuns(deployments).length == deployments.length
  );
}

// returns the deployment that where last succesfully triggered
export function getLastSuccesfullDeploymentRuns(deployments: Deployment[]) {
  return deployments.filter((d) =>
    d.jobs[0].status.failure_count > 0 ? false : true
  );
}

// returns the last executed job for a deployment
export function getLastExecutedJob(deployment: Deployment) {
  const jobs = sortJobsByMostRecent(deployment?.jobs);
  if (jobs) return jobs[0];
}

// sortJobsByMostRecent returns a deployments jobs sorted by most recent
export function sortJobsByMostRecent(jobs: Job[]) {
  return jobs?.sort(
    (jobA, jobB) => jobB.start_time_epoch - jobA.start_time_epoch
  );
}
