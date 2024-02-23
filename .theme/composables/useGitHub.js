import { joinURL } from "ufo";

export default function() {
  const urlBase = "https://api.github.com";

  async function getPullRequests(repository, state = "all", perPage = "3") {
    return await $fetch(
      joinURL(urlBase, "/repos/mouseless/", repository, "/pulls"),
      {
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        },
        query: {
          state,
          per_page: perPage
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
    getPullRequests,
    getPeople
  };
}
