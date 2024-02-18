import React, { useEffect, useRef } from "react";
import { WebView } from "react-native-webview";

const id = "sitzfeldt:Kombielement";

const Model3D = () => {
  const roomleConfiguratorUrl = `https://your-website-containing-roomle-configurator.com?model_id=${id}`;
  const webViewRef = useRef(null);

  useEffect(() => {
    const initRoomle = `
      (async () => {
        const options = {
          id: "${id}",
          elements: {
            bottom_bar: false,
          },
          buttons: {
            addon: false,
            partlist: false,
          },
        };

        await RoomleConfiguratorApi.createPlanner(
          "demoConfigurator",
          document.getElementById("roomle-container"),
          options
        );
      })();
    `;

    const injectScript = `
      setTimeout(function() {
        ${initRoomle}
      }, 2000); // Wait for the WebView to fully load
    `;

    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(injectScript);
    }
  }, []);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: roomleConfiguratorUrl }}
      style={{ flex: 1 }}
    />
  );
};

export default Model3D;
