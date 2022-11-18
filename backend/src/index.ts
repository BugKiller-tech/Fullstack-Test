// run `node index.js` in the terminal

// console.log(`Hello Node.js`, process);
import axios from "axios";

import servers from "./servers.json";
import { ServerModel, ServerModelWithStatus } from "./models";

// Sorting Servers by its priority so that we can get lowest healthy server easily
const sortedServers: ServerModel[] = servers.sort(
  (server1: ServerModel, server2: ServerModel) =>
    server1.priority - server2.priority
);

export const findServer = function () {
  return new Promise<ServerModel>(async (resolve, reject) => {
    const promises: Promise<ServerModelWithStatus>[] = [];
    for (const [serverIndex, server] of sortedServers.entries()) {
      // In case we use Promise.allSettled, we can just push axios.get into the array. promises.push(axios.get(server.url));
      // In case we use Promise.all. we need to avoid reject to be called to check all servers.
      promises.push(
        new Promise<ServerModelWithStatus>(async (resolve) => {
          try {
            const response = await axios.get(server.url, { timeout: 5000 });
            resolve({
              ...server,
              serverIndex,
              healthy:
                response.status >= 200 && response.status <= 209 ? true : false,
            });
          } catch (error) {
            resolve({
              ...server,
              serverIndex,
              healthy: false,
            });
          }
        })
      );
    }

    Promise.all(promises) // another way is to use Promise.allSettled
      .then((values: ServerModelWithStatus[]) => {
        const healthyServer = values.find((server) => server.healthy); // get first healthy server. This should work because we've already sorted the server by priority.
        if (healthyServer) {
          resolve(sortedServers[healthyServer.serverIndex]);
        } else {
          reject("Not found");
        }
      })
      .catch((error) => {
        console.log(error);
        reject("Not found");
      });
  });
};
