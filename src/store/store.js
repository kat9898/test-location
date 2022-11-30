import { observable, action } from "mobx";
import data from './data.json';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createAsyncOp() {
  const locStore = observable({
    locations: [],
    environments: [],
    servers: [],
    loading: false,
    fetch: action(async function() {
      try {
        this.loading = true;
        this.locations = data.locations;
        this.environments = data.environments;
        this.servers = data.servers;
        await sleep(3000);
      } catch (error) {
        console.error("fetch error ", error);
        throw error;
      } finally {
        this.loading = false;
      }

    })
  });
  return locStore;
}

export const asyncOp = createAsyncOp();
 