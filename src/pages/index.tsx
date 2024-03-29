import Head from "next/head";
import { useState } from "react";
import { useRefreshProps } from "../hooks/useRefreshProps";
import { KraneClient, Deployment } from "@krane/common";

import Toggle from "../components/global/Toggle";
import Alert from "../components/global/Alert";
import Header from "../components/global/Header";
import { DeploymentsList } from "../components/DeploymentList";
import { StatusPageBanner } from "../components/StatusPageBanner";
import {
  getInternalDeployments,
  getNonInternalDeployments,
} from "../utils/helpers";

type Props = {
  deployments: Deployment[];
  error: Error;
};

export default function IndexPage({ deployments, error }: Props) {
  useRefreshProps(60000);
  const [showInternalDeployments, setShowInternalDeployments] = useState(false);
  const internalDeployments = getInternalDeployments(deployments);
  const nonInternalDeployments = getNonInternalDeployments(deployments);
  return (
    <>
      <Head>
        <title>Status page</title>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Header />

      <div className="m-auto max-w-screen-md flex flex-col">
        <div className="text-center my-2">
          <StatusPageBanner deployments={nonInternalDeployments} />

          {error && (
            <div className="mt-4">
              <Alert
                type="error"
                message={`${error} - An error like this usually indicates auth issues or dns issues when requesting data from Krane`}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <div className="mb-4 flex justify-end items-center space-x-3">
            <div className="font-medium text-gray-800">Active Deployments</div>
          </div>

          <div className="mb-4 flex justify-end items-center space-x-3">
            <div className="text-sm text-gray-400">
              Show internal deployments
            </div>
            <Toggle
              onClick={setShowInternalDeployments}
              selected={showInternalDeployments}
            />
          </div>
        </div>

        {showInternalDeployments && internalDeployments.length == 0 && (
          <Alert
            type="error"
            message={`There are no Krane internal deployments currently running. This usually indicates an issue with the Krane proxy and deployments are not being routed properly.`}
          />
        )}

        {!showInternalDeployments && nonInternalDeployments.length == 0 && (
          <Alert
            type="neutral"
            message="There are no any active deployments. To get started visit → https://krane.sh"
          />
        )}

        {deployments && deployments.length > 0 && (
          <DeploymentsList
            deployments={
              showInternalDeployments
                ? internalDeployments
                : nonInternalDeployments
            }
          />
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const endpoint = process.env.KRANE_ENDPOINT;
  const token = process.env.KRANE_TOKEN;
  const client = new KraneClient(endpoint, token);

  try {
    console.log(`Fetching deployments from ${endpoint}...`);
    const deployments = await client.getDeployments();
    return { props: { deployments } };
  } catch (e) {
    return { props: { deployments: [], error: e } };
  }
}
