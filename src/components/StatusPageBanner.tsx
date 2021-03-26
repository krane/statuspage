import { Deployment } from "@krane/common";

import { calculateTimeDiff } from "../utils/time";
import {
  getLastExecutedJob,
  getLastSuccesfullDeploymentRuns,
  getMostRecentTriggeredDeployment,
  hasAllGreenDeployments,
} from "../utils/helpers";

import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

type Props = { deployments: Deployment[] };
export const StatusPageBanner = ({ deployments }: Props) => {
  const lastTriggeredDeployment = getMostRecentTriggeredDeployment(deployments);
  const lastTriggeredDeploymentTimeDiff = calculateTimeDiff(
    getLastExecutedJob(getMostRecentTriggeredDeployment(deployments))
      ?.start_time_epoch
  );
  return (
    <div className="flex px-6 py-4 my-4 rounded-md shadow justify-between">
      <div className="text-left self-center">
        <div className="flex items-center space-x-2">
          {hasAllGreenDeployments(deployments) ? (
            <FaCheckCircle className="text-green-400 text-xl inline" />
          ) : (
            <MdError className="text-red-500 text-2xl inline" />
          )}
          <h1 className="text-2xl font-medium">Status page</h1>
        </div>

        {deployments && deployments.length > 0 && (
          <div className="text-gray-600 mt-1">
            Updated&nbsp;
            <span className="underline text-gray-800 font-medium">
              {lastTriggeredDeployment.config.name}
            </span>
            &nbsp;
            {getLastExecutedJob(lastTriggeredDeployment).status.failure_count >
            0
              ? "with errors"
              : "succesfully"}
            &nbsp;
            {lastTriggeredDeploymentTimeDiff}
          </div>
        )}
      </div>

      <div className="text-right self-center">
        <div className="text-sm text-gray-400">
          <div className="font-bold text-xl text-gray-800">
            {getLastSuccesfullDeploymentRuns(deployments).length}/
            {deployments.length}
          </div>
          &nbsp;Deployments ready
        </div>
      </div>
    </div>
  );
};
