import { joinURL } from "ufo";

export default function() {
  const urlBase = "https://api.github.com";

  async function getActivePullRequests(repository) {
    return await $fetch(
      joinURL(urlBase, "/repos/mouseless/", repository, "/pulls"),
      {
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        },
        query: {
          state: "open"
        }
      }
    );
  };

  async function getPeople() {
    return await $fetch(
      joinURL(urlBase, "/orgs/mouseless/members"),
      {
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
  };

  return {
    getActivePullRequests,
    getPeople
  };
}
