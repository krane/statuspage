import { Deployment } from "@krane/common";
import { GreenCheckLogo, WarningLogo } from "./global/Icons";

import { calculateTimeDiff } from "../utils/time";
import {
  getLastExecutedJob,
  getLastSuccesfullDeploymentRuns,
  getMostRecentTriggeredDeployment,
  hasAllGreenDeployments,
} from "../utils/krane";

type Props = { deployments: Deployment[] };
export const StatusPageBanner = ({ deployments }: Props) => {
  const lastTriggeredDeployment = getMostRecentTriggeredDeployment(deployments);
  const lastTriggeredDeploymentTimeDiff = calculateTimeDiff(
    getLastExecutedJob(getMostRecentTriggeredDeployment(deployments))
      ?.start_time_epoch
  );
  return (
    <div className="flex p-6 my-4 rounded-md shadow space-x-4 items-start">
      {hasAllGreenDeployments(deployments) ? (
        <GreenCheckLogo width="8" />
      ) : (
        <WarningLogo width="8" />
      )}

      <div className="space-y-1/2 text-left">
        <h1 className="text-2xl font-medium">Status page</h1>

        {deployments && deployments.length > 0 && (
          <div className="space-y-1">
            <div className="text-sm text-gray-500 mt-1">
              Updated&nbsp;
              <span className="font-bold">
                {lastTriggeredDeployment.config.name}
              </span>
              &nbsp;
              {getLastExecutedJob(lastTriggeredDeployment).status
                .failure_count > 0
                ? "with errors"
                : "succesfully"}
              &nbsp;
              {lastTriggeredDeploymentTimeDiff}
            </div>

            <div className="flex text-xs text-gray-400">
              <div className="font-bold">
                {getLastSuccesfullDeploymentRuns(deployments).length}/
                {deployments.length}
              </div>
              &nbsp;deployments ready
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
