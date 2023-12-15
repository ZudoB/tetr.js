import User from "../../user/User";
import WebSocketManager from "../WebsocketManager";

export default async function ({ client }: WebSocketManager, { data }: any) {
  client.me?.emit("invite", {
    author: await User.fetch(client, data.sender),
    room: data.roomid,
  });
}
