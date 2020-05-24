import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "http://localhost:3000/home/test",
  });
}
