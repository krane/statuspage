import Head from "next/head";
import { useState } from "react";
import { useRefreshProps } from "../hooks/useRefreshProps";
import { KraneClient, Deployment } from "@krane/common";

import Toggle from "../components/global/Toggle";
import Alert from "../components/global/Alert";
import DeploymentsList from "../components/DeploymentStatusList";

type Props = {
  deployments: Deployment[];
  error: Error;
};

export default function IndexPage({ deployments, error }: Props) {
  useRefreshProps(60000);
  const [showInternalDeployments, setShowInternalDeployments] = useState(false);
  const internalDeployments = deployments.filter((d) => d.config.internal);
  const nonInternalDeployments = deployments.filter((d) => !d.config.internal);
  return (
    <>
      <Head>
        <title>System status</title>
      </Head>

      <div className="container m-auto max-w-screen-sm">
        <div className="text-center py-10">
          <h1 className="text-lg font-medium">Status page</h1>

          {error && (
            <div className="mt-4">
              <Alert
                type="error"
                message={`${error} - An error like this usually indicates auth issues or dns issues when requesting data from Krane`}
              />
            </div>
          )}
        </div>

        <div className="mb-4 flex justify-end">
          <Toggle
            onClick={setShowInternalDeployments}
            selected={showInternalDeployments}
          />
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

  try {
    const client = new KraneClient(endpoint, token);
    const deployments = await client.getDeployments();
    return { props: { deployments } };
  } catch (e) {
    return { props: { deployments: [], error: e } };
  }
}
