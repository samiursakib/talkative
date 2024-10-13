export type RoomType = {
  webhook: {
    events: [];
  };
  autoCloseConfig: { type: string };
  apiKey: string;
  disabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  roomId: string;
  links: {
    get_room: string;
    get_session: string;
  };
  user: {
    name: string;
    email: string;
    discontinuedReason: null;
    id: string;
  };
  id: string;
};
