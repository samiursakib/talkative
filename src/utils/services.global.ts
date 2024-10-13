import constants from "./constants";
import { createId } from "./helpers.global";

const VIDEOSDK_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkOWRlZDI0NS03Yjk1LTQ4OGYtOTBiYy1mYTgzMjkzOGIxNGEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyODcyMzQzMywiZXhwIjoxNzYwMjU5NDMzfQ.spg0P5lr8_o5R5FRE9tzWczCBnxnvekU22L8cS7cAZk";

export const getRooms = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: VIDEOSDK_TOKEN,
        "Content-Type": "application/json",
      },
    };
    const url = constants.getRooms;
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getRoom = async (roomId: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: VIDEOSDK_TOKEN,
        "Content-Type": "application/json",
      },
    };
    const url = `${constants.getRoom}/${roomId}`;
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createRoom = async () => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: VIDEOSDK_TOKEN,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   customRoomId: createId(24),
      //   webhook: "see example",
      //   autoCloseConfig: "see example",
      //   autoStartConfig: "see example",
      // }),
    };
    const url = constants.createRoom;
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deactivateRoom = async (roomId: string) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: VIDEOSDK_TOKEN,
        "Content-Type": "application/json6",
      },
      body: JSON.stringify({
        roomId,
      }),
    };
    const url = constants.deactivateRoom;
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};
