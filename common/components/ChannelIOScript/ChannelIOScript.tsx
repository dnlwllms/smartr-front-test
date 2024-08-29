import Script, { ScriptProps } from "next/script";

export type Props = {
  strategy?: ScriptProps["strategy"];
};

export default function ChannelIOScript({
  strategy = "beforeInteractive",
}: Props) {
  return (
    <Script id="channel-io" strategy={strategy}>
      {`
(function() {
  var w = window;
  var ch = function() {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function(args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
      if (w.ChannelIOInitialized) {
          return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
  }
  if (document.readyState === 'complete') {
      l();
  } else if (window.attachEvent) {
      window.attachEvent('onload', l);
  } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
  }
})();

ChannelIO('boot', {
    "pluginKey": "8231c53e-480d-4aa7-aef3-5985d123a5f5",
    "memberId": "",
    "tags": "",
    "profile": {
        "name": "",
        "mobileNumber": "",
        "memberId": "",
        "description": "",
    }
});
`}
    </Script>
  );
}
