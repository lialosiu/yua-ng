import {IGithubRepoOwner} from "./IGithubRepoOwner";
export interface IGithubRepo {
    id: number;
    name: string;
    full_name: string;
    owner: IGithubRepoOwner;
}
