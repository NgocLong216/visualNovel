import minhoroom from "../../assets/backgrounds/MinhoRoom.png";
import Minho from "../../assets/characters/Minho.png";

export const minhoStory = [
    {
        id: 1,

        speaker: "Bối cảnh",

        nextId: 2,

        text: "Màn đêm đã đắp lại cho mỗi người những nhộn nhịp cuối ngày, ấy vậy mà thành phố bên ngoài cửa kính của Min-ho bây giờ mới thực sự thức giấc. Dưới kia là một biển ánh sáng rực rỡ: những tấm biển hiệu neon màu hồng, xanh lục của các cửa hàng điện tử nhấp nháy đan xen với ánh đèn xe quét thành những vệt sáng dài, chuyển động không ngừng nghỉ. Một đô thị trẻ trung, năng động và tràn đầy năng lượng dần hiện lên trong tầm mắt.",

        background: minhoroom,

        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 2,

        speaker: "Bối cảnh",

        nextId: 3,

        text: "Min-ho đứng bên bậu cửa sổ, bộ vest Tây làm tôn lên vóc dáng cao ráo, hiện đại của cậu ta. Ánh sáng từ màn hình máy tính sau lưng hắt ra, hòa cùng sắc xanh tím rực rỡ của khu phố công nghệ sầm uất phía dưới, phản chiếu vào đôi mắt một mí sắc sảo nhưng chứa đựng sự điềm tĩnh lạ thường của anh.",

        background: minhoroom,

        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 3,

        speaker: "Bối cảnh",

        nextId: 4,

        text: "Nhìn thành phố chuyển động liên tục như một cỗ máy không ngủ, Min-ho khẽ xoay người, hướng ánh mắt về phía bạn.",

        background: minhoroom,

        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 4,

        speaker: "Minho",

        nextId: 5,

        text: "Thành phố này luôn chuyển động với vận tốc ánh sáng, bạn có cảm thấy như vậy không? Nhưng đừng lo, chúng ta không ở đây để bị nó cuốn đi, mà là để cùng nhau làm chủ tần số của nó.",

        background: minhoroom,

        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 5,
    
        speaker: "Bối cảnh",
    
        nextId: 6,
    
        text: "Văn phòng của Min-ho ngập trong tiếng rít điện từ phát ra từ bức tường xếp đầy màn hình máy tính CRT lồi. Anh ném qua cho bạn một lon nước tăng lực lạnh ngắt. Cái đầu bảng mạch vi vi tính của anh khẽ nghiêng, những ống đèn Nixie hiển thị số trên đó phát ra ánh sáng cam đỏ nhấp nháy liên tục đầy tinh nghịch.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 6,
    
        speaker: "Minho",
    
        text: "Mấy nước phương Tây mất cả trăm năm để mò mẫm công nghệ, nhưng chúng ta thì không rảnh thế. Theo bạn, lợi thế lớn nhất của một kẻ đi sau (Latecomer) như mô hình NICs của tôi là gì?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Có thể thực hiện chiến lược 'đi tắt, đón đầu', chủ động nhập khẩu và chuyển giao những công nghệ hiện đại nhất từ các nước phát triển để rút ngắn thời gian.",
                nextId: 7,
                score: 10,
            },
    
            {
                text: "B. Phải tự nghiên cứu từ con số 0, cấm tuyệt đối việc sử dụng máy móc hay phát minh của nước ngoài.",
                nextId: 10,
                score: 0,
            },
    
            {
                text: "C. Đi tuần tự thật chậm rãi, bắt đầu tích lũy vài chục năm từ công nghiệp nhẹ truyền thống rồi mới mơ đến đồ điện tử.",
                nextId: 13,
                score: 5,
            },
        ],
    },
    
    {
        id: 7,
    
        speaker: "Bạn",
    
        nextId: 8,
    
        text: "Chúng ta có lợi thế 'đi tắt, đón đầu'. Thay vì tự nghiên cứu từ đầu, mình chủ động nhập khẩu và chuyển giao những công nghệ hiện đại nhất từ họ để rút ngắn thời gian.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 8,
    
        speaker: "Minho",
    
        nextId: 9,
    
        text: "Các bóng đèn LED trên đầu Min-ho lập tức chớp nháy liên hồi đầy phấn khích. Anh búng tay một cái 'chóc', nhảy lên ngồi ngay trên thành chiếc bàn làm việc sáng loáng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 9,
    
        speaker: "Minho",
    
        nextId: 16,
    
        text: "Chuẩn rồi. Tại sao phải tốn công chế tạo lại cái bánh xe khi người ta đã bán sẵn động cơ? Nhập công nghệ cốt lõi về, học quy trình rồi tối ưu hóa nó với tốc độ chóng mặt. Đi sau không phải là bất lợi, đó là một đặc quyền nếu biết cách bứt tốc.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 10,
    
        speaker: "Bạn",
    
        nextId: 11,
    
        text: "Tôi nghĩ lợi thế là sự tự lực. Chúng ta nên tự nghiên cứu mọi thứ từ con số 0, cấm tuyệt đối việc sử dụng máy móc hay phát minh của nước ngoài.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 11,
    
        speaker: "Minho",
    
        nextId: 12,
    
        text: "Min-ho ôm đầu, ngả người ra sau.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 12,
    
        speaker: "Minho",
    
        nextId: 16,
    
        text: "Nghiên cứu từ con số 0 giữa thời đại này á? Đó không phải là tự tôn, đó là tự sát công nghệ. Đóng cửa cài then kiểu đó thì tụi mình sẽ biến thành một hòn đảo hoang lạc hậu trong khi thế giới đã đi trước cả thế kỷ. Tư duy này bảo thủ quá rồi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 13,
    
        speaker: "Bạn",
    
        nextId: 14,
    
        text: "Đi tuần tự thật chậm rãi thôi. Bắt đầu tích lũy vài chục năm từ công nghiệp nhẹ truyền thống như dệt may, rồi sau này mới tính đến chuyện làm đồ điện tử.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 14,
    
        speaker: "Minho",
    
        nextId: 15,
    
        text: "Ánh sáng trên các điốt của Min-ho nhấp nháy chậm chạp, sự hời hợt từ ánh đèn rõ vẻ lười biếng. Anh thở dài, xoay xoay chiếc bút bi trên tay đầy thất vọng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 15,
    
        speaker: "Minho",
    
        nextId: 16,
    
        text: "Bạn lại mang cái bộ óc thế kỷ XVIII của gã James West vào đây rồi. Cứ thong thả dệt vải thì mãi mãi chịu kiếp trâu chậm uống nước đục, làm công đoạn rẻ tiền cho bọn tài phiệt quốc tế ép giá. Thời đại này, không nhảy vọt thì đồng nghĩa với chết chìm!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 16,
    
        speaker: "Bối cảnh",
    
        nextId: 17,
    
        text: "Min-ho bật công tắc một chiếc máy chiếu cổ điển, lập tức một bản đồ thế giới với các mũi tên xuất khẩu hàng hóa vẽ bằng đồ họa vector 2D đơn sắc hiện lên trên bức tường. Các mũi tên dày đặc phóng đi từ châu Á, đâm thẳng vào các trung tâm tiêu thụ lớn ở Mỹ và châu Âu.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 17,
    
        speaker: "Minho",
    
        text: "Thị trường trong nước của chúng ta nhỏ bé lắm, người dân còn nghèo nên sức mua không đủ. Để tích lũy tư bản và giàu lên nhanh chóng, chúng ta nên chọn chiến lược phát triển kinh tế nào?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Chiến lược đóng cửa, tự cung tự cấp, sản xuất ra bao nhiêu thì người trong nước tự tiêu thụ bấy nhiêu.",
                nextId: 18,
                score: 0,
            },
    
            {
                text: "B. Chiến lược thay thế nhập khẩu, chỉ tập trung sản xuất những mặt hàng trong nước đang thiếu và không giao thương với bên ngoài.",
                nextId: 21,
                score: 5,
            },
    
            {
                text: "C. Chiến lược 'hướng về xuất khẩu', đẩy mạnh sản xuất hàng hóa để bán ra thị trường toàn cầu, tận dụng tối đa dòng chảy thương mại quốc tế.",
                nextId: 24,
                score: 10,
            },
        ],
    },
    
    {
        id: 18,
    
        speaker: "Bạn",
    
        nextId: 19,
    
        text: "Chiến lược đóng cửa, tự cung tự cấp. Sản xuất ra bao nhiêu hàng hóa thì người trong nước tự phân phối và tiêu thụ bấy nhiêu, không giao thương với bên ngoài.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 19,
    
        speaker: "Minho",
    
        nextId: 20,
    
        text: "Chiếc máy chiếu phụt tắt, căn phòng tối sầm lại, chỉ còn ánh đèn báo lỗi trên bảng mặt của Min-ho. Giọng anh ta cũng trở nên sắc bén hơn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 20,
    
        speaker: "Minho",
    
        nextId: 27,
    
        text: "Tự cung tự cấp cho một thị trường nghèo nàn? Đó là công thức giam mình trong cái bẫy nghèo đói vĩnh viễn! Không có ngoại tệ, lấy đâu ra tiền mua linh kiện, máy móc hiện đại để nâng cấp đất nước? Đồng chí đang kéo sập nền kinh tế năng động này rồi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 21,
    
        speaker: "Bạn",
    
        nextId: 22,
    
        text: "Áp dụng chiến lược 'thay thế nhập khẩu'. Tập trung sản xuất những mặt hàng trong nước đang thiếu để tiết kiệm ngoại tệ, đóng cửa thị trường để bảo hộ tối đa.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 22,
    
        speaker: "Minho",
    
        nextId: 23,
    
        text: "Các đường mạch trên đầu Min-ho nhấp nháy ngập ngừng. Anh gõ nhẹ ngón tay xuống bàn, giọng nói phân tích sòng phẳng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 23,
    
        speaker: "Minho",
    
        nextId: 27,
    
        text: "Thay thế nhập khẩu nghe thì bùi tai, và thực tế vài nước đã dùng ở bước sơ khai. Nhưng biến nó thành cốt lõi thì sai lầm lớn! Sân nhà quá nhỏ sẽ nhanh bão hòa, doanh nghiệp được nuông chiều sẽ lười biếng, xơ cứng và không chịu đổi mới. Đó không phải là cách tạo nên kỳ tích!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 24,
    
        speaker: "Bạn",
    
        nextId: 25,
    
        text: "Phải chọn chiến lược 'hướng về xuất khẩu'. Đẩy mạnh sản xuất hàng hóa để bán ra thị trường toàn cầu, tận dụng tối đa dòng chảy thương mại quốc tế để thu ngoại tệ.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 25,
    
        speaker: "Minho",
    
        nextId: 26,
    
        text: "Bức tường màn hình CRT phía sau bỗng sáng rực, hiển thị chớp nhoáng các dòng số liệu thoát ẩn, thoát hiện, giống một vũ điệu mừng rỡ nên nhìn chúng như múa nhảy liên hồi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 26,
    
        speaker: "Minho",
    
        nextId: 27,
    
        text: "Chính xác! Mang chuông đi đánh xứ người, lấy tiền cả thế giới về làm giàu cho tổ quốc! Khi ép doanh nghiệp phải ra biển lớn cạnh tranh sinh tử với các tập đoàn sừng sỏ phương Tây, họ buộc phải lớn mạnh và cải tiến. Xuất khẩu chính là động cơ phản lực của chúng tôi!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 27,
    
        speaker: "Bối cảnh",
    
        nextId: 28,
    
        text: "Min-ho lật cuốn sổ tay báo cáo tài chính toàn cầu, trên đó in dòng chữ của những khoản đầu tư lên đến hàng tỷ USD. Đèn vi mạch trên đầu anh chạy những đường sóng sắc nét, thể hiện một bộ não đang tính toán ở cường độ cao.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 28,
    
        speaker: "Minho",
    
        text: "Để xây dựng các tập đoàn công nghệ lớn (như các Chaebol/Zaibatsu) trong thời gian ngắn kỷ lục, chúng ta cần một lượng vốn khổng lồ mà nội lực trong nước không gánh nổi. Mô hình NICs huy động nguồn lực này từ đâu?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Chủ yếu dựa vào việc mở cửa, tạo chính sách thông thoáng để thu hút dòng vốn đầu tư nước ngoài (FDI) và tận dụng các nguồn viện trợ, vay vốn quốc tế một cách thông minh.",
                nextId: 29,
                score: 10,
            },
    
            {
                text: "B. Bóc lột công nhân làm việc 20 tiếng một ngày và đi xâm chiếm các quốc gia khác để vơ vét thuộc địa.",
                nextId: 32,
                score: 5,
            },
    
            {
                text: "C. Chỉ dùng tiền tích lũy từ thắt lưng buộc bụng nông nghiệp, tuyệt đối không nhận một đồng nào từ bên ngoài.",
                nextId: 35,
                score: 0,
            },
        ],
    },
    
    {
        id: 29,
    
        speaker: "Bạn",
    
        nextId: 30,
    
        text: "Chủ yếu dựa vào việc mở cửa, tạo chính sách thông thoáng để thu hút dòng vốn đầu tư nước ngoài (FDI). Đồng thời tận dụng thông minh các nguồn viện trợ và vay vốn quốc tế.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 30,
    
        speaker: "Minho",
    
        nextId: 31,
    
        text: "Phần đầu bảng mạch của Min-ho phát ra một tiếng 'ting' giòn giã từ chiếc loa điện tử mini.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 31,
    
        speaker: "Minho",
    
        nextId: 38,
    
        text: "Nhạy bén đấy! Vốn thế giới là vô hạn, quan trọng là biết cách hút về. Dùng FDI và vốn vay làm mồi nhử để xây hạ tầng, rồi nuôi dưỡng các tập đoàn mũi nhọn trong nước. Biến dòng vốn ngoại bang thành dòng máu nội lực của quốc gia. Một nước đi đỉnh cao!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 32,
    
        speaker: "Bạn",
    
        nextId: 33,
    
        text: "Bóc lột công nhân làm việc 20 tiếng một ngày với mức lương rẻ mạt và đi xâm chiếm các quốc gia khác để vơ vét thuộc địa làm tài nguyên.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 33,
    
        speaker: "Minho",
    
        nextId: 34,
    
        text: "Đầu bảng mạch của Min-ho khựng lại, các dải sáng tắt ngấm. Giọng anh trầm xuống, mỉa mai.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 34,
    
        speaker: "Minho",
    
        nextId: 38,
    
        text: "Không biết bạn đang sống ở thế kỷ nào nhỉ? Đó là cách tích lũy nguyên thủy của gã James West thời kỳ đầu rồi. Chúng tôi đi lên trong thời đại hòa bình và luật pháp quốc tế. Bóc lột kiểu man rợ đó thì sẽ bị thế giới tẩy chay ngay lập tức. Đừng rập khuôn mù quáng!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 35,
    
        speaker: "Bạn",
    
        nextId: 36,
    
        text: "Chỉ dùng tiền tích lũy từ thắt lưng buộc bụng nông nghiệp, ăn ngô khoai để dành tiền xây nhà máy, tuyệt đối không nhận một đồng nào từ bên ngoài.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 36,
    
        speaker: "Minho",
    
        nextId: 37,
    
        text: "Đèn LED trên đầu Min-ho chớp đỏ liên tục như hệ thống quá tải. Anh đập tay lên mảng mạch gốm đen, kêu lên.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 37,
    
        speaker: "Minho",
    
        nextId: 38,
    
        text: "Trời đất! Bạn có vẻ lại đi lạc sang phòng làm việc đầy mùi sắt thép của ông anh Alexei rồi! Tích lũy từ nông nghiệp lạc hậu thì đến mùa quýt năm sau mới đủ tiền mua dây chuyền làm bóng bán dẫn à? Giữ tự chủ kiểu cực đoan đó là tự chặt chân tay mình rồi!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 38,
    
        speaker: "Bối cảnh",
    
        nextId: 39,
    
        text: "Min-ho tiếp đó mở ra một chiếc hộp bọc nhung, cẩn thận dùng nhíp gắp ra một đĩa bán dẫn (Silicon Wafer) tròn xoe, lấp lánh phản chiếu thứ ánh sáng neon sặc sỡ từ cửa sổ hắt vào. Anh đưa nó lên ngang tầm vi mạch của mình, giọng đầy kiêu hãnh.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 39,
    
        speaker: "Minho",
    
        text: "Mô hình của tôi không gắn liền với khói bụi của than đá hay những cỗ máy hơi nước cồng kềnh. Kỳ tích của các nước công nghiệp mới dựa trên thành tựu của cuộc Cách mạng công nghiệp lần thứ mấy?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. CMCN lần thứ nhất, tập trung vào máy hơi nước và cơ giới hóa ngành dệt vải.",
                nextId: 40,
                score: 0,
            },
    
            {
                text: "B. CMCN lần thứ ba (3.0), với cốt lõi là tự động hóa, tin học hóa, công nghệ bán dẫn, máy tính và viễn thông.",
                nextId: 43,
                score: 10,
            },
    
            {
                text: "C. CMCN lần thứ hai (2.0), tập trung vào sản xuất điện - cơ khí và các dây chuyền thép quy mô lớn.",
                nextId: 46,
                score: 5,
            },
        ],
    },
    
    {
        id: 40,
    
        speaker: "Bạn",
    
        nextId: 41,
    
        text: "Chắc chắn là Cách mạng công nghiệp lần thứ nhất, tập trung vào máy hơi nước và cơ giới hóa ngành dệt vải để giải phóng sức lao động.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 41,
    
        speaker: "Minho",
    
        nextId: 42,
    
        text: "Min-ho đặt chiếc đĩa bán dẫn xuống bàn, dải sáng trên đầu chuyển sang màu xám xịt ngán ngẩm. Anh chống cằm thẫn thờ bảo.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 42,
    
        speaker: "Minho",
    
        nextId: 49,
    
        text: "Thôi xin bạn đấy, máy hơi nước là đồ cổ từ thời cụ tổ của James West rồi! Nếu dựa vào dệt vải với than đá thì giờ này chúng ta vẫn đi gia công quần áo thô chứ làm sao sản xuất được linh kiện vi tính đứng đầu toàn cầu? Lùi sâu về lịch sử quá rồi!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 43,
    
        speaker: "Bạn",
    
        nextId: 44,
    
        text: "Đó là Cách mạng công nghiệp lần thứ ba (3.0), với cốt lõi là tự động hóa, tin học hóa, công nghệ bán dẫn, máy tính và hệ thống viễn thông.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 44,
    
        speaker: "Minho",
    
        nextId: 45,
    
        text: "Các đường vi mạch trên đầu Min-ho lập tức bùng nổ một làn sóng ánh sáng rực rỡ, chạy tuần hoàn như một chiếc siêu máy tính cổ điển đang chạy hết công suất. Anh bật dậy, tung lon nước của bản thân lên đầy tài tình.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 45,
    
        speaker: "Minho",
    
        nextId: 49,
    
        text: "Chính xác 100%! Đây mới là sân chơi của tôi! Cuộc cách mạng 3.0 biến tri thức và các hạt silicon thành thứ tài nguyên quý hơn vàng. Nắm bắt trọn vẹn làn sóng này giúp chúng tôi tạo ra sản phẩm công nghệ cao, đổi đời cho cả dân tộc chỉ trong một thế hệ!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 46,
    
        speaker: "Bạn",
    
        nextId: 47,
    
        text: "Dựa trên Cách mạng công nghiệp lần thứ hai (2.0), tập trung vào sản xuất điện - cơ khí và các dây chuyền dập thép quy mô lớn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 47,
    
        speaker: "Minho",
    
        nextId: 48,
    
        text: "Min-ho khẽ lắc cái đầu, các tia sáng dịu xuống trầm ngâm. Anh tựa lưng vào ghế, gõ nhẹ ngón tay lên mặt bàn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 48,
    
        speaker: "Minho",
    
        nextId: 49,
    
        text: "Bạn hình như bị ảnh hưởng bởi tư duy 'sắt thép' của ông anh Alexei rồi nhỉ. Công nghiệp nặng là nền tảng giai đoạn trước. Nhưng thứ giúp các nước NICs nhảy vọt không phải là đúc nhiều thép hơn, mà là thu nhỏ hàng triệu bóng bán dẫn vào trong một con chip bằng móng tay này. Suýt đúng rồi đó!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 49,
    
        speaker: "Bối cảnh",
    
        nextId: 50,
    
        text: "Tiếng băng nhạc City Pop phát ra từ chiếc đài Cassette trên bàn được Min-ho vặn nhỏ lại. Thái độ tinh nghịch thường ngày biến mất, thay vào đó là sự nghiêm túc, sắc sảo của một kiến trúc sư vĩ mô. Các ống đèn Nixie trên đầu anh đứng im, phát ra thứ ánh sáng ổn định, uy quyền.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 50,
    
        speaker: "Minho",
    
        text: "Nhiều người nghĩ chúng tôi phát triển nhờ thị trường tự do hoàn toàn, nhà nước không làm gì. Nhưng họ nhầm to rồi. Theo bạn thì trong mô hình Nhật Bản và NICs, Chính phủ (Nhà nước) đóng vai trò gì?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Nhà nước quản lý bằng mệnh lệnh, cấm đoán mọi công ty tư nhân và nắm giữ 100% quyền sở hữu các cửa hàng.",
                nextId: 51,
                score: 5,
            },
    
            {
                text: "B. Nhà nước đóng vai trò kiến tạo và điều tiết vĩ mô cực kỳ mạnh mẽ: Đưa ra chiến lược, hỗ trợ vốn cho các tập đoàn lớn, bảo hộ các ngành công nghiệp non trẻ và đầu tư mạnh vào giáo dục.",
                nextId: 54,
                score: 10,
            },
    
            {
                text: "C. Nhà nước không làm gì cả, phó mặc hoàn toàn cho thị trường tự sinh tự diệt.",
                nextId: 57,
                score: 0,
            },
        ],
    },
    
    {
        id: 51,
    
        speaker: "Bạn",
    
        nextId: 52,
    
        text: "Nhà nước quản lý bằng mệnh lệnh, cấm đoán mọi công ty tư nhân và nắm giữ 100% quyền sở hữu tất cả các nhà máy, cửa hàng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 52,
    
        speaker: "Minho",
    
        nextId: 53,
    
        text: "Min-ho bật cười lớn, cái đầu bảng mạch lắc liên tục làm ánh đèn quét thành những vệt điện màu lơ lửng nơi khoảng không.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 53,
    
        speaker: "Minho",
    
        nextId: 61,
    
        text: "Không bao giờ! Đó là mô hình kế hoạch hóa tập trung bao cấp của Alexei rồi, và nó rất xơ cứng ở giai đoạn sau. Ở đây, chúng tôi tôn trọng sở hữu tư nhân và cần sự năng động của thị trường. Chính phủ của tôi không làm thay doanh nghiệp, chúng tôi làm điều khác vĩ mô hơn!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 54,
    
        speaker: "Bạn",
    
        nextId: 55,
    
        text: "Nhà nước đóng vai trò kiến tạo và điều tiết vĩ mô cực kỳ mạnh mẽ: đưa ra chiến lược mũi nhọn, hỗ trợ vốn cho các tập đoàn lớn, bảo hộ ngành công nghiệp non trẻ và đầu tư mạnh vào giáo dục.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 55,
    
        speaker: "Minho",
    
        nextId: 56,
    
        text: "Tất cả các đèn tín hiệu trên đầu Min-ho đồng loạt phát sáng. Anh bước đến, đặt một tay lên vai bạn đầy trân trọng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 56,
    
        speaker: "Minho",
    
        nextId: 61,
    
        text: "Tuyệt đỉnh! Bạn đã bóc trần được bí mật của 'Kỳ tích châu Á' rồi! Thị trường tự do là con ngựa bất kham, nếu không có bàn tay kiến tạo của Chính phủ định hướng vào công nghệ cao, nó sẽ chỉ lao vào đầu cơ làm giàu ngắn hạn. Sự kết hợp giữa Nhà nước định hướng và thị trường năng động chính là công thức tối thượng!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 57,
    
        speaker: "Bạn",
    
        nextId: 58,
    
        text: "Nhà nước hoàn toàn không làm gì cả, đóng vai trò 'người gác đêm' và phó mặc cho thị trường tự sinh tự diệt theo quy luật tự nhiên.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 58,
    
        speaker: "Minho",
    
        nextId: 59,
    
        text: "Ánh sáng trên đầu Min-ho tắt ngấm, biểu thị sự chán nản tột cùng. Anh chống hai tay lên eo, lắc đầu thất vọng, rồi Min-ho lật xấp tài liệu báo cáo ném mạnh xuống bàn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 59,
    
        speaker: "Minho",
    
        nextId: 61,
    
        text: "Phó mặc cho thị trường tự điều tiết sao? Đó là luận điểm ru ngủ của gã James West để ép các nước nghèo mở cửa cho chúng xâu xé! Nếu Chính phủ không đứng ra bảo hộ, bảo ban và ép ngân hàng bơm vốn thời kỳ đầu, doanh nghiệp nội địa đã bị các tập đoàn khổng lồ nước ngoài băm vằm từ trong trứng nước rồi. Ngây thơ kiểu đó chỉ có nước làm đầy tớ thiên hạ mãi mãi!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 61,
    
        speaker: "Bối cảnh",
    
        nextId: 62,
    
        text: "Min-ho đứng tựa lưng vào tường kính, anh nhìn xuống dòng người đang tấp nập đổ vào các tòa nhà văn phòng dưới ánh đèn neon rực rỡ của thành phố. Các ống đèn Nixie trên đầu anh đứng im, phát ra thứ ánh sáng dịu nhẹ, phản chiếu một góc nhìn trầm tư nhưng đầy tự hào.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 62,
    
        speaker: "Minho",
    
        text: "Đất nước tôi không có nhiều dầu mỏ, cũng chẳng giàu khoáng sản sắt thép như phương Tây hay hệ Liên Xô. Thứ tài nguyên duy nhất, quý giá nhất giúp chúng tôi làm nên kỳ tích là gì?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Nguồn nhân lực chất lượng cao, được giáo dục bài bản, có tinh thần kỷ luật, tác phong công nghiệp và khả năng tiếp thu công nghệ cực nhanh.",
                nextId: 63,
                score: 10,
            },
    
            {
                text: "B. Số lượng lao động phổ thông giá rẻ vô hạn, không cần trình độ học vấn hay đào tạo chuyên môn.",
                nextId: 66,
                score: 5,
            },
    
            {
                text: "C. Việc chuyển dịch cơ cấu bằng cách phát triển hệ thống nông nghiệp hữu cơ thô sơ ở nông thôn.",
                nextId: 69,
                score: 0,
            },
        ],
    },
    
    {
        id: 63,
    
        speaker: "Bạn",
    
        nextId: 64,
    
        text: "Là nguồn nhân lực chất lượng cao. Con người được giáo dục bài bản, có tinh thần kỷ luật, tác phong công nghiệp và khả năng tiếp thu, làm chủ công nghệ cực nhanh.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 64,
    
        speaker: "Minho",
    
        nextId: 65,
    
        text: "Các bóng đèn LED trên đầu Min-ho chớp sáng đồng loạt đầy vẻ tán thưởng. Anh quay người lại nhìn bạn, hai tay khoanh trước ngực.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 65,
    
        speaker: "Minho",
    
        nextId: 72,
    
        text: "Đúng vậy. Khi không có tài nguyên thiên nhiên, chúng ta buộc phải biến con người thành thứ tài nguyên tối thượng. Chính phủ đã rót những dòng vốn khổng lồ vào giáo dục, ép các tập đoàn phải đào tạo kỹ sư. Không có dầu mỏ thì ta dùng chất xám, chính sự nhạy bén và kỷ luật của con người đã kéo cả nền kinh tế này đi lên.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 66,
    
        speaker: "Bạn",
    
        nextId: 67,
    
        text: "Chắc là số lượng lao động phổ thông giá rẻ vô hạn. Chỉ cần người làm tay chân đông, không cần trình độ học vấn hay đào tạo chuyên môn sâu làm gì cho tốn kém.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 67,
    
        speaker: "Minho",
    
        nextId: 68,
    
        text: "Ánh sáng trên đầu Min-ho tắt ngấm, chỉ còn những đường mạch gốm đen xỉn màu lạnh lẽo. Giọng điệu anh có chút thất vọng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 68,
    
        speaker: "Minho",
    
        nextId: 72,
    
        text: "Nếu chỉ dựa vào lao động giá rẻ mà không có trình độ, chúng ta sẽ mãi mãi bị mắc kẹt ở những xưởng may gia công thô sơ. Lao động giá rẻ ở đâu chẳng có? Nhưng một lực lượng lao động có học thức, biết vận hành máy vi tính và dây chuyền bán dẫn mới là thứ tạo ra giá trị nhảy vọt. Bạn đánh giá chúng tôi thấp quá rồi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 69,
    
        speaker: "Bạn",
    
        nextId: 70,
    
        text: "Tôi đoán là việc dịch chuyển cơ cấu bằng cách tập trung phát triển hệ thống nông nghiệp hữu cơ thô sơ ở khắp các vùng nông thôn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 70,
    
        speaker: "Minho",
    
        nextId: 71,
    
        text: "Một ống đèn Nixie trên đầu Min-ho phát ra tiếng kêu tạch nhỏ, nhảy số lùi. Anh khẽ bật cười, giọng điệu pha chút châm biếm.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 71,
    
        speaker: "Minho",
    
        nextId: 72,
    
        text: "Nông nghiệp hữu cơ thô sơ? Bạn lại muốn kéo tôi về thời kỳ làm ruộng nông nhàn sao? Nông nghiệp rất quan trọng để ổn định xã hội, nhưng nó không bao giờ giúp một quốc gia nghèo bứt tốc thành rồng công nghệ trong vài thập kỷ được. Đừng lẫn lộn giữa việc giữ gìn truyền thống và chiến lược bứt phá vĩ mô.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 72,
    
        speaker: "Bối cảnh",
    
        nextId: 73,
    
        text: "Min-ho quay lại bàn làm việc của mình, ngón tay anh gõ nhẹ lên một xấp biểu đồ tăng trưởng, những đường kẻ dốc đứng thể hiện tốc độ phát triển chóng mặt.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 73,
    
        speaker: "Minho",
    
        text: "Nhìn xem, chỉ trong vòng 20 đến 30 năm, cơ cấu kinh tế của chúng tôi đã thay đổi một cách kinh ngạc. Xu hướng chuyển dịch đúng theo nội dung cấu trúc ngành của giáo trình ở đây là gì?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Duy trì tỷ trọng nông nghiệp ở mức cao nhất để làm gốc, hạn chế sự bùng nổ của dịch vụ và công nghệ.",
                nextId: 74,
                score: 5,
            },
    
            {
                text: "B. Giảm nhanh tỷ trọng nông nghiệp truyền thống; tăng mạnh tỷ trọng công nghiệp chế biến, chế tạo công nghệ cao và các ngành dịch vụ hiện đại giá trị gia tăng lớn.",
                nextId: 77,
                score: 10,
            },
    
            {
                text: "C. Phát triển kinh tế bằng cách quốc hữu hóa toàn bộ các hiệu may mặc nhỏ lẻ.",
                nextId: 80,
                score: 0,
            },
        ],
    },
    
    {
        id: 74,
    
        speaker: "Bạn",
    
        nextId: 75,
    
        text: "Duy trì tỷ trọng nông nghiệp ở mức cao nhất để làm cái gốc vững chắc cho nền kinh tế, hạn chế sự bùng nổ của dịch vụ và công nghệ.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 75,
    
        speaker: "Minho",
    
        nextId: 76,
    
        text: "Các đi-ốt trên đầu Min-ho chớp nháy liên tục như một cảnh báo sai sót hệ thống. Anh lắc đầu, giọng dứt khoát.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 76,
    
        speaker: "Minho",
    
        nextId: 83,
    
        text: "Sai lầm lớn. Duy trì tỷ trọng nông nghiệp quá cao đồng nghĩa với việc tự nguyện dậm chân tại chỗ trong sự lạc hậu. Không một nước công nghiệp mới nào làm như vậy cả. Muốn giàu, bắt buộc phải công nghiệp hóa.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 77,
    
        speaker: "Bạn",
    
        nextId: 78,
    
        text: "Giảm nhanh tỷ trọng nông nghiệp truyền thống; tăng mạnh tỷ trọng công nghiệp chế biến, chế tạo công nghệ cao và các ngành dịch vụ hiện đại có giá trị gia tăng lớn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 78,
    
        speaker: "Minho",
    
        nextId: 79,
    
        text: "Các đường vi mạch trên đầu Min-ho lập tức chạy những làn sóng sáng rực rỡ, phản chiếu lên mặt bàn crom. Anh gật đầu tán thành.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 79,
    
        speaker: "Minho",
    
        nextId: 83,
    
        text: "Chính xác là xu hướng này. Từ một nước thuần nông, chúng tôi dồn lực dịch chuyển sang công nghiệp chế tạo và dịch vụ cao cấp. Khi giá trị của một con chip bán dẫn hay một chiếc ô tô gấp hàng vạn lần một bao gạo, thì cơ cấu ngành bắt buộc phải thay đổi để tối ưu hóa dòng tiền.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 80,
    
        speaker: "Bạn",
    
        nextId: 81,
    
        text: "Phá vỡ cấu trúc cũ bằng cách quốc hữu hóa toàn bộ các hiệu may mặc và xưởng thủ công nhỏ lẻ để tập trung quản lý.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 81,
    
        speaker: "Minho",
    
        nextId: 82,
    
        text: "Ánh LED trên đầu Min-ho chuyển sang màu lam trầm ngâm. Anh tựa lưng vào chiếc ghế của mình, tay gõ nhẹ cây bút bi xuống bàn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 82,
    
        speaker: "Minho",
    
        nextId: 83,
    
        text: "Bạn lại nhầm tôi với ông anh Alexei rồi. Việc gom các hiệu may nhỏ vào tay nhà nước không gọi là chuyển dịch cơ cấu kinh tế, đó chỉ là thay đổi hình thức sở hữu thôi. Cách làm đó không tạo ra ngành công nghiệp mới, cũng không thúc đẩy được năng suất lao động tăng trưởng theo quy mô lớn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 83,
    
        speaker: "Bối cảnh",
    
        nextId: 84,
    
        text: "Min-ho dùng nhíp gắp một con chip vi xử lý bọc gốm đen đặt lên lòng bàn tay bạn, những chân rết bằng vàng của nó lấp lánh dưới ánh đèn văn phòng. Anh gõ nhẹ ngón tay vào đầu bảng mạch của mình, mỉm cười đầy ẩn ý.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 84,
    
        speaker: "Minho",
    
        text: "Khi các nhà máy sản xuất linh kiện phần cứng đã chạy ổn định, chúng tôi không còn chỉ bán sức lao động lắp ráp nữa. Chúng tôi chuyển sang bán chất xám, bán thiết kế, bản quyền và phần mềm. Nền kinh tế dựa trực tiếp vào việc sản xuất, phân phối và sử dụng tri thức, thông tin này được gọi là gì?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Kinh tế tri thức.",
                nextId: 85,
                score: 10,
            },
    
            {
                text: "B. Kinh tế tự cung tự cấp.",
                nextId: 88,
                score: 5,
            },
    
            {
                text: "C. Nền sản xuất đại công nghiệp cơ khí hóa đại trà.",
                nextId: 91,
                score: 0,
            },
        ],
    },
    
    {
        id: 85,
    
        speaker: "Bạn",
    
        nextId: 86,
    
        text: "Đó chính là Kinh tế tri thức (Knowledge-based economy). Giai đoạn đỉnh cao mà giáo trình luôn nhắc tới khi công nghệ trở thành lực lượng sản xuất trực tiếp.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 86,
    
        speaker: "Minho",
    
        nextId: 87,
    
        text: "Các ống đèn Nixie trên đầu Min-ho nhảy số liên tục, phát ra loại ánh sáng ấm áp rực rỡ nhất từ trước đến nay. Giọng anh tràn đầy năng lượng.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 87,
    
        speaker: "Minho",
    
        nextId: 94,
    
        text: "Tuyệt vời! Thời đại này, ai nắm giữ tri thức, kẻ đó nắm giữ cuộc chơi. Máy móc có thể mua được bằng tiền, nhưng chất xám thì phải tự tích lũy. Khi giá trị của một hệ điều hành hay một thiết kế vi mạch vượt xa giá trị của đống sắt thép thô, tụi mình biết mình đã chạm tay vào tương lai.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 88,
    
        speaker: "Bạn",
    
        nextId: 89,
    
        text: "Đó là nền kinh tế tự cung tự cấp ở một trình độ cao hơn, tự sản xuất tự dùng mọi thứ.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 89,
    
        speaker: "Minho",
    
        nextId: 90,
    
        text: "Đèn LED trên đầu Min-ho lại chớp hời hợt một vài nháy cái rồi tắt ngúm, anh thở dài, khoanh tay quay mặt đi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 90,
    
        speaker: "Minho",
    
        nextId: 94,
    
        text: "Bán thiết kế và phần mềm ra toàn cầu mà bạn lại gọi là tự cung tự cấp sao? Tri thức là để chia sẻ, trao đổi và thu lợi nhuận từ khắp thế giới. Khái niệm này cơ bản quá, bạn phải xem lại bài học ngay thôi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 91,
    
        speaker: "Bạn",
    
        nextId: 92,
    
        text: "Đó là nền sản xuất đại công nghiệp cơ khí hóa đại trà, tập trung vào quy mô nhà máy khổng lồ.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 92,
    
        speaker: "Minho",
    
        nextId: 93,
    
        text: "Min-ho khẽ lắc đầu, dải sáng trên các đi-ốt cứ vậy hời hợt dần, vẽ rõ nên sự uể oải.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 93,
    
        speaker: "Minho",
    
        nextId: 94,
    
        text: "Bạn lại lùi về thời kỳ của các đại công xưởng khói bụi của thế kỷ trước rồi. Đại công nghiệp cơ khí hóa là sân chơi của gã James West thời kỳ sau. Còn ở đây, chúng tôi đang nói về thời đại mà một phần mềm nằm gọn trong chiếc đĩa mềm có thể điều hành cả một hệ thống nhà máy. Tri thức chứ không phải cơ bắp máy móc mới là cốt lõi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 94,
    
        speaker: "Bối cảnh",
    
        nextId: 95,
    
        text: "Giai điệu City Pop vui tươi từ chiếc máy cassette bỗng dừng lại. Min-ho chợt ôm lấy phần đầu vi mạch của mình, các ống đèn Nixie chớp nháy loạn xạ một cách bất ổn khi màn hình CRT hiển thị biểu đồ thị trường chứng khoán Đông Á đang lao dốc với những cây nến đỏ rực.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 95,
    
        speaker: "Minho",
    
        text: "Tốc độ bứt phá nhanh quá cũng có cái giá của nó. Một nền kinh tế hướng về xuất khẩu, mở cửa tối đa và phụ thuộc nhiều vào dòng vốn nước ngoài như tôi... rất sợ căn bệnh chí mạng nào?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Khủng hoảng thiếu lương thực do người dân không biết trồng lúa.",
                nextId: 96,
                score: 5,
            },
    
            {
                text: "B. Khủng hoảng tài chính, bong bóng bất động sản và sự tổn thương lớn khi thị trường thế giới có biến động hoặc suy thoái.",
                nextId: 99,
                score: 10,
            },
    
            {
                text: "C. Sự kìm hãm do thể chế kế hoạch hóa tập trung không cho phép dòng vốn di chuyển.",
                nextId: 102,
                score: 0,
            },
        ],
    },
    
    {
        id: 96,
    
        speaker: "Bạn",
    
        nextId: 97,
    
        text: "Có phải là khủng hoảng thiếu lương thực do người dân mải làm công nghệ mà quên mất cách trồng lúa không?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 97,
    
        speaker: "Minho",
    
        nextId: 98,
    
        text: "Ánh sáng bất ổn trên đầu Min-ho khựng lại một nhịp, anh buông tay ra, nhìn bạn với vẻ dở khóc dở cười.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 98,
    
        speaker: "Minho",
    
        nextId: 105,
    
        text: "Thiếu lương thực sao? Không đâu, khi chúng tôi giàu lên, tiền ngoại tệ kiếm được đủ để nhập khẩu những loại gạo ngon nhất thế giới. Vấn đề của tôi phức tạp và đáng sợ hơn nhiều so với việc thiếu ăn vật lý như thời nguyên thủy.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 99,
    
        speaker: "Bạn",
    
        nextId: 100,
    
        text: "Khủng hoảng tài chính, bong bóng bất động sản và sự tổn thương cực lớn khi thị trường thế giới biến động hoặc các nhà đầu tư ngoại quốc đột ngột rút vốn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 100,
    
        speaker: "Minho",
    
        nextId: 101,
    
        text: "Min-ho thở hắt ra một hơi, luồng sáng trên các đi-ốt dịu xuống.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 101,
    
        speaker: "Minho",
    
        nextId: 105,
    
        text: "Bạn đã chỉ đúng vết thương của tôi rồi. Năm 1997, căn bệnh đó đã suýt chút nữa đánh sập toàn bộ kỳ tích mà chúng tôi xây dựng. Mở cửa đón dòng vốn ngoại giống như chơi với dao hai lưỡi, chỉ cần thế giới hắt hơi là nền kinh tế của tụi mình lập tức phát sốt. Đó là cái giá phải trả cho sự phụ thuộc vào quỹ đạo toàn cầu.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 102,
    
        speaker: "Bạn",
    
        nextId: 103,
    
        text: "Sự kìm hãm do thể chế kế hoạch hóa tập trung bao cấp, không cho phép dòng vốn tư nhân di chuyển tự do.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 103,
    
        speaker: "Minho",
    
        nextId: 104,
    
        text: "Min-ho lắc nhẹ cái đầu bảng mạch, các tia sáng neon ổn định trở lại.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 104,
    
        speaker: "Minho",
    
        nextId: 105,
    
        text: "Bạn quên mất là chúng tôi đang vận hành theo cơ chế thị trường rồi sao? Làm gì có thể chế bao cấp nào ở đây mà kìm hãm. Vấn đề của tôi không phải là không cho dòng vốn di chuyển, mà ngược lại, là vốn ngoại di chuyển quá nhanh, đầu cơ quá mức tạo thành bong bóng tài chính rồi đột ngột tháo chạy.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },

    {
        id: 105,
    
        speaker: "Bối cảnh",
    
        nextId: 106,
    
        text: "Ánh đèn neon rực rỡ từ con phố đêm nô nức tiến vào trong căn phòng, phản chiếu bóng dáng trẻ trung, đầy tham vọng của Min-ho. Sự bất ổn của cơn khủng hoảng tài chính qua đi, con chip trung tâm trên đầu anh lại rực lên ánh sáng của sự kiêu hãnh. Anh tiến lại gần, chìa bàn tay về phía bạn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 106,
    
        speaker: "Minho",
    
        text: "Chúng ta đã thực hiện chiến lược đi tắt đón đầu thành công để biến quốc gia này thành một con rồng kinh tế. Giờ đây, thế giới đang chuyển mình sang cuộc Cách mạng công nghiệp 4.0 với AI, Big Data và IoT. Bạn sẽ cùng tôi nâng cấp nền kinh tế này lên một tầm cao hoàn toàn mới chứ?",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Không, hãy dừng lại ở việc lắp ráp gia công thuê cho người khác mãi mãi để đỡ phải suy nghĩ.",
                nextId: 107,
                score: 5,
            },
    
            {
                text: "B. Hãy quay về đập phá hết máy tính, đóng cửa biên giới để không bị khủng hoảng tài chính thế giới tác động.",
                nextId: 110,
                score: 0,
            },
    
            {
                text: "C. Tiếp tục đẩy mạnh nghiên cứu R&D (nghiên cứu và phát triển), làm chủ công nghệ cốt lõi của 4.0, phát triển kinh tế số và hướng tới sự phát triển bền vững, nhân văn.",
                nextId: 113,
                score: 10,
            },
        ],
    },
    
    {
        id: 107,
    
        speaker: "Bạn",
    
        nextId: 108,
    
        text: "Bạn rụt tay lại, lắc đầu từ chối. Không, hãy cứ dừng lại ở việc lắp ráp, gia công thuê cho các thương hiệu lớn mãi mãi đi. Làm thế cho an toàn, đỡ phải suy nghĩ nhức đầu.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 108,
    
        speaker: "Minho",
    
        nextId: 109,
    
        text: "Bàn tay của Min-ho khựng lại giữa không trung, ánh LED trên đầu anh truyền thể đầy chán ngán.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 109,
    
        speaker: "Minho",
    
        text: "Nếu dừng lại ở đó, chúng ta sẽ chính thức rơi vào 'Bẫy thu nhập trung bình'. Khi chi phí nhân công tăng lên, các tập đoàn nước ngoài sẽ bỏ chúng ta để sang những nước nghèo hơn. An toàn kiểu đó chính là sự tự sát từ từ. Tôi không bao giờ chấp nhận đứng yên để chờ chết.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 110,
    
        speaker: "Bạn",
    
        nextId: 111,
    
        text: "Để không bao giờ bị khủng hoảng tài chính thế giới tác động nữa, tốt nhất hãy đập phá hết máy tính, đóng cửa biên giới và quay về thời kỳ tự cung tự cấp.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 111,
    
        speaker: "Minho",
    
        nextId: 112,
    
        text: "Min-ho bật cười, một nụ cười đầy sự kiêu hãnh của một kẻ thuộc về thời đại công nghệ. Anh thu tay lại, đút vào túi quần.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 112,
    
        speaker: "Minho",
    
        text: "Đập phá máy tính và đóng cửa biên giới sao? Đó là tư duy sợ hãi của kẻ thất bại. Trốn tránh dòng chảy lịch sử chưa bao giờ là cách làm của một con rồng kinh tế. Chúng ta đã đi xa đến mức này, không bao giờ có đường lùi.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 113,
    
        speaker: "Bạn",
    
        nextId: 114,
    
        text: "Bạn mỉm cười, dứt khoát bắt lấy tay anh. Chắc chắn rồi. Tiếp tục đẩy mạnh nghiên cứu R&D, làm chủ công nghệ cốt lõi của 4.0, phát triển mạnh mẽ kinh tế số và hướng tới sự phát triển bền vững, nhân văn.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 114,
    
        speaker: "Minho",
    
        nextId: 115,
    
        text: "Cú bắt tay chặt chẽ làm toàn bộ hệ thống đèn LED và các ống Nixie trên đầu Min-ho bùng nổ một thứ ánh sáng lộng lẫy và uy nghiêm. Giọng anh vang lên, đầy sức hút và sự háo hức.",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
    
    {
        id: 115,
    
        speaker: "Minho",
    
        text: "Tuyệt vời! Đó mới chính là câu trả lời mà tôi mong đợi. Không dừng lại ở việc làm thuê, tụi mình phải là kẻ tạo ra cuộc chơi mới. Dùng sức mạnh của công nghệ số để bứt phá, nhưng lần này phải bền vững và vững vàng hơn trước sóng gió toàn cầu. Đi thôi, tương lai đang chờ tụi mình làm chủ!",
    
        background: minhoroom,
    
        characters: [
            {
                id: "Minho",
                image: Minho,
                position: "center",
            },
        ],
    },
]