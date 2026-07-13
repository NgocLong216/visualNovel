import type { EndingData } from "../types/Ending";

export const endings = {
  alexei: {
    good: {
      title: "Alexei - True Ending",
      description:
        "Alexei đã từ chối cám dỗ và lựa chọn con đường đúng đắn. Cậu trở thành tấm gương cho những người xung quanh.",
    },
    normal: {
      title: "Alexei - Normal Ending",
      description:
        "Alexei đã vượt qua phần lớn thử thách nhưng vẫn còn nhiều điều cần học để bảo vệ bản thân.",
    },
    bad: {
      title: "Alexei - Bad Ending",
      description:
        "Alexei đưa ra những quyết định sai lầm và phải đối mặt với hậu quả đáng tiếc.",
    },
  },

  james: {
    good: {
      title: "James - True Ending",
      description:
        "James đã đủ dũng cảm nói không với ma túy và giúp bạn bè tránh xa những cám dỗ.",
    },
    normal: {
      title: "James - Normal Ending",
      description:
        "James đã có những lựa chọn đúng nhưng vẫn còn thiếu sự quyết đoán trong một số tình huống.",
    },
    bad: {
      title: "James - Bad Ending",
      description:
        "James bị cuốn vào những quyết định sai lầm và đánh mất nhiều cơ hội trong cuộc sống.",
    },
  },

  minho: {
    good: {
      title: "Minho - True Ending",
      description:
        "Minho đã bảo vệ được bản thân và truyền cảm hứng cho những người xung quanh.",
    },
    normal: {
      title: "Minho - Normal Ending",
      description:
        "Minho đã tránh được nguy hiểm nhưng vẫn cần thêm kiến thức và kỹ năng ứng phó.",
    },
    bad: {
      title: "Minho - Bad Ending",
      description:
        "Minho không nhận ra những nguy cơ và phải gánh chịu hậu quả từ lựa chọn của mình.",
    },
  },

  vietquoc: {
    good: {
      title: "Việt Quốc - True Ending",
      description:
        "Việt Quốc đã chứng minh rằng sự kiên định là chìa khóa để vượt qua mọi cám dỗ.",
    },
    normal: {
      title: "Việt Quốc - Normal Ending",
      description:
        "Việt Quốc đã vượt qua một số thử thách nhưng vẫn còn những bài học cần hoàn thiện.",
    },
    bad: {
      title: "Việt Quốc - Bad Ending",
      description:
        "Việt Quốc đã lựa chọn sai hướng và phải trả giá cho những quyết định của mình.",
    },
  },
} satisfies Record<
  string,
  Record<"good" | "normal" | "bad", EndingData>
>;