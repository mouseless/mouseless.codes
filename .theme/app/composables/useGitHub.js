import { joinURL } from "ufo";

export default function() {
  const urlBase = "https://api.github.com";

  async function getPullRequests(repository, state = "all", perPage = "3") {
    const result = await $fetch(
      joinURL(urlBase, "/repos/mouseless/", repository, "/pulls"),
      {
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        },
        query: {
          state,
          per_page: 10
        }
      }
    );

    return result.filter(element => element?.user.type !== "Bot").slice(0, perPage);
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
    ).catch(() => null);
  };

  return {
    getPullRequests,
    getPeople
  };
}
