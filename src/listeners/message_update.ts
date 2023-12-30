import { Event } from "@lilybird/handlers";
import { PartialMessage } from "lilybird";

export default {
  event: "messageUpdate",
  run: async (message) => {
    if (handleBunOnlyChannel(message)) return;
  },
} satisfies Event<"messageUpdate">;

function handleBunOnlyChannel(message: PartialMessage): boolean {
  if (message.channelId !== process.env.BUN_ONLY_CHANNEL_ID) return false;

  if (message.content !== "bun") {
    message.delete();
    return true;
  }

  message.react("🐰");
  return true;
}
