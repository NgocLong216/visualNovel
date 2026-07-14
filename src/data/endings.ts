import type { EndingData } from "../types/Ending";

import vqroom from "../assets/backgrounds/VQRoom.png";
import VietQuoc from "../assets/characters/VietQuoc.png";
import lienxo from "../assets/backgrounds/LienXoAlexei.png";
import Alexei from "../assets/characters/Alexei.png";
import codien from "../assets/backgrounds/CoDienJames.png";
import James from "../assets/characters/James.png";
import minhoroom from "../assets/backgrounds/MinhoRoom.png";
import Minho from "../assets/characters/Minho.png";

export const endings = {
  james: {
    good: {
      title: "True Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "Sương mù London dường như tan biến dưới ánh đèn vàng ấm áp của văn phòng sang trọng. Tiếng tích tắc của chiếc đồng hồ quả lắc mạ vàng hòa quyện hoàn hảo với tiếng lật giở những bản giao ước kinh tế mới - nơi quyền lợi của công nhân và lợi nhuận của tập đoàn đạt thế cân bằng hoàn hảo."
        },

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "James West đứng dậy từ chiếc ghế da, rũ bỏ vẻ lạnh lùng thường thấy của một ông hoàng công nghiệp. Anh ta bước về phía bạn, ánh mắt xanh thẳm tràn ngập sự ngưỡng mộ. James mỉm cười lịch lãm, khẽ cúi đầu và đặt một nụ hôn nhẹ, trân trọng lên mu bàn tay bạn:"
        },

        {
          speaker: "James",
          background: codien,
          characters: [
            {
              id: "James",
              image: James,
              position: "center"
            }
          ],
          text: "Bạn không chỉ hiểu những bánh răng của tôi, mà còn biết cách tra dầu để chúng vận hành nhân văn hơn. Kể từ hôm nay, tôi thật mừng khi được có bạn làm vị cố vấn tối cao và là người bạn tri kỷ duy nhất có quyền can thiệp vào các quyết định chiến lược của đế chế này. Hãy cùng tôi định hình lại lịch sử."
        }

      ]
    },

    normal: {
      title: "Normal Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "Bên ngoài cửa sổ, những chuyến tàu hơi nước vẫn xình xịch rời ga King's Cross, mang theo hàng vạn cuộn vải dệt sang thị trường toàn cầu. James West ngồi bắt chéo chân tại bàn, khẽ nhấp một ngụm rượu sherry, ngón tay gõ nhẹ lên bản kế hoạch đã được sửa đổi một nửa."
        },

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "Gương mặt ông không quá vồ vập, nhưng ánh nhìn toát lên sự công nhận đối với một trí tuệ sắc sảo. James gật đầu, đưa bản hợp đồng hợp tác liên doanh về phía bạn:"
        },

        {
          speaker: "James",
          background: codien,
          characters: [
            {
              id: "James",
              image: James,
              position: "center"
            }
          ],
          text: "Tư duy tài chính khá tốt, dù đôi chỗ bạn vẫn bị lẫn lộn với tư tưởng của các mô hình thế kỷ XX. Tuy nhiên, những điều chỉnh của bạn về chuỗi cung ứng và thị trường thuộc địa vẫn mang lại lợi nhuận không hề nhỏ. Ký vào đây đi, chúng ta sẽ là những đối tác làm ăn có lợi trên thương trường này."
        }

      ]
    },

    bad: {
      title: "Bad Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "Mưa London trút xuống xối xả, gột rửa những vết than đen trên những bức tường gạch của các đại công xưởng vùng ngoại ô. Bên trong văn phòng, bầu không khí đặc quánh và lạnh lẽo đến đáng sợ."
        },

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "James West đứng quay lưng về phía bạn, tay khẽ chỉnh lại bộ y phục cao cấp, ánh mắt đóng băng khi nhìn vào bản đề xuất kinh tế đầy rẫy những lỗ hổng lý luận và sự ngây thơ về quy luật giá trị thặng dư. Anh ta không thèm quay đầu lại, giọng nói lạnh lùng cắt ngang không gian, kéo hồi chuông gọi gia nhân:"
        },

        {
          speaker: "James",
          background: codien,
          characters: [
            {
              id: "James",
              image: James,
              position: "center"
            }
          ],
          text: "Thật tiếc quá, có vẻ như bạn còn quá nhiều sự việc chưa trải nên mới đề xuất cho tôi những điều ý vô bổ như thế này. Tôi thì lại không rảnh để dạy lại những kiến thức cơ bản cho một kẻ mơ mộng giữa thời đại thực tế này, có vẻ cuộc họp mặt của chúng ta sẽ kết lại ở đây."
        },

        {
          speaker: "Dẫn truyện",
          background: codien,
          characters: [],
          text: "Cánh cửa gỗ nặng nề khép lại, bỏ lại bạn đơn độc giữa màn mưa lạnh giá của London thế kỷ XIX mà không có một đồng lộc túi."
        },

      ]
    },
  },

  alexei: {
    good: {
      title: "True Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: lienxo,
          characters: [],
          text: "Bên ngoài cửa kính, bão tuyết Moscow vẫn gầm rú, nhưng bên trong văn phòng, ngọn lửa trong lò sưởi bập bùng như thiêu rụi mọi sự trì trệ. Tập tài liệu kế hoạch 5 năm mới nằm trên bàn, đầy ắp những sửa đổi mang tính đột phá về hiệu quả và chất lượng do chính tay bạn phác thảo."
        },

        {
          speaker: "Dẫn truyện",
          background: lienxo,
          characters: [],
          text: "Alexei Vladimir đứng dậy, vóc dáng cao lớn như một khối thép sừng sững. Gương mặt nghiêm nghị, hằn sâu những nếp nhăn sương gió của ông chợt giãn ra. Alexei nở một nụ cười hào sảng hiếm hoi, bước tới và dùng đôi bàn tay thô ráp, đầy vết chai sần siết chặt lấy tay bạn bằng một lực rất mạnh:"
        },

        {
          speaker: "Alexei",
          background: lienxo,
          characters: [
            {
              id: "Alexei",
              image: Alexei,
              position: "center"
            }
          ],
          text: "Tuyệt vời! Đồng chí vừa có ý chí thép, vừa có cái đầu tỉnh táo để nhìn ra và sửa chữa những sai lầm trong tính toán của tôi. Kế hoạch này không còn là những con số vô hồn nữa, nó là xương máu của một cường quốc. Hãy đứng cùng tôi trên đài vinh quang, chúng ta sẽ xây dựng một tương lai bất bại!"
        }

      ]
    },

    normal: {
      title: "Normal Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: lienxo,
          characters: [],
          text: "Ánh đèn dầu hắt những bóng dài lên bức tường treo đầy bản đồ địa chất vùng Siberia. Alexei ngồi tựa lưng vào chiếc ghế gỗ sồi, khẽ thở ra một hơi dài, lật qua lật lại những trang phân tích cán cân liên ngành mà bạn vừa nộp."
        },

        {
          speaker: "Dẫn truyện",
          background: lienxo,
          characters: [],
          text: "Ông khẽ gật đầu, ánh mắt toát lên sự thừa nhận đối với một trí tuệ có năng lực. Alexei mở ngăn kéo, đặt lên bàn một cây bút máy vỏ nhựa đen thô mộc nhưng chắc chắn, rồi đẩy nó về phía bạn:"
        },

        {
          speaker: "Alexei",
          background: lienxo,
          characters: [
            {
              id: "Alexei",
              image: Alexei,
              position: "center"
            }
          ],
          text: "Đồng chí nắm lý thuyết rất tốt, dù đôi chỗ tư duy vẫn bị ảnh hưởng bởi cơ chế thị trường tự do. Nhưng không sao, thực tiễn sẽ mài giũa lại điều đó. Hãy ở lại Ủy ban Kế hoạch Nhà nước và giúp tôi sửa đổi, giám sát lại các chỉ tiêu sản lượng này. Công việc phía trước còn rất nhiều."
        }

      ]
    },

    bad: {
      title: "Bad Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: lienxo,
          characters: [],
          text: "Bầu không khí trong phòng đột ngột chùng xuống, lạnh lẽo không kém gì nhiệt độ âm ba mươi độ ngoài trời. Alexei Vladimir đứng khoanh tay bên cửa sổ, ánh mắt đóng băng khi nhìn vào bản đề xuất kinh tế đầy rẫy những số liệu phi thực tế và sự lỏng lẻo trong tính toán kỷ luật của bạn."
        },

        {
          speaker: "Dẫn truyện",
          background: lienxo,
          characters: [],
          text: "Ông quay lại, nét mặt nghiêm nghị đến đáng sợ. Không một động tác thừa, Alexei bước dứt khoát về phía bàn làm việc, nhấn mạnh ngón tay lên chiếc chuông đồng để gọi bảo vệ, giọng nói trầm khàn và lạnh lùng như phán quyết:"
        },

        {
          speaker: "Alexei",
          background: lienxo,
          characters: [
            {
              id: "Alexei",
              image: Alexei,
              position: "center"
            }
          ],
          text: "Đồng chí không hiểu gì về sự nghiêm túc và tính kỷ luật của kế hoạch tập trung cả. Những con số mơ hồ này sẽ làm sụp đổ cả một hệ thống. Hãy xuống xưởng cơ khí số 3 thực tập ba tháng để tự tay rèn thép, để hiểu thế nào là công nghiệp nặng, rồi lúc đó hãy quay lại gặp tôi!"
        }

      ]
    },
  },

  minho: {
    good: {
      title: "True Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: minhoroom,
          characters: [],
          text: "Ánh đèn neon từ thung lũng công nghệ phía dưới cửa kính phản chiếu lên tấm bản đồ số hóa của hệ sinh thái khởi nghiệp toàn cầu. Bản chiến lược bứt phá mà bạn đề xuất - tích hợp hoàn hảo giữa công nghệ AI lõi, chuỗi cung ứng bán dẫn bán tự động và chính sách phát triển nguồn nhân lực chất lượng cao - đang chạy mượt mà trên màn hình chính."
        },

        {
          speaker: "Dẫn truyện",
          background: minhoroom,
          characters: [],
          text: "Min-ho đứng bật dậy, rũ bỏ vẻ điềm tĩnh, lạnh lùng thường thấy. Anh nở một nụ cười rạng rỡ, đầy kiêu hãnh, bước tới và thực hiện một cái đập tay rồi siết chặt tay bạn một cách đầy phấn khích:"
        },

        {
          speaker: "Minho",
          background: minhoroom,
          characters: [
            {
              id: "Minho",
              image: Minho,
              position: "center"
            }
          ],
          text: "Tuyệt vời! Bạn không chỉ làm chủ được tốc độ của thành phố này, mà còn biết cách tối ưu hóa tần số của nó thành một nguồn năng lượng khổng lồ. Con đường đi tắt đón đầu này đầy rẫy rủi ro, nhưng có một chiến lược gia với tư duy công nghệ vượt thời gian như bạn đồng hành, tôi tin chắc chúng ta sẽ thiết lập lại trật tự toàn cầu."
        }

      ]
    },

    normal: {
      title: "Normal Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: minhoroom,
          characters: [],
          text: "Tiếng quạt tản nhiệt của dàn máy tính cấu hình cao kêu o o đều đặn trong phòng. Min-ho ngồi tựa lưng vào ghế, tay xoay xoay chiếc bút cảm ứng, mắt chăm chú phân tích biểu đồ tăng trưởng xuất khẩu và cơ cấu ngành công nghiệp mà bạn vừa điều chỉnh."
        },

        {
          speaker: "Dẫn truyện",
          background: minhoroom,
          characters: [],
          text: "Anh khẽ gật đầu công nhận, ánh mắt toát lên sự đánh giá cao đối với một người bạn đồng hành có năng lực thực chiến:"
        },

        {
          speaker: "Minho",
          background: minhoroom,
          characters: [
            {
              id: "Minho",
              image: Minho,
              position: "center"
            }
          ],
          text: "Tư duy công nghệ và tài chính của bạn khá nhạy bén, dù đôi chỗ bạn vẫn bị lẫn lộn hoặc áp dụng máy móc mô hình của các thế kỷ trước vào thời đại số hóa tốc độ cao này. Nhưng không sao, giải pháp về tối ưu hóa chuỗi cung ứng của bạn rất có giá trị thực tiễn. Ký hợp đồng liên doanh này đi, chúng ta sẽ là những đối tác chiến lược cùng nhau dẫn dắt thị trường."
        }

      ]
    },

    bad: {
      title: "Bad Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: minhoroom,
          characters: [],
          text: "Ánh đèn neon màu hồng và xanh lục bên ngoài cửa sổ vẫn nhấp nháy không ngừng nghỉ, nhưng không khí trong văn phòng của Min-ho đã đóng băng. Màn hình máy tính hiển thị bản đề xuất kinh tế của bạn với những thuật toán lỗi thời, thiếu tính thực tiễn và không bắt kịp tốc độ thay đổi của cuộc cách mạng 4.0."
        },

        {
          speaker: "Dẫn truyện",
          background: minhoroom,
          characters: [],
          text: "Min-ho khẽ thở dài, nhấn nút tắt màn hình. Anh đứng dậy, đút hai tay vào túi quần, lạnh lùng nhìn bạn, giọng nói đều đều nhưng dứt khoát không một chút do dự:"
        },

        {
          speaker: "Minho",
          background: minhoroom,
          characters: [
            {
              id: "Minho",
              image: Minho,
              position: "center"
            }
          ],
          text: "Bạn hoàn toàn chưa hiểu gì về vận tốc của cuộc đua công nghệ và sự khắc nghiệt của mô hình công nghiệp hóa rút ngắn rồi. Những tư duy rập khuôn và chậm chạp này sẽ khiến chúng ta bị thị trường đào thải ngay lập tức. Tôi không thể mạo hiểm cả một hệ sinh thái để dạy lại những kiến thức cơ bản cho một người không bắt kịp thời đại. Hãy tìm một nhịp điệu khác phù hợp với bạn hơn đi."
        }

      ]
    },
  },

  vietquoc: {
    good: {
      title: "True Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Ánh nắng chiều nhuộm vàng con phố, nhưng không khí xung quanh dường như bừng sáng bởi nguồn năng lượng từ bản chiến lược vĩ mô mà bạn vừa hoàn thiện. Từng luận điểm về kinh tế số, R&D và chuyển đổi xanh đan cài hoàn hảo với bệ đỡ an sinh xã hội vững chắc."
        },

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Việt Quốc đứng dậy, rũ bỏ vẻ trầm tư thường ngày. Nét mặt anh như nở một nụ cười rạng rỡ"
        },

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Việt Quốc bước tới trao cho bạn một cái nắm tay đầy ấm áp và kiên định. Thần thái của anh lúc này toát lên một sức hút tự cường vô cùng mạnh mẽ."
        },

        {
          speaker: "VietQuoc",
          background: vqroom,
          characters: [
            {
              id: "VietQuoc",
              image: VietQuoc,
              position: "center"
            }
          ],
          text: "Tuyệt vời! Bạn không chỉ hiểu lý thuyết, mà còn thấu cảm sâu sắc những thăng trầm và bản lĩnh của con người Việt Nam. Con đường phía trước còn nhiều thử thách, nhưng có bạn đồng hành với tư duy Đổi mới sáng tạo này, tôi tin chắc 'Kỳ tích Sông Hồng' sẽ khiến cả thế giới phải ngả mũ! Đi thôi, tương lai của chúng ta bắt đầu từ hôm nay."
        }

      ]
    },

    normal: {
      title: "Normal Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Tiếng phin cà phê nhôm vẫn tí tách rơi đều đặn. Việt Quốc lướt ngón tay trên màn hình máy tính bảng, xem xét kỹ lưỡng các số liệu điều tiết thị trường và định hướng các thành phần kinh tế mà bạn đã góp ý."
        },

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Anh khẽ gật đầu khích lệ, ánh nhìn toát lên sự trân trọng và chân thành đối với một người bạn có năng lực."
        },

        {
          speaker: "VietQuoc",
          background: vqroom,
          characters: [
            {
              id: "VietQuoc",
              image: VietQuoc,
              position: "center"
            }
          ],
          text: "Bạn hiểu khá rõ về thực tế nước tôi, dù đôi chỗ tư duy vẫn hơi bị dao động giữa các mô hình cũ và mới, có lúc hơi nóng vội kiểu tự do tư bản, có lúc lại hơi thận trọng kiểu bao cấp. Nhưng không sao, hãy tiếp tục đồng hành cùng chúng tôi, thực tiễn sinh động sẽ giúp chúng ta hoàn thiện thể chế này hơn nữa."
        }

      ]
    },

    bad: {
      title: "Bad Ending",

      dialogues: [

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Ánh hoàng hôn tắt dần phía sau những tòa nhà biểu tượng, bầu không khí ở bàn họp chùng xuống, có chút tiếc nuối. Việt Quốc nhìn tập đề xuất dày đặc những lý thuyết giáo điều, xa rời đời sống và kẽ hở vĩ mô của bạn, khẽ thở dài một tiếng nhỏ."
        },

        {
          speaker: "Dẫn truyện",
          background: vqroom,
          characters: [],
          text: "Anh đứng dậy, nhẹ nhàng vỗ vai bạn, rồi đưa lại cuốn Giáo trình Kinh tế chính trị với những trang giấy còn thơm mùi mực."
        },

        {
          speaker: "VietQuoc",
          background: vqroom,
          characters: [
            {
              id: "VietQuoc",
              image: VietQuoc,
              position: "center"
            }
          ],
          text: "Đồng chí vẫn còn mang nặng tư duy cũ, hoặc đang quá rập khuôn máy móc theo lý thuyết nước ngoài rồi, chưa bắt kịp hơi thở thực tiễn và tinh thần uyển chuyển của thời kỳ Đổi mới đâu. Kinh tế thị trường của tôi có những đặc thù rất riêng để bảo vệ nhân dân. Hãy đi thực tế nhiều hơn, lắng nghe đời sống xã hội và đọc kỹ lại bài học này nhé!"
        }

      ]
    },
  },
} satisfies Record<
  string,
  Record<"good" | "normal" | "bad", EndingData>
>;