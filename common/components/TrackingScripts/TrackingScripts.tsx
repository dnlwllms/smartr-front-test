import Script, { ScriptProps } from "next/script";
import { Fragment } from "react";

export type Props = {
  strategy?: ScriptProps["strategy"];
  gaId?: string;
};

export default function TrackingScripts({
  strategy = "beforeInteractive",
  gaId,
}: Props) {
  return (
    <Fragment>
      {gaId && (
        <Fragment>
          <Script
            async
            strategy={strategy}
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script async strategy={strategy} id="config-ga">
            {`
  const gaId = "${gaId}";
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", gaId);
`}
          </Script>
        </Fragment>
      )}
    </Fragment>
  );
}
