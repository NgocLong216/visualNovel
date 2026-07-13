import vqroom from "../../assets/backgrounds/VQRoom.png";
import VietQuoc from "../../assets/characters/VietQuoc.png";

export const vietquocStory = [
    {
        id: 1,

        speaker: "Bối cảnh",

        nextId: 2,

        text: "Khuôn viên xanh của quán cà phê ngập trong ánh nắng sớm ấm áp. Những vệt nắng đầu ngày xuyên qua kẽ lá, rải một lớp mật vàng óng ánh lên những bộ bàn ghế mây giản dị. Những tiếng hát líu lo của các cô câu chim ca chuyền cành trên những tán cây cổ thụ, tạo ra một thứ thanh âm vô cùng thư thái, tách biệt hẳn với nhịp sống hối hả ngoài lộ lớn.",

        background: vqroom,

        characters: [
        ],
    },

    {
        id: 2,

        speaker: "Bối cảnh",

        nextId: 3,

        text: "Việt Quốc ngồi đó, thanh lịch và tĩnh tại trong chiếc áo sơ mi trắng sắn tay gọn gàng. Trên bàn, làn khói mỏng từ hai tách cà phê phin đậm chất truyền thống quyện vào không khí, tỏa ra hương thơm nồng nàn.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 3,

        speaker: "Bối cảnh",

        nextId: 4,

        text: "Sự giao thoa giữa nét mộc mạc của quán nhỏ và tầm nhìn hướng ra đại lộ thênh thang phía trước giống như một lát cắt thu nhỏ của chính hành trình mà anh đang đi: Trân trọng những giá trị nguyên bản, nhưng luôn sẵn sàng tư thế cho một cuộc bứt phá vươn tầm.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 4,

        speaker: "Bối cảnh",

        nextId: 5,

        text: "Anh khẽ đẩy tập tài liệu về phía bạn, ánh mắt phản chiếu vệt nắng sớm, sáng lên sự thông tuệ và cởi mở:",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 5,

        speaker: "VietQuoc",

        nextId: 6,

        text: "Thoát khỏi những con số khô khan trên giảng đường, đây mới là lúc chúng ta nhìn ngắm 'nhịp thở' thực sự của nền kinh tế, bạn ạ..",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 6,

        speaker: "VietQuoc",

        nextId: 7,

        text: "Việt Quốc đẩy nhẹ chiếc phin cà phê nhôm đang tí tách nhỏ giọt về phía bạn, ánh mắt điềm đạm đầy hoài niệm.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 7,

        speaker: "VietQuoc",

        text: "Để có được một Việt Nam năng động, tự tin mở cửa như hôm nay, tôi đã phải trải qua một cuộc đại phẫu tư duy vào năm 1986. Theo bạn, cốt lõi của đường lối 'Đổi mới' giúp chúng tôi tự cứu mình ra khỏi cuộc khủng hoảng lúc bấy giờ là gì?",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],

        choices: [
            {
                text: "A. Chuyển từ nền kinh tế kế hoạch hóa tập trung, quan liêu, bao cấp sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, phát triển đa thành phần kinh tế.",
                nextId: 8,
                score: 10,
            },

            {
                text: "B. Xóa bỏ hoàn toàn vai trò quản lý của Nhà nước, để mặc thị trường tự do cạnh tranh theo kiểu hoang dã.",
                nextId: 11,
                score: 5,
            },

            {
                text: "C. Tiếp tục thắt chặt cơ chế bao cấp, cấm tuyệt đối người dân mua bán hàng hóa tự do trên thị trường.",
                nextId: 14,
                score: 0,
            },
        ],
    },

    {
        id: 8,

        speaker: "Bạn",

        nextId: 9,

        text: "Cốt lõi chính là sự dũng cảm nhìn thẳng vào sự thật: chuyển từ nền kinh tế kế hoạch hóa tập trung, quan liêu, bao cấp sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, phát triển đa thành phần kinh tế",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 9,

        speaker: "VietQuoc",

        nextId: 10,

        text: "Việt Quốc gật đầu mỉm cười, nét mặt anh bừng sáng với niềm vui ấm áp.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 10,

        speaker: "VietQuoc",

        nextId: 17,

        text: "Chính xác là như vậy. Cởi trói cho tư duy chính là chìa khóa đầu tiên. Chúng tôi chấp nhận quy luật của thị trường, thừa nhận sự tồn tại của nhiều thành phần kinh tế để giải phóng sức sản xuất trong dân. Nhờ bước ngoặt đó, từ một đất nước vẫn còn đang lo nhặt từ tàn dư chiến tranh, chúng tôi đã nhanh chóng vươn lên tự chủ và có thể xuất khẩu lương thực ra thế giới.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 11,

        speaker: "Bạn",

        nextId: 12,

        text: "Tôi nghĩ cốt lõi là xóa bỏ hoàn toàn vai trò quản lý của Nhà nước, để mặc thị trường tự do cạnh tranh theo kiểu hoang dã để tạo ra sự đột biến",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 12,

        speaker: "VietQuoc",

        nextId: 13,

        text: "Việt Quốc khẽ lắc đầu, dù có vẻ hơi thất vọng nhưng anh vẫn giữ nét ôn hòa thân thiện của ban đầu.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 13,

        speaker: "VietQuoc",

        nextId: 17,

        text: "Nếu thả nổi hoàn toàn mà không có sự điều tiết của Nhà nước, nền kinh tế sẽ lập tức rơi vào hỗn loạn, đầu cơ và khủng hoảng. Chúng tôi học hỏi cái hay của thị trường tự do, nhưng bắt buộc phải có bàn tay của Nhà nước quản lý vĩ mô để giữ vững ổn định xã hội. Đi hướng đó là lệch đường lối rồi bạn.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 14,

        speaker: "Bạn",

        nextId: 15,

        text: "Có lẽ là tiếp tục thắt chặt cơ chế bao cấp, cấm tuyệt đối người dân mua bán hàng hóa tự do để tập trung nguồn lực về một mối.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 15,

        speaker: "VietQuoc",

        nextId: 16,

        text: "Việt Quốc thở dài một tiếng nhỏ, anh nhẹ nhàng đặt chiếc thìa cà phê xuống đĩa:",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 16,

        speaker: "VietQuoc",

        nextId: 17,

        text: "Đó chính là lối mòn đã đưa chúng tôi vào ngõ cụt trước năm 1986. Càng cấm đoán, hàng hóa càng khan hiếm, cái nghèo cái khổ càng bám riết lấy người dân. Đổi mới là phải nhìn thẳng vào sai lầm để sửa, chứ cứ khăng khư giữ cơ chế cũ thì làm sao có một Việt Nam khởi sắc như bây giờ.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 17,

        speaker: "Bối cảnh",

        nextId: 18,

        text: "Việt Quốc mở chiếc máy tính bảng, lướt qua vài trang báo điện tử rồi chỉ vào biểu đồ đóng góp GDP của các tập đoàn tư nhân và các doanh nghiệp nước ngoài (FFD).",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 18,

        speaker: "VietQuoc",

        text: "Bạn thấy đấy, phố xá tấp nập, hàng quán mọc lên, kinh tế tư nhân đang bùng nổ mạnh mẽ. Trong mô hình Đổi mới của tôi, chúng tôi định vị các thành phần kinh tế này như thế nào cho đúng với tinh thần giáo trình?",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],

        choices: [
            {
                text: "A. Kinh tế tư nhân là động lực duy nhất, còn Kinh tế nhà nước thì cần phải giải thể hoàn toàn.",
                nextId: 19,
                score: 0,
            },

            {
                text: "B. Kinh tế nhà nước giữ vai trò chủ đạo; Kinh tế tư nhân và kinh tế có vốn đầu tư nước ngoài (FDI) là động lực quan trọng của nền kinh tế. ",
                nextId: 22,
                score: 10,
            },

            {
                text: "C. Chỉ cho phép Kinh tế tập thể và Kinh tế nhà nước hoạt động, coi Kinh tế tư nhân là bất hợp pháp.",
                nextId: 25,
                score: 5,
            },
        ],
    },

    {
        id: 19,

        speaker: "Bạn",

        nextId: 20,

        text: "Kinh tế tư nhân là động lực duy nhất của sự phát triển, còn Kinh tế nhà nước thì xơ cứng rồi, cần phải giải thể hoàn toàn, thưa anh.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 20,

        speaker: "VietQuoc",

        nextId: 21,

        text: "Việt Quốc không nói gì, anh cứ thế điềm đạm đan hai tay vào nhau, giọng nói từ tốn nhưng rõ ràng.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 21,

        speaker: "VietQuoc",

        nextId: 28,

        text: "Tư nhân rất năng động, điều đó tôi không phủ nhận. Nhưng nói giải thể kinh tế nhà nước là không đúng. Những ngành xương sống, hạ tầng quốc gia cốt lõi, hay những lĩnh vực rủi ro cao mà tư nhân không muốn làm... đều cần kinh tế nhà nước đứng mũi chịu sào. Chúng ta không thể cực đoan như vậy được.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 22,

        speaker: "Bạn",

        nextId: 23,

        text: "Tôi thấy Kinh tế nhà nước giữ vai trò chủ đạo; Kinh tế tư nhân và kinh tế có vốn đầu tư nước ngoài (FDI) là động lực quan trọng của nền kinh tế, thưa anh.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 23,

        speaker: "VietQuoc",

        nextId: 24,

        text: "Việt Quốc gật đầu tán thưởng.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 24,

        speaker: "VietQuoc",

        nextId: 28,

        text: "Bạn nắm rất vững bản chất. Mỗi thành phần đều có một sứ mệnh riêng trong một chỉnh thể thống nhất. Kinh tế nhà nước giữ vai trò định hướng, làm bệ đỡ vĩ mô; còn kinh tế tư nhân và FDI chính là những mũi khoan năng động, tạo ra việc làm và thúc đẩy sự cạnh tranh. Đoàn kết các nguồn lực lại thì đất nước mới mạnh.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 25,

        speaker: "Bạn",

        nextId: 26,

        text: "Tôi nghĩ chỉ nên cho phép Kinh tế tập thể và Kinh tế nhà nước hoạt động thôi, coi Kinh tế tư nhân là bất hợp pháp để tránh phân hóa giàu nghèo, thưa anh.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 26,

        speaker: "VietQuoc",

        nextId: 27,

        text: "Việt Quốc nhẹ lắc đầu.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 27,

        speaker: "VietQuoc",

        nextId: 28,

        text: "Tư duy này lại kéo chúng tôi về thời kỳ trước 1986 rồi. Sợ phân hóa giàu nghèo mà cấm đoán tư nhân là chúng ta đang tự triệt tiêu đi một nguồn lực khổng lồ trong nhân dân. Kinh tế tư nhân hợp pháp luôn được khuyến khích làm giàu, vì dân có giàu thì nước mới mạnh chứ.",

        background: vqroom,

        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 28,
    
        speaker: "Bối cảnh",
    
        nextId: 29,
    
        text: "Việt Quốc bỗng hướng ánh nhìn về phía những tòa nhà đang được xây dựng đằng xa.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 29,
    
        speaker: "VietQuoc",
    
        text: "Kinh tế thị trường là công cụ tuyệt vời để tạo ra của cải, nhưng cái đích cuối cùng của tôi không phải là tạo ra những tỷ phú bất chấp khoảng cách giàu nghèo hay tàn phá thiên nhiên. 'Định hướng xã hội chủ nghĩa' trong chiến lược phát triển của tôi được thể hiện rõ nhất ở điều gì?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Phát triển kinh tế phải đi đôi với tiến bộ và công bằng xã hội; tăng trưởng kinh tế gắn liền với phát triển văn hóa, giáo dục và bảo vệ môi trường, không để ai bị bỏ lại phía sau.",
                nextId: 30,
                score: 10,
            },
    
            {
                text: "B. Gom hết tiền tài sản của người giàu chia đều cho người nghèo một cách máy móc, không cần biết họ có lao động hay không.",
                nextId: 33,
                score: 0,
            },
    
            {
                text: "C. Cứ tập trung làm giàu bằng mọi giá trước, còn người nghèo hay môi trường thì vài chục năm nữa quay lại xử lý sau cũng được.",
                nextId: 36,
                score: 5,
            },
        ],
    },
    
    {
        id: 30,
    
        speaker: "Bạn",
    
        nextId: 31,
    
        text: "Tôi cho rằng phát triển kinh tế phải đi đôi với tiến bộ và công bằng xã hội. Tăng trưởng kinh tế phải gắn liền với phát triển văn hóa, giáo dục và bảo vệ môi trường, không để ai bị bỏ lại phía sau, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 31,
    
        speaker: "VietQuoc",
    
        nextId: 32,
    
        text: "Việt Quốc quay sang nhìn bạn, ánh mắt đầy sự đồng cảm và trân trọng. Anh vỗ nhẹ vào vai bạn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 32,
    
        speaker: "VietQuoc",
    
        nextId: 39,
    
        text: "Hay lắm, 'không để ai bị bỏ lại phía sau' — đó chính là cái tâm của mô hình này. Chúng tôi chấp nhận có sự chênh lệch để kích thích phát triển, nhưng thành quả kinh tế cuối cùng phải quay lại phục vụ nhân dân, chăm lo cho người nghèo, phát triển y tế, giáo dục. Bản chất của xã hội chủ nghĩa nằm ở sự nhân văn đó.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 33,
    
        speaker: "Bạn",
    
        nextId: 34,
    
        text: "Tôi nghĩ cần gom hết tiền tài sản của người giàu rồi chia đều cho người nghèo một cách máy móc, như vậy mới là công bằng xã hội, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 34,
    
        speaker: "VietQuoc",
    
        nextId: 35,
    
        text: "Việt Quốc khẽ bật cười trước sự ngây thơ đó, anh lắc đầu, giọng nói vẫn rất mực ôn hòa.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 35,
    
        speaker: "VietQuoc",
    
        nextId: 39,
    
        text: "Cào bằng kiểu đó thì không ai muốn lao động, không ai muốn làm giàu nữa, và kết quả là cả xã hội lại cùng dắt nhau lùi lại phía sau. Công bằng xã hội là tạo cơ hội bình đẳng cho mọi người cùng phát triển, và điều tiết thu nhập thông qua thuế và phúc lợi, chứ không phải là tước đoạt một cách cơ học.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 36,
    
        speaker: "Bạn",
    
        nextId: 37,
    
        text: "Tôi nghĩ cứ tập trung làm giàu bằng mọi giá trước đã, chấp nhận đánh đổi môi trường và khoảng cách giàu nghèo, vài chục năm nữa có tiền rồi chúng ta xử lý sau, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 37,
    
        speaker: "VietQuoc",
    
        nextId: 38,
    
        text: "Ánh mắt Việt Quốc thoáng chút trầm ngâm, anh nhìn những tán cây xanh trong quán rồi chậm rãi nói.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 38,
    
        speaker: "VietQuoc",
    
        nextId: 39,
    
        text: "Đó là cái bẫy mà nhiều nước đi trước đã dính phải: 'phát triển trước, dọn dẹp sau'. Cái giá phải trả cho một môi trường bị tàn phá và một xã hội rạn nứt là cực kỳ đắt, đôi khi có tiền cũng không mua lại được. Chúng tôi không chọn con đường đánh đổi tiêu cực đó.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 39,
    
        speaker: "Bối cảnh",
    
        nextId: 40,
    
        text: "Rồi anh chỉ tay về phía một chiếc xe điện hiện đại đang sạc pin ở lề đường, xa hơn nữa là hướng về phía tổ hợp khu công nghệ cao của thành phố.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 40,
    
        speaker: "VietQuoc",
    
        text: "Tôi xuất phát điểm muộn hơn các nước phương Tây hàng trăm năm. Nếu cứ lầm lũi đi tuần tự từ nông nghiệp thô sơ, rồi qua công nghiệp nặng khói bụi, tôi sẽ mãi là kẻ đi sau làm thuê. Việt Nam hiện tại đang chọn hướng đi nào để bứt phá?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. CNH gắn liền với HĐH, kết hợp tuần tự với nhảy vọt; đẩy mạnh phát triển Kinh tế tri thức và chủ động ứng dụng ngay thành tựu của CMCN 4.0 để rút ngắn thời gian.",
                nextId: 41,
                score: 10,
            },
    
            {
                text: "B. Đóng cửa biên giới để tự mình mò mẫm chế tạo lại từ đầu những chiếc máy hơi nước của thế kỷ XVIII.",
                nextId: 44,
                score: 0,
            },
    
            {
                text: "C. Chỉ tập trung vào gia công, lắp ráp thô theo thiết kế của nước ngoài, không cần nghiên cứu hay chuyển giao công nghệ cốt lõi.",
                nextId: 47,
                score: 5,
            },
        ],
    },
    
    {
        id: 41,
    
        speaker: "Bạn",
    
        nextId: 42,
    
        text: "Tôi thấy anh đang chọn con đường kết hợp tuần tự với nhảy vọt. Đẩy mạnh phát triển Kinh tế tri thức và chủ động ứng dụng ngay những thành tựu của CMCN 4.0 để rút ngắn thời gian, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 42,
    
        speaker: "VietQuoc",
    
        nextId: 43,
    
        text: "Việt Quốc gật đầu, thần thái toát lên sự tự tin, điềm tĩnh nhưng đầy khát vọng của một thế hệ trẻ.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 43,
    
        speaker: "VietQuoc",
    
        nextId: 50,
    
        text: "Đúng vậy, phải biết tận dụng thời cơ. Những ngành truyền thống chúng tôi vẫn phải làm tuần tự để ổn định gốc rễ, nhưng ở những mũi nhọn như công nghệ thông tin, bán dẫn, chuyển đổi số... chúng tôi phải đi thẳng vào công nghệ hiện đại nhất. Cuộc cách mạng 4.0 này là cơ hội vàng để chúng ta san bằng khoảng cách.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 44,
    
        speaker: "Bạn",
    
        nextId: 45,
    
        text: "Tôi nghĩ anh nên đóng cửa biên giới lại, tự mình mò mẫm chế tạo lại từ đầu những cỗ máy thô sơ từ thời kỳ đầu cho chắc chắn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 45,
    
        speaker: "VietQuoc",
    
        nextId: 46,
    
        text: "Việt Quốc cười xòa, anh nhấp một ngụm trà đá, giọng nói pha chút dí dỏm.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 46,
    
        speaker: "VietQuoc",
    
        nextId: 50,
    
        text: "Bạn lại thích đùa rồi. Thời đại toàn cầu hóa mà đóng cửa tự chế máy hơi nước thế kỷ XVIII thì khác nào tự tách mình ra khỏi dòng chảy văn minh? Đi lùi như vậy thì làm sao gánh vác được tương lai đất nước.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 47,
    
        speaker: "Bạn",
    
        nextId: 48,
    
        text: "Tôi đoán anh chỉ tập trung vào gia công, lắp ráp thô theo thiết kế của nước ngoài cho an toàn, tận dụng nhân công giá rẻ chứ không cần nghiên cứu công nghệ cốt lõi làm gì, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 48,
    
        speaker: "VietQuoc",
    
        nextId: 49,
    
        text: "Việt Quốc khẽ lắc đầu, nét mặt anh trở nên nghiêm túc hơn một chút.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 49,
    
        speaker: "VietQuoc",
    
        nextId: 50,
    
        text: "Gia công, lắp ráp chỉ là bước đệm ban đầu để chúng tôi học việc và giải quyết việc làm thôi. Nếu cứ bằng lòng ở cái vùng an toàn đó, chúng tôi sẽ dính chặt vào 'bẫy thu nhập trung bình'. Muốn thực sự tự chủ, bắt buộc phải chuyển sang làm chủ công nghệ và tự sáng tạo, tự sản xuất.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 50,
    
        speaker: "Bối cảnh",
    
        nextId: 51,
    
        text: "Việt Quốc mở ra danh sách các đối tác chiến lược toàn diện trên máy tính bảng, nơi ghi nhận những mối quan hệ ngoại giao mật thiết với tất cả các cường quốc lớn trên thế giới.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 51,
    
        speaker: "VietQuoc",
    
        text: "Đất nước tôi có câu 'Thêm bạn bớt thù'. Trên bàn cờ quốc tế đầy biến động và cạnh tranh gay gắt như hiện nay, tư duy hội nhập kinh tế vĩ mô của tôi dựa trên nguyên tắc cốt lõi nào?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Chỉ chọn chơi với một bên duy nhất và cắt đứt quan hệ với các bên còn lại.",
                nextId: 52,
                score: 0,
            },
    
            {
                text: "B. Mở cửa đón nhận dòng vốn bên ngoài vô điều kiện, phó mặc an ninh quốc phòng cho các tập đoàn đa quốc gia nắm giữ.",
                nextId: 55,
                score: 5,
            },
    
            {
                text: "C. Việt Nam là bạn, là đối tác tin cậy và là thành viên có trách nhiệm trong cộng đồng quốc tế; đa phương hóa, đa dạng hóa nhưng giữ vững độc lập, tự chủ và lợi ích quốc gia dân tộc.",
                nextId: 58,
                score: 10,
            },
        ],
    },
    
    {
        id: 52,
    
        speaker: "Bạn",
    
        nextId: 53,
    
        text: "Tôi nghĩ anh cần phải chọn chơi với một cường quốc duy nhất để được bảo hộ tuyệt đối, và cắt đứt quan hệ với các bên còn lại cho đỡ phức tạp, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 53,
    
        speaker: "VietQuoc",
    
        nextId: 54,
    
        text: "Việt Quốc nhìn bạn, ánh nhìn anh trầm tĩnh nhưng đầy kiên định. Anh lắc đầu.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 54,
    
        speaker: "VietQuoc",
    
        nextId: 61,
    
        text: "Chọn bên là tự đặt mình vào thế kẹt và đánh mất quyền tự quyết. Bài học lịch sử xương máu đã dạy chúng tôi rằng, độc lập và tự chủ mới là cái gốc vững chắc nhất. Đặt cược vận mệnh quốc gia vào một bên duy nhất là nước đi vô cùng nguy hiểm.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 55,
    
        speaker: "Bạn",
    
        nextId: 56,
    
        text: "Tôi lo anh mở cửa đón nhận dòng vốn bên ngoài vô điều kiện, rồi phó mặc an ninh kinh tế và quốc phòng cho các tập đoàn đa quốc gia dẫn dắt, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 56,
    
        speaker: "VietQuoc",
    
        nextId: 57,
    
        text: "Việt Quốc trầm giọng.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 57,
    
        speaker: "VietQuoc",
    
        nextId: 61,
    
        text: "Hội nhập chứ không hòa tan, mở cửa chứ không phải là mất cảnh giác. Dòng vốn nước ngoài rất quan trọng, nhưng nếu phó mặc an ninh kinh tế cho họ mà không có sự kiểm soát, chúng tôi sẽ tự biến mình thành con rối. Kinh tế phải gắn liền với quốc phòng, an ninh thì mới vững bền.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 58,
    
        speaker: "Bạn",
    
        nextId: 59,
    
        text: "Tôi nhớ câu này trong giáo trình: Việt Nam là bạn, là đối tác tin cậy và là thành viên có trách nhiệm trong cộng đồng quốc tế. Đa phương hóa, đa dạng hóa quan hệ nhưng luôn giữ vững độc lập, tự chủ và lợi ích quốc gia dân tộc, đúng không anh?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 59,
    
        speaker: "VietQuoc",
    
        nextId: 60,
    
        text: "Việt Quốc đặt chiếc máy tính bảng xuống bàn, ánh mắt ánh lên niềm tự hào sâu sắc. Anh chìa tay ra phía bạn với một nụ cười rạng rỡ.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 60,
    
        speaker: "VietQuoc",
    
        nextId: 61,
    
        text: "Tuyệt vời. Đó chính là tinh thần 'Ngoại giao cây tre' — gốc vững, thân chắc, cành uyển chuyển. Chúng tôi sẵn sàng hợp tác sòng phẳng với tất cả mọi người, tận dụng mọi thời cơ quốc tế để phát triển đất nước, nhưng cái đích cuối cùng vẫn là giữ gìn bờ cõi và mang lại hạnh phúc cho nhân dân. Cảm ơn bạn đã thấu hiểu con đường của tôi!",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 61,
    
        speaker: "Bối cảnh",
    
        nextId: 62,
    
        text: "Việt Quốc đẩy về phía bạn một tập tài liệu có in logo của chương trình quốc gia về chuyển đổi số giáo dục và đào tạo nghề. Anh tựa lưng vào chiếc ghế mây, ánh mắt ngước nhìn những tán lá xanh đón nắng.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 62,
    
        speaker: "VietQuoc",
    
        text: "Nguồn tài nguyên dầu khí hay khoáng sản thô rồi cũng đến ngày cạn kiệt, bạn ạ. Bệ phóng thực sự để chúng tôi bứt phá nằm ở nội dung cốt lõi đầu tiên của quá trình công nghiệp hóa, hiện đại hóa. Theo bạn, đó là gì?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Coi khoa học - công nghệ và phát triển nguồn nhân lực chất lượng cao là quốc sách hàng đầu, là động lực chính để chuyển đổi nền sản xuất.",
                nextId: 63,
                score: 10,
            },
    
            {
                text: "B. Chỉ cần số lượng lao động chân tay giá rẻ khổng lồ để thu hút các ngành dệt may thô sơ mãi mãi.",
                nextId: 66,
                score: 0,
            },
    
            {
                text: "C. Tập trung dồn toàn bộ tiền bạc để mua bản quyền phần mềm nước ngoài về dùng chứ không cần đào tạo người trong nước.",
                nextId: 69,
                score: 5,
            },
        ],
    },
    
    {
        id: 63,
    
        speaker: "Bạn",
    
        nextId: 64,
    
        text: "Tôi nghĩ bệ phóng đó chính là con người: coi khoa học - công nghệ và phát triển nguồn nhân lực chất lượng cao là quốc sách hàng đầu, là động lực chính để chuyển đổi toàn diện nền sản xuất, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 64,
    
        speaker: "VietQuoc",
    
        nextId: 65,
    
        text: "Việt Quốc vui vẻ gật đầu. Anh điềm đạm rót thêm trà vào ly của bạn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 65,
    
        speaker: "VietQuoc",
    
        nextId: 72,
    
        text: "Chính xác là như vậy. Muốn hiện đại hóa, trước hết con người phải hiện đại. Chúng tôi không thể dùng tư duy của thời đại cuốc cày để vận hành nền kinh tế số. Đầu tư vào chất xám, vào kỹ năng của người lao động và làm chủ khoa học công nghệ chính là khoản đầu tư sinh lời bền vững nhất cho tương lai quốc gia.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 66,
    
        speaker: "Bạn",
    
        nextId: 67,
    
        text: "Có phải là tận dụng số lượng lao động chân tay giá rẻ khổng lồ để duy trì và thu hút các ngành dệt may, lắp ráp thô sơ mãi mãi không, thưa anh?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 67,
    
        speaker: "VietQuoc",
    
        nextId: 68,
    
        text: "Việt Quốc khẽ cười nhưng cách nói vẫn rất mực nhã nhặn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 68,
    
        speaker: "VietQuoc",
    
        nextId: 72,
    
        text: "Lao động giá rẻ chỉ là lợi thế ngắn hạn trong giai đoạn đầu mở cửa thôi, bạn ạ. Nếu cứ dựa vào cơ bắp chân tay mà không chịu nâng cao tay nghề, chúng tôi sẽ mãi làm thuê ở phân khúc thấp nhất của chuỗi giá trị toàn cầu. Con người Việt Nam thông minh và nhạy bén, họ xứng đáng được đứng ở những vị trí cao hơn thế.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 69,
    
        speaker: "Bạn",
    
        nextId: 70,
    
        text: "Tôi đoán là tập trung dồn toàn bộ nguồn lực tài chính để mua sẵn bản quyền phần mềm, công nghệ của nước ngoài về dùng cho nhanh, khỏi mất công đào tạo người trong nước, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 70,
    
        speaker: "VietQuoc",
    
        nextId: 71,
    
        text: "Việt Quốc khẽ lắc đầu, phong thái vẫn điềm tĩnh khi giải thích.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 71,
    
        speaker: "VietQuoc",
    
        nextId: 72,
    
        text: "Công nghệ mua được bằng tiền thì người khác cũng mua được, và họ sẽ luôn đi trước chúng ta. Nếu không đào tạo đội ngũ chuyên gia trong nước để thấu hiểu và tiến tới tự chủ, chúng tôi sẽ rơi vào tình trạng lệ thuộc hoàn toàn vào bên ngoài. Công nghệ là quan trọng, nhưng người làm chủ công nghệ đó mới là gốc rễ.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 72,
    
        speaker: "Bối cảnh",
    
        nextId: 73,
    
        text: "Việt Quốc lại bấm gì đó trên máy tính bảng, rồi anh lại đưa ra một trang biểu đồ hiển thị cơ cấu các ngành kinh tế của Việt Nam qua các giai đoạn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 73,
    
        speaker: "VietQuoc",
    
        text: "Theo đúng tinh thần cải cách, chúng tôi đang thực hiện tái cơ cấu ngành kinh tế theo hướng hiện đại, xanh và thông minh. Sự dịch chuyển cơ cấu này trên thực tế đang diễn ra như thế nào để đạt hiệu quả tối ưu, bạn có biết không?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Giảm dần tỷ trọng nông nghiệp truyền thống lạc hậu; tăng tỷ trọng công nghiệp chế biến, chế tạo, công nghệ cao và các ngành dịch vụ giá trị gia tăng lớn (Fintech, Logistics, Du lịch sinh thái).",
                nextId: 74,
                score: 10,
            },
    
            {
                text: "B. Tăng tối đa các ngành công nghiệp nặng gây ô nhiễm như luyện kim thô, xi măng, nhiệt điện than bằng mọi giá.",
                nextId: 77,
                score: 0,
            },
    
            {
                text: "C. Biến toàn bộ đất nước thành đất phi nông nghiệp, xóa sổ hoàn toàn ngành nông nghiệp.",
                nextId: 80,
                score: 5,
            },
        ],
    },
    
    {
        id: 74,
    
        speaker: "Bạn",
    
        nextId: 75,
    
        text: "Tôi thấy xu hướng rõ ràng là giảm dần tỷ trọng của ngành nông nghiệp truyền thống; tăng mạnh tỷ trọng của công nghiệp chế biến, chế tạo, công nghệ cao và các ngành dịch vụ giá trị gia tăng lớn như Fintech, Logistics hay Du lịch sinh thái, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 75,
    
        speaker: "VietQuoc",
    
        nextId: 76,
    
        text: "Nét mặt của Việt Quốc sáng lên vui vẻ, anh gật đầu đầy tâm đắc.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 76,
    
        speaker: "VietQuoc",
    
        nextId: 83,
    
        text: "Bạn quan sát rất nhạy bén. Đây chính là con đường tất yếu để nâng cao năng suất lao động xã hội. Công nghiệp chế tạo và dịch vụ hiện đại tạo ra giá trị thặng dư lớn hơn rất nhiều. Dịch chuyển cơ cấu như vậy giúp nền kinh tế vận hành thông minh hơn, tạo bệ phóng để chúng tôi tiến sâu vào chuỗi cung ứng toàn cầu.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 77,
    
        speaker: "Bạn",
    
        nextId: 78,
    
        text: "Có phải là tăng tối đa tỷ trọng của các ngành công nghiệp nặng quy mô lớn như luyện kim thô, xi măng, nhiệt điện than bằng mọi giá không, thưa anh?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 78,
    
        speaker: "VietQuoc",
    
        nextId: 79,
    
        text: "Việt Quốc nhìn bạn mắt trầm tư, anh nhẹ nhàng giải thích để xóa tan sự nhầm lẫn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 79,
    
        speaker: "VietQuoc",
    
        nextId: 83,
    
        text: "Đó là tư duy công nghiệp hóa kiểu cũ rồi, bạn ạ. Nếu phát triển bằng mọi giá mà đánh đổi môi trường, phát thải lượng carbon lớn thì chúng tôi sẽ tự hủy hoại tương lai của chính mình. Việt Nam đã cam kết hướng tới Net-Zero, chúng tôi không chọn con đường đánh đổi màu xanh lấy những ống khói ô nhiễm.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 80,
    
        speaker: "Bạn",
    
        nextId: 81,
    
        text: "Tôi đoán là dịch chuyển triệt để bằng cách biến toàn bộ đất nước thành đất phi nông nghiệp, xóa sổ hoàn toàn ngành nông nghiệp để tập trung cho đô thị, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 81,
    
        speaker: "VietQuoc",
    
        nextId: 82,
    
        text: "Việt Quốc ôn hòa cười khẽ, cái lắc đầu dù không mấy vui nhưng vẫn luôn dễ chịu của anh khiến bầu không khí giữa hai người vẫn thật thoải mái.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 82,
    
        speaker: "VietQuoc",
    
        nextId: 83,
    
        text: "Xóa sổ nông nghiệp là một nước đi rất nguy hiểm, bạn ạ. Đối với chúng tôi, nông nghiệp không chỉ là sinh kế của hàng triệu người dân mà còn là bệ đỡ an ninh lương thực chiến lược quốc gia trong mọi sóng gió toàn cầu. Chúng tôi không xóa bỏ nông nghiệp, mà là hiện đại hóa nó thành nông nghiệp công nghệ cao, sinh thái và bền vững.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 83,
    
        speaker: "Bối cảnh",
    
        nextId: 84,
    
        text: "Tiếng nhạc không lời nhẹ nhàng từ chiếc loa nhỏ của quán cà phê khẽ ngân nga, hòa cùng những thanh âm xào xạc từ cây lá. Việt Quốc đan hai tay vào nhau, nét mặt thoáng chút nghiêm túc và suy tư.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 84,
    
        speaker: "VietQuoc",
    
        text: "Hành trình Đổi mới và phát triển không phải lúc nào cũng trải đầy hoa hồng. Chúng tôi phải thẳng thắn đối mặt với nạn tham nhũng, ô nhiễm môi trường và cả nguy cơ tụt hậu nếu thiếu đi sự sáng tạo. Để giải bài toán này về mặt hoàn thiện thể chế, tôi cần tập trung vào việc gì?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Giữ nguyên các kẽ hở luật pháp, để mặc cho các nhóm lợi ích thao túng nền kinh tế.",
                nextId: 85,
                score: 0,
            },
    
            {
                text: "B. Quay lại thời kỳ bao cấp, xóa bỏ hoàn toàn cơ chế thị trường để không còn ai có thể tham nhũng.",
                nextId: 88,
                score: 5,
            },
    
            {
                text: "C. Tăng cường xây dựng Nhà nước pháp quyền XHCN, hoàn thiện thể chế kinh tế thị trường, đẩy mạnh phòng chống tham nhũng, tiêu cực và khuyến khích tinh thần 'dám nghĩ, dám làm, dám đột phá'.",
                nextId: 91,
                score: 10,
            },
        ],
    },
    
    {
        id: 85,
    
        speaker: "Bạn",
    
        nextId: 86,
    
        text: "Tôi nghĩ cứ giữ nguyên các kẽ hở luật pháp như vậy, để mặc cho thị trường và các nhóm lợi ích tự thao túng nền kinh tế, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 86,
    
        speaker: "VietQuoc",
    
        nextId: 87,
    
        text: "Ánh nhìn của Việt Quốc trở nên sắc sảo và kiên định, phong thái điềm đạm thường ngày nhường chỗ cho sự nghiêm nghị của một nhà quản lý vĩ mô.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 87,
    
        speaker: "VietQuoc",
    
        nextId: 94,
    
        text: "Nếu dung túng cho cái sai và để các nhóm lợi ích thao túng, nền kinh tế sẽ sớm muộn bị đục rỗng từ bên trong và mất đi lòng dân. Thượng tôn pháp luật là nguyên tắc tối cao. Chúng tôi không bao giờ chấp nhận sự thỏa hiệp tiêu cực đó.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 88,
    
        speaker: "Bạn",
    
        nextId: 89,
    
        text: "Hay là quay lại thời kỳ bao cấp trước đây, xóa bỏ hoàn toàn cơ chế thị trường để không ai còn cơ hội trục lợi hay tham nhũng nữa, thưa anh?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 89,
    
        speaker: "VietQuoc",
    
        nextId: 90,
    
        text: "Việt Quốc khẽ thở dài một tiếng nhỏ, nét mặt trở nên trầm ngâm hơn.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 90,
    
        speaker: "VietQuoc",
    
        nextId: 94,
    
        text: "Sợ sâu mọt mà đốt cả nhà thì không phải là cách làm thông minh, bạn ạ. Quay lại thời kỳ bao cấp là quay lại với sự trì trệ, thiếu thốn mà chúng ta đã vất vả vượt qua. Vấn đề không nằm ở bản chất của cơ chế thị trường, mà nằm ở cách quản lý. Không thể vì sợ quản không được mà chọn cách đóng cửa.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 91,
    
        speaker: "Bạn",
    
        nextId: 92,
    
        text: "Tôi cho rằng giải pháp cốt lõi là tăng cường xây dựng Nhà nước pháp quyền xã hội chủ nghĩa, hoàn thiện đồng bộ thể chế kinh tế thị trường, đẩy mạnh phòng chống tham nhũng, đồng thời khuyến khích tinh thần 'dám nghĩ, dám làm, dám đột phá', thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 92,
    
        speaker: "VietQuoc",
    
        nextId: 93,
    
        text: "Việt Quốc ngồi thẳng người hơn, cái nhìn ánh lên niềm tin và sự trân trọng lớn dành cho bạn. Anh mỉm cười đầy thân thương.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 93,
    
        speaker: "VietQuoc",
    
        nextId: 94,
    
        text: "Tuyệt vời, bạn đã nói đúng tâm điểm của vấn đề. Thể chế minh bạch, pháp luật chặt chẽ chính là cái lồng để nhốt quyền lực và đẩy lùi tiêu cực. Nhưng bên cạnh việc 'chống', chúng tôi cũng đặc biệt chú trọng việc 'xây' — bảo vệ những người dám đổi mới, dám bứt phá vì lợi ích chung. Có như vậy, bộ máy kinh tế mới vừa sạch, vừa mạnh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 94,
    
        speaker: "Bối cảnh",
    
        nextId: 95,
    
        text: "Việt Quốc đưa bạn rời quán cà phê, dạo bước qua một khu đô thị mới khang trang, nơi có những công viên nhỏ rợp bóng mát và tiếng cười đùa của con em các gia đình công nhân sau giờ tan học.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 95,
    
        speaker: "VietQuoc",
    
        text: "Để đảm bảo đúng bản chất và định hướng xã hội chủ nghĩa, cơ chế phân phối thu nhập của chúng tôi trong thời kỳ Đổi mới được quy định như thế nào để vừa kích thích mọi người hăng hái lao động, lại vừa đảm bảo công bằng xã hội?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Cào bằng thu nhập, người làm nhiều cũng như người làm ít đều nhận một mức lương như nhau.",
                nextId: 96,
                score: 0,
            },
    
            {
                text: "B. Thực hiện phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế, đồng thời theo mức đóng góp vốn và các nguồn lực khác; phân phối thông qua hệ thống an sinh xã hội, phúc lợi công cộng.",
                nextId: 99,
                score: 10,
            },
    
            {
                text: "C. Để mặc cho các chủ tư bản tự quyết định mức lương tối thiểu mà không cần sự can thiệp hay bảo vệ của luật pháp Nhà nước.",
                nextId: 102,
                score: 5,
            },
        ],
    },
    
    {
        id: 96,
    
        speaker: "Bạn",
    
        nextId: 97,
    
        text: "Tôi nghĩ là áp dụng lại chính sách cào bằng thu nhập, người làm nhiều cũng như người làm ít đều nhận một mức hưởng lợi như nhau cho bình đẳng, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 97,
    
        speaker: "VietQuoc",
    
        nextId: 98,
    
        text: "Việt Quốc lắc đầu, anh giải thích một cách sòng phẳng bằng tư duy kinh tế hiện đại.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 98,
    
        speaker: "VietQuoc",
    
        nextId: 105,
    
        text: "Cào bằng không phải là công bằng, bạn ạ. Nó là sự bất công với những người thực sự nỗ lực và có tài năng, dẫn đến triệt tiêu động lực phấn đấu của cả xã hội. Bài học xương máu của thời kỳ trước đã chứng minh điều đó rồi, chúng tôi không lặp lại sai lầm ấy.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 99,
    
        speaker: "Bạn",
    
        nextId: 100,
    
        text: "Tôi nhớ rồi, đó là thực hiện phân phối chủ yếu theo kết quả lao động và hiệu quả kinh tế, đồng thời theo mức đóng góp vốn và các nguồn lực khác; bên cạnh đó là phân phối thông qua hệ thống an sinh xã hội và phúc lợi công cộng, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 100,
    
        speaker: "VietQuoc",
    
        nextId: 101,
    
        text: "Việt Quốc gật đầu, phong thái toát lên sự hài lòng và thấu hiểu sâu sắc.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 101,
    
        speaker: "VietQuoc",
    
        nextId: 105,
    
        text: "Đúng là như vậy. Ai làm nhiều, đóng góp nhiều thì xứng đáng nhận phần hơn để tạo động lực phát triển. Nhưng chúng tôi không bỏ mặc những người yếu thế. Phần ngân sách từ thuế và phúc lợi công cộng sẽ được quay lại để chăm lo y tế, giáo dục, hỗ trợ người nghèo. Kết hợp hài hòa hai yếu tố này mới là bản chất nhân văn của chúng tôi.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 102,
    
        speaker: "Bạn",
    
        nextId: 103,
    
        text: "Tôi đoán là để mặc cho các chủ doanh nghiệp tự quyết định toàn bộ mức lương và chế độ mà không cần đến sự can thiệp hay bảo vệ của luật pháp Nhà nước, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 103,
    
        speaker: "VietQuoc",
    
        nextId: 104,
    
        text: "Việt Quốc trầm giọng.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 104,
    
        speaker: "VietQuoc",
    
        nextId: 105,
    
        text: "Nếu để mặc như vậy thì người lao động — những người trực tiếp làm ra của cải — sẽ rất dễ bị chèn ép và tổn thương. Nhà nước bắt buộc phải can thiệp bằng luật pháp, bằng mức lương tối thiểu vùng và các quyền lợi bảo hiểm để bảo vệ người lao động. Sự phát triển của chúng tôi luôn lấy người dân làm gốc.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },

    {
        id: 105,
    
        speaker: "Bối cảnh",
    
        nextId: 106,
    
        text: "Trời về chiều, ánh hoàng hôn nhuộm vàng cả không gian, phía xa là những cây cầu hiện đại và các tòa nhà biểu tượng bắt đầu lên đèn rực rỡ sắc màu. Việt Quốc quay lại nhìn bạn, ánh mắt rực rỡ khát vọng của một quốc gia đang tự tin tự cường.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 106,
    
        speaker: "VietQuoc",
    
        text: "Mục tiêu chiến lược dài hạn của tôi là đưa Việt Nam trở thành một nước phát triển, có thu nhập cao theo đúng định hướng xã hội chủ nghĩa vào năm 2045. Bạn có sẵn sàng cùng tôi bước tiếp trên con đường độc bản, đầy tự hào này không?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Không, mục tiêu đó quá xa vời, hãy cứ hài lòng với việc là một nước nghèo và lạc hậu ổn định.",
                nextId: 107,
                score: 0,
            },
    
            {
                text: "B. Sẵn sàng! Chúng ta sẽ kiên định con đường Đổi mới, phát triển kinh tế tri thức hiện đại, giữ vững độc lập tự chủ và mang lại sự phồn vinh, hạnh phúc thực sự cho nhân dân.",
                nextId: 110,
                score: 10,
            },
    
            {
                text: "C. Có, nhưng chúng ta nên từ bỏ toàn bộ bản sắc văn hóa và các giá trị xã hội để rập khuôn 100% theo một mô hình nước ngoài nào đó.",
                nextId: 113,
                score: 5,
            },
        ],
    },
    
    {
        id: 107,
    
        speaker: "Bạn",
    
        nextId: 108,
    
        text: "Tôi thấy mục tiêu đó có vẻ quá xa vời, hay là chúng ta cứ hài lòng với vị trí một nước có thu nhập trung bình ổn định cho đỡ áp lực, thưa anh?",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 108,
    
        speaker: "VietQuoc",
    
        nextId: 109,
    
        text: "Việt Quốc không hề trách bạn, nét mặt anh vẫn nhẹ nhàng, thân thương nhưng song đó vẫn chứa đựng ý chí sắt đá.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 109,
    
        speaker: "VietQuoc",
    
        text: "Nếu chỉ muốn an phận ở vùng an toàn, chúng tôi đã không có cuộc Đổi mới năm 1986 để lội ngược dòng ngoạn mục như vậy. Hài lòng với thực tại đồng nghĩa với việc chấp nhận tụt hậu. Khát vọng lớn chính là động lực để một dân tộc làm nên những điều kỳ diệu.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 110,
    
        speaker: "Bạn",
    
        nextId: 111,
    
        text: "Sẵn sàng chứ, thưa anh! Chúng ta sẽ kiên định con đường Đổi mới, phát triển mạnh mẽ kinh tế tri thức hiện đại, giữ vững độc lập tự chủ và mang lại sự phồn vinh, hạnh phúc thực sự cho nhân dân.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 111,
    
        speaker: "VietQuoc",
    
        nextId: 112,
    
        text: "Việt Quốc lập tức nắm chặt lấy tay bạn, một cú bắt tay ấm áp và đầy tin cậy. Dưới ánh đèn thành phố vừa bừng sáng, thần thái của anh toát lên một sức hút vô cùng mạnh mẽ.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 112,
    
        speaker: "VietQuoc",
    
        text: "Cảm ơn bạn! Câu trả lời của bạn tiếp thêm cho tôi rất nhiều động lực. Chúng ta không chọn một mô hình rập khuôn, mà chọn con đường tự chủ, phát huy tối đa nội lực dân tộc kết hợp với tinh hoa thời đại. Điểm hẹn năm 2045, chúng ta nhất định sẽ cùng nhau chứng kiến một Việt Nam hùng cường!",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 113,
    
        speaker: "Bạn",
    
        nextId: 114,
    
        text: "Tôi sẵn sàng, nhưng tôi nghĩ từ bây giờ chúng ta nên từ bỏ toàn bộ bản sắc văn hóa cũ để rập khuôn 100% theo một mô hình phát triển của nước ngoài cho nhanh, thưa anh.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 114,
    
        speaker: "VietQuoc",
    
        nextId: 115,
    
        text: "Việt Quốc từ tốn thu tay lại, ánh nhìn của anh sắc lạnh, giọng nói răn dặn chứa đựng lời nhắc nhở sâu sắc.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
    {
        id: 115,
    
        speaker: "VietQuoc",
    
        text: "Hòa nhập chứ không hòa tan, bạn ạ. Một quốc gia mà đánh mất đi bản sắc văn hóa, gốc rễ lịch sử của mình thì giống như một cái cây không có rễ, chỉ một cơn gió lớn là sẽ bật gốc ngã đổ. Nội lực lớn nhất của Việt Nam nằm chính ở giá trị con người và văn hóa ngàn năm. Chúng tôi học hỏi thiên hạ để làm giàu cho mình, chứ không bao giờ đánh mất chính mình.",
    
        background: vqroom,
    
        characters: [
            {
                id: "VietQuoc",
                image: VietQuoc,
                position: "center",
            },
        ],
    },
    
]