import codien from "../../assets/backgrounds/CoDienJames.png";
import James from "../../assets/characters/James.png";

export const jamesStory = [
    {
        id: 1,

        speaker: "Bối cảnh",

        nextId: 2,

        text: "Tiếng mưa gõ liên hồi nơi cửa kính như hễ hối giục bạn mau mau mà mở cánh cửa trước mặt.",

        background: codien,

        characters: [
        ],
    },

    {
        id: 2,

        speaker: "Bối cảnh",

        nextId: 3,

        text: "Nhiệm vụ lần này đưa bạn về lại với thời kỳ Cách Mạng Công Nghiệp Anh, cuộc cách mạng công nghiệp lần thứ nhất. Công việc của bạn là trao đổi về thực trạng của dòng thời gian này với James Steele West, hiện thân của Mô Hình Công Nghiệp Hóa Cổ Điển.",

        background: codien,

        characters: [
        ],
    },

    {
        id: 3,

        speaker: "Bối cảnh",

        nextId: 4,

        text: "Bạn cố ghé nhìn London buổi tối đó một lần nữa, nhưng ngoài cửa sổ chỉ hiện lên làn mưa trắng xóa, phủ mịn cả con phố đêm.",

        background: codien,

        characters: [
        ],
    },

    {
        id: 4,

        speaker: "Bối cảnh",

        nextId: 5,

        text: "*Cạch*",

        background: codien,

        characters: [
        ],
    },

    {
        id: 5,

        speaker: "Bối cảnh",

        nextId: 6,

        text: "Cánh cửa gỗ Gụ chậm trãi mở, từ tốn đắp lấy người bạn hơi ấm và ánh vàng của lò sưởi bên trong.",

        background: codien,

        characters: [
        ],
    },

    {
        id: 6,

        speaker: "Bối cảnh",

        nextId: 7,

        text: "Đứng kế chiếc lò sưởi là một người đàn ông cao ráo và lịch lãm, đăm chiêu pha trà, anh khoác trên mình bộ cánh sang trọng như hễ sắp sửa đi dự tiệc cho một buổi đêm đẹp trời.",

        background: codien,

        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 7,

        speaker: "James",

        nextId: 8,

        text: "Bạn thật biết cách khiến đối phương phải hồi hộp nhỉ.",

        background: codien,

        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 8,

        speaker: "Bối cảnh",

        nextId: 9,

        text: "Mặc cho diện trên mình bộ đồ tươm tấp, chỉnh chu, nhưng James hiện rõ thái độ không mấy thiện chí, mất kiên nhẫn, giống như anh ta đã có một ngày đầy ắp công việc mệt mỏi và buổi hẹn với bạn dường như là mồi lửa cuối của ngày hôm nay.",

        background: codien,

        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 9,

        speaker: "James",

        nextId: 10,

        text: "Xin thứ lỗi nhưng tôi hiện tại không còn đủ thời gian để xã giao chuyện phím, xin phép chúng ta được vào thẳng vấn đề của buổi họp hôm nay.",

        background: codien,

        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 10,

        speaker: "James",

        nextId: 11,

        text: "James đặt hai tách trà xuống bàn và chỉ thị bạn ngồi xuống đối diện anh.",

        background: codien,

        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 11,
    
        speaker: "James",
    
        text: "Trước tiên, tôi xin được phép hiểu rõ thêm về đối phương đã khiến tôi xếp đặt lịch hẹn nơi khung giờ này, mặc cho lịch trình dày đặc của bản thân. Bản thân tôi không thể dư giả thời gian cho những kẻ mơ mộng hay lờ mờ. Để bắt đầu tích lũy tư bản cho Công Nghiệp Hóa, mô hình cổ điển của tôi luôn tuân theo một trật tự nghiêm ngặt. Theo bạn, tôi bắt đầu từ ngành nào?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Bắt đầu tuần tự từ các ngành công nghiệp nhẹ (như dệt, may mặc, chế biến thực phẩm) vì cần ít vốn, thu lợi nhuận nhanh để tích lũy.",
                nextId: 12,
                score: 10,
            },
    
            {
                text: "B. Bắt đầu ngay bằng việc dồn toàn lực xây dựng các nhà máy công nghiệp nặng khổng lồ như luyện kim, chế tạo máy và khai khoáng.",
                nextId: 15,
                score: 5,
            },
    
            {
                text: "C. Bắt đầu bằng việc đóng cửa biên giới, không giao thương với ai và chỉ tập trung vào nông nghiệp hữu cơ.",
                nextId: 18,
                score: 0,
            },
        ],
    },
    
    {
        id: 12,
    
        speaker: "Bạn",
    
        nextId: 13,
    
        text: "Ngành công nghiệp nhẹ, đặc biệt là dệt may và chế biến. Thưa ngài West, vốn đầu tư ban đầu cho những ngành này không quá lớn, tốc độ quay vòng vốn lại nhanh, giúp ngài dễ dàng thu lợi nhuận ngắn hạn để tạo bước đệm tích lũy tư bản.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 13,
    
        speaker: "James",
    
        nextId: 14,
    
        text: "Làn khói từ tẩu thuốc vừa châm vẽ lên một đường cong thỏa mãn trong không trung, James nhẹ nhàng đặt tẩu thuốc xuống nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 14,
    
        speaker: "James",
    
        nextId: 21,
    
        text: "Rất tốt. Công nghiệp nhẹ chính là đòn bẩy tối ưu để tối thiểu hóa rủi ro ban đầu. Phải có dòng tiền vững chắc từ những thước vải dệt, ta mới đủ tiềm lực tài chính để đổ vào luyện kim và hạ tầng nặng.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 15,
    
        speaker: "Bạn",
    
        nextId: 16,
    
        text: "Chắc là công nghiệp nặng rồi. Phải dồn toàn lực xây dựng các nhà máy luyện kim, chế tạo máy và khai khoáng quy mô lớn ngay từ đầu thì mới tạo ra cái gốc vững chắc cho nền kinh tế!",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 16,
    
        speaker: "James",
    
        nextId: 17,
    
        text: "James không đặt xuống tẩu thuốc vừa châm, cũng không nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 17,
    
        speaker: "James",
    
        nextId: 21,
    
        text: "Một kế hoạch vĩ đại, nhưng tiếc thay lại đặt sai thời đại. Bạn đang lầm tưởng chúng tôi có một ngân khố quốc gia vô hạn đứng sau bảo trợ sao? Đổ vốn vào công nghiệp nặng ngay từ vạch xuất phát là đặc quyền của những mô hình mệnh lệnh thế kỷ sau. Ở đây, chúng tôi tôn trọng quy luật tích lũy tuần tự.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 18,
    
        speaker: "Bạn",
    
        nextId: 19,
    
        text: "Tôi nghĩ anh nên đóng cửa biên giới lại, tự cung tự cấp và tập trung toàn bộ lực lượng vào làm nông nghiệp hữu cơ để đảm bảo an ninh lương thực trước đã.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 19,
    
        speaker: "James",
    
        nextId: 20,
    
        text: "James West khựng lại, anh ta nhìn bạn một hồi lâu rồi thở dài đặt xuống tẩu thuốc vừa châm.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 20,
    
        speaker: "James",
    
        nextId: 21,
    
        text: "Đóng cửa biên giới? Trở lại với kinh tế tự cấp tự túc? Thật là một bước lùi sơ khai đáng thất vọng. Nước Anh thống trị đại dương bằng thương mại và cơ khí, chứ không tồn tại để thu mình trong những nông trại trung cổ. Hãy tranh luận bằng tư duy vĩ mô, đừng dùng sự ngây thơ để làm mất thời gian của tôi.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 21,
    
        speaker: "Bối cảnh",
    
        nextId: 22,
    
        text: "James nhẹ nhàng đứng dậy, thư thái tiến lại gần ô cửa sổ nhìn trọn cảnh các xưởng dệt đang hoạt động hết công suất mặc cho đêm mưa. Anh quay sang nhìn bạn, tay vén gọn bức màn nhung, để lộ toàn cảnh màn đêm hối hả của những con người còn trụ lại xưởng dệt.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 22,
    
        speaker: "James",
    
        text: "Hãy nhìn những công nhân kia đi. Chính cuộc cách mạng của tôi đang thay đổi hoàn toàn cách thế giới này vận hành. Vậy theo bạn, định nghĩa chuẩn xác nhất về Công nghiệp hóa cổ điển là gì?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang lao động bằng máy móc để tạo ra năng suất vượt trội.",
                nextId: 23,
                score: 10,
            },
    
            {
                text: "B. Là quá trình tự động hóa và tin học hóa toàn diện dựa trên internet và các chip bán dẫn siêu nhỏ.",
                nextId: 26,
                score: 5,
            },
    
            {
                text: "C. Là việc giữ nguyên cách làm thủ công nhưng thuê thêm thật nhiều nhân công để tăng số lượng sản phẩm.",
                nextId: 29,
                score: 0,
            },
        ],
    },
    
    {
        id: 23,
    
        speaker: "Bạn",
    
        nextId: 24,
    
        text: "Bản chất của cuộc cách mạng này chính là chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công, cơ bắp là chính sang lao động bằng máy móc, giải phóng sức sản xuất và tạo ra năng suất vượt trội.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 24,
    
        speaker: "James",
    
        nextId: 25,
    
        text: "James đứng thẳng người, tay anh chỉnh lại chiếc khuy măng-sét bằng bạc, hướng ánh nhìn ra cửa sổ kiêu hãnh.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 25,
    
        speaker: "James",
    
        nextId: 32,
    
        text: "Định nghĩa hoàn hảo. Sức người là hữu hạn và bất ổn, nhưng cơ khí hóa là hằng số của sự phát triển. Chuyển dịch từ thủ công sang đại công nghiệp chính là nấc thang tiến hóa tất yếu để tái cấu trúc lại năng suất của toàn nhân loại.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 26,
    
        speaker: "Bạn",
    
        nextId: 27,
    
        text: "Đó là một quá trình tự động hóa và tin học hóa toàn diện, vận hành dựa trên hệ thống internet toàn cầu và các chip bán dẫn siêu nhỏ để tối ưu hóa dây chuyền.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 27,
    
        speaker: "James",
    
        nextId: 28,
    
        text: "James nhìn bạn với vẻ dò xét một học thuyết quá xa vời.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 28,
    
        speaker: "James",
    
        nextId: 32,
    
        text: "Internet? Chip bán dẫn? Bạn đang mang đến văn phòng của tôi những khái niệm viễn tưởng mang tính nhảy vọt của một kỷ nguyên số hóa. Hãy nhìn vào thực tại, thế giới này đang được vận hành bằng lực kéo của piston và áp suất hơi nước. Đừng để tư duy bị lạc lối giữa những làn sóng tương lai.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 29,
    
        speaker: "Bạn",
    
        nextId: 30,
    
        text: "Năng suất tăng lên đơn giản là vì giữ nguyên cách làm thủ công cũ nhưng thông minh hơn: thuê thêm thật nhiều nhân công vào xưởng để nhân bản số lượng sản phẩm lên!",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 30,
    
        speaker: "James",
    
        nextId: 31,
    
        text: "James khẽ thở dài, anh quay lưng với bạn, rõ vẻ thất vọng.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 31,
    
        speaker: "James",
    
        nextId: 32,
    
        text: "Tăng trưởng theo chiều rộng bằng cách tích lũy lao động thô sơ? Đó không phải là cách mạng, đó chỉ là sự bành trướng của sự lạc hậu. Sức mạnh của tư bản nằm ở chỗ dùng một cỗ máy để thay thế trăm vạn cánh tay, chứ không phải biến công xưởng thành một hội chợ thủ công hỗn loạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 32,
    
        speaker: "Bối cảnh",
    
        nextId: 33,
    
        text: "James quay lại ngồi đối diện bạn, từ tốn cầm lên tách trà, bỗng dưng bầu không khí quanh cả hai như thay đổi. *Cách!* Tiếng tách trà va xuống đĩa sứ làm bạn giật mình, đột nhiên sống lưng bạn bắt đầu lạnh tuốt mặc cho lò sưởi vẫn thế cháy sáng. James mồi thêm cho tẩu thuốc, hống hách vắt chân ngồi nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 33,
    
        speaker: "James",
    
        text: "Để có hàng triệu bảng Anh đổ vào các nhà máy chế tạo máy hơi nước, mô hình cổ điển của chúng tôi đã phải lấy nguồn vốn từ những đâu? Hãy thẳng thắn, tôi không thích những lời đạo đức giả.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Từ các khoản viện trợ không hoàn lại của các tổ chức tài chính quốc tế và Ngân hàng Thế giới.",
                nextId: 34,
                score: 0,
            },
    
            {
                text: "B. Từ việc thu hút dòng vốn đầu tư nước ngoài (FDI) bằng cách mở cửa thị trường và thực hiện chiến lược hướng về xuất khẩu.",
                nextId: 37,
                score: 5,
            },
    
            {
                text: "C. Từ việc bóc lột giá trị thặng dư của người lao động trong nước, rào đất cướp ruộng (phong trào cừu ăn thịt người) và xâm chiếm, vơ vét thuộc địa.",
                nextId: 40,
                score: 10,
            },
        ],
    },
    
    {
        id: 34,
    
        speaker: "Bạn",
    
        nextId: 35,
    
        text: "À thì… nguồn vốn đến từ các khoản viện trợ không hoàn lại hoặc các gói vay ưu đãi từ Ngân hàng Thế giới và các tổ chức tài chính quốc tế nhỉ?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 35,
    
        speaker: "James",
    
        nextId: 36,
    
        text: "“Ha! Ngân hàng Thế giới? Viện trợ quốc tế?” James bật hơi cười khẩy, hất cằm lên nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 36,
    
        speaker: "James",
    
        nextId: 43,
    
        text: "Bạn đang lãng mạn hóa nền kinh tế chính trị bằng những tổ chức của tương lai sao? Ở thời đại bản lề này, dòng vốn chỉ dịch chuyển bằng sức mạnh quyền lực và các khế ước thương mại cốt lõi, không có chỗ cho sự từ thiện vĩ mô.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 37,
    
        speaker: "Bạn",
    
        nextId: 38,
    
        text: "Tôi đoán anh đã khéo léo thu hút các dòng vốn đầu tư nước ngoài (FDI), mở cửa thị trường nội địa và thực hiện chiến lược hướng về xuất khẩu để tích lũy ngoại tệ.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 38,
    
        speaker: "James",
    
        nextId: 39,
    
        text: "James bật hơi cười khẩy, tay lắc lư cái tẩu thuốc gỗ quý của mình.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 39,
    
        speaker: "James",
    
        nextId: 43,
    
        text: "Thu hút đầu tư FDI? Một góc nhìn thú vị của thời đại hội nhập toàn cầu. Nhưng hình như bạn quên rằng, ở thế kỷ này, London chính là trung tâm tài chính duy nhất phát tín hiệu. Chúng tôi đi định đoạt và thâu tóm dòng vốn của thế giới, chứ không ngồi đợi các 'tập đoàn quốc tế' đến ban phát cơ hội.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 40,
    
        speaker: "Bạn",
    
        nextId: 41,
    
        text: "Hãy nhìn thẳng vào sự thật: nguồn vốn khổng lồ đó đến từ việc bóc lột giá trị thặng dư của công nhân trong nước, từ phong trào rào đất cướp ruộng biến nông dân thành công nhân, và từ việc xâm chiếm, vơ vét của cải ở các nước thuộc địa.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 41,
    
        speaker: "James",
    
        nextId: 42,
    
        text: "Ánh lửa từ lò sưởi hắt lên góc mặt anh ta, James im lặng nhìn bạn một hồi lâu rồi nói.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 42,
    
        speaker: "James",
    
        nextId: 43,
    
        text: "Xuất sắc! Tôi đánh giá cao sự thẳng thắn học thuật này. Lịch sử của sự tích lũy nguyên thủy chưa bao giờ được viết bằng những lời răn dạy đạo đức. Thuộc địa hải ngoại và sự chuyển dịch lao động trong nước chính là những dòng máu nuôi sống các bánh răng của tôi.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 43,
    
        speaker: "James",
    
        text: "Thế bạn cũng đã biết rằng mô hình cổ điển của chúng tôi là người đi tiên phong, mở đường cho nhân loại nên không thể đi tắt. Vậy bạn có biết là quá trình Công Nghiệp Hóa của các nước tư bản cổ điển như tôi thường kéo dài trong bao lâu không?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Rất nhanh, chỉ mất khoảng 5 đến 10 năm nhờ vào việc áp dụng các kế hoạch tập trung của Nhà nước.",
                nextId: 44,
                score: 0,
            },
    
            {
                text: "B. Diễn ra trong khoảng thời gian khá dài, thường mất từ 60 đến 80 năm do phải đi tuần tự và tự mò mẫm công nghệ.",
                nextId: 47,
                score: 10,
            },
    
            {
                text: "C. Diễn ra trong khoảng 20 - 30 năm bằng cách đi tắt đón đầu, nhập khẩu công nghệ hiện đại từ các nước đi trước.",
                nextId: 50,
                score: 5,
            },
        ],
    },
    
    {
        id: 44,
    
        speaker: "Bạn",
    
        nextId: 45,
    
        text: "Quá trình này diễn ra rất nhanh chóng, chỉ mất khoảng 5 đến 10 năm nhờ vào việc áp dụng các kế hoạch tập trung, nghiêm ngặt của chính phủ Nhà nước.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 45,
    
        speaker: "James",
    
        nextId: 46,
    
        text: "James nhìn vào chiếc đồng hồ quả quýt bằng vàng, giọng điệu mệt nhoài đáp.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 46,
    
        speaker: "James",
    
        nextId: 54,
    
        text: "5 đến 10 năm bằng mệnh lệnh của chính phủ? Bạn đang lầm tưởng đại công nghiệp là một công trình dựng tạm bằng gạch đá sao? Tư duy đốt cháy giai đoạn một cách ngây thơ như vậy chỉ tồn tại trong tâm trí của những kẻ chưa từng chạm tay vào guồng quay thực tế.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 47,
    
        speaker: "Bạn",
    
        nextId: 48,
    
        text: "Nền kinh tế của anh bắt buộc phải diễn ra trong một tiến trình dài hạn, kéo dài từ 60 đến 80 năm. Là người khai phá, anh không có một hình mẫu đi trước nào để sao chép, mọi công nghệ và thị trường đều phải tự mày mò, thử sai từ con số không.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 48,
    
        speaker: "James",
    
        nextId: 49,
    
        text: "James thả một làn khói thuốc trắng bay bảng lảng vào không trung, thanh âm trầm xuống đầy suy tư.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 49,
    
        speaker: "James",
    
        nextId: 54,
    
        text: "Một nhận định sâu sắc. Kẻ mở đường luôn phải trả học phí bằng thời gian và sự kiên định. Gần một thế kỷ tự mò mẫm cấu trúc công nghệ... đó là cái giá tất yếu để chúng tôi tạo ra một bước ngoặt lịch sử không thể đảo ngược.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 50,
    
        speaker: "Bạn",
    
        nextId: 51,
    
        text: "Tôi nghĩ cần khoảng 20 đến 30 năm bằng cách thực hiện chiến lược đi tắt đón đầu, chủ động nhập khẩu các dây chuyền công nghệ hiện đại nhất từ các nước đi trước.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 51,
    
        speaker: "James",
    
        nextId: 52,
    
        text: "James khẽ gõ nhẹ chiếc tẩu thuốc xuống khay bạc, giọng điệu thoáng chút ngạo nghễ.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 52,
    
        speaker: "James",
    
        nextId: 54,
    
        text: "Đi tắt đón đầu? Nhập khẩu công nghệ? Bạn đang quên rằng London lúc này chính là đỉnh cao của nền văn minh cơ khí sao? Khắp thế giới này làm gì có một quốc gia nào đi trước tôi để mà ngửa tay nhập khẩu?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 54,
    
        speaker: "Bối cảnh",
    
        nextId: 55,
    
        text: "James với tay cầm lấy xấp giấy trên cái bàn gỗ gần đó. Anh lật ra một bản thiết kế động cơ điện và dây chuyền lắp ráp hàng loạt rồi truyền qua cho bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 55,
    
        speaker: "James",
    
        text: "Khi mô hình của tôi tiến sang cuộc Cách mạng công nghiệp lần thứ hai (2.0), nội dung cốt lõi và nguồn năng lượng chính có sự thay đổi thế nào?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Chuyển sang nền sản xuất điện - cơ khí, tổ chức sản xuất theo dây chuyền hàng loạt dựa trên năng lượng điện và động cơ đốt trong.",
                nextId: 56,
                score: 10,
            },
    
            {
                text: "B. Vẫn giữ máy hơi nước làm trung tâm và tập trung phát triển các ngành thủ công mỹ nghệ.",
                nextId: 59,
                score: 0,
            },
    
            {
                text: "C. Chuyển sang kết hợp hệ thống thực và ảo, sử dụng trí tuệ nhân tạo (AI) và dữ liệu lớn để điều hành xưởng dệt.",
                nextId: 62,
                score: 5,
            },
        ],
    },
    
    {
        id: 56,
    
        speaker: "Bạn",
    
        nextId: 57,
    
        text: "Nền sản xuất sẽ dịch chuyển sang hệ thống điện - cơ khí. Trọng tâm là tổ chức sản xuất theo dây chuyền hàng loạt đại quy mô, vận hành bằng năng lượng điện và động cơ đốt trong thay thế cho máy hơi nước.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 57,
    
        speaker: "James",
    
        nextId: 58,
    
        text: "James gật đầu mãn nguyện.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 58,
    
        speaker: "James",
    
        nextId: 65,
    
        text: "Tư duy cũng xuất sắc gớm nhỉ. Khi dòng điện thay thế áp suất hơi nước, các nhà máy sẽ vận hành không nghỉ, năng suất sẽ được nhân lên theo cấp số nhân. Đó chính là chương tiếp theo trong cuốn đại sách của tư bản.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 59,
    
        speaker: "Bạn",
    
        nextId: 60,
    
        text: "Tôi nghĩ mô hình của anh vẫn nên giữ máy hơi nước làm trung tâm, nhưng tập trung tối đa vào việc phục hưng và phát triển các ngành thủ công mỹ nghệ truyền thống.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 60,
    
        speaker: "James",
    
        nextId: 61,
    
        text: "James khựng người ngước nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 61,
    
        speaker: "James",
    
        nextId: 65,
    
        text: "Giữ lại máy hơi nước và hoài cổ với thủ công mỹ nghệ? Tôi là nhà tư bản, mục tiêu của tôi là năng suất vĩ mô chứ không phải những món đồ lưu niệm xa xỉ của giới quý tộc lỗi thời. Kẻ nào từ chối sự tiến hóa của năng lượng mới sẽ bị bánh xe lịch sử nghiền nát.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 62,
    
        speaker: "Bạn",
    
        nextId: 63,
    
        text: "Nền kinh tế sẽ kết hợp hệ thống thực và ảo, sử dụng trí tuệ nhân tạo (AI) cùng dữ liệu lớn (Big Data) để điều hành trực tiếp các xưởng dệt.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 63,
    
        speaker: "James",
    
        nextId: 64,
    
        text: "James cuộn bản thiết kế lại một cách dứt khoát, giọng nói pha chút nghiêm nghị.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 64,
    
        speaker: "James",
    
        nextId: 65,
    
        text: "Hệ thống thực ảo? Trí tuệ nhân tạo? Bạn có vẻ chưa quen được với khoảng thời gian bạn đang ghé qua nhỉ. Xin hãy tập trung vào những thực thể cơ khí hữu hình trước mắt, đừng để tâm trí bay bổng quá xa thực tại.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 65,
    
        speaker: "Bối cảnh",
    
        nextId: 66,
    
        text: "James đột nhiên đứng dậy, vừa tinh chỉnh lại y phục anh vừa bước lại gần bạn. \"Có vẻ bạn cũng rất mong muốn được làm việc với tôi nên mới còn đủ can đảm để ngồi lại đây sau bao nhiêu câu hỏi kia nhỉ.\" Nói rồi James tựa lưng vào vành lò sưởi, khoanh tay nhìn bạn tiếp chuyện.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 66,
    
        speaker: "James",
    
        text: "Cũng khen cho đấy, vậy tiếp theo hãy cho tôi biết, trong nền kinh tế của tôi, ai là người nắm giữ tư liệu sản xuất và quyền quyết định vận mệnh của các nhà máy?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Các hợp tác xã nông nghiệp và các hộ gia đình sản xuất nhỏ lẻ ở nông thôn.",
                nextId: 67,
                score: 0,
            },
    
            {
                text: "B. Giai cấp tư sản sở hữu tư nhân về tư liệu sản xuất, vận hành theo quy luật tự do cạnh tranh của thị trường tư bản.",
                nextId: 70,
                score: 10,
            },
    
            {
                text: "C. Nhà nước nắm giữ 100% tư liệu sản xuất và phân bổ nguồn lực theo mệnh lệnh tập trung.",
                nextId: 73,
                score: 5,
            },
        ],
    },
    
    {
        id: 67,
    
        speaker: "Bạn",
    
        nextId: 68,
    
        text: "Tất nhiên là các hợp tác xã nông nghiệp và các hộ gia đình sản xuất nhỏ lẻ, thủ công ở các vùng nông thôn rồi. Họ mới là người làm chủ đất nước chứ.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 68,
    
        speaker: "James",
    
        nextId: 69,
    
        text: "James nhìn bạn, người như cứng lại trước câu trả lời bạn đưa ra.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 69,
    
        speaker: "James",
    
        nextId: 76,
    
        text: "Hợp tác xã và kinh tế hộ gia đình manh mún? Đó là tàn dư của chế độ phong kiến lỗi thời cần phải được giải phóng. Tương lai của nhân loại bây giờ đã được định hình trong các đại công xưởng tập trung, nơi dòng vốn được tối ưu hóa ở quy mô lớn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 70,
    
        speaker: "Bạn",
    
        nextId: 71,
    
        text: "Quyền lực tối cao thuộc về giai cấp tư sản - những người sở hữu tư nhân về tư liệu sản xuất. Nền kinh tế sẽ được vận hành hoàn toàn theo quy luật tự do cạnh tranh của thị trường.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 71,
    
        speaker: "James",
    
        nextId: 72,
    
        text: "James gật đầu trước câu trả lời của bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 72,
    
        speaker: "James",
    
        nextId: 76,
    
        text: "Chính xác. Quyền sở hữu tư nhân là tối thượng, và tự do cạnh tranh là bàn lọc tự nhiên của thị trường. Kẻ sở hữu tư liệu sản xuất chính là kẻ nắm quyền định đoạt dòng chảy của nền văn minh này.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 73,
    
        speaker: "Bạn",
    
        nextId: 74,
    
        text: "Tôi nghĩ Nhà nước mới là người nắm giữ 100% tư liệu sản xuất, đứng ra điều phối và phân bổ mọi nguồn lực, nguyên vật liệu theo một mệnh lệnh tập trung thống nhất.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 74,
    
        speaker: "James",
    
        nextId: 75,
    
        text: "James thở dài, giọng nói lộ rõ sự nghiêm nghị của một nhà lập pháp tư bản.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 75,
    
        speaker: "James",
    
        nextId: 76,
    
        text: "Quốc hữu hóa toàn diện và quản lý theo mệnh lệnh hành chính? Thật là một cơ chế ngột ngạt và triệt tiêu động lực phát triển. Nhà nước chỉ nên là người bảo vệ luật chơi và các giao kèo thương mại, chứ không bao giờ được phép thay thế thị trường.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 76,
    
        speaker: "Bối cảnh",
    
        nextId: 77,
    
        text: "James liếc nhìn chiếc đồng hồ đặt trên kệ sách, xong quay lại nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 77,
    
        speaker: "James",
    
        text: "Vậy sự bùng nổ của các đô thị công nghiệp như Manchester hay Birmingham dưới thời của tôi đã làm biến đổi sâu sắc cấu trúc xã hội. Sự phân hóa giai cấp rõ rệt nhất ở đây là gì?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Sự hình thành và đối đầu gay gắt giữa hai giai cấp: Giai cấp Tư sản và Giai cấp Vô sản.",
                nextId: 78,
                score: 10,
            },
    
            {
                text: "B. Sự hòa hợp tuyệt đối giữa tầng lớp quý tộc phong kiến và nông dân, không có bất kỳ mâu thuẫn nào.",
                nextId: 81,
                score: 0,
            },
    
            {
                text: "C. Sự xuất hiện của tầng lớp lao động tri thức và các chuyên gia công nghệ thông tin chiếm đại đa số xã hội.",
                nextId: 84,
                score: 5,
            },
        ],
    },
    
    {
        id: 78,
    
        speaker: "Bạn",
    
        nextId: 79,
    
        text: "Sự bùng nổ của các đô thị công nghiệp lớn tất yếu dẫn đến sự phân hóa và đối đầu gay gắt giữa hai giai cấp nền tảng: Giai cấp Tư sản nắm giữ tư liệu sản xuất và Giai cấp Vô sản chỉ có sức lao động để bán.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 79,
    
        speaker: "James",
    
        nextId: 80,
    
        text: "James hơi nghiêng đầu.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 80,
    
        speaker: "James",
    
        nextId: 87,
    
        text: "Bóc tách cấu trúc xã hội rất chuẩn xác. Một bên sở hữu dòng vốn, một bên cung ứng cơ bắp. Sự phân cực này là một hằng số tất yếu, là lực đẩy để vận hành toàn bộ hệ thống đại công nghiệp.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 81,
    
        speaker: "Bạn",
    
        nextId: 82,
    
        text: "Tôi tin rằng sẽ có một sự hòa hợp tuyệt đối, không mâu thuẫn giữa tầng lớp quý tộc phong kiến cũ và người nông dân, tạo nên một xã hội bình yên.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 82,
    
        speaker: "James",
    
        nextId: 83,
    
        text: "James nghiêng đầu nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 83,
    
        speaker: "James",
    
        nextId: 87,
    
        text: "Hòa hợp tuyệt đối? Sự lãng mạn hóa ngây thơ của bạn thật đáng kinh ngạc. Bạn chưa từng thấy những cuộc bạo động, những vết rạn nứt sâu sắc trên đường phố khi trật tự cũ bị phá vỡ sao? Tư bản phát triển bằng xung lực cạnh tranh, chứ không phải bằng những câu chuyện cổ tích bình yên.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 84,
    
        speaker: "Bạn",
    
        nextId: 85,
    
        text: "Cấu trúc xã hội sẽ dịch chuyển với sự trỗi dậy của tầng lớp lao động tri thức, các chuyên gia công nghệ thông tin và kỹ sư phần mềm chiếm số lượng áp đảo.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 85,
    
        speaker: "James",
    
        nextId: 86,
    
        text: "James nghiêng đầu nhìn bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 86,
    
        speaker: "James",
    
        nextId: 87,
    
        text: "Chuyên gia phần mềm? Lao động tri thức? Ở thời đại của tôi, Manchester hay Birmingham chỉ có tiếng búa đập sắt thép và tiếng thoi dệt đến inh tai, không có chỗ cho những kẻ ngồi gõ những dòng mã vô hình. Làm ơn hãy nhìn vào cơ cấu lao động thực tế đi.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 87,
    
        speaker: "Bối cảnh",
    
        nextId: 88,
    
        text: "James bước tới kệ sách cũ, lấy ra một cuốn sách được viết bởi Adam Smith rồi đặt xuống trước mặt bạn.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 88,
    
        speaker: "James",
    
        text: "Tôi không thích sự can thiệp quá sâu của chính phủ vào kinh doanh. Tôi tin vào cái gọi là 'Bàn tay vô hình'. Theo sự hiểu biết của bạn thì cơ chế vận hành kinh tế của mô hình cổ điển dựa trên điều gì?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Cơ chế kế hoạch hóa tập trung, mọi chỉ tiêu sản xuất đều do cơ quan trung ương ban hành bằng văn bản.",
                nextId: 89,
                score: 5,
            },
    
            {
                text: "B. Cơ chế thị trường tự do cạnh tranh hoàn toàn, để cung cầu và giá cả tự điều tiết sản xuất.",
                nextId: 92,
                score: 10,
            },
    
            {
                text: "C. Cơ chế đóng cửa hoàn toàn, tự cung tự cấp, không có hoạt động mua bán hay cạnh tranh.",
                nextId: 95,
                score: 0,
            },
        ],
    },
    
    {
        id: 89,
    
        speaker: "Bạn",
    
        nextId: 90,
    
        text: "Nền kinh tế vận hành bằng cơ chế kế hoạch hóa tập trung. Mọi chỉ tiêu sản xuất, sản lượng, giá cả mặt hàng đều do một cơ quan trung ương ban hành bằng văn bản.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 90,
    
        speaker: "James",
    
        nextId: 91,
    
        text: "James lắc đầu khinh bỉ, giọng nói đanh thép.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 91,
    
        speaker: "James",
    
        nextId: 98,
    
        text: "Kế hoạch hóa tập trung? Độc đoán ban hành chỉ tiêu từ phòng làm việc? Đó là cách nhanh nhất để bóp nghẹt tính năng động của nền kinh tế. Thị trường biến chuyển từng giây, sắc lệnh hành chính chỉ mang lại sự trì trệ.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 92,
    
        speaker: "Bạn",
    
        nextId: 93,
    
        text: "Mô hình cổ điển dựa trên cơ chế thị trường tự do cạnh tranh hoàn toàn. Hãy để quy luật cung cầu, giá cả tự điều tiết sản xuất mà không cần bất kỳ sự can thiệp nào của chính phủ.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 93,
    
        speaker: "James",
    
        nextId: 94,
    
        text: "James cúi người xuống nhìn bạn, một tay đặt lên cuốn 'Sự giàu có của các quốc gia' của Adam Smith, gật đầu đầy tâm đắc.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 94,
    
        speaker: "James",
    
        nextId: 98,
    
        text: "Không sai một chữ. 'Bàn tay vô hình' của thị trường luôn sở hữu một trí tuệ tự điều chỉnh vượt trội hơn bất kỳ sắc lệnh chủ quan nào của một định chế chính trị. Tự do là cội nguồn của thịnh vượng.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 95,
    
        speaker: "Bạn",
    
        nextId: 96,
    
        text: "Cơ chế tốt nhất là đóng cửa hoàn toàn, tự cung tự cấp để bảo vệ nền sản xuất trong nước, tránh xa mọi hoạt động giao thương hay cạnh tranh bên ngoài.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 96,
    
        speaker: "James",
    
        nextId: 97,
    
        text: "James lắc đầu, thở dài thất vọng.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 97,
    
        speaker: "James",
    
        nextId: 98,
    
        text: "Chủ nghĩa biệt lập là nấm mồ của mọi nền kinh tế. Đại bàng Anh vươn cánh ra toàn cầu để mở rộng không gian sinh tồn cho hàng hóa, chứ không co mình trong cái ao làng tự cung tự cấp. Tư duy của bạn quá hạn hẹp.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 98,
    
        speaker: "Bối cảnh",
    
        nextId: 99,
    
        text: "James nâng tách trà Earl Grey lên nhưng lại đặt xuống mà không uống, những ngón tay gõ nhẹ lên thành sứ thanh tao theo một nhịp điệu đầy bất an. Ánh mắt anh nhìn ra cửa sổ, nơi những ống khói nhà máy vẫn đang nhả khói xám xịt vào bầu trời London, giọng trầm xuống đầy suy tư.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 99,
    
        speaker: "James",
    
        text: "Khi các dây chuyền sản xuất hàng loạt chạy quá nhanh, hàng hóa tuôn ra như thác lũ mà sức mua của người dân không tài nào đuổi kịp do đồng lương ít ỏi, mô hình cạnh tranh tự do của tôi thường phải đối mặt với căn bệnh kinh niên, một nghịch lý đau đớn nào?",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Khủng hoảng kinh tế do thiếu hụt hàng hóa, người dân không có lương thực để dùng.",
                nextId: 100,
                score: 0,
            },
    
            {
                text: "B. Khủng hoảng thừa (sản xuất quá tải so với nhu cầu có khả năng thanh toán), dẫn đến đình đốn và thất nghiệp.",
                nextId: 103,
                score: 10,
            },
    
            {
                text: "C. Khủng hoảng do cạn kiệt tài nguyên thông tin và mất an ninh mạng toàn cầu.",
                nextId: 106,
                score: 5,
            },
        ],
    },
    
    {
        id: 100,
    
        speaker: "Bạn",
    
        nextId: 101,
    
        text: "Mô hình này sẽ gặp phải khủng hoảng thiếu hụt hàng hóa nghiêm trọng, khiến người dân hoàn toàn không có nhu yếu phẩm hay lương thực để sử dụng.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 101,
    
        speaker: "James",
    
        nextId: 102,
    
        text: "James bật cười lớn, giọng nói tràn đầy sự tự phụ của một tên tài phiệt sản xuất.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 102,
    
        speaker: "James",
    
        nextId: 109,
    
        text: "Thiếu hụt? Ngược đời! Nhà máy của tôi sản xuất ra nhiều đến mức các kho hàng muốn nổ tung, nhiều đến mức phải đổ bỏ hoặc dùng súng đạn để ép các quốc gia khác phải mở cửa tiêu thụ kìa! Khủng hoảng của tôi là thừa mứa, chứ tuyệt đối không bao giờ là thiếu hụt!",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 103,
    
        speaker: "Bạn",
    
        nextId: 104,
    
        text: "Mô hình của ngài sẽ phải đối mặt với căn bệnh khủng hoảng thừa kinh niên. Khi năng lực sản xuất của máy móc tăng lên quá nhanh, nhưng sức mua và tiền lương của người lao động không đuổi kịp, dẫn đến hàng hóa ứ đọng, đình đốn và thất nghiệp.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 104,
    
        speaker: "James",
    
        nextId: 105,
    
        text: "Phong thái của James dần trở nên nghiêm trọng trước lỗ hổng bạn vừa chỉ ra.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 105,
    
        speaker: "James",
    
        nextId: 109,
    
        text: "Khủng hoảng thừa... bạn đã chạm đúng vào vết thương nhức nhối của chủ nghĩa tư bản tự do. Sản xuất vượt quá khả năng thanh toán của thị trường. Đó là cái bẫy quy luật đáng nguyền rủa mà 'Bàn tay vô hình' đôi khi cũng phải bất lực nhìn nó diễn ra.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 106,
    
        speaker: "Bạn",
    
        nextId: 107,
    
        text: "Nền kinh tế sẽ rơi vào khủng hoảng hệ thống do cạn kiệt tài nguyên thông tin và đối mặt với nguy cơ mất an ninh mạng trên quy mô toàn cầu.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 107,
    
        speaker: "James",
    
        nextId: 108,
    
        text: "James lắc đầu, thở dài một tiếng đầy ngao ngán.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 108,
    
        speaker: "James",
    
        nextId: 109,
    
        text: "Mất an ninh mạng? Khủng hoảng thông tin? Bạn lại dùng thứ ngôn từ lạc quẻ của thời đại số để áp đặt vào thế kỷ của tôi rồi. Tôi nhắc lại, những rủi ro của tôi nằm ở hàng hóa hữu hình và dòng tiền thực tế.",
    
        background: codien,
    
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },

    {
        id: 109,
        speaker: "James",
        nextId: 110,
        text: "James West khẽ lắc nhẹ tách trà Earl Grey đã vơi một nửa, ngắm nhìn những vệt nước mưa dài trượt trên mặt kính pha lê dày dặn. Bản nhạc cổ điển phát ra từ chiếc máy hát đĩa cơ khí ở bên kia góc phòng dường như trở nên đồng điệu một cách kỳ lạ với tiếng mưa gầm rú ngoài phố London. Anh nhấc chiếc đồng hồ bỏ túi bằng vàng lên xem giờ, khẽ nhếch môi.",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 110,
        speaker: "James",
        nextId: 111,
        text: "Mô hình cổ điển của tôi dù tạo ra của cải khổng lồ nhưng cũng đầy máu và nước mắt của công nhân. Nếu bạn đồng hành cùng tôi, bạn sẽ làm gì để giúp đế chế cơ khí này trở nên tốt đẹp hơn?",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
        choices: [
            {
                text: "A. Giữ nguyên sự bóc lột, tăng giờ làm của công nhân lên 18 tiếng/ngày để tối đa hóa lợi nhuận.",
                nextId: 112,
                isCorrect: false,
            },
            {
                text: "B. Đập phá toàn bộ máy móc hơi nước, quay trở lại thời kỳ lao động thủ công.",
                nextId: 114,
                isCorrect: false,
            },
            {
                text: "C. Giữ nền tảng máy móc hiện đại nhưng cải thiện điều kiện làm việc, tăng lương, giảm giờ làm và hướng tới công bằng xã hội.",
                nextId: 116,
                isCorrect: true,
            },
        ],
    },
    
    {
        id: 112,
        speaker: "Bạn",
        nextId: 113,
        text: "Tôi nghĩ cứ giữ nguyên sự bóc lột hiện tại, thậm chí tăng giờ làm của công nhân lên 18 tiếng mỗi ngày để tối đa hóa lợi nhuận. Miễn sản lượng tăng thì mọi thứ đều đáng giá.",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 113,
        speaker: "James",
        text: "James đặt tách trà xuống chậm rãi, ánh mắt anh thoáng vẻ thất vọng. \"Lợi nhuận là động lực của tư bản, nhưng lòng tham vô độ sẽ tự phá hủy chính nền móng của nó. Một lực lượng lao động kiệt quệ sẽ không thể duy trì năng suất lâu dài, còn sự phẫn nộ của xã hội cuối cùng cũng sẽ quay ngược lại nuốt chửng những nhà máy. Một nhà tư bản khôn ngoan phải biết cân bằng giữa hiệu quả và sự ổn định.\"",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 114,
        speaker: "Bạn",
        nextId: 115,
        text: "Sự bóc lột này là không thể chấp nhận! Tôi sẽ kêu gọi công nhân phá hủy toàn bộ máy hơi nước, đốt các xưởng dệt và đưa mọi người quay trở lại lao động thủ công truyền thống.",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 115,
        speaker: "James",
        text: "Nụ cười trên môi James biến mất hoàn toàn. Anh lạnh lùng bấm nhẹ chiếc chuông đồng trên bàn. \"Phá hủy công cụ sản xuất chỉ là phản ứng bột phát của những kẻ không hiểu quy luật phát triển. Máy móc không phải là kẻ thù, mà là thành tựu của văn minh. Muốn thay đổi xã hội thì phải cải cách thể chế và quan hệ lao động, chứ không phải quay lưng với tiến bộ. Đáng tiếc... cuộc trò chuyện của chúng ta nên dừng tại đây.\"",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 116,
        speaker: "Bạn",
        nextId: 117,
        text: "Tôi sẽ giữ lại toàn bộ nền tảng máy móc hiện đại và năng suất cao của ngài. Nhưng tôi đề xuất cải thiện điều kiện làm việc, tăng lương, giảm giờ làm cho công nhân để hướng tới một sự phát triển bền vững và công bằng xã hội.",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
    
    {
        id: 117,
        speaker: "James",
        text: "Văn phòng chợt chìm vào tĩnh lặng, chỉ còn tiếng lách tách từ lò sưởi vọng lại. James nhìn thẳng vào mắt bạn, rồi chậm rãi chìa bàn tay đeo chiếc nhẫn gia tộc. \"Một giải pháp cân bằng mang tính thế kỷ. Bảo toàn sức mạnh của nền đại công nghiệp nhưng đồng thời điều chỉnh lại cấu trúc xã hội để con người không bị bỏ lại phía sau... Bạn không chỉ hiểu quy luật của mô hình cổ điển, mà còn nhìn thấy con đường giúp nó tiến hóa. Được thôi, tôi chấp nhận lời tư vấn ấy. Hy vọng một ngày nào đó, thế giới sẽ tìm được sự cân bằng giữa tăng trưởng và nhân văn.\"",
        background: codien,
        characters: [
            {
                id: "James",
                image: James,
                position: "center",
            },
        ],
    },
]