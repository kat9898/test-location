import { makeAutoObservable, runInAction, makeObservable } from "mobx";
import data from './data.json';


class Store {
    locations = [];
    environments = [];
    servers = [];

    fetchData = async () => {
        runInAction(() => {
          this.locations = data.locations;
          this.envs = data.envs;
          this.servers = data.servers;
        });
      };

    constructor() {
        makeAutoObservable(this)
    }
}

export default new Store()